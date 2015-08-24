var stateMap = {
  initial_state: "closed",
  opened_state: "opened"
};

var trigger = function() {
  var anchor = $("header.global-navigation nav a"),
      nav = $("header.global-navigation nav");

  anchor.on("click", function(e) {
    e.preventDefault();
    anchor.removeClass("active");
    $(this).addClass("active");

    switch (nav.attr("class")) {
      case ("closed"):
        nav.removeClass(stateMap.initial_state);
        nav.addClass(stateMap.opened_state);
        break;
      case ("opened"):
        nav.removeClass(stateMap.opened_state);
        nav.addClass(stateMap.initial_state);
        break;
      }
    });
};

var init = function() {
  trigger();
};

init();
