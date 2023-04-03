function init(){    
    entrybutton.addEventListener("click", myFunction);

    function myFunction(){
        var textbox = document.getElementById('entryinput');
        window.alert("Bridget Torres");
        document.getElementById("textoutput").innerHTML = textbox;
    }
}
window.addEventListener('load', init);