// Based on https://github.com/BernhardZuba/d3js-orgchart
// Similar projects:
//   https://github.com/ssthouse/vue-tree-chart
//   https://bl.ocks.org/swayvil/b86f8d4941bdfcbfff8f69619cd2f460

var orgChart = (function() {
   var _margin = {
       top:    20,
       right:  20,
       bottom: 20,
       left:   20
   },
   _root           = {},
   _nodes          = [],
   _counter        = 0,
   _svgroot        = null,
   _svg            = null,
   _tree           = null, 
   _diagonal       = null,
   _lineFunction   = null,
   _loadFunction   = null,
   /* Configuration */
   _duration       = 750,        /* Duration of the animations */
   _rectW          = 150,        /* Width of the rectangle */
   _rectH          = 50,         /* Height of the rectangle */
   _rectSpacing    = 20          /* Spacing between the rectangles */
   _fixedDepth     = 80,         /* Height of the line for child nodes */       
   _mode           = "line",     /* Choose the values "line" or "diagonal" */
   _callerNode     = null,
   _callerMode     = 0,
 
   defLinearGradient = function(id, x1, y1, x2, y2, stopsdata) {
      var gradient = _svgroot.append("svg:defs")
                     .append("svg:linearGradient")
                       .attr("id", id)
                       .attr("x1", x1)
                       .attr("y1", y1)
                       .attr("x2", x2)
                       .attr("y2", y2)
                       .attr("spreadMethod", "pad");
 
      stopsdata.forEach(function (value, index) {
         gradient.append("svg:stop")
                 .attr("offset", value.offset)
                 .attr("stop-color", value.color)
                 .attr("stop-opacity", value.opacity);  
      });
   },
 
   defBoxShadow = function(id) {
      var filter = _svgroot.append("svg:defs")
                      .append("svg:filter")
                      .attr("id", id).attr("height", "150%").attr("width", "150%");
                       
      filter.append("svg:feOffset")
            .attr("dx", "2").attr("dy", "2").attr("result", "offOut");  // how much to offset
      filter.append("svg:feGaussianBlur")
            .attr("in", "offOut").attr("result", "blurOut").attr("stdDeviation", "2");     // stdDeviation is how much to blur
      filter.append("svg:feBlend")
            .attr("in", "SourceGraphic").attr("in2", "blurOut").attr("mode", "normal");
   },
 
   collapse = function(d) {
       if (d.children) {
           d._children = d.children;
           d._children.forEach(collapse);
           d.children = null;
       }
   },
 
   update = function(source) {
      // Compute the new tree layout.
      _nodes = _tree.nodes(_root).reverse();
      var links = _tree.links(_nodes);
 
      // Normalize for fixed-depth.
      _nodes.forEach(function (d) {
         d.y = d.depth * _fixedDepth;
      });
 
      // Update the nodes
      var node = _svg.selectAll("g.node")
          .data(_nodes, function (d) {
          return d.id || (d.id = ++_counter);
      });
 
      // Enter any new nodes at the parent's previous position.
      var nodeEnter = node.enter().append("g")
          .attr("class", "node")
          .attr("transform", function (d) {
          return "translate(" + source.x0 + "," + source.y0 + ")";
      })
      .on("click", nodeclick);
 
      nodeEnter.append("rect")
               .attr("width", _rectW)
               .attr("height", _rectH)
               .attr("fill", "#898989")
               .attr("filter", "url(#boxShadow)");
       
      nodeEnter.append("rect")
               .attr("width", _rectW)
               .attr("height", _rectH)
               .attr("id", function(d) {
                   return d.id;
               })
               .attr("fill", function (d) { return (d.children || d._children || d.hasChild) ? "url(#gradientchilds)" : "url(#gradientnochilds)"; })
               .style("cursor", function (d) { return (d.children || d._children || d.hasChild) ? "pointer" : "default"; })
               .attr("class", "box");
                
      var text = nodeEnter.append("text")
               .attr("x", _rectW / 2)
               .attr("y", function (d) { return _rectH / 2 - 3 - 7 * d.desc.split('\n').length; })
               .attr("text-anchor", "middle")
               .style("cursor", function (d) { return (d.children || d._children || d.hasChild) ? "pointer" : "default"; });
      text.selectAll('tspan').data(function (d) { return d.desc.split('\n'); }).enter()
               .append('tspan')
                   .attr('x', _rectW / 2)
                   .attr('dy', '14') // TODO: Is it possible to use em units?
                   .text(function (d) {
                         return d;
                   });
 
      // Transition nodes to their new position.
      var nodeUpdate = node.transition()
                           .duration(_duration)
                           .attr("transform", function (d) {
                                return "translate(" + d.x + "," + d.y + ")";
                           });
 
      nodeUpdate.select("rect.box")
                .attr("fill", function (d) {
                    return (d.children || d._children || d.hasChild) ? "url(#gradientchilds)" : "url(#gradientnochilds)";
                });              
 
      // Transition exiting nodes to the parent's new position.
      var nodeExit = node.exit().transition()
                         .duration(_duration)
                         .attr("transform", function (d) {
                             return "translate(" + source.x + "," + source.y + ")";
                         })
                         .remove();
                          
      // Update the links
      var link = _svg.selectAll("path.link")
                    .data(links, function (d) {
                          return d.target.id;
                    });
 
       
      if (_mode === "line") {
         // Enter any new links at the parent's previous position.
         link.enter().append("path" , "g")
             .attr("class", "link")
             .attr("d", function(d) {
                           var u_line = (function (d) {
                              var u_linedata = [{"x": d.source.x0 + parseInt(_rectW / 2), "y": d.source.y0 + _rectH + 2 },
                                                {"x": d.source.x0 + parseInt(_rectW / 2), "y": d.source.y0 + _rectH + 2 },
                                                {"x": d.source.x0 + parseInt(_rectW / 2), "y": d.source.y0 + _rectH + 2 },
                                                {"x": d.source.x0 + parseInt(_rectW / 2), "y": d.source.y0 + _rectH + 2 }];
 
                              return u_linedata;
                           })(d);
 
                           return _lineFunction(u_line);
                        });
                         
         // Transition links to their new position. 
         link.transition()
            .duration(_duration)
            .attr("d", function(d) {
                        var u_line = (function (d) {
                           var u_linedata = [{"x": d.source.x + parseInt(_rectW / 2), "y": d.source.y + _rectH },
                                             {"x": d.source.x + parseInt(_rectW / 2), "y": d.target.y - _margin.top / 2 },
                                             {"x": d.target.x + parseInt(_rectW / 2), "y": d.target.y - _margin.top / 2 },
                                             {"x": d.target.x + parseInt(_rectW / 2), "y": d.target.y }];                                                  
 
                           return u_linedata;
                        })(d);
 
                        return _lineFunction(u_line);
                     });
                         
         // Transition exiting nodes to the parent's new position.
         link.exit().transition()
             .duration(_duration)
             .attr("d", function(d) {
                             /* This is needed to draw the lines right back to the caller */
                             var u_line = (function (d) {
                                var u_linedata = [{"x": _callerNode.x + parseInt(_rectW / 2), "y": _callerNode.y + _rectH + 2 },
                                                  {"x": _callerNode.x + parseInt(_rectW / 2), "y": _callerNode.y + _rectH + 2 },
                                                  {"x": _callerNode.x + parseInt(_rectW / 2), "y": _callerNode.y + _rectH + 2 },
                                                  {"x": _callerNode.x + parseInt(_rectW / 2), "y": _callerNode.y + _rectH + 2 }];
 
                                return u_linedata;
                             })(d);
 
                             return _lineFunction(u_line);
                        }).each("end", function() { _callerNode = null; /* After transition clear the caller node variable */ });
      } else if (_mode === "diagonal") {
         // Enter any new links at the parent's previous position.
         link.enter().insert("path" , "g")
             .attr("class", "link")
             .attr("x", _rectW / 2)
             .attr("y", _rectH / 2)
             .attr("d", function (d) {
                var o = {
                   x: source.x0,
                   y: source.y0
                };
                return _diagonal({
                      source: o,
                      target: o
                });
             });
            
         // Transition links to their new position.
         link.transition()
             .duration(_duration)
             .attr("d", _diagonal);
              
         // Transition exiting nodes to the parent's new position.
         link.exit().transition()
             .duration(_duration)
             .attr("d", function (d) {
                 var o = {
                     x: source.x,
                     y: source.y
                 };
                 return _diagonal({
                     source: o,
                     target: o
                 });
             })
             .remove();
      }
 
      // Stash the old positions for transition.
      _nodes.forEach(function (d) {
          d.x0 = d.x;
          d.y0 = d.y;
      });
   },
 
   // Toggle children on click.
   nodeclick = function(d) {      
      if (!d.children && !d._children && d.hasChild) {
         // If there are no childs --> Try to load child nodes
         _loadFunction(d, function(childs) {
            var response = {id: d.id, 
                            desc: d.desc, 
                            children: childs.result};
                        
            response.children.forEach(function(child){
               if (!_tree.nodes(d)[0]._children){
                   _tree.nodes(d)[0]._children = [];
               }
 
               child.x  = d.x;
               child.y  = d.y;
               child.x0 = d.x0;
               child.y0 = d.y0;
               _tree.nodes(d)[0]._children.push(child);
            });    
             
            if (d.children) {
               _callerNode = d;
               _callerMode = 0;     // Collapse
               d._children = d.children;
               d.children = null;
            } else {
               _callerNode = null;
               _callerMode = 1;     // Expand
               d.children = d._children;
               d._children = null;
            }
 
            update(d);
         });
      } else {
         if (d.children) {
            _callerNode = d;
             _callerMode = 0;     // Collapse
             d._children = d.children;
             d.children = null;
         } else {
            _callerNode = d;
            _callerMode = 1;     // Expand             
             d.children = d._children;
             d._children = null;
         }
 
         update(d);
      }
   },
 
   //Redraw for zoom
   redraw = function() {
     _svg.attr("transform", "translate(" + d3.event.translate + ")" + 
                            " scale(" + d3.event.scale.toFixed(1) + ")");
   },
 
   initTree = function(options) {
      var u_opts = Object.assign({id: "",
                             data: {}, 
                             modus: "line", 
                             loadFunc: function() {}
                            },
                            options);
      var id = u_opts.id;
       
      _loadFunction = u_opts.loadFunc;
      _mode = u_opts.modus;
      _root = u_opts.data;
    
      if(_mode == "line") {
         _fixedDepth = 80;
      } else {
         _fixedDepth = 110;
      }
    
      document.getElementById(id.substring(1)).innerHTML = "";   // Reset
      var width  = document.getElementById(id.substring(1)).clientWidth  - _margin.left - _margin.right,
          height = document.getElementById(id.substring(1)).clientHeight - _margin.top  - _margin.bottom;
 
      _tree = d3.layout.tree().nodeSize([_rectW + _rectSpacing, _rectH + _rectSpacing]);
 
      /* Basic Setup for the diagonal function. _mode = "diagonal" */
      _diagonal = d3.svg.diagonal()
          .projection(function (d) {
          return [d.x + _rectW / 2, d.y + _rectH / 2];
      });
 
      /* Basic setup for the line function. _mode = "line" */
      _lineFunction = d3.svg.line()
                           .x(function(d) { return d.x; })
                           .y(function(d) { return d.y; })
                           .interpolate("linear");
 
      var u_childwidth = parseInt((_root.children.length * _rectW) / 2);
 
      _svgroot = d3.select(id).append("svg").attr("width", width).attr("height", height)
                   .call(zm = d3.behavior.zoom().scaleExtent([0.15,3]).on("zoom", redraw));
      _svg = _svgroot.append("g")
                     .attr("transform", "translate(" + parseInt(u_childwidth + ((width - u_childwidth * 2) / 2) - _margin.left / 2) + "," + 20 + ")");
 
      var u_stops = [{offset: "0%", color: "#03A9F4", opacity: 1}, {offset: "100%", color: "#0288D1", opacity: 1}];
      defLinearGradient("gradientnochilds", "0%", "0%", "0%" ,"100%", u_stops);
      var u_stops = [{offset: "0%", color: "#8BC34A", opacity: 1}, {offset: "100%", color: "#689F38", opacity: 1}];
      defLinearGradient("gradientchilds", "0%", "0%", "0%" ,"100%", u_stops);
       
      defBoxShadow("boxShadow");
       
      //necessary so that zoom knows where to zoom and unzoom from
      zm.translate([parseInt(u_childwidth + ((width - u_childwidth * 2) / 2) - _margin.left / 2), 20]);
 
      _root.x0 = 0;           // the root is already centered
      _root.y0 = height / 2;  // draw &amp; animate from center
 
      _root.children.forEach(collapse);
      update(_root);
 
      d3.select(id).style("height", height + _margin.top + _margin.bottom);
   };
 
   return { initTree: initTree};
})();

var u_data = {};

/*    
function loadChilds(actualElement, successFunction) {
   $.getJSON("/Examples/D3.js/OrgChart/getPositions.php?id=" + actualElement.id, 
          function(data) {
             successFunction(data);
          });
}

$.getJSON("/Examples/D3.js/OrgChart/getPositions.php?id=0", 
          function(data) {
             u_data = data;
             orgChart.initTree({id: "#chart", data: data, modus: "diagonal", loadFunc: loadChilds});
          });
*/


function loadChilds(actualElement, successFunction) {
  // Not used now
}

window.addEventListener('load', () => {
  var data =
  {
    "id": "1",
    "desc": "Выписка из ЕГРЮЛ",
    "children": [
      {
        "id": "2",
        "desc": "Учетные реквизиты",
        "hasChild": true,
        "children": [
          {
            "id": "5",
            "desc": "Дата представления\nданных",
            "hasChild": false
          },
          {
            "id": "6",
            "desc": "Регистрационный\nномер",
            "hasChild": false
          }
        ]
      },
      {
        "id": "3",
        "desc": "Наименование",
        "hasChild": true,
        "children": [
          {
            "id": "7",
            "desc": "Полное\nнаименование",
            "hasChild": false
          },
          {
            "id": "8",
            "desc": "Сокращенное\nнаименование",
            "hasChild": false
          },
          {
            "id": "9",
            "desc": "ГРН и дата\nвнесения в ЕГРЮЛ\nзаписи",
            "hasChild": true,
            "children": [
              {
                "id": "10",
                "desc": "ГРН",
                "hasChild": false
              },
              {
                "id": "11",
                "desc": "Дата",
                "hasChild": false
              }
            ]
          }
        ]
      },
      {
        "id": "4",
        "desc": "Адрес\n(место\nнахождения)",
        "hasChild": true,
        "children": [
          {
            "id": "12",
            "desc": "Почтовый индекс",
            "hasChild": false
          },
          {
            "id": "13",
            "desc": "Субъект\nРоссийской\nФедерации",
            "hasChild": false
          },
          {
            "id": "14",
            "desc": "Город\n(волость и т.п.)",
            "hasChild": false
          },
          {
            "id": "15",
            "desc": "Улица (проспект,\nпереулок и т.д.)",
            "hasChild": false
          }
        ]
      }
    ]
  };
  u_data = data;
  orgChart.initTree({id: "#chart", data: data, modus: "diagonal", loadFunc: loadChilds});
});
