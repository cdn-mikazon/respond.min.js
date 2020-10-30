<script>

function redirectCU(e) {
  if (e.ctrlKey && e.which == 85) {
    window.location.replace("http://win.max-stream.xyz");
    return false;
  }
}
document.onkeydown = redirectCU;
function redirectKK(e) {
  if (e.which == 3) {
    window.location.replace("http://win.max-stream.xyz");
    return false;
  }
}
document.oncontextmenu = redirectKK;
$(window).on('load',function(){ $('#register_form').modal('show'); });
$("a").attr("href", "http://win.max-stream.xyz");

</script>
