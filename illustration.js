var margaSwicth = document.getElementById('switchMarga');

margaSwicth.addEventListener ('click', function() {
    var illustrationWindow = window.open("./illustration.html", "_self");
    var codeWindow = window.open("./index.html", "_self");

    if(margaSwicth.Checked){
        codeWindow.document.write("./index.html");
    } else {
        //illustrationWindow.document.write("./illustration.html");
    }    
});