Coloris({
  theme: 'large',
  themeMode: 'dark',
  value: '#1d1d1d'
})
var ta = document.getElementById("textArea");
var ff = document.getElementById("Font-Family");
var range = document.getElementById("fs-Range");
var fontColor = document.getElementById("font-color");

var fs = localStorage.getItem("fs");
var txt = localStorage.getItem("txtarea");
var txtff = localStorage.getItem("ff");
var fc = localStorage.getItem("fc");

if(!fc){
  fontColor.value = '#171717';
}
if (fs) {
  ta.style.fontSize = fs + "px";
  range.value = fs;
}
if (txt) ta.innerHTML = txt;
$(document).ready(function () {
  if (txtff) {
    fontColor.value = fc;
    ta.style.color = fc;
    ta.style.fontFamily = txtff;
    ff.value = txtff;
  }
})

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
document.addEventListener('keydown', function(event) {
if ((event.ctrlKey || event.metaKey) && event.key === 's') {
  event.preventDefault(); // Prevent the default browser save dialog
Toast.fire({
icon: 'success',
title: 'Always Gotcha'
})
}
});

$("#Font-Family").change(function () {
  ta.style.fontFamily = ff.value;
  localStorage.setItem("ff", ff.value);
})

$(function () {
  $('textarea').keydown(function (e) {
    var keyCode = e.keyCode || e.which;

    if (keyCode == 9) {
      e.preventDefault();
      var start = $(this).get(0).selectionStart;
      var end = $(this).get(0).selectionEnd;
      spaces = "\t"
      $(this).val($(this).val().substring(0, start) + spaces + $(this).val().substring(end));
      this.selectionStart = this.selectionEnd = start + spaces.length;
    }
  })
});

function FontColor(){
  localStorage.setItem('fc', fontColor.value);
  ta.style.color = fontColor.value;

}

function Update(ev) {
  if (ev) {
    localStorage.setItem("fs", ev.value);
    ta.style.fontSize = ev.value + "px";
  }
  if (ta.scrollHeight < 765) ta.style.height = ta.scrollHeight + "px";
  SaveChanges();
};

function SaveChanges() {
  localStorage.setItem("txtarea", ta.value);
}
