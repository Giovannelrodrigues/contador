const horas = document.querySelector("#horas");
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector("#segundos");

const buttonStart = document.querySelector("#button-start");
const buttonStop = document.querySelector("#button-stop");
const buttonReset = document.querySelector("#button-reset");



let s = 0;
let m = 0;
let h = 0;
let timer;
let bool = true;


function showHTML(){
    s++
    if(s < 10){
        s = `0${s}`;
    };
    if(s == 60){
        s = 0
        m++
    }
    if(m < 10){
        minutos.innerHTML = `0${m}`
    }else{
        minutos.innerHTML = m;
    }
    if(m == 60){
        m = 0
        h++
    }
    if(h < 10){
        horas.innerHTML = `0${h}`
    }else{
        horas.innerHTML = h;
    }
    segundos.innerHTML = s;
}

buttonStart.addEventListener('click', () =>{
    if(bool == true){
        timer = setInterval(showHTML, 1000);
    }
    bool = false

});

buttonStop.addEventListener('click', () => { 
    clearInterval(timer)
    bool = true
});

buttonReset.addEventListener('click', () => {
    s = 0;
    m = 0;
    h = 0;
    segundos.innerHTML = '00'
    minutos.innerHTML = '00'
    horas.innerHTML = '00'
    bool = true
});