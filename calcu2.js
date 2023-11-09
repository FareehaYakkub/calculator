const numBtn=document.querySelectorAll('.num')
const operBtn=document.querySelectorAll('.oper')
let resultDisplayed = false
const displayText=document.querySelector('.input');

document.querySelector('.equal').addEventListener('click',function(){
    const ans=eval(displayText.textContent);
    displayText.textContent='';
    displayText.textContent=ans;
    resultDisplayed=true;

})
document.querySelector('.go').addEventListener('click',function(){
    const ans=eval(displayText.textContent);
    displayText.textContent='';
    

})
for(let i=0;i<numBtn.length;i++){
    numBtn[i].addEventListener('click',function(){
        const displayText=document.querySelector('.input');
        const my_text=this.textContent;
        console.log(my_text);
        if (! resultDisplayed) {
            displayText.textContent+=my_text;
        }
        else{
            displayText.textContent='';
            displayText.textContent+=my_text;
            resultDisplayed=false;
        }


    })
}
for(let i=0;i<operBtn.length;i++){
    operBtn[i].addEventListener('click',function(){
        const displayText=document.querySelector('.input');
        const my_text=this.textContent;
        console.log(my_text);
        if (displayText.textContent.length===0 && (my_text==='+' || my_text==='-' || my_text==='*' || my_text==='/')){
            console.log("please enter numbers");
        }
        else{
            displayText.textContent+=my_text;
            resultDisplayed=false;
        }
    })
}