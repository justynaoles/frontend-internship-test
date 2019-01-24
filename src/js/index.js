/* Here goes your JS code */

document.addEventListener('DOMContentLoaded', (event)=>{

    const btnMain = document.querySelector('.btn-main');
    const btnClose = document.querySelector('.btn-close');
    const pop = document.querySelector('.popup');
    const submit = document.querySelector('.submit');
    const form = document.querySelector('form');
    const formWrapper = form.querySelector('.form-wrapper');
    const inputs = form.querySelectorAll('input');
    const checkbox = form.querySelector('.checkbox-tick');
    const label = form.querySelector('.label');

    function hideButton() {
    
        btnMain.classList.add('hide');
        pop.classList.add('show');
    
        setTimeout(function(){
    
            pop.classList.add('opacity');
    
        }, 300);
    }
    
    btnMain.addEventListener('click', hideButton);
    
    
    btnClose.addEventListener('click', () =>{
    
        btnMain.classList.remove('hide');
        pop.classList.remove('opacity');
    
        setTimeout(function(){
    
            pop.classList.remove('show');
        
        },200);
    
    });

    checkbox.addEventListener('click', function(){

        if(label.classList.contains('valid')) {
    
            label.classList.remove('valid');
            label.classList.add('invalid');
        }
    
        else {
    
            label.classList.add('valid');
            label.classList.remove('invalid');
        }
    
    });
    
    
    function correctClass(item){
    
        item.classList.add('valid');
        item.classList.remove('invalid');
    
    }
    
    function errorClass(item){
    
        item.classList.remove('valid');
        item.classList.add('invalid');
    }
    
    
    formWrapper.addEventListener('click', (e) => {
    
        let input = e.target;
    
        input.addEventListener('blur', () =>{
    
            let text = input.value;
            let textString = text.toString();
            let textLength = textString.length;
            let type = input.type;
            const emailPattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            let isEmail = emailPattern.test(textString);
            const textPattern = /[a-zA-Z]/;
            const isText = textPattern.test(textString);
    
    
        if (type =='password')  {
    
                if(textLength > 6 && isText) {
    
                    correctClass(input);
                }
    
                else {
                
                    errorClass(input);
                    alert("Please use at least 6 charts");
    
                } 
            }
    
        if (type =='email')  {
        
                if(isEmail) {
    
                    correctClass(input);
                }
    
                else {
                
                    errorClass(input);
                } 
            }
    
        });
    
    
    });
    
    
    form.addEventListener('submit', (e) =>{
    
    e.preventDefault();
    
    let errors = 0;
    
        for (let i = 0; i < inputs.length; i++) {
    
            if (inputs[i].type=="password" && inputs[i].value=="" ) {
    
                errors++;
                errorClass(inputs[i]);
                    
                }
    
                if (inputs[i].type=="email" && inputs[i].value==""){
    
                    errors++;
                    errorClass(inputs[i]);
                }
    
    
                if (inputs[i].type=="checkbox" && (inputs[i].checked == false)) {
    
                    errors++;
                    errorClass(label);  
                }
        }
    
    
        if (errors>0) {
    
            alert("Please fill in all fields");
        }
    
        else {

             //Ajax part to check on server side and submit form, then when done, return: 
    
            setTimeout(function(){

                pop.classList.remove('opacity');
                btnMain.innerHTML="Thank you";
                btnMain.classList.remove('hide');
                btnMain.removeEventListener('click', hideButton);
                btnMain.addEventListener('click', function(){
                document.location.reload();
                });
                
              },2500);
    
            setTimeout(function(){

            pop.remove();

            },3000);  
        }
    
    });
    


})
  







