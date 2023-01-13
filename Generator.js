$(document).ready(function (){
    var logged = sessionStorage.getItem("Logged");
    if(logged != "1"){
        window.location.href = "index.html";
    }
})

function ChangeValue(e){
    document.getElementById("MemeTitle").innerHTML = e.value;
}

function SizeChange(e)
{
    if(e.value < 80){
        document.getElementById("MemeTitle").style.fontSize = e.value + "px"; 
    }
}

function ChangeHeight(e)
{
    if(e.value < 52){
        document.getElementById("MemeTitle").style.marginTop = e.value * 4 + "px"; 
    }
}


function Next(){
    var x = 0;
    var srcF = "Images/Memes/";
    var count = document.getElementById("MemeImg").src.split("/");
    var src = count[count.length - 1].split(".", 1);
    if(src == '10' || src.toString().length > 2){
        srcF += '1.png'; 
    }else{
        x = parseInt(src) + 1;
        srcF +=  x.toString() + ".png";
    }
    document.getElementById("MemeImg").src = srcF;
}
function Previous(){
    var x = 0;
    var srcF = "Images/Memes/";
    var count = document.getElementById("MemeImg").src.split("/");
    var src = count[count.length - 1].split(".", 1);
    if(src == '1' || src.toString().length > 2){
        srcF += '10.png'; 
    }else{
        x = parseInt(src) - 1;
        srcF +=  x.toString() + ".png";
    }
    document.getElementById("MemeImg").src = srcF;
}

$("input#IncludeOwn").change(function(){
    const [file] = this.files;
    if(file){
        document.getElementById('MemeImg').src = URL.createObjectURL(file)
    }
})