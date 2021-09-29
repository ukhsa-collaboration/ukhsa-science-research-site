(function ($) {
  const $tabs_toggle = $(".js-tabs-dropdown");
  const $nav_tabs = $(".nav-tabs--research");
  const $nav_link = $nav_tabs.find(".nav-link");

  $tabs_toggle.on("click", function () {
    if ($nav_tabs.hasClass("is-open")) {
      Close();
    } else {
      Open();
    }
  });

  $nav_link.on("click", function () {
    var text = $(this).text();
    $tabs_toggle.text(text);
    console.log(text);
    Close();
  });

  function Close() {
    $nav_tabs.removeClass("is-open");
  }

  function Open() {
    $nav_tabs.addClass("is-open");
  }

  if (localStorage.getItem("cookieSeen") != "shown") {
    $(".cookie-banner").addClass("is-active");
  }

  $(".cookie-banner__close").on("click", function () {
    $(".cookie-banner").removeClass("is-active");
    localStorage.setItem("cookieSeen", "shown");
  });
})(jQuery);
