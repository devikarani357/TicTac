let boxes=document.querySelectorAll(".box"); // To access the elements from html to js
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#newgame");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true; //for alternative turns purpose

const winningPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
] ;


//to reset the game this function is used
const resetgame = () =>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");//it will hide that "congratulation the winner is" message. 
}

//adding event listeners to perform some function when we are click that button

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
         if(turn0)
            {
                box.innerText="O";
                turn0=false;
            }
            else
            {
                box.innerText="X";
                turn0=true;
            }
            box.disabled=true; //once we click that button it cannot change the value with this feature.

            checkwinner();
    })
});

//This function is used when we reset the button all the boxes should be enabled.
const enableBoxes = () =>{
    for(let box of boxes)
        {
            box.disabled=false;
            box.innerText=""; //To empty all the boxes after enabling
        }
};

// This function we write bacause after winning every box should be disable.
const disableBoxes = () => {
      for(let box of boxes)
        {
            box.disabled=true;
        }
};

const showWinner = (winner) => {
   msg.innerHTML=`Congratulations the winner is ${winner}`;
   msgContainer.classList.remove("hide");
   disableBoxes();
};

const checkwinner=()=>{
    for(pattern of winningPatterns)
        {
            let posval1=boxes[pattern[0]].innerText;
            let posval2=boxes[pattern[1]].innerText;
            let posval3=boxes[pattern[2]].innerText;

            if(posval1!="" && posval2!=""&&posval3!="")
                {
                    if(posval1===posval2&&posval2===posval3)
                        {
                            console.log("winner",posval1);
                            showWinner(posval1);
                        }
                }
        }
};

newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);