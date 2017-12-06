var modalButton = document.querySelector(".search-button");
var modal = document.querySelector(".select");
var arrivalDate = modal.querySelector("[name=arrival]");
var departureDate = modal.querySelector("[name=departure]");
var adultsAmount = modal.querySelector("[name=adults]");
var childrenAmount = modal.querySelector("[name=children]");
var form = document.querySelector("form");


modal.classList.add("form-hide")
modalButton.addEventListener("click", function(){
  modal.classList.toggle("form-hide")
});


function postValidation() {
  alert("Необходимо ввести количество взрослых и/или детей")
  modal.classList.remove("form-error");
}

function formValidate() {
  if ((!adultsAmount.value && !childrenAmount.value) || 
    (adultsAmount.value == "0" && childrenAmount.value == "0") || 
    (adultsAmount.value == "0" && !childrenAmount.value) || 
    (!adultsAmount.value && childrenAmount.value == "0")||
     (adultsAmount.value == 0 && childrenAmount.value != "0") ) {
     modal.classList.add("form-error");
     modal.offsetWidth = modal.offsetWidth;
     setTimeout(postValidation, 1000);
   
  return false
 } 
}