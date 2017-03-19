# WebDGap
Convert any website, or web application to a native Windows, Linux, Mac, or Chrome desktop application.

![](https://raw.githubusercontent.com/mikethedj4/WebDGap/master/WebDGap/imgs/screenshot.png)

### Converting a Web Application to a native Desktop Application.

 1. WebDGap requires you to add your application's name first.
 2. Load your application's logo second.
 3. Lastly load in your application's source encased in a zip file.
 
**IMPORTANT!!!** *(your zip file must look something like this, when exporting it as a desktop/chrome application, or extension)*

 - index.html
 - css/style.css
 - js/jquery.js
 - js/script.js
 
The zip example below **WILL NOT WORK!!!**

 - AppName/index.html
 - AppName/css/style.css
 - AppName/js/jquery.js
 - AppName/js/script.js
 
**NOTE:** Larger zip files take a longer time loading and exporting!

### Version
1.2.5

### Tech

WebDGap uses a number of open source projects to work properly:

* [Poly UI Kit](https://github.com/Guilh/Poly) - Used for the application's user interface
* [jQuery](http://jquery.com/) - duh
* [JSZip](https://stuk.github.io/jszip/) - package zip files in javascript
* [node-webkit](http://nwjs.io/) - run web apps as desktop apps
* [AlertifyJS](http://alertifyjs.com/) - For the awesome and stylish alert notification dialogs

### License
MIT

### Availability

*(Desktop version of WebDGap is deprecated)*  
[Windows 64](https://sourceforge.net/projects/webdgap/files/v1.2.4/WebDGap-win.zip/download)  
[Windows 32](https://sourceforge.net/projects/webdgap/files/v1.2.4/WebDGap-win32.zip/download)  
[Mac](https://sourceforge.net/projects/webdgap/files/v1.2.4/WebDGap-mac.zip/download)  
[Linux 64](https://sourceforge.net/projects/webdgap/files/v1.2.4/WebDGap-lin.zip/download)  
[Linux 32](https://sourceforge.net/projects/webdgap/files/v1.2.4/WebDGap-lin32.zip/download) 

For command line use you can use [nativefier](https://github.com/jiahaog/nativefier) to convert any website to a desktop app. (**NOTE**: nativefier uses an Electron wrapper. WebDGap uses a NW.js wrapper. Difference is Electron runs on 64bit processors while NW.js runs on 64bits and 32bit processors)

### Free Software, Hell Yeah!

- [kodeWeave](http://kodeweave.sourceforge.net/)
- [AngularJS](http://angularjs.org)
- [jQuery](http://jquery.com)
- [Codemirror](http://codemirror.net/)
- [io.js](https://iojs.org/en/index.html)
- [node.js](http://nodejs.org)
- [JSZip](https://stuk.github.io/jszip/)
- [Twitter Bootstrap](http://twitter.github.com/bootstrap/)
- [Poly UI Kit](https://github.com/Guilh/Poly)
- [CodePen](http://codepen.io/mikethedj4)

### Author

- [michael schwartz](http://mikethedj4.github.io/) and with [tom gibson's](http://www.tomgibsonconsulting.com/) help on making WebDGap available for Mobile users :)

### Development

Want to contribute? Great!  

You can submit a pull request or simply share the project :)

Of course WebDGap is free and open source, so you can always fork the project and have fun :)

If WebDGap was at all helpful for you. [Would you consider donating to the project?](https://cash.me/$mschwar4)

[You can donate via PayPal too!](https://www.paypal.com/us/cgi-bin/webscr?cmd=_flow&SESSION=JryIEtO_GiYnqlvRfV6BGnO6bAxR3JtIQif2j1z1eFYuoLkYf_XZOY6QbWe&dispatch=5885d80a13c0db1f8e263663d3faee8dcce3e160f5b9538489e17951d2c62172)