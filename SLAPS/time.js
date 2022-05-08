var btn = document.getElementById("btn");
btn.addEventListener('click',function(e){
    e.preventDefault()
    console.log("CLICKED !")
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    console.log(name );
    var subject = "TIME LIMIT REACHED";
    var message = "DEAR USER YOU HAVE CROSSED YOUR SET DATA HENCE WE REQUEST YOU TO END YOUR METAVESR SESSION OR THE WEBSITE THAT YOU HAVE OPENED TO KNOW MORE VISIT OUR WEBSITE.";
    var body = 'name:' +name + '<br/> email:' + email +'<br/> subject' + subject + '<br/> message' + message;
    Email.send({
        Host : "smtp.yourisp.com",
        Username : "shobhitsingh25032003@gmail.com",
        Password : "hackfest@2503",
        To : email,
        From : "shobhitsingh25032003@gmail.com",
        Subject : subject,
        Body : body
    }).then(
      message => alert("YOUR TIME STARTS NOW !")
    );

})



  
 