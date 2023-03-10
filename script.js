// function validate(){
//     var name = document.getElementById("fname").value;
//     var mail = document.getElementById("mail").value;
//     var phonenu = document.getElementById("phone").value;
//     var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

//     if(!regName.test(name)){
//         alert('Invalid name given.');
//         return false;
//     }else{
//         alert('Valid name given.');
//         return false;
//     }
   
//      return true;
// }



function store(){
    let Name=document.getElementById("fname").value;
    let Email=document.getElementById("mail").value;
    let Phone=document.getElementById("phone").value;
    let Birthdate=document.getElementById("dob").value;
    let Time=document.getElementById("time").value;
    let Color=document.getElementById("color").value;
    let Payment=document.getElementById("ptype").value;
    let Age=document.getElementById("age").value;
    let Upload=document.getElementById("photo").value;
    

    let name=localStorage.setItem("Name",Name);
    let email=localStorage.setItem("Email",Email);
    let phone=localStorage.setItem("Phone",Phone);
    let birthdate=localStorage.setItem("Birthdate",Birthdate);
    let time=localStorage.setItem("Time",Time);
    let color=localStorage.setItem("Color",Color);
    let payment=localStorage.setItem("Payment",Payment);
    let age=localStorage.setItem("Age",Age);
    let upload=localStorage.setItem("Upload",Upload);
}



function validate(){ 
    var regName = " ";
    var name = document.getElementById('fname').value;
    if(!regName.test(name)){
        // alert('Please enter your full name (first & last name).');
        document.getElementById('fname').focus();
        return false;
    }else{
        alert('Valid name given.');
        return true;
    }

    var regPhon = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;
    var Phone = document.getElementById('phone').value;
    if(!regPhon.test(Phone)){
        alert('Please enter your current number');
        document.getElementById('phone').focus();
        return false;
    }else{
        alert('Valid number given.');
        return true;
    }
}