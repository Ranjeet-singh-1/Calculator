document.querySelectorAll(".txt").forEach(button_click);

function button_click(value){
value.addEventListener('click',()=>{
    let symbol=value.innerHTML;
    let prev =document.querySelector('.ot').innerHTML;
    document.querySelector('.ot').innerHTML=prev+symbol;
    if(symbol=='AC'){
        document.querySelector('.ot').innerHTML='';
    }
    else if(symbol=='X'){
        document.querySelector('.ot').innerHTML=prev.slice(0,prev.length-1);
    }
    else if(symbol=="="){

    }
    else{
        document.querySelector('.ot').innerHTML=prev+symbol;
    }

});
}

// function add_to_output(value){
//     console.log(value);
//     let symbol=value.innerHTML;
//     let prev =document.querySelector('.ot').innerHTML;
//     document.querySelector('.ot').innerHTML=prev+symbol;
// }
// document.querySelectorAll('.txt').forEach((value)=>{console.log(value);}) 
// for (let i = 0; i <19; i++) {
//     document.querySelectorAll(".txt")[i].addEventListener('click',button_click);
// }
// document.querySelector(".txt").addEventListener('click',button_click);
// document.add