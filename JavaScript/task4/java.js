function validate(){
  let firstname = document.getElementById("firstname");
  let lastname = document.getElementById("lastname");
  let email = document.getElementById("email");
  let password1 = document.getElementById("password1");
  let password2 = document.getElementById("password2");
  if(firstname.value=="" ||lastname.value=="" ||email.value=="" ||password1.value==""){
    alert("Please Enter Every Details");
    return false;
  }
  else if(password1.value!=password2.value){
    alert("Passwords do not match");
    return false;
  }
  else{
    return true;
  }
} 