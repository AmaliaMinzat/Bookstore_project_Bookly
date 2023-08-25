function validateForm() {
    let x = document.forms["myForm"]["First Name"]["Last name"]["Enter your email adress"]["Enter your subject"]["Message"].value;
    if (x == "") {
      alert("This field is manadatory to be filled");
      return false;
    }
  }