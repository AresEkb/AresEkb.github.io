# Curriculum vitae

## Overview

I have a broad outlook in the field of IT. I was engaged in both development and analytical work in the fields of intergovernmental information exchange and healthcare. Also I have experience in statistical analysis of medical data, experience in BI development and considerable experience in web development. At the moment, I'm most interested in model-driven development, EDI and data analysis.

At present I finish my PhD thesis on OCL to XPath transformation. I'm trying to porove its correctness using Isabelle HOL.

## Contacts

Name: Denis

Phone: +7(902)255-88-30

E-mail: denis.nikif (at) gmail.com

## Key skills

### Modelling methodologies and models

- UN/CEFACT UMM, CCTS, CCL - 4 years
- WCO Data Model - 4 years
- ISO 20022 - 3 years
- NIEM - 1 year
- WIPO Standard ST.96, ISO 7372, UBL, eTIR, eFreight, HL7 - basic knowledge

### Modelling languages

- UML - 10 years
- BPMN, IDEFx - 5 years

### Model-driven development

- Eclipse Modeling Framework, QVTo, Acceleo, OCL, EMFText - 4 years
- Eclipse Sirius - 2 years

### Enterprise development

- .NET (C#, WinForms, WPF, DevExpress, XAF, Entity Framework, LINQ) - 5 years
- Java - 2 years
- XSLT, XML Schema, XPath - 10 years
- Assembler x86, C, C++, Haskell, Lisp, Prolog, Python, Ruby, Isabelle HOL, etc. - basic knowledge

### Web development

- PHP, HTML, CSS - 10 years
- Drupal - 5 years
- JavaScript (D3.js) - 5 years
- JayData, Backbone.js, Knockout.js, etc. - basic knowledge

### Database and data warehouse

- SQL Server, SSAS (OLAP), SSIS - 5 years
- MySQL - 5 years
- PostgreSQL, Oracle - 1 year
- Anchor, Data Vault - basic knowledge

### Statistics

- SPSS, Statistica - 3 years
- Self-written plugin for Excel - 3 years
- R - 1 year

### CASE tools

- Rational Software Architect - 5 years
- ERwin Process (and Data) Modeler, Signavio Oryx, EleWise ELMA - 3 years

### Misc

- Linux - 10 years
- Git - 5 years
- Jira - 5 years

## Experience

### March 2013 – Present
Expert of the modelling methodology group

#### Integrated information system of the Eurasian Economic Union (EAEU)

I participated as a methodologist in one of the largest integration projects in the ex-USSR - Integrated information system of the EAEU. The essence of the project is to simplify the information exchange between authorities of EAEU member states. Over one hundred cross-border common processes were identified. For each process, it was necessary to develop legal normative documentation and implement it in code. The volumes of the documents were to be tens of thousands of pages and a dozen companies had to develop and implement them.

During R&D, we analyzed similar projects (UN/CEFACT, NIEM, WCO DM, etc.) and proposed to develop a methodology for modelling common processes and structures of electronic documents. In a very truncated form it was adopted by the Decision No 63 of the College of the Eurasian Economic Commission at 09.06.2015 "On Methodology of analysis, harmonization and description of common processes under the Eurasian Economic Union". I developed a part of the methodology and an UML profile (with hundreds of OCL constraints) for the methodology. More than a hundred analysts from a dozen companies in accordance with this methodology developed UML models.

UML models were uploaded into the model repository (eomi.eaeunion.org), in which the normative documents for processes and XML schemas were generated. I participated in the development of the repository as a system analyst. Also, as a business analyst, I participated in the design of some common processes and structures of electronic documents, mainly in the areas of intellectual property, transport control, sanitary and veterinary control, drug circulation, etc.

Also, I trained analysts of UML, OCL, BPMN, XSD, etc., advised them on modelling issues, and controlled the modelling quality. I developed plugins for Rational Software Architect Designer to simplify the work of analysts.

#### Improved analogue of SWIFT MyStandards for The Central Bank of the Russian Federation

This was my second major project in this company. The Bank of Russia decided to use ISO 20022 for financial messages. One of the main drawbacks of ISO 20022 is that it does not offer a mechanism for formal description of message validation rules. Usually rules are described in natural language and then implemented manually in programming language. We proposed to describe these rules on the formal Object Constraint Language (OCL) and then generate XSLT, Java, and other implementations for the required platforms. This allows one to completely exclude developers from the process of rule development and save significant resources. The idea is mentioned in the Bank of Russia Standard STO BR NPS-1.0-2017 "Financial messages in the NPS. General terms".

I developed a translator from UML models with OCL constraints to XSLT or Java code with XPath expressions. I participated as a system analyst in the development of the entire system, wrote technical documentation, assigned tasks for developers.

I wrote a number of articles on the subject of both projects (see Publications section below).

### Aug. 2008 – Feb. 2013, Bonum (one of the largest children rehabilitation centers in Russia)
Lead C# developer and project manager

#### Medical information system

At the time the work began, Bonum already used a number of disparate accounting systems based on FoxPro, MS Access, Delphi. We developed a single database for them (MS SQL), a single engine (C#, DevExpress), transferred most of the existing accounting systems to a new engine, developed a number of new subsystems.

The following modules were implemented: polyclinic, hospital, paid services (cosmetology, stomatology), electronic health record, laboratory, sick list, situational center, contact center, science, publications, HR, purchases, PACS (DCM4CHEE), analytics (SSAS).

I also automated the formation of most of the reporting using OLAP. I implemented OLAP cubes for ambulatory, hospital, and medical follow-up.

#### Analytical work

I modelled business processes (BPMN, IDEFX, Signavio Oryx, EleWise ELMA):
- main (rehabilitation of children – complex processes, lasting till 18 years, with a lot of participants),
- supporting (recruitment, purchases).

I helped doctors with statistical data analysis in their dissertation research (SPSS, Statistica, self-written plugin using Excel-DNA).

#### Also

I developed and maintained information kiosks (C#, WPF), website www.bonum.info (PHP, Drupal, HTML, CSS). It worked successfully for several years. Unfortunately, now the company lacks its own web-developers, so the site was replaced by a typical solution: with pictures of 200px wide on the screen and 5Mb in size, without forum, etc.

I initiated and leaded the project on the IP telephony implementation (4 distributed offices) and the contact center creation.

I wrote several scientific articles on function cost analysis, balanced scorecard, process modelling, etc. in healthcare.

### July 2007 – June 2012, Ural Federal University
Teacher on business process modelling

### Jan. 2000 – Dec. 2015, Freelance occasionally
Web developer

I developed and maintained several web-sites. The most interesting project was a news portal of ITAR-TASS Ural. For more than 10 years, it has been a fairly powerful news portal, now it has been combined with the main ITAR-TASS portal. I have a deep understanding of PHP, HTML, CSS, MySQL, JavaScript, Drupal.

## Education

### 2007, Ural Federal University, Computer Science Department
Engineer, specialist in computer systems and networks

## Certification

### 2012, Ural Institute of Stock Market
Certificate of professional development on venture capital financing

### 2017, DataCamp
9 online courses on R, machine learning, data visualization, etc.

## Publications

### Scientific

- An Approach to Multi-Domain Data Model Development Based on the Model-Driven Architecture and Ontologies
- An Ontology-Driven Approach to Electronic Document Structure Design
- A Survey of Tools for XML Validation Based on the Object Constraint Language (OCL)
- An Approach to the Validation of XML Documents Based on the Model Driven Architecture and the Object Constraint Language
- etc.

Several articles as a co-author:
- Data Models for Information Exchange
- Data Model of the World Intellectual Property Organization Standard ST.96
- The UN/CEFACT Core Component Library

You can find them [here](https://www.researchgate.net/profile/Denis_Nikiforov3).

### Non-Scientific

- The Object Constraint Language (and a little bit about metamodels)
- A Metamodel Development using Eclipse Modeling Framework (and a little bit about data modelling)
- A Visual Modeling Language Development using Sirius
- A Job Search Guide for an MDA specialist (and a little bit about the analytic hierarchy process, Xcore and Sirius)
- Introduction to Domain-Specific Language (DSL) Development using EMFText
- Development of a Parser, Code Generator and SQL Editor using EMFText
- Introduction to the Model Transformation (or a Transformation that Creates a Transformation that Creates a Model)
- Category Theory in JavaScript. Part 1. The Category of Sets

You can find them [here](https://habrahabr.ru/users/ares_ekb/posts/) (in Russian).
