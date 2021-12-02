let doneRunning;
let display = ""; //display the numbers the user enters
let numbers = ""; //save the equation to be calculate
let clicked = false;

function buttonClick(num1){ //to display the numbers
    
    const button = document.querySelectorAll(".buttons");
    const textBox = document.getElementById("display");
     
    if (clicked){// will clear if the = button is pressed after the numbers are pressed
        display = "";
        numbers = "";
        textBox.value = "";
        isZero();
        clicked = false;
    }
    else{
        isZero();
    }  
};

function isZero(){ // insures the zero button will not work if the display is zero or empty.
    display += button[num1].innerText;
    const button = document.querySelectorAll(".buttons");
    const textBox = document.getElementById("display");
    if( !((textBox.value == 0||textBox.value.length == 0)  && button[num1].innerText == "0" )){
        display += button[num1].innerText;
        console.log(display);
        textBox.value = display;
    }
}

function cancal(){ //clears all number when the cancal button is pressed.

    const textBox = document.getElementById("display");
    display = "";
    numbers = "";
    textBox.value = "0";


};

function symbol(num1){ //Adds the symbols and numbers to the numbers varable
    const textBox = document.getElementById("display");
    const button = document.querySelectorAll(".buttons");
    doneRunning = false;
    if( textBox.value != "" && textBox.value != "0" ){

        numbers += display +" "+ button[num1].innerText + " ";
        display = "";
        textBox.value = display;
        console.log(numbers);
    };
    
};


function calculate(){ //displays the answer
    if(!doneRunning){
        const textBox = document.getElementById("display");
        numbers += display;
        textBox.value = eval(numbers); //execute to sum
        doneRunning = true;
        clicked = true;
    }
    

};
 