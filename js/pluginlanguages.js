var language = {
  es: {
    appTitle: "WebDGapJS: ¡Convierta fácilmente sitios web a aplicaciones de escritorio multiplataforma con 1 línea de código!",
    appdescrip: "¡Exportar un sitio web como una aplicación de escritorio nunca ha sido tan fácil!",
    setflag: "../assets/flags/4x3/es.svg",
    ldwnload: "DESCARGAR",
    ldwnloadwin: "WINDOWS",
    ldwnloadwin32: "WINDOWS 32BIT",
    ldwnloadmac: "MAC",
    ldwnloadlin: "LINUX I832",
    ldwnloadlin64: "LINUX",
    ldwnloadc: "CROMADA",
    ldwnloadce: "EXTENSIÓN CROMADA",
    ldwnloada: "ANDROID",
    ldwnloadjp: "PLUGIN JAVASCRIPT",
    ldonate: "DONAR",
    ldonatepp: "DONAR CON PAYPAL",
    ldonatesc: "DONAR CON SQUARECASH",
    lcontribute: "CONTRIBUIR",
    lstore: "ALMACENAR",
    lrundemo: "Plugin de prueba",
    lgrabplugin: "Descargar Plugin"
  }
};


if (window.location.hash) {
  if (location.hash.substring(1) === "eng") {
    // remove all hash tags and reload page to default text
    window.location.href = window.location.toString().split(/\?|#/)[0];
  }
  else if (location.hash.substring(1) === "es") {
    $("[data-language=setflag]").attr('src', language.es.setflag);
    document.title = language.es.appTitle;
    
    $("meta[name-description]").attr('content', language.es.appdescrip);
    $("[data-language=appdescrip]").text(language.es.appdescrip);
    $("[data-language=ldwnload]").text(language.es.ldwnload);
    $("[data-language=ldwnloadwin]").text(language.es.ldwnloadwin);
    $("[data-language=ldwnloadwin32]").text(language.es.ldwnloadwin32);
    $("[data-language=ldwnloadmac]").text(language.es.ldwnloadmac);
    $("[data-language=ldwnloadlin]").text(language.es.ldwnloadlin);
    $("[data-language=ldwnloadlin64]").text(language.es.ldwnloadlin64);
    $("[data-language=ldwnloadc]").text(language.es.ldwnloadc);
    $("[data-language=ldwnloadce]").text(language.es.ldwnloadce);
    $("[data-language=ldwnloada]").text(language.es.ldwnloada);
    $("[data-language=ldwnloadjp]").text(language.es.ldwnloadjp);
    $("[data-language=ldonate]").text(language.es.ldonate);
    $("[data-language=ldonatepp]").text(language.es.ldonatepp);
    $("[data-language=ldonatesc]").text(language.es.ldonatesc);
    $("[data-language=lcontribute]").text(language.es.lcontribute);
    $("[data-language=lstore]").text(language.es.lstore);
    $("[data-language=lrundemo]").text(language.es.lrundemo);
    $("[data-language=lgrabplugin]").text(language.es.lgrabplugin);
  }
}

$('[data-callLang]').on('click', function() {
  //change flag to selected language
  $("[data-language=setflag]").attr('src', $(this).find('img').attr('src'));
  
  if ($(this).attr('data-callLang') === "eng") {
    window.location.href = window.location.toString().split(/\?|#/)[0];
    return false;
  }
  
  window.location.hash = $(this).attr('data-callLang')
  location.reload(true);
});
