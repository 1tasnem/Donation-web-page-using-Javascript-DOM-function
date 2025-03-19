function getInputAmount(id)
{
    const Value =  parseFloat(document.getElementById(id).value);
    return Value;
    
    
}
function clearInput(id) {
    let inputField = document.getElementById(id);
    //console.log("Donation Amount:", inputField.value); // Capture value
    inputField.value = ""; // Clear input field
  }

  function openModal() {
    
    document.getElementById("successModal").classList.remove("hidden");
  }

  function closeModal() {
    document.getElementById("successModal").classList.add("hidden");
  }
 
  