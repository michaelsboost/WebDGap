var language = {
  es: {
    appTitle: "WebDGap: ¡Crea fácilmente aplicaciones de escritorio multiplataforma!",
    appdescrip: "Convierta cualquier aplicación web en una aplicación de escritorio nativa para Windows, Linux o Mac OS X.",
    setflag: "assets/flags/4x3/es.svg",
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
    lrun: "LANZAMIENTO",
    intro: "¡Convierte fácilmente cualquier sitio web o aplicación web (HTML / CSS / JS) como una aplicación de escritorio nativa!",
    playvid: "Ver video",
    vidURL1: "https://www.youtube.com/watch?v=aFaNSzWpd0U",
    vidURL2: "https://www.youtube.com/embed/aFaNSzWpd0U?rel=0&amp;enablejsapi=1",
    donatebtn: "¡Dona al proyecto!",
    donateh1: "¡Ayude a mantener este proyecto gratis!",
    donateh2: "Reduzca el tiempo de desarrollo ayudando a nuestros desarrolladores.",
    appshirt: "Camiseta oficial de WebDGap",
    wapptsub: "Edición Blanca",
    bapptsub: "Edición negro",
    openappt: "Camiseta de código abierto",
    openapptsub: "¡Demuestra que apoyas el software de código abierto!",
    apptdescr: "Disponible para los hombres, las mujeres, el equipo del cabrito, v-cuello, hoddie, etc:",
    buybtn: "¡Cómpralo ahora!",
    revh1: "LO QUE DICEN NUESTROS FANTÁSTICOS USUARIOS",
    revh2: "¡Forme su futuro proyecto de escritorio con WebDGap!",
    rev1: "\"En primer lugar manos fuera a ustedes por su esfuerzo y agradable, super herramienta. Buen trabajo WebDGap equipo! Gran esfuerzo y experiencia super de interfaz de usuario. Increíblemente fácil! \"",
    rev1name: "Mark C.",
    rev2: "\"Es una aplicación muy sorprendente que me hace hacer aplicaciones de escritorio en 3 minutos (que por lo general se tarda más de 2 horas al menos de mí si lo hice desde cero). Espero tener una biblioteca muy grande y plugins para esta APP gracias de nuevo por tu bonita aplicación \"",
    rev2name: "Sarah Y.",
    rev3: "\"A primera vista, se ve como una buena herramienta innovadora. Me gusta el gran enfoque y el tiempo que se dio a la respuesta diseño claro. La aplicación me da más control sobre qué plataformas quiero exportar. Estaré usando esta herramienta para proyectos más serios. Saludos.\"",
    rev3name: "Jon E.",
    userbio: "Usuario",
    madewwebdgap: "Hecho con WebDGap",
    submitapp: "¡Presente el suyo hoy!",
    madeby: "Hecho con <span class=\"fa fa-heart\" style=\"color: #f66;\"></span> y <span class=\"fa fa-coffee\" style=\"color: #52bab3;\"></span> por <a href=\"http://michaelsboost.github.io/\" target=\"_blank\">Michael</a> y otros."
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
    $("[data-language=lrun]").text(language.es.lrun);
    $("[data-language=lrun]").attr("href", "app/" + location.hash);
    $("[data-language=intro]").text(language.es.intro);
    $("[data-language=playvid]").text(language.es.playvid);
    $("[data-language=vidURL1]").attr('href', language.es.vidURL1);
    $("[data-language=vidURL2]").attr('src', language.es.vidURL2);
    $("[data-language=donatebtn]").text(language.es.donatebtn);
    $("[data-language=donateh1]").text(language.es.donateh1);
    $("[data-language=donateh2]").text(language.es.donateh2);
    $("[data-language=appshirt]").text(language.es.appshirt);
    $("[data-language=wapptsub]").text(language.es.wapptsub);
    $("[data-language=bapptsub]").text(language.es.bapptsub);
    $("[data-language=openappt]").text(language.es.openappt);
    $("[data-language=openapptsub]").text(language.es.openapptsub);
    $("[data-language=apptdescr]").text(language.es.apptdescr);
    $("[data-language=buybtn]").text(language.es.buybtn);
    $("[data-language=revh1]").text(language.es.revh1);
    $("[data-language=revh2]").text(language.es.revh2);
    $("[data-language=rev1]").text(language.es.rev1);
    $("[data-language=rev2]").text(language.es.rev2);
    $("[data-language=rev3]").text(language.es.rev3);
    $("[data-language=userbio]").text(language.es.userbio);
    $("[data-language=madewwebdgap]").text(language.es.madewwebdgap);
    $("[data-language=submitapp]").text(language.es.submitapp);
    $("[data-language=madeby]").html(language.es.madeby);
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
