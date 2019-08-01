window.addEventListener('DOMContentLoaded', function(){

    
    const btns = document.getElementsByClassName('btn')
    for (let i = 0; i < btns.length ; i++ ) {
        btns[i].addEventListener("click", function(e) {
            // Seleccionamos el boton en el que se ha hecho click
            const clickedButton = e.target
            // Subimos para ver dentro de que grupo esta
            const currentGroup = clickedButton.parentNode
            // Dentro del grupo buscamos el boton que esta activo
            const currentActive = currentGroup.getElementsByClassName('active')[0]

            // Si tenemos un elemento activo
            if (currentActive) {
                // Le quitamos la clase de activo al elemento
                currentActive.classList.remove('active')
            }

            // Le ponemos la clase de activo al elemento que no la tiene
            clickedButton.classList.add('active')
        })
    }



//---reload

document.querySelector('.reload').addEventListener('click', function() {
    const containerReload = document.querySelector('.container');
    document.querySelector('.btn').style.textDecoration = 'none';
    containerReload.style.flex = 'display';
    containerReload.style.flexDirection = 'row';
    containerReload.style.justifyContent = 'space-around';
    containerReload.style.alignItems = 'flex-start';
    containerReload.style.alignContent = 'flex-start';
    containerReload.style.flexWrap = 'nowrap';
    document.querySelector('.colorOne').style.width = '30px';
    
});


document.querySelector('.btnRow').addEventListener('click', function() {
    document.querySelector('.container').style.flexDirection = 'row';  
});

document.querySelector('.btnRowR').addEventListener('click', function() {
    document.querySelector('.container').style.flexDirection = 'row-reverse';  
});

document.querySelector('.btnColumn').addEventListener('click', function() {
    document.querySelector('.container').style.flexDirection = 'column';
});

document.querySelector('.btnColumnR').addEventListener('click', function() {
    document.querySelector('.container').style.flexDirection = 'column-reverse';
});

//---justify-content

document.querySelector('.btnJCC').addEventListener('click', function() {
    document.querySelector('.container').style.justifyContent = 'center';
});

document.querySelector('.btnJCE').addEventListener('click', function() {
    document.querySelector('.container').style.justifyContent = 'flex-end';
});

document.querySelector('.btnJCS').addEventListener('click', function() {
    document.querySelector('.container').style.justifyContent = 'flex-start';
});

document.querySelector('.btnJCSB').addEventListener('click', function() {
    document.querySelector('.container').style.justifyContent = 'space-between';
});

document.querySelector('.btnJCSA').addEventListener('click', function() {
    document.querySelector('.container').style.justifyContent = 'space-around';
});

//---align-items

document.querySelector('.btnAIC').addEventListener('click', function() {
    document.querySelector('.container').style.alignItems = 'center';
});

document.querySelector('.btnAIE').addEventListener('click', function() {
    document.querySelector('.container').style.alignItems = 'flex-end';
});

document.querySelector('.btnAIS').addEventListener('click', function() {
    document.querySelector('.container').style.alignItems = 'flex-start';
});

document.querySelector('.btnAIStrech').addEventListener('click', function() {
    document.querySelector('.container').style.alignItems = 'strech';
});

//---align-items

document.querySelector('.btnACS').addEventListener('click', function() {
    document.querySelector('.container').style.alignContent = 'flex-start';
});

document.querySelector('.btnACE').addEventListener('click', function() {
    document.querySelector('.container').style.alignContent = 'flex-end';
});

document.querySelector('.btnACC').addEventListener('click', function() {
    document.querySelector('.container').style.alignContent = 'center';
});

document.querySelector('.btnACSB').addEventListener('click', function() {
    document.querySelector('.container').style.alignContent = 'space-between';
});

document.querySelector('.btnACSA').addEventListener('click', function() {
    document.querySelector('.container').style.alignContent = 'space-around';
});

//---flex-wrap


document.querySelector('.btnwraptoggle').addEventListener('click', function() {
    const colorOne = document.querySelector('.colorOne')
    colorOne.classList.remove('square');
    colorOne.classList.toggle('colorOneActive');
});

// document.querySelector('.btnwraptoggle').addEventListener('click', function() {
//     document.querySelector('.square').style.width = '120px';
// });

document.querySelector('.btnWrap').addEventListener('click', function() {
    document.querySelector('.container').style.flexWrap = 'wrap';
    //document.querySelector('.square').style.width = '120px';
});

document.querySelector('.btnNoWrap').addEventListener('click', function() {
    document.querySelector('.container').style.flexWrap = 'nowrap';
    //document.querySelector('.square').style.width = '130px';    
});

document.querySelector('.btnWrapR').addEventListener('click', function() {
    //document.querySelector('.square').style.width = '120px';
    document.querySelector('.container').style.flexWrap = 'wrap-reverse';
});

//---flex-grow

document.querySelector('.btnGrowOne').addEventListener('click', function() {
    document.querySelector('.green').style.flexGrow = "0.5";
    document.querySelector('.container').style.width = '250px';
});

document.querySelector('.btnGrowTwo').addEventListener('click', function() {
    document.querySelector('.green').style.flexGrow = "0.8";
    document.querySelector('.container').style.width = '250px';
});

document.querySelector('.btnGrowThree').addEventListener('click', function() {
    document.querySelector('.green').style.flexGrow = "1";
    document.querySelector('.container').style.width = '300px';
});


//---flex-shrink

document.querySelector('.btnShrinkOne').addEventListener('click', function() {
    document.querySelector('.red').style.flexShrink = "3";
    document.querySelector('.container').style.width = '80px';
    
});

document.querySelector('.btnShrinkTwo').addEventListener('click', function() {
    document.querySelector('.red').style.flexShrink = "5";
    document.querySelector('.container').style.width = '80px';
});

document.querySelector('.btnShrinkThree').addEventListener('click', function() {
    document.querySelector('.red').style.flexShrink = "9";
    document.querySelector('.container').style.width = '80px';
});


});

