// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()


function calculototal(){
    const precio= 1000;
    let cant = document.getElementById("cant").value;
    if (cant>=1){
        let total = cant*precio;
        let desc = document.getElementById("descuento").value;
        total = total - (total*desc/100);
        document.getElementById("total").innerHTML = total;
        document.getElementById("total").className = "bg-info";
    } else{
        document.getElementById("total").className = "text-danger";
        document.getElementById("total").innerHTML = "La cantidad de ticket debe ser mayor a cero";
    }
    
}

