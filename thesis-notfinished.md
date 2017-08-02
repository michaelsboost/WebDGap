# WebDGap
### Easily create websites as multi-platform desktop apps!

## By [Michael Schwartz](http://mikethedj4.github.io/)

**Table of Contents**

- [Introduction](#intro)
- [Overview](#overview)
  - [Summary](#summary)
 - [File structure](#filestructure)
 - [Workflow](#workflow)
   - [User loads WebDGap](#ulapp)
   - [Operating Systems](#os)
   - [PhoneGap](#phonegap)
   - [Exportation](#exportation)
   - [WINE](#wine)
   - [Running Offline](#runningoffline)
- [Community adoption & publicity](#collabnshares)

## <a name="intro">Introduction</a>

WebDGap is a multi-platform free/open source application that enables users to export any website or HTML/CSS/JavaScript application as a desktop/phonegap application. 

While similar applications existed before WebDGap, WebDGap offered a few significant competitive advantages that enabled it to take a cut of the pie and gain a loyal following of a couple hundred visitors per day. 

## <a name="overview">Overview</a>

Below is a screenshot of WebDGap's initial screen:

![webdgap screenshot](https://a.fsdn.com/con/app/proj/webdgap/screenshots/webdgap.png/1)

WebDGap is designed to be easy and simple! So simple in fact my 8 year old nephew converted Google as a desktop app.

So you're exporting a website like [Ecosia](https://www.ecosia.org/) as a desktop app for Linux. The process is simple...

- Application name
- Website's URL
- Application's Image
- Export desktop application 

### <a name="summary">Summary</a>

WebDGap’s architecture is unique in the sense that it has no database of its own and a very minimal backend. The server just serves static files, since all the application logic is client-side. This was done for cost-effectiveness and stability but it proved to have several advantages (and also imposed a few limitations). It offers a smoother user experience than its competitors and attempts to bridge the gap between desktop development making it less robust and easier for web developers to make desktop applications regardless of what operating system's being used. Another positive side effect of this architecture is that it inspires more confidence.

<style>
body {background:#fff;}
* {color: #000;}
svg, svg * {fill:#f00;}
.fs {height:17px;}
</style>

## <a name="filestructure">File structure</a>

<img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> /app  
- <img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> index.html  

<img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> /assets  
- <img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> animate.css
- <img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> bootstrap
- <img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> bootstrap-carousel-swipe
- <img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> bootstrap-material-design-font
- <img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> dropdown
- <img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> et-line-font-plugin
- <img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> flags
- <img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> images
- <img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> imagesloaded
- <img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> loadlogo-rounded.png
- <img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> loadlogo-rounded.svg
- <img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> loadlogo.png
- <img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> loadlogo.psd
- <img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> loadlogo.svg
- <img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> loadlogo.xcf
- <img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> masonry
- <img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> mobirise
- <img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> mobirise-gallery
- <img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> mobirise3-blocks-plugin
- <img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> shopping-cart
- <img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> smooth-scroll
- <img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> tether
- <img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> theme
- <img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> touch-swipe
- <img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> viewport-checker
- <img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> web
- <img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> YourLin32App.zip
- <img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> YourLinApp.zip
- <img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> YourMacApp.zip
- <img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> YourWin32App.zip
- <img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> YourWinApp.zip

<img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> /css  
- <img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> flag-icon.css
- <img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> jquery.smartbanner.css
- <img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> style.css

<img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> favicon.ico  

<img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> /imgs  
- <img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> app.png
- <img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> file.svg
- <img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> folder.svg
- <img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> icon.svg
- <img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> logo.svg
- <img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> playvideo.svg
- <img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> preloader.svg
- <img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> screenshot.png
- <img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> sitelogo.svg
- <img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> webdgap-logo.png

<img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> index.html  

<img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> /js  

- <img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> index.js
- <img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> jquery.smartbanner.js
- <img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> keys.js
- <img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> webdgap.js
- <img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> webdgapjs.js
- <img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> webdgapjs.min.js

<img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> /libraries  
- <img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> /alertifyjs
- <img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> /fancybox
- <img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> /font-awesome
- <img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> /jquery
- <img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> /jszip  
- <img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> /polyui
- <img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> /prefixfree  

<img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> LICENSE  

<img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> /plugin  
- <img src="https://lh3.ggpht.com/Yotn7-8_rvZ8FcNowaAH08OnCT7c083hATU7Y69pMIOCWJMNstsIQUWXH9KGqUN0_NF0=w170" class="fs"> /assets
- <img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> index.html

<img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> README.md  
<img src="http://findicons.com/files/icons/2813/flat_jewels/128/file.png" class="fs"> thesis.md  

## <a name="workflow">Workflow</a>

To sum up and illustrate the way WebDGap works, below is what happens behind the scenes for a typical workflow, like the following example sequence of steps:

- User loads WebDGap
- Operating Systems
- PhoneGap
- Exportation
- WINE
- Running Offline

### <a name="ulapp">User loads WebDGap</a>

Here's a list of the few libraries and frameworks WebDGap uses in order to run properly: 

* [Poly UI Kit](https://github.com/Guilh/Poly) - Used for the application's user interface
* [jQuery](http://jquery.com/) - duh
* [JSZip](https://stuk.github.io/jszip/) - package zip files in javascript
* [node-webkit](http://nwjs.io/) - run web apps as desktop apps
* [AlertifyJS](http://alertifyjs.com/) - For the awesome and stylish alert notification dialogs

### <a name="os">Operating Systems</a>
### <a name="phonegap">PhoneGap</a>

### <a name="exportation">Exportation</a>
### <a name="wine">WINE</a>
### <a name="runningoffline">Running Offline</a>

## <a name="collabnshares">Community adoption & publicity</a>

WebDGap launched in June 1st, 2015 [Sourceforge](https://sourceforge.net/projects/webdgap/).

Sites talking about WebDGap: 
- [Windows Report](http://windowsreport.com/run-website-as-desktop-app/)
- [Web Designer Depot](https://www.webdesignerdepot.com/2017/06/5-essential-open-source-tools-for-web-designers/)
- [Bubble](https://forum.bubble.is/t/bubble-based-chrome-extension-get-current-url/10622/20)
- [TekZoom](http://www.tekzoom.com.br/webdgap-crie-aplicativos-para-windows-linux-e-os-x-gratis/)
- [Dylan Lott's Web Development Resources](http://dylanlott.github.io/2016/05/23/Web-Development-Resources/)
- [Quora](https://www.quora.com/Whats-the-best-programming-language-for-applications-and-GUIs)
- [StackOverflow](https://stackoverflow.com/questions/19075208/html5-game-to-native-app/29959025#29959025)
- [InfotonicsMedia](http://www.infotonicsmedia.com/mobile-technologies)