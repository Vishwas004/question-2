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
    let Name=document.getElementById("fname").value;
    let Phone=document.getElementById("phone").value;
    let Age=document.getElementById("age").value;

    if (Name == "") {
        alert("plz...enter tha name");
        return false;
    }
    if (!isNaN(Name)) {
        alert("plz...enter tha name");
        return false;
    }
    if (Age < 10) {
        alert("your age is very small");
        return false; 
    } 
    if (isNaN(Phone)) {
        alert("plz...Enter Only Number");
        return false; 
    } 
    
    return true;
}
// function add(){
//     if(validate() == true){
//     let Name=document.getElementById("fname").value;
//     let Email=document.getElementById("mail").value;
//     let Phone=document.getElementById("phone").value;
//     let Birthdate=document.getElementById("dob").value;
//     let Time=document.getElementById("time").value;
//     let Color=document.getElementById("color").value;
//     let Payment=document.getElementById("ptype").value;
//     let Age=document.getElementById("age").value;
//     let Upload=document.getElementById("photo").value;  
        
//     Name.push({
//         name:name;
//     })
// }
// }