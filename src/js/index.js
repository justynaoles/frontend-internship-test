/* Here goes your JS code */


document.addEventListener('DOMContentLoaded', (event)=>{

    const btnMain = document.querySelector('.btn-main');
    const btnClose = document.querySelector('.btn-close');
    const pop = document.querySelector('.popup');
    const submit = document.querySelector('.submit');
    
    
    
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


})
  







