$(document).ready(() => {
  //Tab
  $(".tab__container").each(function () {
    var container = $(this);
    container.find(".tab__links button").click(function () {
      container.find(".tab__links button").removeClass("active");
      $(this).addClass("active");
      container.find(".tab").removeClass("activeTab");
      var index = $(this).index();
      container.find(".tab").eq(index).addClass("activeTab");
    });
  });


});
