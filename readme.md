#sp-require

This repository aims to integrate the RequireJS file loader with **SharePoint 2013** and **Office 365**. It was bourne out of a discussion following the demo of the [OfficePnP Core.JavaScript](https://github.com/OfficeDev/PnP/tree/master/Samples/Core.JavaScript) pattern by Patrick Rodgers.

The code in this repository is provided as-is and is not intended to be a fully working solution, it is for demo purposes only.

###Instructions

1. Copy the contents of the **sprequire** folder to Style Library
2. Inject a reference to the **init.js** file (recommended via a UserCustomAction)
4. Update URLs to match your own site collection on lines 19 & 36 of **init.js**
5. Update URL to match your own site collection on line 12 of **spweb.js**
6. Import YouTube webpart (in **build**) into Web Part Gallery

*The code has been tested on a SharePoint 2013 SP1 team site with MDS enabled, however this should work on an Office 365 team site (untested)*

If all goes well, you should see lots of console messages from the require code as well as a Quick Launch dropdown showing under the SharePoint Search control. 

The Quick Launch is an example of functionality loaded only once, add the YouTube web part to a page and save it to test content that is not always on the page.

As well as showing how RequireJS could work in a SharePoint site to load functionality into pages, this demo also shows how you can use Handlebars templates and load dynamic CSS within modules through RequireJS plugins.
