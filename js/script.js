var anchor = $("header.global-navigation nav a");
var nav = $("header.global-navigation nav");

anchor.on("click", function(e) {
  e.preventDefault();
  anchor.removeClass("active");
  $(this).addClass("active");

  switch (nav.attr("class")) {
    case ("closed"):
      nav.removeClass("closed");
      nav.addClass("opened");
      break;
    case ("opened"):
      nav.removeClass("opened");
      nav.addClass("closed");
      break;
    }
  });
