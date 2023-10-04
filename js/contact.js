  function validateForm(event) {
    // Prevent the default form submission
    event.preventDefault();
  
    // Retrieve values of the form fields
    let firstName = document.forms["myForm"]["fname"].value;
    let lastName = document.forms["myForm"]["lname"].value;
    let email = document.forms["myForm"]["mail"].value;
    let subject = document.forms["myForm"]["subject"].value;
    let message = document.forms["myForm"]["message"].value;
    let error = 0;

    // Check if any of the fields is empty
    if(firstName===""){
      document.getElementById("fname-error").style.display = "block";
      error=1;
    }
    else{
      document.getElementById("fname-error").style.display = "none";
    }
    if(firstName===""){
      document.getElementById("lname-error").style.display = "block";
      error=1;
    }
    else{
      document.getElementById("lname-error").style.display = "none";
    }
    if(email===""){
      document.getElementById("email-error").style.display = "block";
      error=1;
    }
    else{
      document.getElementById("email-error").style.display = "none";
    }
    if(subject===""){
      document.getElementById("subj-error").style.display = "block";
      error=1;
    }
    else{
      document.getElementById("subj-error").style.display = "none";
    }
    if(message===""){
      document.getElementById("msg-error").style.display = "block";
      error=1;
    }
    else{
      document.getElementById("msg-error").style.display = "none";
    }
    
    if(error==0){
      alert("Message sent");
    }
  
    //return true; // If all fields are filled, the form can be submitted
  }
  