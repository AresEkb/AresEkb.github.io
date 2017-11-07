# Curriculum vitae

## Overview

У меня широкий кругозор в области ИТ. Я занимался как разработкой, так и аналитической работой в сферах межгосударственного информационного взаимодействия и здравоохранения. Также я имею опыт статистического анализа медицинских данных, опыт разработки OLAP кубов и значительный опыт веб-разработки. На данный момент мне наиболее интересны модельно-ориентированная разработка, EDI и анализ данных.

## Key skills

### Modelling methodologies and models

- UN/CEFACT UMM - 4 years, good
- UN/CEFACT CCTS + CCL - 4 years, good
- WCO Data Model - 4 years, good
- ISO 20022 - 3 years, good
- NIEM - 1 year, good
- WIPO Standard ST.96, ISO 7372, UBL, eTIR, eFreight, HL7- basic knowledge

### Modelling languages

- UML - 10 years, excellent
- BPMN - 5 years, good
- IDEFx - 3 years, good

### Model-driven development

- QVTo - 4 years, excellent
- Acceleo - 4 years, excellent
- OCL - 4 years, excellent
- Eclipse Modeling Framework - 4 years, good
- EMFText - 4 years, good
- Eclipse Sirius - 2 years, good

### Enterprise development

- C# - 5 years, good
- WinForms - 5 years, good
- WPF - 5 years, good
- DevExpress, XAF - 5 years, good
- Entity Framework, LINQ - 5 years, good
- Java - 2 years, average
- Assembler x86, C, C++, Haskell, Lisp, Prolog, Python, Ruby, Isabelle HOL, etc. - basic knowledge

### Web development

- PHP - 10 years, good
- HTML - 10 years, excellent
- CSS - 10 years, excellent
- Drupal - 5 years, good
- JavaScript - 5 years, good
- d3js - 3 years, good
- JayData, Backbone.js, Knockout.js, etc. - basic knowledge

### XML

- XSLT - 10 years, excellent
- XSD - 10 years, excellent
- XPath - 10 years, excellent

### Database and data warehouse

- SQL Server - 5 years, good
- SSAS - 5 years, good
- SSIS - 5 years, good
- MySQL - 5 years, good
- PostgreSQL - 2 years, average
- Oracle - 1 year, average
- Anchor, Data Vault - basic knowledge

### Statistics

- SPSS - 3 years, good
- Statistica - 3 years, good
- Self-written plugin for Excel - 3 years, good
- R - 1 year, good

### CASE tools

- Rational Software Architect - 5 years, excellent
- ERwin Process (and Data) Modeler - 3 years, good
- Signavio Oryx - 3 years, good
- EleWise ELMA - 3 years, good

### OS

- Windows - 20 years, good
- Linux - 10 years, good

## Experience

### March 2013 – Present
Expert of the modelling methodology group

#### Integrated information system of the Eurasian Economic Union (EAEU)

Я участвовал в качестве методолога в одном из крупнейших интеграционных проектов в бывшем СССР - Integrated information system of the EAEU. Суть проекта заключается в упрощении информационного взаимодействия между уполномоченными органами государств-членов ЕАЭС. Было определено более сотни трансграничных общих процессов. Для каждого процесса было необходимо разработать нормативную документацию и реализовать его. Объемы нормативной документации должны были насчитывать десятки тысяч страниц и дюжина компаний должна была их разрабатывать и реализовывать.

В рамках НИОКР мы проанализоровали аналогичные проекты (UN/CEFACT, NIEM, WCO DM, etc.) и предложили разработать единую методику моделирования общих процессов и структур электронных документов. In a very truncated form it was adopted by the Decision No 63 of the College of the Eurasian Economic Commission at 09.06.2015 "On Methodology of analysis, harmonization and description of common processes under the Eurasian Economic Union". Более сотни аналитиков из дюжины компаний в соответствии с данной методикой разрабатывали UML модели. I developed an UML profile (with hundreds OCL constraints) for the modelling methodology.

Данные UML модели загружались в репозиторий моделей (eomi.eaeunion.org), в котором на их основе формировались нормативные документы для процессов и XML схемы. Я участвовал в разработке данного репозиторий в качестве системного аналитика. Также, в качестве бизнес-аналитика, я участвовал в проектировании некоторых общих процессов mainly in the areas of intellectual property, transport control, sanitary and veterinary control, drug circulation, etc.

Also, I trained analysts of UML, OCL, BPMN, XSD, etc., advised them on modelling issues, and controlled the modelling quality. I developed plugins for Rational Software Architect Designer для упрощения работы аналитиков.

#### Improved analogue of SWIFT MyStandards for The Central Bank of the Russian Federation

Это был мой второй крупный проект в данной компании. Банк России принял решение использовать ISO 20022 для финансовых сообщений. Один из основных недостатков ISO 20022 заключается в том, что он не предлагает механизм формального описания правил валидации сообщений. Обычно правила описываются на естественном языке и затем реализуются вручную. Мы предложили описывать данные правила на формальном Object Constraint Language (OCL) и затем формировать на их основе XSLT, Java и другие реализации под требуемые платформы. Это позволяет полностью исключить разработчиков из процесса разработки правил и сэкономить значительные ресурсы. The idea is mentioned in the Bank of Russia Standard STO BR NPS-1.0-2017 "Financial messages in the NPS. General terms".

I developed a translator from UML models with OCL expressions to XSLT or Java code with XPath expressions.

По тематике обоих проектов опубликован ряд публикаций (см. Публикации ниже).

### Aug. 2008 – Feb. 2013, Bonum (one of the largest children rehabilitation centers in Russia)
Lead developer (C#) and project manager

#### Medical information system

At the time the work began, Bonum already used a number of disparate accounting systems based on FoxPro, MS Access, Delphi. We developed a single database for them (MS SQL), a single engine (C#, DevExpress), transferred most of the existing accounting systems to a new engine, developed a number of new subsystems.

The following modules were implemented: polyclinic, hospital, paid services (cosmetology, stomatology), electronic health record, laboratory, sick list, situational center, contact center, science, publications, HR, purchases, PACS (DCM4CHEE), analytics (SSAS).

Также я автоматизировал формирование большей части отчетности с помощью OLAP. Я реализовал OLAP cubes for ambulatory, hospital, and medical follow-up.

#### Analytical work

I modelled business processes (BPMN, IDEFX, Signavio Oryx, EleWise ELMA):
- main (rehabilitation of children – complex processes, lasting till 18 years, with a lot of participants),
- supporting (recruitment, purchases).

I helped doctors with statistical data analysis in their dissertation research (SPSS, Statistica, self-written plugin using Excel-DNA).

#### Also

I developed and maintened information kiosks (C#, WPF), website www.bonum.info (PHP, Drupal, HTML, CSS). It worked successfully for several years. Unfortunately, now the company lacks its own web-developers, so the site was replaced by a typical solution: with pictures of 200px wide on the screen and 5Mb in size, without forum, etc.

Я инициировал и руководил проектом on the IP telephony implementation (4 distributed offices) and the contact center creation.

I wrote several scientific articles on function cost analysis, balanced scorecard, process modelling, etc. in healthcare.

### July 2007 – June 2012, Ural Federal University
Teacher on business process modelling

### Jan. 2000 – Dec. 2005, Freelance
Web-developer

I developed and maintained several web-sites. I have a deep understanding of PHP, HTML, CSS, MySQL, JavaScript, Drupal. The most interesting project was a news portal of ITAR-TASS Ural. For more than 10 years, it has been a fairly powerful news portal, now it has been combined with the main ITAR-TASS portal.

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

- Объектный язык ограничений (и немного про метамодели)
- Разработка метамодели с помощью Eclipse Modeling Framework (и немного про моделирование данных)
- Разработка визуального языка моделирования с помощью Sirius
- Руководство по поиску работы для MDA-специалиста (и немного про метод анализа иерархий, Xcore и Sirius)
- Введение в разработку предметно-ориентированных языков (DSL) с помощью EMFText
- Разработка парсера, кодогенератора и редактора SQL с помощью EMFText
- Введение в преобразование моделей (или преобразование, которое создаёт преобразование, которое создаёт модель)
- Теория категорий на JavaScript. Часть 1. Категория множеств

You can find them [here](https://habrahabr.ru/users/ares_ekb/posts/) (in Russian).
