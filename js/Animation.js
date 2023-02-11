
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

function ChangeAll(ev){
     for(var i = 0; i < ev.files.length; i++){
        var url = URL.createObjectURL(ev.files[i]);
        switch (i){
            case 0:
                document.getElementById('first').setAttribute('style', `background-image: url('${url}')`);
                break;
            case 1:
                document.getElementById('second').setAttribute('style', `background-image: url('${url}')`);
                break;
            case 2:   
            document.getElementById('third').setAttribute('style', `background-image: url('${url}')`);
                break; 
            case 3:
                document.getElementById('fourth').setAttribute('style', `background-image: url('${url}')`);
                break;
            case 4:
                document.getElementById('fifth').setAttribute('style', `background-image: url('${url}')`);
                break;
        }
     }
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

const interval = setInterval(() => ResetAnimation(), 2700);