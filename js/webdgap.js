// Version: 1.2.7
// WebDGap, copyright (c) by Michael Schwartz and others
// Distributed under an MIT license: https://github.com/michaelsboost/WebDGap/blob/gh-pages/LICENSE

// This is WebDGap (https://michaelsboost.github.io/WebDGap/), Easily create multi-platform desktop apps.
// implemented in JavaScript!

// Set Application Language Onload
var instructionalVideo, blankDescription, noFileAPI, errorReading, dvalueisblank, unableToExportFields, 
    urlExportError, dyes, dno, mainDesc, mainSiteDesc, instructionalGuide, 
    donateAlert, buyBtn, convertapp, convertsite, appname, dataDescriptionH1, 
    dataDescriptionH2, applyvalues, loadZipFile, loadZipFileURL, processorQues, 
    d64bit, d32bit, dchromeExpChoic, dapp, dpopup, ddescr, ddescrval, 
    doffline, dpermissions, daudioCapture, dvideoCapture, dfileSystem, 
    dconfirm, dreset, dtel, dsms, dmailto, dgeo, dmarketlinks, 
    dfilestorage, dauthour, dauthour, dintentions, dzipnote, 
    browsernote, updatebrowser, home, github, donate, author,
    donateheader,  donateimg, yestxt, creatingapplication, creatingextension,
    language = {
      eng: {
        dyes: "Yes",
        dno: "No",
        instructionalGuide: "Instructional Guide!",
        instructionalVideo: "https://www.youtube.com/embed/-AszZcClVXA",
        donateAlert: "Help keep this free!",
        buyBtn: "buy now",
        convertapp: "Convert App",
        convertsite: "Convert Site",
        appname: "Application Name",
        mainDesc: "Convert any web application to a native Windows/Linux/Mac/Chrome application.",
        mainSiteDesc: "Convert any website to a native Windows/Linux/Mac/Chrome application.",
        dataDescriptionH1: "<a title=\"Export for tablets and smart phones\" href=\"http://build.phonegap.com/\" target=\"_blank\"><em>PhoneGap</em></a> for your <u>Desktop</u> applications.",
        dataDescriptionH2: "Convert any web application to a native Windows/Linux/Mac/Chrome application.",
        applyvalues: "Apply",
        loadZipFile: "Load zip file",
        loadZipFileURL: "Load zip from URL",
        processorQues: "Are you exporting for a 32bit or for a 64bit processor?",
        d64bit: "64bit",
        d32bit: "32bit",
        dchromeExpChoic: "Chrome Application, or Popup Extension?",
        dapp: "Application",
        dpopup: "Popup",
        ddescr: "Description",
        ddescrval: "A shortcut app generated via WebDGap.",
        doffline: "Offline",
        dpermissions: "Permissions",
        daudioCapture: "audioCapture",
        dvideoCapture: "videoCapture",
        dfileSystem: "fileSystem",
        dconfirm: "Confirm",
        dreset: "Reset",
        dtel: "Telephone",
        dsms: "SMS",
        dmailto: "Mail To",
        dgeo: "Geolocation",
        dmarketlinks: "Market Links",
        dfilestorage: "FileStorage",
        dauthour: "Author",
        dintentions: "Intentions",
        dzipnote: "Note: Your browser will process the zip file, <u>don't choose a file too big!</u>",
        browsernote: "You will need a recent browser to use this demo :(",
        updatebrowser: "We recommend <a href=\"http://google.com/chrome\" target=\"_blank\">Google Chrome</a> or <a href=\"https://www.mozilla.org/en-US/firefox/new/\" target=\"_blank\">Mozilla Firefox</a>",
        home: "Home",
        github: "Github",
        donate: "Donate",
        store: "Store",
        author: "Made by <a href=\"http://michaelsboost.github.io/\" target=\"_blank\">Michael</a> with <span class=\"fa fa-heart\" style=\"color: #f66;\"></span> and <span class=\"fa fa-coffee\" style=\"color: #52bab3;\"></span>.",
        httpsNoRecommend: "https is not recommend.<br /><br /> If needed use <a href=\"https://bitly.com/shorten/\">Bitly</a> to set url to http.",
        noFileApi: "The File APIs are not fully supported in this browser.",
        errorReading: "Error reading",
        blankDescription: "Unable to export: Description is blank!",
        unableToExportFields: "Unable to export: All fields must have a value!",
        dvalueisblank: "Unable to perform operation as value is blank!",
        urlExportError: "Error! \"http://\" and \"https://\" urls are only supported!",
        donateheader: "Your donation helps keep WebDGap free!",
        donateimg: "../imgs/donate.svg",
        yestxt: "../imgs/yes.svg",
        creatingapplication: "Creating application!",
        creatingextension: "Creating your Chrome extension!",
        discontinued: "As of April 13th, 2018 WebDGap is no longer an active project.<br>All updates as of that date and on are solely contributor based implementations."
      },
      es: {
        dyes: "Sí",
        dno: "No",
        instructionalGuide: "Guía de Instrucción!",
        instructionalVideo: "https://www.youtube.com/embed/-AszZcClVXA",
        donateAlert: "¡Ayuda a mantener esto gratis!",
        buyBtn: "compra ahora",
        convertapp: "Convertir la Aplicación",
        convertsite: "Convertir Sitio",
        appname: "Nombre de la aplicación",
        mainDesc: "Convierta cualquier aplicación web en una aplicación nativa de Windows/Linux/Mac/Chrome.",
        mainSiteDesc: "Convierta cualquier sitio web en una aplicación nativa de Windows/Linux/Mac/Chrome.",
        dataDescriptionH1: "<a title=\"Exportación de tabletas y teléfonos inteligentes\" href=\"http://build.phonegap.com/\" target=\"_blank\"><em>PhoneGap</em></a> para sus aplicaciones <u>Desktop</u>.",
        dataDescriptionH2: "Convierta cualquier aplicación web en una aplicación nativa de Windows/Linux/Mac/Chrome.",
        applyvalues: "Aplicar",
        loadZipFile: "Cargar archivo zip",
        loadZipFileURL: "Cargar zip desde url",
        processorQues: "¿Está exportando para un procesador de 32bit o para un procesador de 64bit?",
        d64bit: "64bit",
        d32bit: "32bit",
        dchromeExpChoic: "Aplicación de Chrome o extensión de Popup?",
        dapp: "Aplicación",
        dpopup: "Popup",
        ddescr: "Descripción",
        ddescrval: "Una aplicación de acceso directo generada por WebDGap.",
        doffline: "Desconectado",
        dpermissions: "Permisos",
        daudioCapture: "audioCapture",
        dvideoCapture: "videoCapture",
        dfileSystem: "fileSystem",
        dconfirm: "Confirmar",
        dreset: "Reiniciar",
        dtel: "Teléfono",
        dsms: "SMS",
        dmailto: "Correo a",
        dgeo: "Geolocalización",
        dmarketlinks: "Enlaces del mercado",
        dfilestorage: "Almacenamiento de archivos",
        dauthour: "Autor",
        dintentions: "Intenciones",
        dzipnote: "Nota: Su navegador procesará el archivo zip, <u>no elija un archivo demasiado grande!</u>",
        browsernote: "Necesitarás un navegador reciente para usar esta demo :(",
        updatebrowser: "Recomendamos <a href=\"http://google.com/chrome\" target=\"_blank\">Google Chrome</a> o <a href=\"https://www.mozilla.org/en-US/firefox/new/\" target=\"_blank\">Mozilla Firefox</a>",
        home: "Casa",
        github: "Github",
        donate: "Donar",
        store: "Almacenar",
        author: "Hecho por <a href=\"http://michaelsboost.github.io/\" target=\"_blank\">Michael</a> con <span class=\"fa fa-heart\" style=\"color: #f66;\"></span> y <span class=\"fa fa-coffee\" style=\"color: #52bab3;\"></span>.",
        httpsNoRecommend: "https no es recomendable.<br /><br /> Si es necesario, utilice <a href=\"https://bitly.com/shorten/\">Bitly</a> para establecer url a http.",
        noFileAPI: "Las API de archivos no son totalmente compatibles con este navegador.",
        errorReading: "Error de lectura",
        blankDescription: "No se puede exportar: la descripción está en blanco!",
        unableToExportFields: "No se puede exportar: todos los campos deben tener un valor!",
        dvalueisblank: "¡No se puede realizar la operación porque el valor está en blanco!",
        urlExportError: "¡Error! Las urls \"http://\" y \"https://\" solo son compatibles!",
        donateheader: "¡Su donación ayuda a mantener WebDGap gratis!",
        donateimg: "../imgs/donar.svg",
        yestxt: "../imgs/sí.svg",
        creatingapplication: "¡Creando aplicación!",
        creatingextension: "¡Creando una extensión de Chrome!",
        discontinued: "A partir del 13 de abril de 2018, WebDGap ya no es un proyecto activo.<br>Todas las actualizaciones a partir de esa fecha y en adelante son implementaciones basadas exclusivamente en colaboradores."
      }
    };

// Set language variables
function englishWords() {
  instructionalVideo = language.eng.instructionalVideo;
  blankDescription = language.eng.blankDescription;
  noFileAPI = language.eng.noFileAPI;
  errorReading = language.eng.errorReading;
  dvalueisblank = language.eng.dvalueisblank;
  unableToExportFields = language.eng.unableToExportFields;
  urlExportError = language.eng.urlExportError;
  dyes = language.eng.dyes;
  dno = language.eng.dno;
  mainDesc = language.eng.mainDesc;
  mainSiteDesc = language.eng.mainSiteDesc;
  instructionalGuide = language.eng.instructionalGuide;
  donateAlert = language.eng.donateAlert;
  buyBtn = language.eng.buyBtn;
  convertapp = language.eng.convertapp;
  convertsite = language.eng.convertsite;
  appname = language.eng.appname;
  dataDescriptionH1 = language.eng.dataDescriptionH1;
  dataDescriptionH2 = language.eng.dataDescriptionH2;
  applyvalues = language.eng.applyvalues;
  loadZipFile = language.eng.loadZipFile;
  loadZipFileURL = language.eng.loadZipFileURL;
  processorQues = language.eng.processorQues;
  d64bit = language.eng.d64bit;
  d32bit = language.eng.d32bit;
  dchromeExpChoic = language.eng.dchromeExpChoic;
  dapp = language.eng.dapp;
  dpopup = language.eng.dpopup;
  ddescr = language.eng.ddescr;
  ddescrval = language.eng.ddescrval;
  doffline = language.eng.doffline;
  dpermissions = language.eng.dpermissions;
  daudioCapture = language.eng.daudioCapture;
  dvideoCapture = language.eng.dvideoCapture;
  dfileSystem = language.eng.dfileSystem;
  dconfirm = language.eng.dconfirm;
  dreset = language.eng.dreset;
  dtel = language.eng.dtel;
  dsms = language.eng.dsms;
  dmailto = language.eng.dmailto;
  dgeo = language.eng.dgeo;
  dmarketlinks = language.eng.dmarketlinks;
  dfilestorage = language.eng.dfilestorage;
  dauthour = language.eng.dauthour;
  dauthour = language.eng.dauthour;
  dintentions = language.eng.dintentions;
  dzipnote = language.eng.dzipnote;
  browsernote = language.eng.browsernote;
  updatebrowser = language.eng.updatebrowser;
  home = language.eng.home;
  github = language.eng.github;
  donate = language.eng.donate;
  store = language.eng.store;
  author = language.eng.author;
  donateheader = language.eng.donateheader;
  donateimg = language.eng.donateimg;
  yestxt = language.eng.yestxt;
  creatingapplication = language.eng.creatingapplication;
  creatingextension = language.eng.creatingextension;
  discontinued = language.eng.discontinued;
}

if (window.location.hash) {
  if (location.hash.substring(1) === "eng") {
    englishWords();
  } 
  else if (location.hash.substring(1) === "es") {
    instructionalVideo = language.es.instructionalVideo;
    blankDescription = language.es.blankDescription;
    noFileAPI = language.es.noFileAPI;
    errorReading = language.es.errorReading;
    dvalueisblank = language.es.dvalueisblank;
    unableToExportFields = language.es.unableToExportFields;
    urlExportError = language.es.urlExportError;
    dyes = language.es.dyes;
    dno = language.es.dno;
    mainDesc = language.es.mainDesc;
    mainSiteDesc = language.es.mainSiteDesc;
    instructionalGuide = language.es.instructionalGuide;
    donateAlert = language.es.donateAlert;
    buyBtn = language.es.buyBtn;
    httpsNoRecommend = language.es.httpsNoRecommend;
    convertapp = language.es.convertapp;
    convertsite = language.es.convertsite;
    appname = language.es.appname;
    dataDescriptionH1 = language.es.dataDescriptionH1;
    dataDescriptionH2 = language.es.dataDescriptionH2;
    applyvalues = language.es.applyvalues;
    loadZipFile = language.es.loadZipFile;
    loadZipFileURL = language.es.loadZipFileURL;
    processorQues = language.es.processorQues;
    d64bit = language.es.d64bit;
    d32bit = language.es.d32bit;
    dchromeExpChoic = language.es.dchromeExpChoic;
    dapp = language.es.dapp;
    dpopup = language.es.dpopup;
    ddescr = language.es.ddescr;
    ddescrval = language.es.ddescrval;
    doffline = language.es.doffline;
    dpermissions = language.es.dpermissions;
    daudioCapture = language.es.daudioCapture;
    dvideoCapture = language.es.dvideoCapture;
    dfileSystem = language.es.dfileSystem;
    dconfirm = language.es.dconfirm;
    dreset = language.es.dreset;
    dtel = language.es.dtel;
    dsms = language.es.dsms;
    dmailto = language.es.dmailto;
    dgeo = language.es.dgeo;
    dmarketlinks = language.es.dmarketlinks;
    dfilestorage = language.es.dfilestorage;
    dauthour = language.es.dauthour;
    dauthour = language.es.dauthour;
    dintentions = language.es.dintentions;
    dzipnote = language.es.dzipnote;
    browsernote = language.es.browsernote;
    updatebrowser = language.es.updatebrowser;
    home = language.es.home;
    github = language.es.github;
    donate = language.es.donate;
    store = language.es.store;
    author = language.es.author;
    donateheader = language.es.donateheader;
    donateimg = language.es.donateimg;
    yestxt = language.es.yestxt;
    creatingapplication = language.es.creatingapplication;
    creatingextension = language.es.creatingextension;
    discontinued = language.es.discontinued;
    
    setTimeout(function() {
      $("#setlanguage option[value=es]").prop("selected", true);
      $('[data-set=language]').attr('src', $("#setlanguage option:selected").attr('data-imagesrc'));
    }, 150);
  }
} else {
  englishWords();
}

// Run Onload
$(document.body).append('<style>.onoffswitch-inner:before {content: "'+ dyes +'";}.onoffswitch-inner:after {content: "'+ dno +'";}</style>');
$("#setlanguage option[value=eng]").attr("selected", true);
$('[data-set=language]').attr('src', $("#setlanguage option:selected").attr('data-imagesrc'));
$('[data-language=convertapp]').text(convertapp);
$('[data-language=convertsite]').text(convertsite);
$('[data-language=appname]').attr('placeholder', appname);
$('[data-language=dataDescriptionH1]').html(dataDescriptionH1);
$('[data-language=dataDescriptionH2]').text(dataDescriptionH2);
$('[data-language=applyvalues]').text(applyvalues);
$('[data-language=loadZipFile]').text(loadZipFile);
$('[data-language=loadZipFileURL]').text(loadZipFileURL);
$('[data-language=processorQues]').text(processorQues);
$('[data-language=d64bit]').text(d64bit);
$('[data-language=d32bit]').text(d32bit);
$('[data-language=dchromeExpChoic]').text(dchromeExpChoic);
$('[data-language=dapp]').text(dapp);
$('[data-language=dpopup]').text(dpopup);
$('[data-language=ddescr]').attr('placeholder', ddescr).trigger('change');
$('[data-language=ddescrval]').val(ddescrval).trigger('change');
$('[data-language=doffline]').text(doffline);
$('[data-language=dpermissions]').text(dpermissions);
$('[data-language=daudioCapture]').text(daudioCapture);
$('[data-language=dvideoCapture]').text(dvideoCapture);
$('[data-language=dfileSystem]').text(dfileSystem);
$('[data-language=dconfirm]').val(dconfirm);
$('[data-language=dreset]').val(dreset);
$('[data-language=dtel]').text(dtel);
$('[data-language=dsms]').text(dsms);
$('[data-language=dmailto]').text(dmailto);
$('[data-language=dgeo]').text(dgeo);
$('[data-language=dmarketlinks]').text(dmarketlinks);
$('[data-language=dfilestorage]').text(dfilestorage);
$('input[data-language=dauthour]').attr('placeholder', dauthour);
$('[data-language=dauthour]').text(dauthour);
$('[data-language=dintentions]').text(dintentions);
$('[data-language=dzipnote]').html(dzipnote);
$('[data-language=browsernote]').text(browsernote);
$('[data-language=updatebrowser]').text(updatebrowser);
$('[data-language=home]').text(home);
$('[data-language=github]').text(github);
$('[data-language=donate]').text(donate);
$('[data-language=store]').text(store);
$('[data-language=author]').html(author);
$('[data-language=donateheader]').text(donateheader);
$('[data-language=donateimg]').attr("src", donateimg);
$('[data-language=yestxt]').attr("src", yestxt);
$('[data-language=yestxt]').attr("src", yestxt);
$('[data-language=discontinued]').html(discontinued);

// Export App or Site?
$("[data-id=convertapp], [data-id=convertsite]").on("click", function() {
  if ( $(this).attr("data-id").toLowerCase() === "convertapp" ) {
    document.querySelector(".maindesc").textContent = mainDesc;
    $("[data-id=appspace]").removeClass("hide");
    $(".export-for-pgb").addClass("export-pgbapp");
    $(".export-as-win32-app, .export-as-win-app, .export-as-mac-app, .export-as-lin32-app, .export-as-lin-app").addClass("exportedwebapp");
  } else if ( $(this).attr("data-id").toLowerCase() === "convertsite" ) {
    document.querySelector(".maindesc").textContent = mainSiteDesc;
    $("[data-id=webspace]").removeClass("hide");
    $(".outputname").addClass("convertsite-picked");
    $("[data-id=sitename]").addClass("convertsite-chosen");
    $(".logoisloadedapp, [data-listen=site]").addClass("hide");
    document.querySelector(".export-for-pgb").href = "https://gonative.io/";
    document.querySelector(".export-for-pgb").target = "_blank";
    $(".export-as-win32-app, .export-as-win-app, .export-as-mac-app, .export-as-lin32-app, .export-as-lin-app").addClass("exportedwebsite");
  }

  $("[data-id=sitename]").focus();
  $("body").removeClass("noscroll");
  $(".wholedialog").fadeOut();
});

// Show Lightbox Video Onload
var playGuide = function() {
  $.fancybox.open({
    youtube : {
      controls : 0,
      showinfo : 0
    },
    src  : instructionalVideo, // Source of the content
    type : 'iframe', // Content type: image|inline|ajax|iframe|html (optional)
    opts : {
      // Promote T-Shirt
      beforeClose: function() {
        alertify.message("<div class=\"grid\"><div class=\"centered grid__col--12 tc\"><h2>"+ donateAlert +"</h2><a href=\"https://snaptee.co/t/rjezt/?r=fb&teeId=rjezt\" target=\"_blank\"><img src=\"../assets/images/model-600x600.jpg\" width=\"100%\"></a><a class=\"btn--success\" href=\"https://snaptee.co/t/rjezt/?r=fb&teeId=rjezt\" target=\"_blank\" style=\"width: 100%;\">"+ buyBtn +"</a></div></div>");
      }
    }
  });
};

// Watch How To Video
alertify.message("<div class=\"grid\"><div class=\"centered grid__col--12 tc\"><h2>"+ instructionalGuide +"</h2><a class=\"pointer\" onclick=\"playGuide()\"><img src=\"../imgs/playvideo.svg\" width=\"50%\"></a></div></div>");

// Promote T-Shirt
setTimeout(function() {
  alertify.message("<div class=\"grid\"><div class=\"centered grid__col--12 tc\"><h2>"+ donateAlert +"</h2><a href=\"https://snaptee.co/t/vjezt/?r=fb&teeId=vjezt\" target=\"_blank\"><img src=\"../assets/images/model-1-600x600.jpg\" width=\"100%\"></a><a class=\"btn--success\" href=\"https://snaptee.co/t/vjezt/?r=fb&teeId=vjezt\" target=\"_blank\" style=\"width: 100%;\">"+ buyBtn +"</a></div></div>");
}, 5000);

// Alert if HTTPS
document.querySelector("[data-action=website]").onkeyup = function(e) {
  if (this.value.toLowerCase().substring(0,8) === "https://") {
    alertify.message(httpsNoRecommend);
  }
};

// Go to top of page
$("html, body").animate({ scrollTop: 0 }, "slow");
document.querySelector(".dialog").style.display = "none";

// Handle necessary styles for 64bit and 64bit exportation
document.querySelector(".export64").onclick = function() {
  $(".64bit").removeClass("hide");
  $(".32bit").addClass("hide");
  $("html, body").animate({ scrollTop: $(".chosenbit").offset().top }, "slow");
};
document.querySelector(".export32").onclick = function() {
  $(".64bit").addClass("hide");
  $(".32bit").removeClass("hide");
  $("html, body").animate({ scrollTop: $(".chosenbit").offset().top }, "slow");
};

// Only show image loader if application has a name
document.querySelector("[data-action=website]").onkeyup = function(e) {
   if (this.value.toLowerCase().substring(0,8) === "https://") {
    $(".export-as-chrome-app").addClass("hide");
  }

  if (!this.value) {
    $(".checkimageloader, [data-action=applyvalues]").addClass("hide");
  } else if ( (this.value.toLowerCase().substring(0,7) === "http://" ) || (this.value.toLowerCase().substring(0,8) === "https://") ) {
    $("[data-action=applyvalues]").removeClass("hide");
    $("html, body").animate({ scrollTop: $(this).offset().top }, "slow");
    if (e.which == 13) {
      $("[data-action=applyvalues]").trigger("click");
    }
  } else {
    $("[data-action=applyvalues]").addClass("hide");
  }
};
document.querySelector("[data-id=sitename]").onkeyup = function(e) {
  if ( $(this).hasClass("convertsite-chosen") ) {
    if (!this.value) {
      $("[data-action=website]").addClass("hide");
    } else {
      $("[data-action=website]").removeClass("hide");
      if (e.which == 13) {
        $("[data-action=website]").focus();
      }
    }
  } else {
    if (!this.value) {
      $(".checkimageloader").addClass("hide");
    } else {
      $(".checkimageloader").removeClass("hide");
      if (e.which == 13) {
        $("#load").trigger("click");
      }
    }
  }
  document.querySelector(".outputname").textContent = this.value;
};

// Show image loader of required values
document.querySelector("[data-action=applyvalues]").addEventListener("click", function() {
  $(".checkimageloader, .outputname").removeClass("hide");
  $(".logoisloadedsite").addClass("hide");
  document.querySelector(".outputname").textContent = document.querySelector("[data-id=sitename]").value;
});

// Trigger load zip from url from textbox
/*
document.getElementById("zipurl").onkeyup = function(e) {
  if (!this.value) {
    $(".loadzipurl").addClass("hide");
  } else {
    if ( (this.value.toLowerCase().substring(0,7) === "http://" ) || (this.value.toLowerCase().substring(0,8) === "https://") && (this.value.toLowerCase().substring(this.value.length - 4) === ".zip") ) {
      $(".loadzipurl").removeClass("hide");
      if (e.which == 13) {
        $(".loadzipurl").trigger("click");
      }
    } else {
      $(".loadzipurl").addClass("hide");
    }
  }
};
*/

// Reload application
document.querySelector("[data-action=reload]").addEventListener("click", function() {
  location.reload(true);
});

// Reset Description Values
document.querySelector(".reset").onclick = function() {
  document.querySelector(".resetval").value = "";
};

// Export for Chrome Choose Dialog
$(".export-for-chrome").on("click", function() {
  $(".pickchromes").toggleClass("hide");
  $(".phonegap-dialog").hide();
  $("html, body").animate({ scrollTop: $(".pickchromes").offset().top }, "slow");
});

// Before PhoneGap Export check if all inputs have a value
$("[data-pgb=version], [data-pgb=versionCode], [data-pgb=description], [data-pgb=author], [data-pgb=authoremail], [data-pgb=authorlink]").keyup(function() {
  if ( (!$("[data-pgb=version]").val()) || (!$("[data-pgb=versionCode]").val()) || (!$("[data-pgb=description]").val()) || (!$("[data-pgb=author]").val()) || (!$("[data-pgb=authoremail]").val()) || (!$("[data-pgb=authorlink]").val()) ) {
    if ($(".pgbappexport").is(":visible")) {
      $(".pgbappexport").addClass("hide");
    }
  } else {
    $(".pgbappexport").removeClass("hide");
  }
});

var audioCapture, videoCapture, storagePerm, setOffline, listPermissions,
    listIntentions, telIntent, smsIntent, mailtoIntent, geoIntent, marketIntent,
    filestorageIntent,
    loader = $("#load"),
    cImgWinWide1 = $(".nwinwide1"),
    cImgWinWide2 = $(".nwinwide2"),
    canvas      = $(".holder"),
    holder      = document.getElementById("imageloader"),
    loadFiles   = $("#file, .load"),
    ctxWinWide1 = cImgWinWide1[0].getContext("2d"),
    ctxWinWide2 = cImgWinWide2[0].getContext("2d"),
    ctx         = canvas[0].getContext("2d"),
    executeApp  = function(file) {
      $(".chromeappcheck").addClass("hide");

      var reader = new FileReader();
      reader.onload = function(e) {
        // Export as Windows App
        $("[data-class=setexportclass]").on("click", function() {
          // Download as Windows App
          if ($(this).hasClass("export-as-win-app")) {
            JSZipUtils.getBinaryContent("../assets/YourWinApp.zip", function(err, data) {
              if(err) {
                throw err // or handle err
              }

              var zip = new JSZip(data);

              // Your Logo
              zip.file("resources/default_app/icons/16.png", document.querySelector("[data-webdgapsize=f16]").src.split('base64,')[1],{base64: true});
              zip.file("resources/default_app/icons/32.png", document.querySelector("[data-webdgapsize=f32]").src.split('base64,')[1],{base64: true});
              zip.file("resources/default_app/icons/64.png", document.querySelector("[data-webdgapsize=f64]").src.split('base64,')[1],{base64: true});
              zip.file("resources/default_app/icons/128.png", document.querySelector("[data-webdgapsize=f128]").src.split('base64,')[1],{base64: true});
              zip.file("resources/default_app/icons/logo.png", document.querySelector("[data-webdgapimgload=webdgapimg]").src.split("base64,")[1],{base64: true});

              // Files for exported app
              zip.file("resources/default_app/css/style.css", "html, body {\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n}\n\niframe {\n  width: 100%;\n  height: 100%;\n  border: 0;\n}");
              zip.file("resources/default_app/index.html", "<!DOCTYPE html>\n<html>\n  <head>\n    <title>"+ $("[data-id=sitename]").val() +"</title>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=9\" />\n    <link type=\"text/css\" rel=\"stylesheet\" href=\"css/style.css\" />\n  </head>\n  <body>\n    <iframe src=\""+ $("[data-action=website]").val() +"\">\n      Your browser does not support the iFrame html elements.\n    </iframe>\n  </body>\n</html>");
              zip.file("resources/default_app/package.json", "{\n  \"name\": \""+ $("[data-id=sitename]").val() +"\",\n  \"productName\": \""+ $("[data-id=sitename]").val() +"\",\n  \"version\": \"1.0.0\",\n  \"main\": \"default_app.js\",\n  \"license\": \"MIT\"\n}\n");
              // zip.file("package.json", '{\n  "main"  : "resources/default_app/index.html",\n  "name"  : "'+ $("[data-id=sitename]").val() +'",\n  "window": {\n      "toolbar" : false,\n      "icon"    : "resources/default_app/icons/128.png",\n      "width"   : 1000,\n      "height"  : 600,\n      "position": "center"\n  }\n}');
              // Export application
              var content = zip.generate({type:"blob"});
              saveAs(content, $("[data-id=sitename]").val().replace(/ /g, "-").toLowerCase() + "-winsite.zip");
              $(".preloader").remove();
              return false;
            });
          }
          if ($(this).hasClass("export-as-win32-app")) {
            JSZipUtils.getBinaryContent("../assets/YourWin32App.zip", function(err, data) {
              if(err) {
                throw err // or handle err
              }

              var zip = new JSZip(data);

              // Your Logo
              zip.file("app/icons/16.png", document.querySelector("[data-webdgapsize=f16]").src.split('base64,')[1],{base64: true});
              zip.file("app/icons/32.png", document.querySelector("[data-webdgapsize=f32]").src.split('base64,')[1],{base64: true});
              zip.file("app/icons/64.png", document.querySelector("[data-webdgapsize=f64]").src.split('base64,')[1],{base64: true});
              zip.file("app/icons/128.png", document.querySelector("[data-webdgapsize=f128]").src.split('base64,')[1],{base64: true});
              zip.file("app/icons/logo.png", document.querySelector("[data-webdgapimgload=webdgapimg]").src.split("base64,")[1],{base64: true});

              // Files for exported app
              zip.file("package.json", '{\n  "main"  : "app/index.html",\n  "name"  : "'+ $("[data-id=sitename]").val() +'",\n  "window": {\n      "toolbar" : false,\n      "icon"    : "app/icons/128.png",\n      "width"   : 1000,\n      "height"  : 600,\n      "position": "center"\n  }\n}');
              zip.file("app/index.html", '<!doctype html>\n<html>\n <head>\n    <title>'+ $("[data-id=sitename]").val() +'</title>\n    <style>\n      iframe {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        overflow: visible;\n        border: 0;\n      }\n    </style>\n  </head>\n <body>\n    <iframe src="'+ $("[data-action=website]").val() +'">\n      Your browser does not support the iFrame html elements.\n    </iframe>\n  </body>\n</html>');
              // zip.file("README", "If WebDGap was at all helpful for you. Would you consider donating to the project?\nhttps://www.paypal.com/cgi-bin/webscr?business=mikethedj4%40yahoo.com&cmd=_xclick&amount=5.0&item_name=Donation&currency_code=USD\n\n")
              // Export application
              var content = zip.generate({type:"blob"});
              saveAs(content, $("[data-id=sitename]").val().replace(/ /g, "-").toLowerCase() + "-win32site.zip");
              $(".preloader").remove();
              return false;
            });
          }

          // Download as Mac App
          if ($(this).hasClass("export-as-mac-app")) {
            JSZipUtils.getBinaryContent("../assets/YourMacApp.zip", function(err, data) {
              if(err) {
                throw err // or handle err
              }

              var zip = new JSZip(data);

              // Your Logo
              zip.file("content/icons/16.png", document.querySelector("[data-webdgapsize=f16]").src.split('base64,')[1],{base64: true});
              zip.file("content/icons/32.png", document.querySelector("[data-webdgapsize=f32]").src.split('base64,')[1],{base64: true});
              zip.file("content/icons/64.png", document.querySelector("[data-webdgapsize=f64]").src.split('base64,')[1],{base64: true});
              zip.file("content/icons/128.png", document.querySelector("[data-webdgapsize=f128]").src.split('base64,')[1],{base64: true});
              zip.file("content/icons/logo.png", document.querySelector("[data-webdgapimgload=webdgapimg]").src.split("base64,")[1],{base64: true});

              // Files for exported app
              zip.file("package.json", '{\n  "main"  : "content/index.html",\n  "name"  : "'+ $("[data-id=sitename]").val() +'",\n  "window": {\n    "toolbar"    : false\n  }\n}');
              zip.file("content/index.html", '<!doctype html>\n<html>\n <head>\n    <title>'+ $("[data-id=sitename]").val() +'</title>\n    <style>\n      iframe {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        overflow: visible;\n        border: 0;\n      }\n    </style>\n  </head>\n <body>\n    <iframe src="'+ $("[data-action=website]").val() +'"></iframe>\n\n    <script src="js/main.js"></script>\n  </body>\n</html>');
              zip.file("content/js/main.js", 'document.addEventListener("DOMContentLoaded", function() {\n  // Load library\n  var gui = require("nw.gui");\n\n  // Reference to window\n  var win = gui.Window.get();\n\n  // Create menu container\n  var Menu = new gui.Menu({\n    type: "menubar"\n  });\n\n  //initialize default mac menu\n  Menu.createMacBuiltin("'+ $("[data-id=sitename]").val() +'");\n\n  // Get the root menu from the default mac menu\n  var rootMenu = Menu.items[0].submenu;\n  var windowMenu = Menu.items[2].submenu;\n\n  // Append new item to root menu\n  windowMenu.insert(\n    new gui.MenuItem({\n      type: "normal",\n      label: "Toggle Fullscreen",\n      key: "F",\n      modifiers: "cmd",\n      click : function () {\n        win.toggleFullscreen();\n      }\n    })\n  );\n\n  windowMenu.insert(\n    new gui.MenuItem({\n      type: "normal",\n      label: "Reload App",\n      key: "r",\n      modifiers: "cmd",\n      click : function () {\n        win.reload();\n      }\n    })\n  );\n\n  // Remove About Node-Webkit\n  rootMenu.removeAt(0);\n\n  // Append Menu to Window\n  gui.Window.get().menu = Menu;\n});');
              zip.file("run.sh", "open -a /Applications/"+ $("[data-id=sitename]").val() +".app/Contents/data/"+ $("[data-id=sitename]").val().replace(/ /g, "") +".app");
              // zip.file("README", "If WebDGap was at all helpful for you. Would you consider donating to the project?\nhttps://www.paypal.com/cgi-bin/webscr?business=mikethedj4%40yahoo.com&cmd=_xclick&amount=5.0&item_name=Donation&currency_code=USD\n\n");
              // Export application
              var content = zip.generate({type:"blob"});
              saveAs(content, $("[data-id=sitename]").val().replace(/ /g, "-").toLowerCase() + "-macsite.zip");
              $(".preloader").remove();
              return false;
            });
          }

          // Download as Linux App
          if ($(this).hasClass("export-as-lin-app")) {
          JSZipUtils.getBinaryContent("../assets/YourLinApp.zip", function(err, data) {
            if(err) {
              throw err // or handle err
            }

            var zip = new JSZip();

            // Put all application files in subfolder for shell script
            var appName = zip.folder( $("[data-id=sitename]").val().replace(/ /g, "-")  );
            appName.load(data);

            // Your Logo
            appName.file("resources/default_app/icons/16.png", document.querySelector("[data-webdgapsize=f16]").src.split('base64,')[1],{base64: true});
            appName.file("resources/default_app/icons/32.png", document.querySelector("[data-webdgapsize=f32]").src.split('base64,')[1],{base64: true});
            appName.file("resources/default_app/icons/64.png", document.querySelector("[data-webdgapsize=f64]").src.split('base64,')[1],{base64: true});
            appName.file("resources/default_app/icons/128.png", document.querySelector("[data-webdgapsize=f128]").src.split('base64,')[1],{base64: true});
            appName.file("resources/default_app/icons/logo.png", document.querySelector("[data-webdgapimgload=webdgapimg]").src.split("base64,")[1],{base64: true});
            
            // Files for exported app
            appName.file("resources/default_app/index.html", '<!DOCTYPE html>\n<html>\n  <head>\n    <title>'+ $("[data-id=sitename]").val() +'</title>\n    <style>\n      html, body {\n        height: 100%;\n      }\n      body {\n        margin: 0;\n        padding: 0;\n        overflow: hidden;\n      }\n      iframe {\n        width: 100%;\n        height: 100%;\n        border: 0;\n      }\n    </style>\n  </head>\n  <body>\n    <iframe src="'+ $("[data-action=website]").val() +'"></iframe>\n  </body>\n</html>');
            appName.file("resources/default_app/package.json", "{\n  \"name\": \""+ $("[data-id=sitename]").val() +"\",\n  \"productName\": \""+ $("[data-id=sitename]").val() +"\",\n  \"version\": \"1.0.0\",\n  \"main\": \"default_app.js\",\n  \"license\": \"MIT\"\n}\n");
            zip.file("make.sh", "if [ -d ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +" ]; then\n  typeset LP_FILE=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +".desktop\n\n  # Remove the target file if any\n  rm -f ${LP_FILE}\n  printf \"%s[Desktop Entry]\\nName="+ $("[data-id=sitename]").val() +"\\nPath=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"\\nActions=sudo\\nExec=./"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/electron\\nIcon=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/resources/default_app/icons/128.png\\nTerminal=true\\nType=Application\\nStartupNotify=true > ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +".desktop\" >> ${LP_FILE}\n\n  echo 'Your application and launcher are now located at ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"'\n  rm README.md\n  rm make.sh\n  cd ../\n  rmdir "+ $("[data-id=sitename]").val().replace(/ /g, "-") +"-linsite\n  cd ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/\n  chmod 775 electron\nfi\n\nif [ ! -d ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +" ]; then\n  mv "+ $("[data-id=sitename]").val().replace(/ /g, "-") +" ${HOME}\n\n  typeset LP_FILE=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +".desktop\n\n  # Remove the target file if any\n  rm -f ${LP_FILE}\n  printf \"%s[Desktop Entry]\\nName="+ $("[data-id=sitename]").val() +"\\nPath=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"\\nActions=sudo\\nExec=./"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/electron\\nIcon=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/resources/default_app/icons/128.png\\nTerminal=true\\nType=Application\\nStartupNotify=true > ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +".desktop\" >> ${LP_FILE}\n\n  echo 'Your application and launcher are now located at ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"'\n  rm README.md\n  rm make.sh\n  cd ../\n  rmdir "+ $("[data-id=sitename]").val().replace(/ /g, "-") +"-linsite\n  cd ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/\n  chmod 775 electron\nfi\n\n# For Windows OS\n#if EXIST ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +" (\n  #echo Yes\n#) ELSE (\n  #echo No\n#)\n");
            zip.file("README.md", "### Instructions\n 1. Extract the `"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"-linsite.zip` folder anywhere on your computer except the home folder. \n 2. Open a terminal and then navigate to "+ $("[data-id=sitename]").val().replace(/ /g, "-") +"'s directory and `run the make.sh file`.\n\n  **example**:\n  cd Downloads/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"-linsite\n\n 3. This will move the "+ $("[data-id=sitename]").val().replace(/ /g, "-") +" sibling folder and it's descendants to your home directory and create an application launcher.\n");
            // Export application
            var content = zip.generate({type:"blob"});
            saveAs(content, $("[data-id=sitename]").val().replace(/ /g, "-").toLowerCase() + "-linsite.zip");
            $(".preloader").remove();
            return false;
          });
          return false;
        }
          if ($(this).hasClass("export-as-lin32-app")) {
          JSZipUtils.getBinaryContent("../assets/YourLin32App.zip", function(err, data) {
            if(err) {
              throw err // or handle err
            }

            var zip = new JSZip();

            // Put all application files in subfolder for shell script
            var appName = zip.folder( $("[data-id=sitename]").val().replace(/ /g, "-")  );
            appName.load(data);

            // Your Logo
            appName.file("app/icons/16.png", document.querySelector("[data-webdgapsize=f16]").src.split('base64,')[1],{base64: true});
            appName.file("app/icons/32.png", document.querySelector("[data-webdgapsize=f32]").src.split('base64,')[1],{base64: true});
            appName.file("app/icons/64.png", document.querySelector("[data-webdgapsize=f64]").src.split('base64,')[1],{base64: true});
            appName.file("app/icons/128.png", document.querySelector("[data-webdgapsize=f128]").src.split('base64,')[1],{base64: true});
            appName.file("app/icons/logo.png", document.querySelector("[data-webdgapimgload=webdgapimg]").src.split("base64,")[1],{base64: true});
            
            // Files for exported app
            appName.file("package.json", '{\n  "main"  : "app/index.html",\n  "name"  : "'+ $("[data-id=sitename]").val() +'",\n  "window": {\n      "toolbar" : false,\n      "icon"    : "app/icons/128.png",\n      "width"   : 1000,\n      "height"  : 600,\n      "position": "center"\n  }\n}');
            appName.file("app/index.html", '<!doctype html>\n<html>\n <head>\n    <title>'+ $("[data-id=sitename]").val() +'</title>\n    <style>\n      iframe {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        overflow: visible;\n        border: 0;\n      }\n    </style>\n  </head>\n <body>\n    <iframe src="app/index.html"></iframe>\n  </body>\n</html>');
            zip.file("make.sh", "if [ -d ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +" ]; then\n  typeset LP_FILE=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +".desktop\n\n  # Remove the target file if any\n  rm -f ${LP_FILE}\n  printf \"%s[Desktop Entry]\\nName="+ $("[data-id=sitename]").val() +"\\nPath=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"\\nActions=sudo\\nExec=./"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/nw\\nIcon=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/app/icons/128.png\\nTerminal=true\\nType=Application\\nStartupNotify=true > ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +".desktop\" >> ${LP_FILE}\n\n  echo 'Your application and launcher are now located at ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"'\n  rm README.md\n  rm make.sh\n  cd ../\n  rmdir "+ $("[data-id=sitename]").val().replace(/ /g, "-") +"-lin32site\n  cd ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/\n  chmod 775 nw\nfi\n\nif [ ! -d ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +" ]; then\n  mv "+ $("[data-id=sitename]").val().replace(/ /g, "-") +" ${HOME}\n\n  typeset LP_FILE=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +".desktop\n\n  # Remove the target file if any\n  rm -f ${LP_FILE}\n  printf \"%s[Desktop Entry]\\nName="+ $("[data-id=sitename]").val() +"\\nPath=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"\\nActions=sudo\\nExec=./"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/nw\\nIcon=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/app/icons/128.png\\nTerminal=true\\nType=Application\\nStartupNotify=true > ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +".desktop\" >> ${LP_FILE}\n\n  echo 'Your application and launcher are now located at ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"'\n  rm README.md\n  rm make.sh\n  cd ../\n  rmdir "+ $("[data-id=sitename]").val().replace(/ /g, "-") +"-lin32site\n  cd ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/\n  chmod 775 nw\nfi\n\n# For Windows OS\n#if EXIST ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +" (\n  #echo Yes\n#) ELSE (\n  #echo No\n#)\n");
            zip.file("README.md", "### Instructions\n 1. Extract the `"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"-lin32site.zip` folder anywhere on your computer except the home folder. \n 2. Open a terminal and then navigate to "+ $("[data-id=sitename]").val().replace(/ /g, "-") +"'s directory and `run the make.sh file`.\n\n  **example**:\n  cd Downloads/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"-lin32site\n\n 3. This will move the "+ $("[data-id=sitename]").val().replace(/ /g, "-") +" sibling folder and it's descendants to your home directory and create an application launcher.\n");
            // Export application
            var content = zip.generate({type:"blob"});
            saveAs(content, $("[data-id=sitename]").val().replace(/ /g, "-").toLowerCase() + "-lin32site.zip");
            $(".preloader").remove();
            return false;
          });
        }

          // Export Chrome Application
          if ($(this).hasClass("chromeappexport")) {
            if ( !document.querySelector("[data-value=description]").value ) {
              alertify.error(blankDescription);
            } else {
              $(document.body).append('<div class="fixedfill preloader"></div>');
              $(".preloader").html("<div class=\"table\"><div class=\"cell\">\n  <h1>"+ creatingapplication +"</h1>\n  <img class=\"loading\" src=\"../imgs/preloader.svg\">\n  \n<h1>\n    <a class=\"share-facebook\" target=\"_blank\" href=\"https://www.facebook.com/sharer/sharer.php?u=https%3A//michaelsboost.github.io/WebDGap/\">\n      <i class=\"fa fa-facebook-square\"></i>\n    </a>\n    <a class=\"share-twitter\" target=\"_blank\" href=\"https://twitter.com/home?status=I%20%23converted%20a%20%23web%20%23application%20to%20a%20%23Chrome%20%23app%20using%20%23WebDGap!%20https%3A//michaelsboost.github.io/WebDGap/\">\n      <i class=\"fa fa-twitter-square\"></i>\n    </a>\n    <a class=\"share-gplus\" target=\"_blank\" href=\"https://plus.google.com/share?url=http%3A//michaelsboost.github.io/WebDGap/\">\n      <i class=\"fa fa-google-plus-square\"></i>\n    </a>\n    <a class=\"share-linkedin-square\" target=\"_blank\" href=\"https://www.linkedin.com/shareArticle?mini=true&url=https%3A//michaelsboost.github.io/WebDGap/&title=WebDGap&summary=I%20%23converted%20a%20%23web%20%23application%20to%20a%20%23Chrome%20%23app%20using%20%23WebDGap!&source=\">\n      <i class=\"fa fa-linkedin-square\"></i>\n    </a>\n    <a target=\"_blank\" href=\"https://cash.me/$michaelsboost\">\n      <i class=\"fa fa-dollar\"></i>\n    </a><a target=\"_blank\" href=\"https://www.paypal.com/cgi-bin/webscr?business=mikethedj4%40yahoo.com&cmd=_xclick&amount=5.0&item_name=Donation&currency_code=USD\">\n      <i class=\"fa fa-cc-paypal\"></i>\n    </a>\n  </h1>\n</div></div>");
              $(".donatebanner").addClass("hide");
              
              var zip = new JSZip();

              // Your Logo
              zip.file("img/16.png", document.querySelector("[data-webdgapsize=f16]").src.split('base64,')[1],{base64: true});
              zip.file("img/32.png", document.querySelector("[data-webdgapsize=f32]").src.split('base64,')[1],{base64: true});
              zip.file("img/64.png", document.querySelector("[data-webdgapsize=f64]").src.split('base64,')[1],{base64: true});
              zip.file("img/128.png", document.querySelector("[data-webdgapsize=f128]").src.split('base64,')[1],{base64: true});
              zip.file("img/logo.png", document.querySelector("[data-webdgapimgload=webdgapimg]").src.split("base64,")[1],{base64: true});

              if (document.getElementById("audiocapture").checked) {
                audioCapture = ", \"audioCapture\"";
              } else {
                audioCapture = "";
              }
              if (document.getElementById("videocapture").checked) {
                videoCapture = ", \"videoCapture\"";
              } else {
                videoCapture = "";
              }
              if (document.getElementById("storage").checked) {
                storagePerm = ", \"storage\", \"fileSystem\", \"unlimitedStorage\"";
              } else {
                storagePerm = "";
              }
              listPermissions = audioCapture + videoCapture + storagePerm;

              // Files for exported app
              zip.file("css/reset.css", "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n	margin: 0;\n	padding: 0;\n	border: 0;\n	font-size: 100%;\n	font: inherit;\n	vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n	display: block;\n}\nbody {\n	line-height: 1;\n}\nol, ul {\n	list-style: none;\n}\nblockquote, q {\n	quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n	content: '';\n	content: none;\n}\ntable {\n	border-collapse: collapse;\n	border-spacing: 0;\n}");
              zip.file("css/style.css", "webview {\n    width: 100vw;\n    height: 100vh;\n}");
              zip.file("html/embed.html", "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>"+ $("[data-id=sitename]").val() +"</title>\n    <link rel=\"stylesheet\" href=\"../css/reset.css\">\n    <link rel=\"stylesheet\" href=\"../css/style.css\">\n  </head>\n  <body>\n    <webview id=\"webview\" src=\""+ $("[data-action=website]").val() +"\" partition=\"persist:applicationize\"></webview>\n  </body>\n</html>");
              zip.file("js/background.js", "/**\n * Listens for the app launching then creates the window\n *\n * @see http://developer.chrome.com/apps/app.runtime.html\n * @see http://developer.chrome.com/apps/app.window.html\n */\nchrome.app.runtime.onLaunched.addListener(function () {\n    runApp();\n});\n\n/**\n * Listens for the app restarting then re-creates the window.\n *\n * @see http://developer.chrome.com/apps/app.runtime.html\n */\nchrome.app.runtime.onRestarted.addListener(function () {\n    runApp();\n});\n\n/**\n * Creates the window for the application.\n *\n * @see http://developer.chrome.com/apps/app.window.html\n */\nfunction runApp() {\n    // Creat a new Chrome app window\n    chrome.app.window.create('html/embed.html', {\"id\":\"embed\",\"frame\":{\"type\":\"chrome\"},\"innerBounds\":{\"width\":1180,\"height\":900}}, onWindowLoaded());\n}\n\n/**\n * Called before the contentWindow's onload event\n *\n * @see http://developer.chrome.com/apps/app.window.html\n */\nfunction onWindowLoaded(popup) {\n    return function (win) {\n        // On window loaded event\n        win.contentWindow.onload = function () {\n            // Get webview \n            var webview = win.contentWindow.document.getElementById('webview');\n\n            // Sign up for 'permissionrequest' event\n            webview.addEventListener('permissionrequest', function (e) {\n                // Allow all permission requests\n                e.request.allow();\n            });\n\n            // Sign up for 'newwindow' event\n            // Emitted when a target='_blank' link is clicked within the webview\n            webview.addEventListener('newwindow', function (e) {\n                // Popup?\n                if (e.initialWidth > 0 && e.initialHeight > 0) {\n                    // Open it in a popup window with a set width and height\n                    return chrome.app.window.create('html/embed.html', { frame: { type: 'chrome' }, innerBounds: { width: e.initialWidth, height: e.initialHeight } }, onWindowLoaded(e));\n                }\n\n                // Open the link in a new browser tab/window\n                win.contentWindow.open(e.targetUrl);\n            });\n\n            // Is this a popup window?\n            if (popup) {\n                // Override webview source with popup's target URL\n                webview.src = popup.targetUrl;\n            }\n        };\n    };\n}\n");
              zip.file("manifest.json", "{\n   \"app\": {\n      \"background\": {\n         \"pages\": [ \"html/embed.html\" ],\n         \"scripts\": [ \"js/background.js\" ]\n      }\n   },\n   \"description\": \""+ $("[data-value=description]").val() +"\",\n   \"icons\": {\n      \"128\": \"img/128.png\",\n      \"16\" : \"img/16.png\",\n      \"32\" : \"img/32.png\",\n      \"64\" : \"img/64.png\"\n   },\n   \"manifest_version\": 2,\n   \"name\": \""+ $("[data-id=sitename]").val() +"\",\n   \"permissions\": [ \"webview\""+ listPermissions +", \"http://*/\", \"https://*/\" ],\n   \"version\": \""+ $("[data-value=version]").val() +"\"\n}\n");

              // Export application
              var content = zip.generate({type:"blob"});
              saveAs(content, $("[data-id=sitename]").val().replace(/ /g, "-").toLowerCase() + "-chromewebview.zip");
              $(".chrome-border").fadeOut();
              $("html, body").animate({ scrollTop: $(".chosenbit").offset().top }, "slow");
              $(".preloader").remove();
              return false;
            }
          }

          // Export Chrome Popup Extension
          if ($(this).hasClass("chromepopexport")) {
            if ( !document.querySelector("[data-value=description]").value ) {
              alertify.error(blankDescription);
            } else {
              $(document.body).append('<div class="fixedfill preloader"></div>');
              $(".preloader").html("<div class=\"table\"><div class=\"cell\">\n  <h1>"+ creatingextension +"</h1>\n  <img class=\"loading\" src=\"../imgs/preloader.svg\">\n  \n<h1>\n    <a class=\"share-facebook\" target=\"_blank\" href=\"https://www.facebook.com/sharer/sharer.php?u=I%20%23converted%20a%20%23web%20%23application%20to%20a%20%23Chrome%20%23extension%20using%20%23WebDGap!%20https%3A//michaelsboost.github.io/WebDGap\">\n      <i class=\"fa fa-facebook-square\"></i>\n    </a>\n    <a class=\"share-twitter\" target=\"_blank\" href=\"https://twitter.com/home?status=I%20%23converted%20a%20%23web%20%23application%20to%20a%20%23Chrome%20%23extension%20using%20%23WebDGap!%20https%3A//michaelsboost.github.io/WebDGap/\">\n      <i class=\"fa fa-twitter-square\"></i>\n    </a>\n    <a class=\"share-gplus\" target=\"_blank\" href=\"https://plus.google.com/share?url=http%3A//michaelsboost.github.io/WebDGap/\">\n      <i class=\"fa fa-google-plus-square\"></i>\n    </a>\n    <a class=\"share-linkedin-square\" target=\"_blank\" href=\"https://www.linkedin.com/shareArticle?mini=true&url=https%3A//michaelsboost.github.io/WebDGap/&title=WebDGap&summary=I%20%23converted%20a%20%23web%20%23application%20to%20a%20%23Chrome%20%23extension%20using%20%23WebDGap!&source=\">\n      <i class=\"fa fa-linkedin-square\"></i>\n    </a>\n    <a target=\"_blank\" href=\"https://cash.me/$michaelsboost\">\n      <i class=\"fa fa-dollar\"></i>\n    </a><a target=\"_blank\" href=\"https://www.paypal.com/cgi-bin/webscr?business=mikethedj4%40yahoo.com&cmd=_xclick&amount=5.0&item_name=Donation&currency_code=USD\">\n      <i class=\"fa fa-cc-paypal\"></i>\n    </a>\n  </h1>\n</div></div>");
              $(".donatebanner").addClass("hide");
            
              var zip = new JSZip();
              // Your logo
              zip.file("assets/16.png", document.querySelector("[data-webdgapsize=f16]").src.split('base64,')[1],{base64: true});
              zip.file("assets/32.png", document.querySelector("[data-webdgapsize=f32]").src.split('base64,')[1],{base64: true});
              zip.file("assets/64.png", document.querySelector("[data-webdgapsize=f64]").src.split('base64,')[1],{base64: true});
              zip.file("assets/128.png", document.querySelector("[data-webdgapsize=f128]").src.split('base64,')[1],{base64: true});
              zip.file("assets/logo.png", document.querySelector("[data-webdgapimgload=webdgapimg]").src.split("base64,")[1],{base64: true});

              // Files for exported app
              zip.file("background.js", "/**\n * Listens for the app launching, then creates the window.\n *\n * @see http://developer.chrome.com/apps/app.runtime.html\n * @see http://developer.chrome.com/apps/app.window.html\n */\nchrome.app.runtime.onLaunched.addListener(function(launchData) {\n  chrome.app.window.create(\n    'index.html',\n    {\n      id: 'mainWindow',\n      innerBounds: {\n        'width': 800,\n        'height': 600\n      }\n    }\n  );\n});");
              zip.file("css/style.css", "html, body {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  min-width: 300px;\n  min-height: 420px;\n}\n\nwebview, iframe {\n  width: 100%;\n  height: 100%;\n  border: 0;\n}");
              zip.file("index.html", "<!DOCTYPE html>\n<html>\n  <head>\n    <title>"+ $("[data-id=sitename]").val() +"</title>\n    <link rel=\"stylesheet\" href=\"css/style.css\" />\n  </head>\n  <body>\n    <iframe src=\""+ $("[data-action=website]").val() +"\">\n      Your version of Chrome does not support the iFrame element.\n    </iframe>\n  </body>\n</html>");
              zip.file("manifest.json", "{\n  \"manifest_version\": 2,\n  \"name\": \""+ $("[data-id=sitename]").val() +"\",\n  \"short_name\": \""+ $("[data-id=sitename]").val() +"\",\n  \"description\": \""+ $("[data-value=description]").val() +"\",\n  \"version\": \""+ $("[data-value=version]").val() +"\",\n  \"minimum_chrome_version\": \"38\",\n  \"permissions\": [ \"storage\", \"unlimitedStorage\", \"http://*/\", \"https://*/\" ],\n  \"icons\": {\n    \"16\": \"assets/16.png\",\n    \"32\": \"assets/32.png\",\n    \"64\": \"assets/64.png\",\n    \"128\": \"assets/128.png\"\n  },\n\n  \"browser_action\": {\n    \"default_icon\": \"assets/128.png\",\n    \"default_title\": \""+ $("[data-id=sitename]").val() +"\",\n    \"default_popup\": \"index.html\"\n  },\n  \n  \"content_security_policy\": \"script-src 'self' 'unsafe-eval'; object-src 'self'\"\n}");
              // Export application
              var content = zip.generate({type:"blob"});
              saveAs(content, $("[data-id=sitename]").val().replace(/ /g, "-").toLowerCase() + "-chromeext-webview.zip");
              $(".chrome-border").fadeOut();
              $("html, body").animate({ scrollTop: $(".chosenbit").offset().top }, "slow");
              $(".preloader").remove();
              return false;
            }
          }
          return false;
        });

        // Imports for Chrome Exports
        $(".chromeapp").on("click", function() {
          $(".chromeappexport").removeClass("hide");
          $(".chromepopexport").addClass("hide");
          $(".chrome-border").fadeIn();
          $("html, body").animate({ scrollTop: $(".chrome-border").offset().top }, "slow");
        });
        $(".chromepopup").on("click", function() {
          $(".chromeappexport").addClass("hide");
          $(".chromepopexport").removeClass("hide");
          $(".chrome-border").fadeIn();
          $("html, body").animate({ scrollTop: $(".chrome-border").offset().top }, "slow");
        });
        return false;
      }
      reader.readAsArrayBuffer(file);
    };

// Handle icon/logo image load
function displayPreview(file) {
  var reader = new FileReader();

  reader.onload = function(e) {
    // Image Container for WebDGap
    var addwebdgap = document.createElement("div");
    addwebdgap.style.display = "none";
    addwebdgap.setAttribute("data-webdgap", "container");
    document.body.appendChild(addwebdgap);
    var webdgapContainer = document.querySelector("[data-webdgap=container]");
    webdgapContainer.innerHTML = '<div data-webdgapimg="webdgapimgholder"></div>';

    // Load images
    var webdgaporigimg = document.createElement("img");
    webdgaporigimg.setAttribute("data-webdgapimgload", "webdgapimg");
    webdgaporigimg.src = e.target.result;
    webdgaporigimg.id = "webdgaporigimg";
    webdgapContainer.appendChild(webdgaporigimg);

    // Load image sizes  
    function embedImage(size) {
      // Load images
      var webdgap_img = new Image();
      webdgap_img.src = e.target.result;
      webdgap_img.onload = function() {
        var webdgap_canvas = document.createElement("canvas");
        webdgap_canvas.width = size;
        webdgap_canvas.height = size;
        var webdgap_ctx = webdgap_canvas.getContext("2d");
        webdgap_ctx.clearRect(0, 0, size, size);
        webdgap_ctx.drawImage(this, 0, 0, size, size);
        var webdgap_dataURL = webdgap_canvas.toDataURL("image/png");
        var webdgap_image = document.createElement("img");
        webdgap_image.setAttribute("data-webdgapsize", "f" + size);
        webdgap_image.src = webdgap_dataURL;

        // Image Container for WebDGap
        webdgapContainer.appendChild(webdgap_image);
      };
    }
    embedImage("16");
    embedImage("32");
    embedImage("64");
    embedImage("128");
    // Android Icons
    embedImage("96");
    embedImage("72");
    embedImage("48");
    embedImage("36");
    // iOS Icons
    embedImage("72");
    embedImage("144");
    embedImage("57");
    embedImage("114");
    // Win Phone 8 Icon
    embedImage("159");
    embedImage("99");
    // Blackberry Icons
    // embedImage("80");
    // PhoneGap Windows Icons
    embedImage("30");
    embedImage("44");
    embedImage("106");
    embedImage("70");
    embedImage("71");
    embedImage("170");
    embedImage("150");
    embedImage("360");
    embedImage("310");
    embedImage("50");
    embedImage("120");
    
    var img = new Image();
    var imgWinWide1 = new Image();
    var imgWinWide2 = new Image();
    
    img.src = e.target.result;
    imgWinWide1.src = e.target.result;
    imgWinWide2.src = e.target.result;
    img.onload = function() {
      // x, y, width, height
      ctx.clearRect(0, 0, 128, 128);
      ctx.drawImage(img, 0, 0, 128, 128);
    }
    imgWinWide1.onload = function() {
      // x, y, width, height
      ctxWinWide1.clearRect(0, 0, 310, 150);
      ctxWinWide1.drawImage(imgWinWide1, 0, 0, 310, 150);
    }
    imgWinWide2.onload = function() {
      // x, y, width, height
      ctxWinWide2.clearRect(0, 0, 744, 360);
      ctxWinWide2.drawImage(imgWinWide2, 0, 0, 744, 360);
    }
  }
  $(".img--avatar").addClass("hide");
  $("[data-id=sitename]").attr("disabled", "true");
  reader.readAsDataURL(file);
}

// Show Preloader
function showPreloader() {
  $(".export-as-win32-app[data-class=setexportclass], .export-as-win-app[data-class=setexportclass]").on("click", function() {
    $(document.body).append('<div class="fixedfill preloader"></div>');
    if ($(this).hasClass("exportedwebsite")) {
      $(".preloader").html("<div class=\"table\"><div class=\"cell\">\n  <h1>"+ creatingapplication +"</h1>\n  <img class=\"loading\" src=\"../imgs/preloader.svg\">\n  \n<h1>\n    <a class=\"share-facebook\" target=\"_blank\" href=\"https://www.facebook.com/sharer/sharer.php?u=https%3A//michaelsboost.github.io/WebDGap/\">\n      <i class=\"fa fa-facebook-square\"></i>\n    </a>\n    <a class=\"share-twitter\" target=\"_blank\" href=\"https://twitter.com/home?status=I%20%23converted%20a%20%23website%20to%20a%20%23Windows%20%23application%20using%20%23WebDGap!%20https%3A//michaelsboost.github.io/WebDGap/\">\n      <i class=\"fa fa-twitter-square\"></i>\n    </a>\n    <a class=\"share-gplus\" target=\"_blank\" href=\"https://plus.google.com/share?url=http%3A//michaelsboost.github.io/WebDGap/\">\n      <i class=\"fa fa-google-plus-square\"></i>\n    </a>\n    <a class=\"share-linkedin-square\" target=\"_blank\" href=\"https://www.linkedin.com/shareArticle?mini=true&url=https%3A//michaelsboost.github.io/WebDGap/&title=WebDGap&summary=I%20%23converted%20a%20%23website%20to%20a%20%23Windows%20%23application%20using%20%23WebDGap!&source=\">\n      <i class=\"fa fa-linkedin-square\"></i>\n    </a>\n    <a target=\"_blank\" href=\"https://cash.me/$michaelsboost\">\n      <i class=\"fa fa-dollar\"></i>\n    </a><a target=\"_blank\" href=\"https://www.paypal.com/cgi-bin/webscr?business=mikethedj4%40yahoo.com&cmd=_xclick&amount=5.0&item_name=Donation&currency_code=USD\">\n      <i class=\"fa fa-cc-paypal\"></i>\n    </a>\n  </h1>\n</div></div>");
    } else if ($(this).hasClass("exportedwebapp")) {
      $(".preloader").html("<div class=\"table\"><div class=\"cell\">\n  <h1>"+ creatingapplication +"</h1>\n  <img class=\"loading\" src=\"../imgs/preloader.svg\">\n  \n<h1>\n    <a class=\"share-facebook\" target=\"_blank\" href=\"https://www.facebook.com/sharer/sharer.php?u=https%3A//michaelsboost.github.io/WebDGap/\">\n      <i class=\"fa fa-facebook-square\"></i>\n    </a>\n    <a class=\"share-twitter\" target=\"_blank\" href=\"https://twitter.com/home?status=I%20%23converted%20a%20%23web%20%23application%20to%20a%20%23Windows%20%23app%20using%20%23WebDGap!%20https%3A//michaelsboost.github.io/WebDGap/\">\n      <i class=\"fa fa-twitter-square\"></i>\n    </a>\n    <a class=\"share-gplus\" target=\"_blank\" href=\"https://plus.google.com/share?url=http%3A//michaelsboost.github.io/WebDGap/\">\n      <i class=\"fa fa-google-plus-square\"></i>\n    </a>\n    <a class=\"share-linkedin-square\" target=\"_blank\" href=\"https://www.linkedin.com/shareArticle?mini=true&url=https%3A//michaelsboost.github.io/WebDGap/&title=WebDGap&summary=I%20%23converted%20a%20%23web%20%23application%20to%20a%20%23Windows%20%23app%20using%20%23WebDGap!&source=\">\n      <i class=\"fa fa-linkedin-square\"></i>\n    </a>\n    <a target=\"_blank\" href=\"https://cash.me/$michaelsboost\">\n      <i class=\"fa fa-dollar\"></i>\n    </a><a target=\"_blank\" href=\"https://www.paypal.com/cgi-bin/webscr?business=mikethedj4%40yahoo.com&cmd=_xclick&amount=5.0&item_name=Donation&currency_code=USD\">\n      <i class=\"fa fa-cc-paypal\"></i>\n    </a>\n  </h1>\n</div></div>");
    }
    $(".donatebanner").addClass("hide");
  });
  $(".export-as-mac-app[data-class=setexportclass]").on("click", function() {
    $(document.body).append('<div class="fixedfill preloader"></div>');
    if ($(this).hasClass("exportedwebsite")) {
      $(".preloader").html("<div class=\"table\"><div class=\"cell\">\n  <h1>"+ creatingapplication +"</h1>\n  <img class=\"loading\" src=\"../imgs/preloader.svg\">\n  \n<h1>\n    <a class=\"share-facebook\" target=\"_blank\" href=\"https://www.facebook.com/sharer/sharer.php?u=https%3A//michaelsboost.github.io/WebDGap/\">\n      <i class=\"fa fa-facebook-square\"></i>\n    </a>\n    <a class=\"share-twitter\" target=\"_blank\" href=\"https://twitter.com/home?status=I%20%23converted%20a%20%23website%20to%20a%20%23Mac%20%23application%20using%20%23WebDGap!%20https%3A//michaelsboost.github.io/WebDGap/\">\n      <i class=\"fa fa-twitter-square\"></i>\n    </a>\n    <a class=\"share-gplus\" target=\"_blank\" href=\"https://plus.google.com/share?url=http%3A//michaelsboost.github.io/WebDGap/\">\n      <i class=\"fa fa-google-plus-square\"></i>\n    </a>\n    <a class=\"share-linkedin-square\" target=\"_blank\" href=\"https://www.linkedin.com/shareArticle?mini=true&url=https%3A//michaelsboost.github.io/WebDGap/&title=WebDGap&summary=I%20%23converted%20a%20%23website%20to%20a%20%23Mac%20%23application%20using%20%23WebDGap!&source=\">\n      <i class=\"fa fa-linkedin-square\"></i>\n    </a>\n    <a target=\"_blank\" href=\"https://cash.me/$michaelsboost\">\n      <i class=\"fa fa-dollar\"></i>\n    </a><a target=\"_blank\" href=\"https://www.paypal.com/cgi-bin/webscr?business=mikethedj4%40yahoo.com&cmd=_xclick&amount=5.0&item_name=Donation&currency_code=USD\">\n      <i class=\"fa fa-cc-paypal\"></i>\n    </a>\n  </h1>\n</div></div>");
    } else if ($(this).hasClass("exportedwebapp")) {
      $(".preloader").html("<div class=\"table\"><div class=\"cell\">\n  <h1>"+ creatingapplication +"</h1>\n  <img class=\"loading\" src=\"../imgs/preloader.svg\">\n  \n<h1>\n    <a class=\"share-facebook\" target=\"_blank\" href=\"https://www.facebook.com/sharer/sharer.php?u=https%3A//michaelsboost.github.io/WebDGap/\">\n      <i class=\"fa fa-facebook-square\"></i>\n    </a>\n    <a class=\"share-twitter\" target=\"_blank\" href=\"https://twitter.com/home?status=I%20%23converted%20a%20%23web%20%23application%20to%20a%20%23Mac%20%23app%20using%20%23WebDGap!%20https%3A//michaelsboost.github.io/WebDGap/\">\n      <i class=\"fa fa-twitter-square\"></i>\n    </a>\n    <a class=\"share-gplus\" target=\"_blank\" href=\"https://plus.google.com/share?url=http%3A//michaelsboost.github.io/WebDGap/\">\n      <i class=\"fa fa-google-plus-square\"></i>\n    </a>\n    <a class=\"share-linkedin-square\" target=\"_blank\" href=\"https://www.linkedin.com/shareArticle?mini=true&url=https%3A//michaelsboost.github.io/WebDGap/&title=WebDGap&summary=I%20%23converted%20a%20%23web%20%23application%20to%20a%20%23Mac%20%23app%20using%20%23WebDGap!&source=\">\n      <i class=\"fa fa-linkedin-square\"></i>\n    </a>\n    <a target=\"_blank\" href=\"https://cash.me/$michaelsboost\">\n      <i class=\"fa fa-dollar\"></i>\n    </a><a target=\"_blank\" href=\"https://www.paypal.com/cgi-bin/webscr?business=mikethedj4%40yahoo.com&cmd=_xclick&amount=5.0&item_name=Donation&currency_code=USD\">\n      <i class=\"fa fa-cc-paypal\"></i>\n    </a>\n  </h1>\n</div></div>");
    }
    $(".donatebanner").addClass("hide");
  });
  $(".export-as-lin32-app[data-class=setexportclass], .export-as-lin-app[data-class=setexportclass]").on("click", function() {
    $(document.body).append('<div class="fixedfill preloader"></div>');
    if ($(this).hasClass("exportedwebsite")) {
      $(".preloader").html("<div class=\"table\"><div class=\"cell\">\n  <h1>"+ creatingapplication +"</h1>\n  <img class=\"loading\" src=\"../imgs/preloader.svg\">\n  \n<h1>\n    <a class=\"share-facebook\" target=\"_blank\" href=\"https://www.facebook.com/sharer/sharer.php?u=https%3A//michaelsboost.github.io/WebDGap/\">\n      <i class=\"fa fa-facebook-square\"></i>\n    </a>\n    <a class=\"share-twitter\" target=\"_blank\" href=\"https://twitter.com/home?status=I%20%23converted%20a%20%23website%20to%20a%20%23Linux%20%23application%20using%20%23WebDGap!%20https%3A//michaelsboost.github.io/WebDGap/\">\n      <i class=\"fa fa-twitter-square\"></i>\n    </a>\n    <a class=\"share-gplus\" target=\"_blank\" href=\"https://plus.google.com/share?url=http%3A//michaelsboost.github.io/WebDGap/\">\n      <i class=\"fa fa-google-plus-square\"></i>\n    </a>\n    <a class=\"share-linkedin-square\" target=\"_blank\" href=\"https://www.linkedin.com/shareArticle?mini=true&url=https%3A//michaelsboost.github.io/WebDGap/&title=WebDGap&summary=I%20%23converted%20a%20%23website%20to%20a%20%23Linux%20%23application%20using%20%23WebDGap!&source=\">\n      <i class=\"fa fa-linkedin-square\"></i>\n    </a>\n    <a target=\"_blank\" href=\"https://cash.me/$michaelsboost\">\n      <i class=\"fa fa-dollar\"></i>\n    </a><a target=\"_blank\" href=\"https://www.paypal.com/cgi-bin/webscr?business=mikethedj4%40yahoo.com&cmd=_xclick&amount=5.0&item_name=Donation&currency_code=USD\">\n      <i class=\"fa fa-cc-paypal\"></i>\n    </a>\n  </h1>\n</div></div>");
    } else if ($(this).hasClass("exportedwebapp")) {
      $(".preloader").html("<div class=\"table\"><div class=\"cell\">\n  <h1>"+ creatingapplication +"</h1>\n  <img class=\"loading\" src=\"../imgs/preloader.svg\">\n  \n<h1>\n    <a class=\"share-facebook\" target=\"_blank\" href=\"https://www.facebook.com/sharer/sharer.php?u=https%3A//michaelsboost.github.io/WebDGap/\">\n      <i class=\"fa fa-facebook-square\"></i>\n    </a>\n    <a class=\"share-twitter\" target=\"_blank\" href=\"https://twitter.com/home?status=I%20%23converted%20a%20%23web%20%23application%20to%20a%20%23Linux%20%23app%20using%20%23WebDGap!%20https%3A//michaelsboost.github.io/WebDGap/\">\n      <i class=\"fa fa-twitter-square\"></i>\n    </a>\n    <a class=\"share-gplus\" target=\"_blank\" href=\"https://plus.google.com/share?url=http%3A//michaelsboost.github.io/WebDGap/\">\n      <i class=\"fa fa-google-plus-square\"></i>\n    </a>\n    <a class=\"share-linkedin-square\" target=\"_blank\" href=\"https://www.linkedin.com/shareArticle?mini=true&url=https%3A//michaelsboost.github.io/WebDGap/&title=WebDGap&summary=I%20%23converted%20a%20%23web%20%23application%20to%20a%20%23Linux%20%23app%20using%20%23WebDGap!&source=\">\n      <i class=\"fa fa-linkedin-square\"></i>\n    </a>\n    <a target=\"_blank\" href=\"https://cash.me/$michaelsboost\">\n      <i class=\"fa fa-dollar\"></i>\n    </a><a target=\"_blank\" href=\"https://www.paypal.com/cgi-bin/webscr?business=mikethedj4%40yahoo.com&cmd=_xclick&amount=5.0&item_name=Donation&currency_code=USD\">\n      <i class=\"fa fa-cc-paypal\"></i>\n    </a>\n  </h1>\n</div></div>");
    }
    $(".donatebanner").addClass("hide");
  });
}

// Show/Hide Donate Dialog
$("button.export-as-win32-app, button.export-as-win-app").click(function() {
  $("[data-class=setexportclass]").attr("class", this.className.toString().replace(/btn--error btnexport /, "")).trigger("change");
  $(".donatebanner").removeClass("hide");
  showPreloader();
});
$("button.export-as-mac-app").click(function() {
  $("[data-class=setexportclass]").attr("class", this.className.toString().replace(/btn--default btnexport /, "")).trigger("change");
  $(".donatebanner").removeClass("hide");
  showPreloader();
});
$("button.export-as-lin32-app, button.export-as-lin-app").click(function() {
  $("[data-class=setexportclass]").attr("class", this.className.toString().replace(/btn--success btnexport /, "")).trigger("change");
  $(".donatebanner").removeClass("hide");
  showPreloader();
});
$("input.chromeappexport, input.chromepopexport").click(function() {
  $("[data-class=setexportclass]").attr("class", this.className.toString().replace(/btn--default /, "")).trigger("change");
  $(".donatebanner").removeClass("hide");
});
$("input.pgbappexport").click(function() {
  $("[data-class=setexportclass]").attr("class", this.className.toString().replace(/btn--default /, "")).trigger("change");
  $(".donatebanner").removeClass("hide");
});

$(document).ready(function() {
  // Detect if users browser can load and download files in Javascript
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    // Detect if users browser can download files in Javascript
  } else {
    alertify.alert(noFileAPI).set("basic", true);
  }
  
  // Set language via onchange
  $('#setlanguage').on('change', function() {
    window.location.hash = this.value;
    location.reload(true);
  });

  // Show error if zip is corrupted
  if (!window.FileReader || !window.ArrayBuffer) {
    $(".error_block").removeClass("hide");
    return
  }

  function printContent(name, binaryContent) {
    var $fileContent = $("<ul>");
    try {
      var $title = $("<h4>", {
        text : name
      });
      $result.append($title);

      var dateBefore = new Date();
      // read the content of the file with JSZip
      var zip = new JSZip(binaryContent);
      var dateAfter = new Date();

      $title.append($("<span>", {
        text:" (parsed in " + (dateAfter - dateBefore) + "ms)"
      }));
      $(".check").removeClass("hide");

      // that, or a good ol' for(var entryName in zip.files)
      $.each(zip.files, function (index, zipEntry) {
        $fileContent.append($("<li class=\"hide\">", {
          text : zipEntry.name
        }))
        // the content is here : zipEntry.asText()
      });
    } catch(e) {
      $fileContent = $("<div>", {
        "class" : "alert alert-danger",
        text : errorReading +" " + theFile.name + " : " + e.message
      });
    }
    $result.append($fileContent);
  }
  
  // Drag and drop image load
  holder.ondragover = function() {
    this.className = "hover";
    return false;
  }
  holder.ondragend = function() {
    this.className = "";
    return false;
  }
  holder.ondrop = function(e) {
    loader.addClass("hide");
    this.className = "";
    e.preventDefault();
    var file = e.dataTransfer.files[0];
    displayPreview(file);
    $("[data-action=displayfooter]").removeClass("hide");

    if ( $(".convertsite-picked").is(":visible") ) {
      $(".logoisloadedsite, .logoisloadedapp, .loadavatar").addClass("hide");
      $(".logo, .check, .outputname").removeClass("hide");
      $("html, body").animate({ scrollTop: $(".pickbits").offset().top }, "slow");
      executeApp(file);
    } else {
      $(".loadavatar").addClass("hide");
      $(".loadzip, .logo, .outputname, .logoisloadedapp").removeClass("hide");
      $("html, body").animate({ scrollTop: $(".logoisloadedapp").offset().top }, "slow");
    }
  }

  // Show zip loader when image has been loaded
  loader.on("change", function(evt) {
    var file = evt.target.files[0];
    displayPreview(file);
    $("[data-action=displayfooter]").removeClass("hide");

    if ( $(".convertsite-picked").is(":visible") ) {
      $(".logoisloadedsite, .logoisloadedapp, .loadavatar").addClass("hide");
      $(".logo, .check, .outputname").removeClass("hide");
      $("html, body").animate({ scrollTop: $(".pickbits").offset().top }, "slow");
      executeApp(file);
    } else {
      $(".loadavatar").addClass("hide");
      $(".loadzip, .logo, .outputname, .logoisloadedapp").removeClass("hide");
      $("html, body").animate({ scrollTop: $(".logoisloadedapp").offset().top }, "slow");
    }
  });

  // Load a local zip file
  var $result = $(".result");
  loadFiles.on("change", function(evt) {
    if ( (!document.getElementById("file").value) || (!document.querySelector("[data-id=sitename]").value) ) {
      // Do nothing
    } else {
      $(".check").removeClass("hide");

      // remove content
      $result.empty();
      // show the results
      $(".result_block").removeClass("hide");

      // see http://www.html5rocks.com/en/tutorials/file/dndfiles/

      var files = evt.target.files;
      for (var i = 0, f; f = files[i]; i++) {

        var reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = (function(theFile) {
          return function(e) {
            var webAppZipBinary = e.target.result;
            printContent(theFile.name, webAppZipBinary);
            
            // Export Your Application
            $("[data-class=setexportclass]").on("click", function() {
              // Download as Windows App
              if ($(this).hasClass("export-as-win-app")) {
                JSZipUtils.getBinaryContent("../assets/YourWinApp.zip", function(err, data) {
                  if(err) {
                    throw err // or handle err
                  }

                  var zip = new JSZip();
                  zip.load(data);

                  // Your Web Application
                  zip.folder("app/").load(webAppZipBinary);

                  // Your Logo
                  zip.file("app/icons/16.png", document.querySelector("[data-webdgapsize=f16]").src.split('base64,')[1],{base64: true});
                  zip.file("app/icons/32.png", document.querySelector("[data-webdgapsize=f32]").src.split('base64,')[1],{base64: true});
                  zip.file("app/icons/64.png", document.querySelector("[data-webdgapsize=f64]").src.split('base64,')[1],{base64: true});
                  zip.file("app/icons/128.png", document.querySelector("[data-webdgapsize=f128]").src.split('base64,')[1],{base64: true});
                  zip.file("app/icons/logo.png", document.querySelector("[data-webdgapimgload=webdgapimg]").src.split("base64,")[1],{base64: true});

                  // For 32bit Windows Application
                  zip.file("package.json", '{\n  "main"  : "index.html",\n  "name"  : "'+ $("[data-id=sitename]").val() +'",\n  "window": {\n      "toolbar" : false,\n      "icon"    : "app/icons/128.png",\n      "width"   : 1000,\n      "height"  : 600,\n      "position": "center"\n  }\n}');
                  zip.file("index.html", '<!doctype html>\n<html>\n <head>\n    <title>'+ $("[data-id=sitename]").val() +'</title>\n    <style>\n      iframe {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        overflow: visible;\n        border: 0;\n      }\n    </style>\n  </head>\n <body>\n    <iframe src="app/index.html"></iframe>\n  </body>\n</html>');
                  // zip.file("README", "If WebDGap was at all helpful for you. Would you consider donating to the project?\nhttps://www.paypal.com/cgi-bin/webscr?business=mikethedj4%40yahoo.com&cmd=_xclick&amount=5.0&item_name=Donation&currency_code=USD\n\n");

                  // Export your application
                  var content = zip.generate({type:"blob"});
                  saveAs(content, document.querySelector("[data-id=sitename]").value.replace(/ /g, '').toLowerCase() + "-win.zip");
                  $(".preloader").remove();
                  return false;
                });
              }
              if ($(this).hasClass("export-as-win32-app")) {
                JSZipUtils.getBinaryContent("../assets/YourWin32App.zip", function(err, data) {
                  if(err) {
                    throw err // or handle err
                  }

                  var zip = new JSZip();
                  zip.load(data);

                  // Your Web Application
                  zip.folder("app/").load(webAppZipBinary);

                  // Your Logo
                  zip.file("app/icons/16.png", document.querySelector("[data-webdgapsize=f16]").src.split('base64,')[1],{base64: true});
                  zip.file("app/icons/32.png", document.querySelector("[data-webdgapsize=f32]").src.split('base64,')[1],{base64: true});
                  zip.file("app/icons/64.png", document.querySelector("[data-webdgapsize=f64]").src.split('base64,')[1],{base64: true});
                  zip.file("app/icons/128.png", document.querySelector("[data-webdgapsize=f128]").src.split('base64,')[1],{base64: true});
                  zip.file("app/icons/logo.png", document.querySelector("[data-webdgapimgload=webdgapimg]").src.split("base64,")[1],{base64: true});

                  // For 32bit Windows Application
                  zip.file("package.json", '{\n  "main"  : "index.html",\n  "name"  : "'+ $("[data-id=sitename]").val() +'",\n  "window": {\n      "toolbar" : false,\n      "icon"    : "app/icons/128.png",\n      "width"   : 1000,\n      "height"  : 600,\n      "position": "center"\n  }\n}');
                  zip.file("index.html", '<!doctype html>\n<html>\n <head>\n    <title>'+ $("[data-id=sitename]").val() +'</title>\n    <style>\n      iframe {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        overflow: visible;\n        border: 0;\n      }\n    </style>\n  </head>\n <body>\n    <iframe src="app/index.html"></iframe>\n  </body>\n</html>');
                  // zip.file("README", "If WebDGap was at all helpful for you. Would you consider donating to the project?\nhttps://www.paypal.com/cgi-bin/webscr?business=mikethedj4%40yahoo.com&cmd=_xclick&amount=5.0&item_name=Donation&currency_code=USD\n\n");

                  // Export your application
                  var content = zip.generate({type:"blob"});
                  saveAs(content, document.querySelector("[data-id=sitename]").value.replace(/ /g, '').toLowerCase() + "-win32.zip");
                  $(".preloader").remove();
                  return false;
                });
              }
              
              // Download as Mac App
              if ($(this).hasClass("export-as-mac-app")) {
                JSZipUtils.getBinaryContent("../assets/YourMacApp.zip", function(err, data) {
                  if(err) {
                    throw err // or handle err
                  }

                  var zip = new JSZip();
                  zip.load(data);

                  // Your Web Application
                  zip.folder("content/app").load(webAppZipBinary);

                  // Your Logo
                  zip.file("content/app/icons/16.png", document.querySelector("[data-webdgapsize=f16]").src.split('base64,')[1],{base64: true});
                  zip.file("content/app/icons/32.png", document.querySelector("[data-webdgapsize=f32]").src.split('base64,')[1],{base64: true});
                  zip.file("content/app/icons/64.png", document.querySelector("[data-webdgapsize=f64]").src.split('base64,')[1],{base64: true});
                  zip.file("content/app/icons/128.png", document.querySelector("[data-webdgapsize=f128]").src.split('base64,')[1],{base64: true});
                  zip.file("content/app/icons/logo.png", document.querySelector("[data-webdgapimgload=webdgapimg]").src.split("base64,")[1],{base64: true});

                  // For Mac Application
                  zip.file("package.json", '{\n  "main"  : "content/index.html",\n  "name"  : "'+ $("[data-id=sitename]").val() +'",\n  "window": {\n    "toolbar"    : false\n  }\n}');
                  zip.file("content/index.html", '<!doctype html>\n<html>\n <head>\n    <title>'+ $("[data-id=sitename]").val() +'</title>\n    <style>\n      iframe {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        overflow: visible;\n        border: 0;\n      }\n    </style>\n  </head>\n <body>\n    <iframe src="app/index.html"></iframe>\n\n    <script src="js/main.js"></script>\n  </body>\n</html>');
                  zip.file("content/js/main.js", 'document.addEventListener("DOMContentLoaded", function() {\n  // Load library\n  var gui = require("nw.gui");\n\n  // Reference to window\n  var win = gui.Window.get();\n\n  // Create menu container\n  var Menu = new gui.Menu({\n    type: "menubar"\n  });\n\n  //initialize default mac menu\n  Menu.createMacBuiltin("'+ $("[data-id=sitename]").val() +'");\n\n  // Get the root menu from the default mac menu\n  var rootMenu = Menu.items[0].submenu;\n  var windowMenu = Menu.items[2].submenu;\n\n  // Append new item to root menu\n  windowMenu.insert(\n    new gui.MenuItem({\n      type: "normal",\n      label: "Toggle Fullscreen",\n      key: "F",\n      modifiers: "cmd",\n      click : function () {\n        win.toggleFullscreen();\n      }\n    })\n  );\n\n  windowMenu.insert(\n    new gui.MenuItem({\n      type: "normal",\n      label: "Reload App",\n      key: "r",\n      modifiers: "cmd",\n      click : function () {\n        win.reload();\n      }\n    })\n  );\n\n  // Remove About Node-Webkit\n  rootMenu.removeAt(0);\n\n  // Append Menu to Window\n  gui.Window.get().menu = Menu;\n});');
                  zip.file("run.sh", "open -a /Applications/"+ $("[data-id=sitename]").val().replace(/ /g, "") +".app/Contents/data/"+ $("[data-id=sitename]").val().replace(/ /g, "") +".app");
                  // zip.file("README", "If WebDGap was at all helpful for you. Would you consider donating to the project?\nhttps://www.paypal.com/cgi-bin/webscr?business=mikethedj4%40yahoo.com&cmd=_xclick&amount=5.0&item_name=Donation&currency_code=USD\n\n");

                  // Export your application
                  var content = zip.generate({type:"blob"});
                  saveAs(content, document.querySelector("[data-id=sitename]").value.replace(/ /g, '').toLowerCase() + "-mac.zip");
                  $(".preloader").remove();
                  return false;
                });
              }
              
              // Download as Linux App
              if ($(this).hasClass("export-as-lin-app")) {
                JSZipUtils.getBinaryContent("../assets/YourLinApp.zip", function(err, data) {
                  if(err) {
                    throw err // or handle err
                  }

                  var zip = new JSZip();
                  var appName = zip.folder( $("[data-id=sitename]").val().replace(/ /g, "-")  );
                  appName.load(data);

                  // Your Web Application
                  appName.folder("app/").load(webAppZipBinary);

                  // Your Logo
                  appName.file("app/icons/16.png", document.querySelector("[data-webdgapsize=f16]").src.split('base64,')[1],{base64: true});
                  appName.file("app/icons/32.png", document.querySelector("[data-webdgapsize=f32]").src.split('base64,')[1],{base64: true});
                  appName.file("app/icons/64.png", document.querySelector("[data-webdgapsize=f64]").src.split('base64,')[1],{base64: true});
                  appName.file("app/icons/128.png", document.querySelector("[data-webdgapsize=f128]").src.split('base64,')[1],{base64: true});
                  appName.file("app/icons/logo.png", document.querySelector("[data-webdgapimgload=webdgapimg]").src.split("base64,")[1],{base64: true});

                  // Files for exported app
                  appName.file("package.json", '{\n  "main"  : "app/index.html",\n  "name"  : "'+ $("[data-id=sitename]").val() +'",\n  "window": {\n      "toolbar" : false,\n      "icon"    : "app/icons/128.png",\n      "width"   : 1000,\n      "height"  : 600,\n      "position": "center"\n  }\n}');

                  zip.file("make.sh", "if [ -d ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +" ]; then\n  typeset LP_FILE=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +".desktop\n\n  # Remove the target file if any\n  rm -f ${LP_FILE}\n  printf \"%s[Desktop Entry]\\nName="+ $("[data-id=sitename]").val() +"\\nPath=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"\\nActions=sudo\\nExec=./"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/nw\\nIcon=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/app/icons/128.png\\nTerminal=true\\nType=Application\\nStartupNotify=true > ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +".desktop\" >> ${LP_FILE}\n\n  echo 'Your application and launcher are now located at ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"'\n  rm README.md\n  rm make.sh\n  cd ../\n  rmdir "+ $("[data-id=sitename]").val().replace(/ /g, "-") +"-linsite\n  cd ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/\n  chmod 775 nw\nfi\n\nif [ ! -d ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +" ]; then\n  mv "+ $("[data-id=sitename]").val().replace(/ /g, "-") +" ${HOME}\n\n  typeset LP_FILE=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +".desktop\n\n  # Remove the target file if any\n  rm -f ${LP_FILE}\n  printf \"%s[Desktop Entry]\\nName="+ $("[data-id=sitename]").val() +"\\nPath=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"\\nActions=sudo\\nExec=./"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/nw\\nIcon=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/app/icons/128.png\\nTerminal=true\\nType=Application\\nStartupNotify=true > ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +".desktop\" >> ${LP_FILE}\n\n  echo 'Your application and launcher are now located at ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"'\n  rm README.md\n  rm make.sh\n  cd ../\n  rmdir "+ $("[data-id=sitename]").val().replace(/ /g, "-") +"-linsite\n  cd ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/\n  chmod 775 nw\nfi\n\n# For Windows OS\n#if EXIST ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +" (\n  #echo Yes\n#) ELSE (\n  #echo No\n#)\n");
                  zip.file("README.md", "### Instructions\n 1. Extract the `"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"-linsite.zip` folder anywhere on your computer except the home folder. \n 2. Open a terminal and then navigate to "+ $("[data-id=sitename]").val().replace(/ /g, "-") +"'s directory and `run the make.sh file`.\n\n  **example**:\n  cd Downloads/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"-linsite\n\n 3. This will move the "+ $("[data-id=sitename]").val().replace(/ /g, "-") +" sibling folder and it's descendants to your home directory and create an application launcher.\n");

                  // Export your application
                  var content = zip.generate({type:"blob"});
                  saveAs(content, document.querySelector("[data-id=sitename]").value.replace(/ /g, '').toLowerCase() + "-lin.zip");
                  $(".preloader").remove();
                  return false;
                });
              }
              if ($(this).hasClass("export-as-lin32-app")) {
                JSZipUtils.getBinaryContent("../assets/YourLin32App.zip", function(err, data) {
                  if(err) {
                    throw err // or handle err
                  }

                  var zip = new JSZip();
                  var appName = zip.folder( $("[data-id=sitename]").val().replace(/ /g, "-")  );
                  appName.load(data);

                  // Your Web Application
                  appName.folder("app/").load(webAppZipBinary);

                  // Your Logo
                  appName.file("app/icons/16.png", document.querySelector("[data-webdgapsize=f16]").src.split('base64,')[1],{base64: true});
                  appName.file("app/icons/32.png", document.querySelector("[data-webdgapsize=f32]").src.split('base64,')[1],{base64: true});
                  appName.file("app/icons/64.png", document.querySelector("[data-webdgapsize=f64]").src.split('base64,')[1],{base64: true});
                  appName.file("app/icons/128.png", document.querySelector("[data-webdgapsize=f128]").src.split('base64,')[1],{base64: true});
                  appName.file("app/icons/logo.png", document.querySelector("[data-webdgapimgload=webdgapimg]").src.split("base64,")[1],{base64: true});

                  // Files for exported app
                  appName.file("package.json", '{\n  "main"  : "app/index.html",\n  "name"  : "'+ $("[data-id=sitename]").val() +'",\n  "window": {\n      "toolbar" : false,\n      "icon"    : "app/icons/128.png",\n      "width"   : 1000,\n      "height"  : 600,\n      "position": "center"\n  }\n}');

                  zip.file("make.sh", "if [ -d ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +" ]; then\n  typeset LP_FILE=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +".desktop\n\n  # Remove the target file if any\n  rm -f ${LP_FILE}\n  printf \"%s[Desktop Entry]\\nName="+ $("[data-id=sitename]").val() +"\\nPath=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"\\nActions=sudo\\nExec=./"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/nw\\nIcon=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/app/icons/128.png\\nTerminal=true\\nType=Application\\nStartupNotify=true > ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +".desktop\" >> ${LP_FILE}\n\n  echo 'Your application and launcher are now located at ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"'\n  rm README.md\n  rm make.sh\n  cd ../\n  rmdir "+ $("[data-id=sitename]").val().replace(/ /g, "-") +"-lin32site\n  cd ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/\n  chmod 775 nw\nfi\n\nif [ ! -d ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +" ]; then\n  mv "+ $("[data-id=sitename]").val().replace(/ /g, "-") +" ${HOME}\n\n  typeset LP_FILE=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +".desktop\n\n  # Remove the target file if any\n  rm -f ${LP_FILE}\n  printf \"%s[Desktop Entry]\\nName="+ $("[data-id=sitename]").val() +"\\nPath=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"\\nActions=sudo\\nExec=./"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/nw\\nIcon=${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/app/icons/128.png\\nTerminal=true\\nType=Application\\nStartupNotify=true > ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +".desktop\" >> ${LP_FILE}\n\n  echo 'Your application and launcher are now located at ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"'\n  rm README.md\n  rm make.sh\n  cd ../\n  rmdir "+ $("[data-id=sitename]").val().replace(/ /g, "-") +"-lin32site\n  cd ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"/\n  chmod 775 nw\nfi\n\n# For Windows OS\n#if EXIST ${HOME}/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +" (\n  #echo Yes\n#) ELSE (\n  #echo No\n#)\n");
                  zip.file("README.md", "### Instructions\n 1. Extract the `"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"-lin32site.zip` folder anywhere on your computer except the home folder. \n 2. Open a terminal and then navigate to "+ $("[data-id=sitename]").val().replace(/ /g, "-") +"'s directory and `run the make.sh file`.\n\n  **example**:\n  cd Downloads/"+ $("[data-id=sitename]").val().replace(/ /g, "-") +"-lin32site\n\n 3. This will move the "+ $("[data-id=sitename]").val().replace(/ /g, "-") +" sibling folder and it's descendants to your home directory and create an application launcher.\n");

                  // Export your application
                  var content = zip.generate({type:"blob"});
                  saveAs(content, document.querySelector("[data-id=sitename]").value.replace(/ /g, '').toLowerCase() + "-lin32.zip");
                  $(".preloader").remove();
                  return false;
                });
              }
              
              // Export Chrome Application
              if ($(this).hasClass("chromeappexport")) {
                if ( !document.querySelector("[data-value=description]").value ) {
                  alertify.error(blankDescription);
                } else {
                  $(document.body).append('<div class="fixedfill preloader"></div>');
                  $(".preloader").html("<div class=\"table\"><div class=\"cell\">\n  <h1>"+ creatingapplication +"</h1>\n  <img class=\"loading\" src=\"../imgs/preloader.svg\">\n  \n<h1>\n    <a class=\"share-facebook\" target=\"_blank\" href=\"https://www.facebook.com/sharer/sharer.php?u=https%3A//michaelsboost.github.io/WebDGap/\">\n      <i class=\"fa fa-facebook-square\"></i>\n    </a>\n    <a class=\"share-twitter\" target=\"_blank\" href=\"https://twitter.com/home?status=I%20made%20a%20%23Chrome%20%23application%20using%20%23WebDGap!%20https%3A//michaelsboost.github.io/WebDGap/\">\n      <i class=\"fa fa-twitter-square\"></i>\n    </a>\n    <a class=\"share-gplus\" target=\"_blank\" href=\"https://plus.google.com/share?url=http%3A//michaelsboost.github.io/WebDGap/\">\n      <i class=\"fa fa-google-plus-square\"></i>\n    </a>\n    <a class=\"share-linkedin-square\" target=\"_blank\" href=\"https://www.linkedin.com/shareArticle?mini=true&url=https%3A//michaelsboost.github.io/WebDGap/&title=I%20made%20a%20%23Chrome%20%23application%20using%20%23WebDGap!%20&summary=&source=\">\n      <i class=\"fa fa-linkedin-square\"></i>\n    </a>\n    <a target=\"_blank\" href=\"https://cash.me/$michaelsboost\">\n      <i class=\"fa fa-dollar\"></i>\n    </a><a target=\"_blank\" href=\"https://www.paypal.com/cgi-bin/webscr?business=mikethedj4%40yahoo.com&cmd=_xclick&amount=5.0&item_name=Donation&currency_code=USD\">\n      <i class=\"fa fa-cc-paypal\"></i>\n    </a>\n  </h1>\n</div></div>");
                  $(".donatebanner").addClass("hide");
                  
                  var zip = new JSZip();

                  // Your Web Application
                  zip.folder("html").folder("app").load(webAppZipBinary);

                  // Your Logo
                  zip.file("img/16.png", document.querySelector("[data-webdgapsize=f16]").src.split('base64,')[1],{base64: true});
                  zip.file("img/32.png", document.querySelector("[data-webdgapsize=f32]").src.split('base64,')[1],{base64: true});
                  zip.file("img/64.png", document.querySelector("[data-webdgapsize=f64]").src.split('base64,')[1],{base64: true});
                  zip.file("img/128.png", document.querySelector("[data-webdgapsize=f128]").src.split('base64,')[1],{base64: true});
                  zip.file("img/logo.png", document.querySelector("[data-webdgapimgload=webdgapimg]").src.split("base64,")[1],{base64: true});

                  if (document.getElementById("audiocapture").checked) {
                    audioCapture = ", \"audioCapture\"";
                  } else {
                    audioCapture = "";
                  }
                  if (document.getElementById("videocapture").checked) {
                    videoCapture = ", \"videoCapture\"";
                  } else {
                    videoCapture = "";
                  }
                  if (document.getElementById("storage").checked) {
                    storagePerm = ", \"storage\", \"fileSystem\", \"unlimitedStorage\"";
                  } else {
                    storagePerm = "";
                  }
                  if ( $(".offline-mode").is(":checked") ) {
                    setOffline = "\"offline_enabled\": true";
                  } else {
                    setOffline = "\"offline_enabled\": false";
                  }
                  listPermissions = audioCapture + videoCapture + storagePerm;

                  // Files for exported app
                  zip.file("css/reset.css", "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n	margin: 0;\n	padding: 0;\n	border: 0;\n	font-size: 100%;\n	font: inherit;\n	vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n	display: block;\n}\nbody {\n	line-height: 1;\n}\nol, ul {\n	list-style: none;\n}\nblockquote, q {\n	quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n	content: '';\n	content: none;\n}\ntable {\n	border-collapse: collapse;\n	border-spacing: 0;\n}");
                  zip.file("css/style.css", "webview, iframe {\n    width: 100vw;\n    height: 100vh;\n    border: 0;\n}");
                  zip.file("html/embed.html", "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>"+ $("[data-id=sitename]").val() +"</title>\n    <link rel=\"stylesheet\" href=\"../css/reset.css\">\n    <link rel=\"stylesheet\" href=\"../css/style.css\">\n  </head>\n  <body>\n    <iframe src=\"app/index.html\">\n  </body>\n</html>");
                  zip.file("js/background.js", "/**\n * Listens for the app launching then creates the window\n *\n * @see http://developer.chrome.com/apps/app.runtime.html\n * @see http://developer.chrome.com/apps/app.window.html\n */\nchrome.app.runtime.onLaunched.addListener(function () {\n    runApp();\n});\n\n/**\n * Listens for the app restarting then re-creates the window.\n *\n * @see http://developer.chrome.com/apps/app.runtime.html\n */\nchrome.app.runtime.onRestarted.addListener(function () {\n    runApp();\n});\n\n/**\n * Creates the window for the application.\n *\n * @see http://developer.chrome.com/apps/app.window.html\n */\nfunction runApp() {\n    // Creat a new Chrome app window\n    chrome.app.window.create('html/embed.html', {\"id\":\"embed\",\"frame\":{\"type\":\"chrome\"},\"innerBounds\":{\"width\":1180,\"height\":900}}, onWindowLoaded());\n}\n\n/**\n * Called before the contentWindow's onload event\n *\n * @see http://developer.chrome.com/apps/app.window.html\n */\nfunction onWindowLoaded(popup) {\n    return function (win) {\n        // On window loaded event\n        win.contentWindow.onload = function () {\n            // Get webview \n            var webview = win.contentWindow.document.getElementById('webview');\n\n            // Sign up for 'permissionrequest' event\n            webview.addEventListener('permissionrequest', function (e) {\n                // Allow all permission requests\n                e.request.allow();\n            });\n\n            // Sign up for 'newwindow' event\n            // Emitted when a target='_blank' link is clicked within the webview\n            webview.addEventListener('newwindow', function (e) {\n                // Popup?\n                if (e.initialWidth > 0 && e.initialHeight > 0) {\n                    // Open it in a popup window with a set width and height\n                    return chrome.app.window.create('html/embed.html', { frame: { type: 'chrome' }, innerBounds: { width: e.initialWidth, height: e.initialHeight } }, onWindowLoaded(e));\n                }\n\n                // Open the link in a new browser tab/window\n                win.contentWindow.open(e.targetUrl);\n            });\n\n            // Is this a popup window?\n            if (popup) {\n                // Override webview source with popup's target URL\n                webview.src = popup.targetUrl;\n            }\n        };\n    };\n}\n");
                  zip.file("manifest.json", "{\n   \"app\": {\n      \"background\": {\n         \"pages\": [ \"html/embed.html\" ],\n         \"scripts\": [ \"js/background.js\" ]\n      }\n   },\n   \"description\": \""+ $("[data-value=description]").val() +"\",\n   \"icons\": {\n      \"128\": \"img/128.png\",\n      \"16\" : \"img/16.png\",\n      \"32\" : \"img/32.png\",\n      \"64\" : \"img/64.png\"\n   },\n   \"manifest_version\": 2,\n   \"name\": \""+ $("[data-id=sitename]").val() +"\",\n   "+ setOffline +",\n   \"permissions\": [ \"http://*/\", \"https://*/\""+ listPermissions +" ],\n   \"version\": \""+ $("[data-value=version]").val() +"\"\n}\n");
                  // zip.file("README", "If WebDGap was at all helpful for you. Would you consider donating to the project?\nhttps://www.paypal.com/cgi-bin/webscr?business=mikethedj4%40yahoo.com&cmd=_xclick&amount=5.0&item_name=Donation&currency_code=USD\n\n");

                  // Export Chrome Application
                  var content = zip.generate({type:"blob"});
                  saveAs(content, document.querySelector("[data-id=sitename]").value.replace(/ /g, '').toLowerCase() + "-chromeapp.zip");
                  $(".chrome-border").fadeOut();
                  $("html, body").animate({ scrollTop: $(".chosenbit").offset().top }, "slow");
                  $(".preloader").remove();
                  return false;
                }
              }
              
              // Export Chrome Popup Extension
              if ($(this).hasClass("chromepopexport")) {
                if ( !document.querySelector("[data-value=description]").value ) {
                  alertify.error(blankDescription);
                } else {
                  $(document.body).append('<div class="fixedfill preloader"></div>');
                  $(".preloader").html("<div class=\"table\"><div class=\"cell\">\n  <h1>"+ creatingextension +"</h1>\n  <img class=\"loading\" src=\"../imgs/preloader.svg\">\n  \n<h1>\n    <a class=\"share-facebook\" target=\"_blank\" href=\"https://www.facebook.com/sharer/sharer.php?u=https%3A//michaelsboost.github.io/WebDGap/\">\n      <i class=\"fa fa-facebook-square\"></i>\n    </a>\n    <a class=\"share-twitter\" target=\"_blank\" href=\"https://twitter.com/home?status=I%20made%20a%20%23Chrome%20%23extension%20using%20%23WebDGap!%20https%3A//michaelsboost.github.io/WebDGap/\">\n      <i class=\"fa fa-twitter-square\"></i>\n    </a>\n    <a class=\"share-gplus\" target=\"_blank\" href=\"https://plus.google.com/share?url=http%3A//michaelsboost.github.io/WebDGap/\">\n      <i class=\"fa fa-google-plus-square\"></i>\n    </a>\n    <a class=\"share-linkedin-square\" target=\"_blank\" href=\"https://www.linkedin.com/shareArticle?mini=true&url=https%3A//michaelsboost.github.io/WebDGap/&title=I%20made%20a%20%23Chrome%20%23extension%20using%20%23WebDGap!%20&summary=&source=\">\n      <i class=\"fa fa-linkedin-square\"></i>\n    </a>\n    <a target=\"_blank\" href=\"https://cash.me/$michaelsboost\">\n      <i class=\"fa fa-dollar\"></i>\n    </a><a target=\"_blank\" href=\"https://www.paypal.com/cgi-bin/webscr?business=mikethedj4%40yahoo.com&cmd=_xclick&amount=5.0&item_name=Donation&currency_code=USD\">\n      <i class=\"fa fa-cc-paypal\"></i>\n    </a>\n  </h1>\n</div></div>");
                  $(".donatebanner").addClass("hide");
                  
                  var zip = new JSZip();

                  // Your Web App
                  zip.folder("app").load(webAppZipBinary);

                  // Your Logo
                  zip.file("assets/16.png", document.querySelector("[data-webdgapsize=f16]").src.split('base64,')[1],{base64: true});
                  zip.file("assets/32.png", document.querySelector("[data-webdgapsize=f32]").src.split('base64,')[1],{base64: true});
                  zip.file("assets/64.png", document.querySelector("[data-webdgapsize=f64]").src.split('base64,')[1],{base64: true});
                  zip.file("assets/128.png", document.querySelector("[data-webdgapsize=f128]").src.split('base64,')[1],{base64: true});
                  zip.file("assets/logo.png", document.querySelector("[data-webdgapimgload=webdgapimg]").src.split("base64,")[1],{base64: true});

                  // For Chrome Extension
                  zip.file("background.js", "/**\n * Listens for the app launching, then creates the window.\n *\n * @see http://developer.chrome.com/apps/app.runtime.html\n * @see http://developer.chrome.com/apps/app.window.html\n */\nchrome.app.runtime.onLaunched.addListener(function(launchData) {\n  chrome.app.window.create(\n    'index.html',\n    {\n      id: 'mainWindow',\n      innerBounds: {\n        'width': 800,\n        'height': 600\n      }\n    }\n  );\n});");
                  zip.file("css/style.css", "html, body {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  min-width: 300px;\n  min-height: 420px;\n}\n\nwebview, iframe {\n  width: 100%;\n  height: 100%;\n  border: 0;\n}");
                  zip.file("index.html", "<!DOCTYPE html>\n<html>\n  <head>\n    <title>"+ $("[data-id=sitename]").val() +"</title>\n    <link rel=\"stylesheet\" href=\"css/style.css\" />\n  </head>\n  <body>\n    <iframe src=\"app/index.html\">\n      Your Chromebook does not support the iFrame html element.\n    </iframe>\n  </body>\n</html>");
                  zip.file("manifest.json", "{\n  \"manifest_version\": 2,\n  \"name\": \""+ $("[data-id=sitename]").val() +"\",\n  \"short_name\": \""+ $("[data-id=sitename]").val() +"\",\n  \"description\": \""+ $("[data-value=description]").val() +"\",\n  \"version\": \""+ $("[data-value=version]").val() +"\",\n  \"minimum_chrome_version\": \"38\",\n  \"permissions\": [ \"storage\", \"unlimitedStorage\", \"http://*/\", \"https://*/\" ],\n  \"icons\": {\n    \"16\": \"assets/16.png\",\n    \"32\": \"assets/32.png\",\n    \"64\": \"assets/64.png\",\n    \"128\": \"assets/128.png\"\n  },\n\n  \"browser_action\": {\n    \"default_icon\": \"assets/128.png\",\n    \"default_title\": \""+ $("[data-id=sitename]").val() +"\",\n    \"default_popup\": \"index.html\"\n  },\n  \n  \"content_security_policy\": \"script-src 'self' 'unsafe-eval'; object-src 'self'\"\n}");
                  // zip.file("README", "If WebDGap was at all helpful for you. Would you consider donating to the project?\nhttps://www.paypal.com/cgi-bin/webscr?business=mikethedj4%40yahoo.com&cmd=_xclick&amount=5.0&item_name=Donation&currency_code=USD\n\n");

                  // Export Chrome Extension
                  var content = zip.generate({type:"blob"});
                  saveAs(content, document.querySelector("[data-id=sitename]").value.replace(/ /g, '').toLowerCase() + "-chrome-ext.zip");
                  $(".chrome-border").fadeOut();
                  $("html, body").animate({ scrollTop: $(".chosenbit").offset().top }, "slow");
                  $(".preloader").remove();
                  return false;
                }
              }
              
              // Export PhoneGap Build Application
              if ($(this).hasClass("pgbappexport")) {
                if ( (!$("[data-pgb=version]").val()) || (!$("[data-pgb=versionCode]").val()) || (!$("[data-pgb=description]").val()) || (!$("[data-pgb=author]").val()) || (!$("[data-pgb=authoremail]").val()) || (!$("[data-pgb=authorlink]").val()) ) {
                  alertify.error(unableToExportFields);
                } else {
                  $(document.body).append('<div class="fixedfill preloader"></div>');
                  $(".preloader").html("<div class=\"table\"><div class=\"cell\">\n  <h1>"+ creatingapplication +"</h1>\n  <img class=\"loading\" src=\"../imgs/preloader.svg\">\n  \n<h1>\n    <a class=\"share-facebook\" target=\"_blank\" href=\"https://www.facebook.com/sharer/sharer.php?u=https%3A//michaelsboost.github.io/WebDGap/\">\n      <i class=\"fa fa-facebook-square\"></i>\n    </a>\n    <a class=\"share-twitter\" target=\"_blank\" href=\"https://twitter.com/home?status=I%20made%20a%20%23PhoneGap%20%23application%20using%20%23WebDGap!%20https%3A//michaelsboost.github.io/WebDGap/\">\n      <i class=\"fa fa-twitter-square\"></i>\n    </a>\n    <a class=\"share-gplus\" target=\"_blank\" href=\"https://plus.google.com/share?url=http%3A//michaelsboost.github.io/WebDGap/\">\n      <i class=\"fa fa-google-plus-square\"></i>\n    </a>\n    <a class=\"share-linkedin-square\" target=\"_blank\" href=\"https://www.linkedin.com/shareArticle?mini=true&url=https%3A//michaelsboost.github.io/WebDGap/&title=I%20made%20a%20%23PhoneGap%20%23application%20using%20%23WebDGap!%20&summary=&source=\">\n      <i class=\"fa fa-linkedin-square\"></i>\n    </a>\n    <a target=\"_blank\" href=\"https://cash.me/$michaelsboost\">\n      <i class=\"fa fa-dollar\"></i>\n    </a><a target=\"_blank\" href=\"https://www.paypal.com/cgi-bin/webscr?business=mikethedj4%40yahoo.com&cmd=_xclick&amount=5.0&item_name=Donation&currency_code=USD\">\n      <i class=\"fa fa-cc-paypal\"></i>\n    </a>\n  </h1>\n</div></div>");
                  $(".donatebanner").addClass("hide");
                  
                  var zip = new JSZip();

                  // Your Web Application
                  zip.folder("www").load(webAppZipBinary);
                  var ImgWinWide1 = cImgWinWide1[0].toDataURL("image/png");
                  var ImgWinWide2 = cImgWinWide2[0].toDataURL("image/png");

                  // Main Icon
                  zip.file("logo.png", document.querySelector("[data-webdgapimgload=webdgapimg]").src.split("base64,")[1],{base64: true});

                  // Android Icon
                  zip.file("res/icon/android/icon-96-xhdpi.png", document.querySelector("[data-webdgapsize=f96]").src.split('base64,')[1],{base64: true});
                  zip.file("res/icon/android/icon-72-hdpi.png", document.querySelector("[data-webdgapsize=f72]").src.split('base64,')[1],{base64: true});
                  zip.file("res/icon/android/icon-48-mdpi.png", document.querySelector("[data-webdgapsize=f48]").src.split('base64,')[1],{base64: true});
                  zip.file("res/icon/android/icon-36-ldpi.png", document.querySelector("[data-webdgapsize=f36]").src.split('base64,')[1],{base64: true});
                  // iOS Icon
                  zip.file("res/icon/ios/icon-72.png", document.querySelector("[data-webdgapsize=f72]").src.split('base64,')[1],{base64: true});
                  zip.file("res/icon/ios/icon-72-2x.png", document.querySelector("[data-webdgapsize=f144]").src.split('base64,')[1],{base64: true});
                  zip.file("res/icon/ios/icon-57.png", document.querySelector("[data-webdgapsize=f57]").src.split('base64,')[1],{base64: true});
                  zip.file("res/icon/ios/icon-57-2x.png", document.querySelector("[data-webdgapsize=f114]").src.split('base64,')[1],{base64: true});
                  // Windows Phone 8 Icon
                  zip.file("res/icon/wp8/ApplicationIcon.png", document.querySelector("[data-webdgapsize=f159]").src.split('base64,')[1],{base64: true});
                  zip.file("res/icon/wp8/Background.png", document.querySelector("[data-webdgapsize=f99]").src.split('base64,')[1],{base64: true});
                  // PhoneGap Windows Icon
                  zip.file("res/icon/windows/Square30x30Logo.scale-100.png", document.querySelector("[data-webdgapsize=f30]").src.split('base64,')[1],{base64: true});
                  zip.file("res/icon/windows/Square44x44Logo.scale-100.png", document.querySelector("[data-webdgapsize=f44]").src.split('base64,')[1],{base64: true});
                  zip.file("res/icon/windows/Square44x44Logo.scale-240.png", document.querySelector("[data-webdgapsize=f106]").src.split('base64,')[1],{base64: true});
                  zip.file("res/icon/windows/Square70x70Logo.scale-100.png", document.querySelector("[data-webdgapsize=f70]").src.split('base64,')[1],{base64: true});
                  zip.file("res/icon/windows/Square71x71Logo.scale-100.png", document.querySelector("[data-webdgapsize=f71]").src.split('base64,')[1],{base64: true});
                  zip.file("res/icon/windows/Square71x71Logo.scale-240.png", document.querySelector("[data-webdgapsize=f170]").src.split('base64,')[1],{base64: true});
                  zip.file("res/icon/windows/Square150x150Logo.scale-100.png", document.querySelector("[data-webdgapsize=f150]").src.split('base64,')[1],{base64: true});
                  zip.file("res/icon/windows/Square150x150Logo.scale-240.png", document.querySelector("[data-webdgapsize=f360]").src.split('base64,')[1],{base64: true});
                  zip.file("res/icon/windows/Square310x310Logo.scale-100.png", document.querySelector("[data-webdgapsize=f310]").src.split('base64,')[1],{base64: true});
                  zip.file("res/icon/windows/StoreLogo.scale-100.png", document.querySelector("[data-webdgapsize=f50]").src.split('base64,')[1],{base64: true});
                  zip.file("res/icon/windows/StoreLogo.scale-240.png", document.querySelector("[data-webdgapsize=f120]").src.split('base64,')[1],{base64: true});
                  zip.file("res/icon/windows/Wide310x150Logo.scale-100.png", ImgWinWide1.split('base64,')[1],{base64: true});
                  zip.file("res/icon/windows/Wide310x150Logo.scale-240.png", ImgWinWide2.split('base64,')[1],{base64: true});

                  // If an intention or permission is checked add it into config.xml

                  var tel    = document.getElementById("tel");
                  var sms    = document.getElementById("sms");
                  var mailto = document.getElementById("mailto");
                  var geo    = document.getElementById("geo");
                  var marketlinks = document.getElementById("marketlinks");
                  var filestorage = document.getElementById("filestorage");

                  if (tel.checked) {
                    telIntent = "\n  <allow-intent href=\"tel:*\"/>";
                  } else {
                    telIntent = "";
                  }
                  if (sms.checked) {
                    smsIntent = "\n  <allow-intent href=\"sms:*\"/>";
                  } else {
                    smsIntent = "";
                  }
                  if (mailto.checked) {
                    mailtoIntent = "\n  <allow-intent href=\"mailto:*\"/>";
                  } else {
                    mailtoIntent = "";
                  }
                  if (geo.checked) {
                    geoIntent = "\n  <allow-intent href=\"geo:*\"/>";
                  } else {
                    geoIntent = "";
                  }
                  if (marketlinks.checked) {
                    marketIntent = "\n  <platform name=\"android\">\n    <allow-intent href=\"market:*\"/>\n  </platform>\n  <platform name=\"ios\">\n    <allow-intent href=\"itms:*\"/>\n    <allow-intent href=\"itms-apps:*\"/>\n  </platform>";
                  } else {
                    marketIntent = "";
                  }
                  listIntentions = telIntent + smsIntent + mailtoIntent + geoIntent + marketIntent;

                  if (filestorage.checked) {
                    filestorageIntent = "\n\n  <gap:plugin name=\"cordova-plugin-file\" source=\"npm\" spec=\"~4.1.1\" />\n  <gap:plugin name=\"cordova-plugin-file-transfer\" source=\"npm\" spec=\"~1.5.0\" />\n  <preference name=\"AndroidPersistentFileLocation\" value=\"Compatibility\" />";
                  } else {
                    filestorageIntent = "";
                  }

                  // Files for exported app
                  zip.file("config.xml", "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<widget xmlns = \"http://www.w3.org/ns/widgets\"\n  xmlns:gap   = \"http://phonegap.com/ns/1.0\"\n  id          = \"com.webdgap."+ document.querySelector("[data-id=sitename]").value.replace(/ /g, '').toLowerCase() +"\"\n  version     = \""+ $("[data-pgb=version]").val() +"\"\n  versionCode = \""+ $("[data-pgb=versionCode]").val() +"\">\n  <name>"+ $("[data-id=sitename]").val() +"</name>\n  <description>\n    "+ $("[data-pgb=description]").val() +"\n  </description>\n  <author email=\""+ $("[data-pgb=authoremail]").val() +"\" href=\""+ $("[data-pgb=authorlink]").val() +"\">\n    "+ $("[data-pgb=author]").val() +"\n  </author>\n\n  <content src=\"index.html\" />\n\n  <icon src=\"logo.png\" gap:role=\"default\" />\n  <icon gap:platform=\"android\" gap:qualifier=\"ldpi\" src=\"res/icon/android/icon-36-ldpi.png\" />\n  <icon gap:platform=\"android\" gap:qualifier=\"mdpi\" src=\"res/icon/android/icon-48-mdpi.png\" />\n  <icon gap:platform=\"android\" gap:qualifier=\"hdpi\" src=\"res/icon/android/icon-72-hdpi.png\" />\n  <icon gap:platform=\"android\" gap:qualifier=\"xhdpi\" src=\"res/icon/android/icon-96-xhdpi.png\" />\n  <icon gap:platform=\"android\" src=\"res/icon/android/icon-96-xhdpi.png\" />\n  <icon gap:platform=\"blackberry\" src=\"res/icon/blackberry/icon-80.png\" />\n  <icon gap:platform=\"blackberry\" gap:state=\"hover\" src=\"res/icon/blackberry/icon-80.png\" />\n  <icon gap:platform=\"ios\" height=\"57\" src=\"res/icon/ios/icon-57.png\" width=\"57\" />\n  <icon gap:platform=\"ios\" height=\"72\" src=\"res/icon/ios/icon-72.png\" width=\"72\" />\n  <icon gap:platform=\"ios\" height=\"114\" src=\"res/icon/ios/icon-57-2x.png\" width=\"114\" />\n  <icon gap:platform=\"ios\" height=\"144\" src=\"res/icon/ios/icon-72-2x.png\" width=\"144\" />\n  <icon gap:platform=\"webos\" src=\"res/icon/webos/icon-64.png\" />\n  <icon gap:platform=\"wp8\" src=\"www/res/icon/wp8/ApplicationIcon.png\" />\n  <icon gap:platform=\"wp8\" src=\"www/res/icon/wp8/Background.png\" />\n\n  <icon gap:platform=\"windows\" src=\"www/res/icon/windows/Square150x150Logo.scale-100.png\" />\n  <icon gap:platform=\"windows\" src=\"www/res/icon/windows/Square30x30Logo.scale-100.png\" />\n  <icon gap:platform=\"windows\" src=\"www/res/icon/windows/StoreLogo.scale-100.png\" />\n  <icon gap:platform=\"windows\" src=\"www/res/icon/windows/StoreLogo.scale-240.png\" />\n  <icon gap:platform=\"windows\" src=\"www/res/icon/windows/Square44x44Logo.scale-100.png\" />\n  <icon gap:platform=\"windows\" src=\"www/res/icon/windows/Square44x44Logo.scale-240.png\" />\n  <icon gap:platform=\"windows\" src=\"www/res/icon/windows/Square70x70Logo.scale-100.png\" />\n  <icon gap:platform=\"windows\" src=\"www/res/icon/windows/Square71x71Logo.scale-100.png\" />\n  <icon gap:platform=\"windows\" src=\"www/res/icon/windows/Square71x71Logo.scale-240.png\" />\n  <icon gap:platform=\"windows\" src=\"www/res/icon/windows/Square150x150Logo.scale-240.png\" />\n  <icon gap:platform=\"windows\" src=\"www/res/icon/windows/Square310x310Logo.scale-100.png\" />\n  <icon gap:platform=\"windows\" src=\"www/res/icon/windows/Wide310x150Logo.scale-100.png\" />\n  <icon gap:platform=\"windows\" src=\"www/res/icon/windows/Wide310x150Logo.scale-240.png\" />\n\n  <preference name=\"permissions\" value=\"none\"/>\n  <preference name=\"orientation\" value=\"default\"/>\n  <preference name=\"target-device\" value=\"universal\"/>\n  <preference name=\"webviewbounce\" value=\"false\"/>\n  <preference name=\"prerendered-icon\" value=\"true\"/>\n  <preference name=\"stay-in-webview\" value=\"false\"/>\n  <preference name=\"ios-statusbarstyle\" value=\"black-opaque\"/>\n\n  <gap:plugin name=\"cordova-plugin-inappbrowser\" source=\"npm\" spec=\"~1.3.0\"/>\n  <gap:plugin name=\"cordova-plugin-network-information\" source=\"npm\" spec=\"~1.2.0\"/>\n\n  <access origin=\"*\"/>\n  <gap:plugin name=\"cordova-plugin-whitelist\" source=\"npm\"/>\n\n  <preference name=\"phonegap-version\" value=\"cli-9.0.0\" />\n  <preference name=\"android-minSdkVersion\" value=\"19\" />\n  <preference name=\"android-targetSdkVersion\" value=\"28\" />"+ filestorageIntent +"\n\n  <allow-intent href=\"http://*/*\"/>\n  <allow-intent href=\"https://*/*\"/>\n  <allow-intent href=\"tel:*\"/>\n  <allow-intent href=\"sms:*\"/>\n  <allow-intent href=\"mailto:*\"/>\n  <allow-intent href=\"geo:*\"/>"+ listIntentions +"\n</widget>");
                  zip.file("README.md", "# Thank you for using WebDGap!\n\nIntro to your PhoneGap Build Export\n-------------\n\n### File Structure\n\n**NOTICE:** This export is just a template. Structure it however you like for PhoneGap Build!\n\n - www\n  - (your application source code)\n - res/icon\n   - (your logo is located here for windows phone, ios, and android)\n - logo.png\n - config.xml\n\n**DON'T FORGET** to add `<script src=\"cordova.js\"></script>` or `<script src=\"phonegap.js\"></script>` into your `index.html` file  (which should be located in the `www` directory)\n\nDonate To The Project!\n-------------\n\nIf WebDGap was at all helpful for you. [Would you consider donating to the project?](https://www.paypal.com/us/cgi-bin/webscr?cmd=_flow&SESSION=JryIEtO_GiYnqlvRfV6BGnO6bAxR3JtIQif2j1z1eFYuoLkYf_XZOY6QbWe&dispatch=5885d80a13c0db1f8e263663d3faee8dcce3e160f5b9538489e17951d2c62172)");

                  // Export Chrome Application
                  var content = zip.generate({type:"blob"});
                  saveAs(content, document.querySelector("[data-id=sitename]").value.replace(/ /g, '').toLowerCase() + "-pgb.zip");
                  $(".phonegap-dialog").fadeOut();
                  $("html, body").animate({ scrollTop: $(".chosenbit").offset().top }, "slow");
                  $(".preloader").remove();
                  return false;
                }
              }
              return false;
            });

            // Download for Chrome
            $(".chromeapp").on("click", function() {
              $(".chromeappcheck").removeClass("hide");
              $(".chromeappexport").removeClass("hide");
              $(".chromepopexport").addClass("hide");
              $(".chrome-border").fadeIn();
              $("html, body").animate({ scrollTop: $(".chrome-border").offset().top }, "slow");
            });
            $(".chromepopup").on("click", function() {
              $(".chromeappcheck").addClass("hide");
              $(".chromeappexport").addClass("hide");
              $(".chromepopexport").removeClass("hide");
              $(".chrome-border").fadeIn();
              $("html, body").animate({ scrollTop: $(".chrome-border").offset().top }, "slow");
            });

            // Export PhoneGap Build Application
            $(".export-pgbapp").on("click", function() {
              if ($(".pickchromes").is(":visible")) {
                $(".pickchromes").addClass("hide");
              }
              $(".phonegap-dialog").fadeIn();
              setTimeout(function() {
                $("html, body").animate({ scrollTop: $(".phonegap-dialog").offset().top }, "slow");
              }, 300);
            });
          }
        })(f);

        // read the file !
        // readAsArrayBuffer and readAsBinaryString both produce valid content for JSZip.
        reader.readAsArrayBuffer(f);
        $(".check").removeClass("hide").addClass("hide");
        setTimeout(function() {
          $("html, body").animate({ scrollTop: $(".pickbits").offset().top }, "slow");
        }, 300);
      }
    }
  });
  
  return false;
});