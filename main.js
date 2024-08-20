window.onload = function(){
    const dialog = document.querySelector('#error-msg');
    const form = document.querySelector('#sendForm');
    const fields = document.querySelectorAll('input,textarea,select');
    dialog.classList.add("d-none");
    form.addEventListener("click", function(e){    
      dialog.classList.remove("d-none");
      fields.forEach(function(field){
        field.style.backgroundColor = "#f8d7da";
      });
    });
  
  }