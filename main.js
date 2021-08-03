const input = document.querySelector('#color');
const button = document.querySelector('#button');
const body = document.querySelector('body');

button.addEventListener('click' ,function(e){
  e.preventDefault()
  
  if(input.value == ''){
    return alert('Enter a color');
    
  }
  body.style.backgroundColor = input.value
 
  
})

  