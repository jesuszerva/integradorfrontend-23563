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

document.getElementById("descuento").disabled = true;
function calculototal(){
    const precio= 1000;
    let cant = document.getElementById("cant").value;
    if (cant>=1){
      document.getElementById("descuento").disabled = false;
        let total = cant*precio;
        let desc = document.getElementById("descuento").value;
        total = total - (total*desc/100);
        document.getElementById("total").innerHTML = total;
        document.getElementById("total").className = "bg-info";
    } else if(cant<=0){
        document.getElementById("descuento").disabled = true;
        document.getElementById("total").className = "text-danger";
        document.getElementById("total").innerHTML = "Cantidad debe ser mayor a cero";
    }
    
}
