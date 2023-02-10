function FirstChange(ev){
    const [file] = ev.files;
    var url = URL.createObjectURL(file);
    document.getElementById('first').setAttribute('style', `background-image: url('${url}')`);
}
function SecondChange(ev){
    const [file] = ev.files;
    var url = URL.createObjectURL(file);
    document.getElementById('second').setAttribute('style', `background-image: url('${url}')`);
}
function ThirdChange(ev){
    const [file] = ev.files;
    var url = URL.createObjectURL(file);
    document.getElementById('third').setAttribute('style', `background-image: url('${url}')`);
}
function FourthChange(ev){
    const [file] = ev.files;
    var url = URL.createObjectURL(file);
    document.getElementById('fourth').setAttribute('style', `background-image: url('${url}')`);
}
function FifthChange(ev){
    const [file] = ev.files;
    var url = URL.createObjectURL(file);
    document.getElementById('fifth').setAttribute('style', `background-image: url('${url}')`);
}

function ResetAnimation(){
    var el = document.getElementById('first');
    el.style.animation = 'none';
    el.offsetHeight;
    el.style.animation = null; 

    var el = document.getElementById('second');
    el.style.animation = 'none';
    el.offsetHeight;
    el.style.animation = null; 

    var el = document.getElementById('third');
    el.style.animation = 'none';
    el.offsetHeight;
    el.style.animation = null; 

    var el = document.getElementById('fourth');
    el.style.animation = 'none';
    el.offsetHeight;
    el.style.animation = null; 

    var el = document.getElementById('fifth');
    el.style.animation = 'none';
    el.offsetHeight;
    el.style.animation = null; 
}