const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

let string="";
let btn=document.querySelectorAll(".button");
Array.from(btn).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            try{
                string=eval(string);
                document.querySelector("input").value=string;
            }
            catch (error) {
                // Code to handle the error
                const audio = new Audio("windows_error.mp3");
                audio.play();
                document.querySelector("input").value="SYNTAX ERROR";
                string="";
              }
              
        }
        else if(e.target.innerHTML=='C'){
            string="";
            document.querySelector("input").value=string;
        }
        else if(e.target.innerHTML=='AC'){
            string=string.slice(0, -1);
            document.querySelector("input").value=string;
        }
        else if(e.target.innerHTML=='X'){
            string=string+'*';
            document.querySelector("input").value=string;
        }
        else if(e.target.innerHTML=='%'){
            string=eval(string+'/100');
            document.querySelector("input").value=string;
        }
        else{
            // console.log(e.target);
            string=string+e.target.innerHTML;
            document.querySelector("input").value=string;
        }
    
    })
})