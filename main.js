// grab everything we need
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

// add event listeners
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});







// const bg=['#009B77','#E9897E','#EFC050','#0072B5','#091627'];
const deposit_btn=document.getElementById('deposit-btn');
const withdraw_btn=document.getElementById('withdraw-btn');
const d_input=document.getElementById('d-input');
const w_input=document.getElementById('w-input');
// const colAll= document.querySelectorAll('.col');

// colAll.forEach((element,i )=> {
//    element.style.backgroundColor=bg[i];
// });

function getInput(input_field){
    let inputvalue=document.getElementById(input_field).value;
    let num=parseFloat(inputvalue);
    return num;
}
function getElement(elementId){
    let element=document.getElementById(elementId).innerText;
    let num=parseFloat(element);
    return num;
}
function setElement(elementId,value){
    let element=document.getElementById(elementId);
    element.innerText=value;
}
function actionButton(input,element,balance){
    let i_value=getInput(input);
    let el=getElement(element);
    let bal=getElement(balance);
    let newBal=0;
    if(!i_value){
        return;
    }
    if(i_value>bal && element=='withdraw'){
        alert("You don't have enough balance");
        return;
    }
    if(element=='deposit'){
        newBal=bal+i_value; 
        history('deposit',i_value,newBal)
    }
    if(element=='withdraw'){
        newBal=bal-i_value; 
        history('withdraw',i_value,newBal)
    }  
    setElement(balance,newBal);

    let newDepo=el+i_value;
    setElement(element,newDepo);
    
}
d_input.addEventListener("keypress", function(event) {
    
    if (event.key === "Enter") {
      event.preventDefault();
      
      actionButton('d-input','deposit','balance');
    }
  });

w_input.addEventListener("keypress", function(event) {
    
    if (event.key === "Enter") {
      event.preventDefault();
      
      actionButton('w-input','withdraw','balance');
    }
  });

deposit_btn.addEventListener('click',()=>{
    
    actionButton('d-input','deposit','balance');
})

withdraw_btn.addEventListener('click',()=>{

    actionButton('w-input','withdraw','balance');
})

function history(el,inputed,bal){
const date=dateTime();
const statement=document.createElement('div');

if(el=='deposit'){
    statement.classList.add("m-1",  "p-6", "bg-green-500" )
}
if(el=='withdraw'){
    statement.classList.add("m-1",  "p-6", "bg-red-500")
}
statement.innerHTML=`<p>${date}</p>
                    <p>Your ${el}: $ ${inputed}</p>
                    <p>Your balance: $ ${bal}</p>
`
document.getElementById('statement').appendChild(statement);
}


function dateTime(){
    const date=new Date();
    let day=date.getDate();
    let month=date.getMonth()+1;
    let year=date.getFullYear();
   
    let currentDate=`${day}-${month}-${year}`; 
    let currentTime=date.toLocaleTimeString();
    let date_time=[currentDate+'    '+currentTime]


    return date_time;
    
}
/*
const pagelist=document.querySelectorAll('.page');
const pages=document.querySelectorAll('.show-page');
pages.forEach((el,i)=>{
    el.style.display='none'
})

pagelist.forEach((el,i)=>{
    el.addEventListener('click',()=>{
        pages.forEach((el,i)=>{
            el.style.display='none'
        })
        el.style.color='red';
        pages[i].style.display='grid';
        console.log(pages[i])
    })
})
console.log(pagelist)
*/
// const deposit=document.getElementById('deposit');
// const withdraw=document.getElementById('withdraw');
// const balance=document.getElementById('balance');
// const d_input=document.getElementById('d-input');
// const w_input=document.getElementById('w-input');
// const deposit_btn=document.getElementById('deposit-btn');
// const withdraw_btn=document.getElementById('withdraw-btn');

// deposit_btn.addEventListener('click',()=>{

//     let d_input=getInput('d-input');
//     let deposit=getElement('deposit');
//     let balance=getElement('balance');
//     let newBalance=balance+d_input;
//     setElement('balance',newBalance);
//     let newDeposit=deposit+d_input;
//     setElement('deposit',newDeposit);
// })



// withdraw_btn.addEventListener('click',()=>{

//     let w_input=getInput('w-input');
//     let withdraw=getElement('withdraw');
//     let balance=getElement('balance');
//     let newBalance=balance-w_input;
//     setElement('balance',newBalance);
//     let newWithdraw=withdraw+w_input;
//     setElement('withdraw',newWithdraw);
// })

/*
deposit_btn.addEventListener('click',()=>{
    const dInput_value=Number(d_input.value);
    let deposit_num=Number(deposit.innerText);
    let newDeposit=dInput_value+deposit_num;

    const balance_num=Number(balance.innerText);
    let newBalance=balance_num+newDeposit;

    deposit.innerText=newDeposit;
    balance.innerText=newBalance;
    
})

withdraw_btn.addEventListener('click',()=>{

    if(Number(balance.innerText)==0){
        alert('Balance is over');
    }
    if(Number(w_input.value)>Number(balance.innerText)){
        alert('Not enough balance');
    }
    else{
        const wInput_value=Number(w_input.value);
    let withdraw_num=Number(withdraw.innerText);
    let newWithdraw=wInput_value+withdraw_num;

    const balance_num=Number(balance.innerText);
    let newBalance=balance_num-newWithdraw;

    withdraw.innerText=newWithdraw;
    balance.innerText=newBalance;
    }
    
})*/

