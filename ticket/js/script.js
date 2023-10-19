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

  document.getElementById("nombre").disabled = true;
  document.getElementById("apellido").disabled = true;
  document.getElementById("email").disabled = true;
  document.getElementById("cant").disabled = true;
  document.getElementById("descuento").disabled = true;
  document.getElementById("borrar").disabled = true;
  document.getElementById("resumen").disabled = true;

  function habilitaInputs(){
    document.getElementById("nombre").disabled = false;
    document.getElementById("apellido").disabled = false;
    document.getElementById("email").disabled = false;
    document.getElementById("cant").disabled = false;
    document.getElementById("descuento").disabled = false;
    document.getElementById("borrar").disabled = false;
    document.getElementById("total").innerHTML = "0";
    document.getElementById("nombre").focus();
    
  }

  function cantEntradas(){
    let cantidad = document.querySelector("#cant").value;
    if(cantidad>=1){
    document.getElementById("resumen").disabled = false;
    document.getElementById("total").className = "text-dark";
    document.getElementById("total").innerHTML = "0";
    document.getElementById("descuento").disabled = false;

    } else{
      document.getElementById("descuento").disabled = true;
      document.getElementById("resumen").disabled = true;
      document.getElementById("total").className = "text-danger";
      document.getElementById("total").innerHTML = "Cantidad debe ser mayor a cero";
    }
  }

  // document.querySelector("resumen").addEventListener("click" , calculototal);

  function calculototal(){
    const precio= 1000;
    let cant = document.getElementById("cant").value;

    // if (cant>=1){
        let total = cant*precio;
        let desc = document.getElementById("descuento").value;
        total = total - (total*desc/100);
        document.getElementById("total").innerHTML = total;
        document.getElementById("descuento").disabled = true;
    // } else if(cant<=0){
        // d.getElementById("resumen").disabled = true;
        // document.getElementById("total").className = "text-danger";
        // document.getElementById("total").innerHTML = "Cantidad debe ser mayor a cero";
    // }
    
}

function seleccionTicket(nombre){
  let tipoDescuento = document.getElementById("descuento"); //Id del select de opciones (Estudiante, Trainee, Orador)
  document.getElementById("cardnombre").focus(); //Id de la tarjeta de cada opcion para desde ahi cambiar el valor de categoria
  tipoDescuento.value = nombre //
  habilitaInputs();
  
}

function borraForm(){
  location.reload();
}

