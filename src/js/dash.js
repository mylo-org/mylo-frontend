const setupMenu = () => {
  $($(".dashImage")[0]).addClass("active");
  $($(".dash")[0]).addClass("active");
  setTimeout(() => {
    $("#centerMenu").animate({
      opacity: 0
    });
    $(".menu").on("mouseenter", () => {
      $("#centerMenu").animate({
        opacity: 1
      })
    })
    $(".menu").on("mouseleave", () => {
      $("#centerMenu").animate({
        opacity: 0
      })
    })
  });
}

$(document).ready(() => {
  setupMenu();
})
