
var ta = document.getElementById("textArea");
var ff = document.getElementById("Font-Family");
var range = document.getElementById("fs-Range");

var fs = localStorage.getItem("fs");
var txt = localStorage.getItem("txtarea");
var txtff = localStorage.getItem("ff");


if (fs) {
  ta.style.fontSize = fs + "px";
  range.value = fs;
}
if (txt) ta.innerHTML = txt;
$(document).ready(function () {
  if (txtff) {
    ta.style.fontFamily = txtff;
    ff.value = txtff;
  }
})

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
