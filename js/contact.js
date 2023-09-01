  function validateForm(event) {
    // Prevent the default form submission
    event.preventDefault();
  
    // Retrieve values of the form fields
    let firstName = document.forms["myForm"]["fname"].value;
    let lastName = document.forms["myForm"]["lname"].value;
    let email = document.forms["myForm"]["mail"].value;
    let subject = document.forms["myForm"]["subject"].value;
    let message = document.forms["myForm"]["message"].value;
  
    // Check if any of the fields is empty
    if (firstName === "" || lastName === "" || email === "" || subject === "" || message === "") {
      alert("All fields are mandatory and must be filled.");
      return false;
    }
  
    return true; // If all fields are filled, the form can be submitted
  }
  