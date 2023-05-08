const email=document.getElementById('Email');
email.addEventListener("input",function(){
    const emailvalue=this.value.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid=emailRegex.test(emailvalue);
    
    const error= document.getElementById('errormessage');
    if(!isValid){
        error.style.display='block';
    }
    else{
        error.style.display='none';
    }


});
