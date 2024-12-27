//caluclator program
const display=document.getElementById("display");

function appendToDisplay(input){
    display.value+=input;

}
function cleardisplay(){
    display.value=" "

}
function caluclate(){
    try{
        display.value=eval(display.value);
    }
    catch{
        display.value="error"
    }
   

}

