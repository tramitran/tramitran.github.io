var frmvalidator = new Validator("myform");
 frmvalidator.addValidation("FirstName","req",
      "Please enter your First Name");
 frmvalidator.addValidation("FirstName","maxlen=20",
      "Max length for First Name is 20 characters");
  frmvalidator.addValidation("FirstName","minlen=2",
       "Min length for First Name is 2 characters");
 frmvalidator.addValidation("FirstName", "alpha", 
        "First name can only be letters");
 


frmvalidator.addValidation("LastName","req","Please enter your Last Name");
frmvalidator.addValidation("LastName","maxlen=50",
        "Max length for Last Name is 50 characters");
frmvalidator.addValidation("LastName","minlen=2",
        "Min length for Last Name is 2 characters");
frmvalidator.addValidation("LastName", "alpha", 
        "Last Name can only be letters");

 
 






frmvalidator.addValidation("Email","maxlen=50");
 frmvalidator.addValidation("Email","req");
 frmvalidator.addValidation("Email","email");
 
 frmvalidator.addValidation("Phone","maxlen=50");
 frmvalidator.addValidation("Phone","numeric");
 
 frmvalidator.addValidation("Address","maxlen=50");
 frmvalidator.addValidation("Country","dontselect=000");

