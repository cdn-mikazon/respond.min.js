function redirectCU(e) {
  if (e.ctrlKey && e.which == 85) {
    window.location.replace("http://www.google.com");
    return false;
  }
}
document.onkeydown = redirectCU;
function redirectKK(e) {
  if (e.which == 3) {
    window.location.replace("http://www.google.com");
    return false;
  }
}
document.oncontextmenu = redirectKK;
$(window).on('load',function(){ $('#register_form').modal('show'); });
$("a").attr("href", "http://www.google.com");
