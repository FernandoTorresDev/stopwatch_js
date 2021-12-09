const btnStart = document.querySelector('#start')
const btnStop = document.querySelector('#stop')
const btnResume = document.querySelector('#resume')
const btnReset = document.querySelector('#reset')

const h1Mins = document.querySelector('#mins')
const h1Secs = document.querySelector('#secs')
const h1Msecs = document.querySelector('#msecs')



let intervId;

let resumed = false;


let miliSecs = 0;
let secs = 0;
let minutes = 0;


function startTimer() {

    if(resumed = false){
        miliSecs = 0;
        secs = 0;
        minutes = 0;
    }
    
    
    // MILISEGUNDOS
    if(!intervId){
        intervId = setInterval(() => {
            miliSecs++;
    
            if(miliSecs > 99){
                miliSecs = 0;
            }
            
            if(miliSecs < 10){
                h1Msecs.textContent = `0${miliSecs}`
            } else{
                h1Msecs.textContent = miliSecs
            }
            if(miliSecs == 0){
                secs++;
    
                if(secs > 59) {
                    secs = 0;
                }
    
                if(secs < 10) {
                    h1Secs.textContent = `0${secs}`;
                } else {
                    h1Secs.textContent = secs;
                }
    
                // MINUTOS
                if(secs == 0){
                    minutes++
            
                    if(minutes < 10) {
                        h1Mins.textContent = `0${minutes}`
                    } else{
                        h1Mins.textContent = minutes
                    }
                }
            }
            
        }, 10);
    }
    
    
    
        
    
}




btnStart.addEventListener('click', () => {
    if(intervId == null){
        startTimer();
    }

    btnStart.classList.add('hidden')
    btnStop.classList.toggle('hidden')

})

btnStop.addEventListener('click', () => {
    btnResume.classList.toggle('hidden')
    btnStop.classList.toggle('hidden')

    // ISSO AQUI PARA O INTERVALO.
    clearInterval(intervId)
    intervId = null;
})

btnResume.addEventListener('click', () => {
    btnResume.classList.toggle('hidden')
    btnStop.classList.toggle('hidden')

    resumed = true;

    startTimer();
    resumed = false;

})


// TO DO: QUANDO CLICAR NO BTNSTOP, MUDAR:
// BOTAO DE STOP PARA RESUME, ONDE O RESUME VOLTA A CONTAGEM ( TENTAR, 
// SE FOR MTO DIFICIL IXQECE, MAS ACHO QUE É SO COPIAR A FUNÇÃO DE STARTTIMER 
// TIRANDO A PARTE DE RESETAR TUDO NO COMEÇO DA FUNÇÃO)

// BOTAO DE RESET APARECE. SE CLICAR NO PAUSE BOTÃO DE RESET SOME DNV.

btnReset.addEventListener('click', () => {
    resumed = false;
    clearInterval(intervId)
    intervId = null;

    miliSecs = 0;
    secs = 0;
    minutes = 0;
    
    h1Msecs.textContent = `0${miliSecs}`;
    h1Secs.textContent = `0${secs}`;
    h1Mins.textContent = `0${minutes}`;

    btnStart.classList.remove('hidden')
    btnResume.classList.add('hidden')
    btnStop.classList.add('hidden')

    
})

