var loader = $(".load");

// Run Onload
$("html, body").animate({ scrollTop: 0 }, "slow")
$(".dialog").hide()

$(".export64").on("click", function() {
  $(".64bit").removeClass("hide")
  $(".32bit").addClass("hide")
  $("html, body").animate({ scrollTop: $(".chosenbit").offset().top }, "slow")
  // $(".chosenbit").removeClass("hide")
})
$(".export32").on("click", function() {
  $(".64bit").addClass("hide")
  $(".32bit").removeClass("hide")
  $("html, body").animate({ scrollTop: $(".chosenbit").offset().top }, "slow")
  // $(".chosenbit").removeClass("hide")
})

// Trigger Load File
$(".loadzip").on("click", function() {
  $("#file").trigger("click")
})
$(".call").click(function() {
  loader.trigger("click")
})

// Show Preloader
$(".export-as-win32-app, .export-as-win-app, .export-as-mac-app, .export-as-lin32-app, .export-as-lin-app").click(function() {
  $(".preloader").removeClass("hide")
})

// Export App or Site?
$("[data-id=convertapp], [data-id=convertsite]").on("click", function() {
  if ( $(this).attr("data-id").toLowerCase() === "convertapp" ) {
    $(".maindesc").html("Convert any web application to a native Windows/Linux/Mac/Chrome application.")
    $("[data-id=appspace]").removeClass("hide")
  } else if ( $(this).attr("data-id").toLowerCase() === "convertsite" ) {
    $(".maindesc").html("Convert any website to a native Windows/Linux/Mac/Chrome application.")
    $("[data-id=webspace]").removeClass("hide")
    $(".outputname").addClass("convertsite-picked")
    $("[data-id=sitename]").addClass("convertsite-chosen")
    $(".logoisloadedapp").addClass("hide");
  }

  $("body").removeClass("noscroll")
  $(".wholedialog").fadeOut()
})

// Only show image loader if application has a name
$("[data-action=website]").on("keyup", function(e) {
  // if (this.value.toLowerCase().substring(0,7) === "http://") {
  // // Do nothing
  // }
   if (this.value.toLowerCase().substring(0,8) === "https://") {
    $(".export-as-chrome-app").addClass("hide")
    alertify.log("https is not recommend.<br /><br /> If needed use <a href=\"https://bitly.com/shorten/\">Bitly</a> to set url to http.")
  }

  if (this.value.toLowerCase() === "") {
    $(".checkimageloader, [data-action=applyvalues]").addClass("hide")
  } else if ( (this.value.toLowerCase().substring(0,7) === "http://" ) || (this.value.toLowerCase().substring(0,8) === "https://") ) {
    // $(".checkimageloader, [data-action=applyvalues]").removeClass("hide")
    $("[data-action=applyvalues]").removeClass("hide")
    $("html, body").animate({ scrollTop: $(this).offset().top }, "slow")
    if (e.which == 13) {
      $("[data-action=applyvalues]").click();
    }
  } else {
    $("[data-action=applyvalues]").addClass("hide")
  }
})
$("[data-id=sitename]").on("keyup", function() {
  if ( $(this).hasClass("convertsite-chosen") ) {
    if ( this.value === "" ) {
      $("[data-action=website]").addClass("hide")
    } else {
      $("[data-action=website]").removeClass("hide")
    }
  } else {
    if ( this.value === "" ) {
      $(".checkimageloader").addClass("hide")
    } else {
      $(".checkimageloader").removeClass("hide")
    }
  }
  $(".outputname").text(this.value);
})

// Show image loader of required values
$("[data-action=applyvalues]").click(function() {
  $(".checkimageloader, .outputname").removeClass("hide")
  $(".logoisloadedsite").addClass("hide")
  $(".outputname").text($("[data-id=sitename]").val());
})

// Test Script
function AppTest() {
  $("[data-id=convertapp]").trigger("click")
  $("[data-id=sitename]").val("Keylogger").trigger("keyup")
}
function siteTest() {
  $("[data-id=convertsite]").trigger("click")
  $("[data-id=sitename]").val("Keylogger").trigger("keyup")
  $("[data-action=website]").val("http://bing.com/").trigger("keyup")
  $("[data-action=applyvalues]").trigger("click")
}
// AppTest()
// siteTest()
