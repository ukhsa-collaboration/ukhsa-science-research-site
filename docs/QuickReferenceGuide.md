# Quick Reference Guide for the "PHE Research website"

## Table of contents
 * [Git Clone]()
 * [Running the Hugo Server]()
 * [Editing Regular Pages]()
 * [Creating a New Spotlight Page]()
 * [Spotlight Front Matter]()
 * [Spotlight Content with Shortcodes]()
 * [Shortcode Contents]()
 * [Button Shortcode]()

## Git Clone
In order to modify the site files, you should clone the site onto your local machine from the repository here: https://github.com/publichealthengland/science-research-site

We recommend using Git GUI software such as SourceTree, GitHub Desktop, or Tower.

Make sure you have the ‘main’ branch checked out (not ‘gh-pages’, that is specifically for the published site).

You must have Hugo installed on your local machine to run the Hugo development server: https://gohugo.io/getting-started/installing/

You will need to use a console such as Terminal (for Mac) or Cmder (for Windows) in order to run Git and Hugo commands.

## Running the Hugo Server
Once you have the site cloned, Hugo installed, and a suitable console or terminal, you are ready to proceed. You should open your terminal, navigate to the root of the website folder and run the following command: 

```bash
hugo server
```

This will initiate a local development server and provide a link for you to view the site e.g. http://localhost:1313

![hugo.png](hugo.png)

If the command is successful, you should see a message similar to the above.

## Editing Regular Pages
Page templates for regular pages can be found in their respective folders within the PHE theme folder. Please note that in the example below, ‘root’ is just representative of whatever you named the root folder of the site during the cloning process, and ‘pagename’ represents the name of the page you are looking for.

You can find the regular page templates here:

```bash
root/themes/phe/layouts/pagename/single.html 
```

Or in the case of the ‘Our Research’ page:

```bash
root/themes/phe/layouts/our-research/list.html 
```

These page templates are standard HTML5 and should be edited as such.

## Creating a New Spotlight Page
Creating a new spotlight page can be achieved by performing the following command in the site root:

```bash
hugo new our-research/example.md
```

'Example' is used for demonstration purposes, you can use any page name that you would like. This will create a new markdown page for the spotlight, and automatically populate some front matter such as date and title. Please note that draft will be set to true by default, you must set this to false in order for these pages to appear in the published site.


## Spotlight Front Matter
'Front Matter' is a term used to refer to a set of variables that are stored within a page’s markdown (.md) file. You can see examples of these within the ‘covid-19.md’ spotlight.

The following front matter parameters should always be declared when creating a new spotlight:

Type        | Description
----        | -----------
title       | The title of the page (created automatically)
date        | The date that the page was published (created automatically)
draft       | True by default. Set to false if you want to add this page to the live/published site.
type        | This must be set to "spotlight"
thumbnail   | The name of the thumbnail image file. **Thumbnails must be 513 pixels wide, and 276 pixels tall.** These should be stored in the following folder: *root/themes/phe/static/images/thumbnails*
alt         | This is the alt text for the thumbnail, please provide this for accessibility and SEO purposes.
description | This is the long description that can be found on the ‘Our Research’ page
excerpt     | This is a short description that will be shown when this spotlight is part of the row of older spotlights at the bottom of the current spotlight.
buttonText  | This is the button text that will be found on the ‘Our Research’ page that links to the spotlight e.g. ‘Learn more on Covid-19’

All front-matter items for spotlights other than 'date' and 'draft' should be wrapped in double quotes. Again, please view the 'covid-19.md' file for an example.

## Spotlight Content with Shortcodes
Spotlight content should be created using the two provided shortcodes; 'spotlight-feature' and 'spotlight-content'. An example of each has been provided below:

```html
{{< spotlight-feature title="COVID-19" image="coronavirus.jpg">}}
    <p>PHE has conducted over 150 research and surveillance studies, most in collaboration with academics, to better understand SARS CoV-2 virus and its transmission.</p>
    <p>We have published or submitted over 200 new research papers, commentaries and editorials on all aspects of the SARS CoV-2 virus, the illness it causes and how to mitigate the impacts of the pandemic.</p>
    <p>Below is one of many studies contributing to the scientific knowledge base for the virus.</p>
{{< /spotlight-feature >}}
```

For the spotlight-feature shortcode, a **title** and **image** must be provided in the shortcode markdown. Images must be stored in the following folder: *root/themes/phe/static/images/*

```html
{{< spotlight-content title="COVID-19 - SIREN study" image="covid-19-siren-study.jpg" alt="Covid-19." caption="Credit: Maksim Tkachenko" >}}
    <p>SIREN (Sarscov2 Immunity & REinfection EvaluatioN): The impact of detectable anti SARS-COV2 antibody on the incidence of COVID-19 in healthcare workers</p>
    <h5>What is the SIREN study?</h5>
    <p>The purpose of this study is to understand whether prior infection with SARS-CoV2 (the virus that causes COVID-19) protects against future infection with the same virus.</p>
    <p>The study has received approval from the NHS Health Research Authority Berkshire Research Ethics Committee and is funded by the National Institute of Health Research and Public Health England.</p>
    {{< button text="Find out more" icon="external" url="https://www.gov.uk/government/news/past-covid-19-infection-provides-some-immunity-but-people-may-still-carry-and-transmit-virus" external="true">}}
{{< /spotlight-content >}}
```

For the spotlight-content shortcode, a **title** and **image** and **alt** must be provided in the shortcode markdown. Images must be stored in the same folder: *root/themes/phe/static/images/*

**caption** is optional, and should be added when credit to the image owner needs to be provided.

## Shortcode Contents
Contents within the shortcode tags should be in HTML5. I recommend a simple combination of p and heading (h1,h2,h3 etc.) tags. If in doubt, refer to the examples in this document or the ‘covid-19.md’ file.

## Button Shortcode
As included in the spotlight-content example, a button shortcode is also available to be used within either main shortcode. Buttons are self-closing, in that they do not need a closing tag like the other shortcodes. Button shortcodes have the following options:

Type        | Description
----        | -----------
text        | The button text **(required)**
url         | The URL to where the button should link **(required)**
external    | Set this to **true** if the linked page should open in a new tab
icon        | There are two options for the button icon: **external** or **arrow**

