console.log("scriptrunning");
document.querySelector('.cross').style.display ='none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display='inline'
        document.querySelector('.cross').style.display='none'
    }
    else{
        document.querySelector('.ham').style.display='none'
        setTimeout(() =>{
            document.querySelector('.cross').style.display='inline'
        },300);
        
    }
})

// // function sendEmail(){
//     console.log("hello");
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "singhabhisheklko315@gmail.com",
//         Password : "6FAE6B21E0E94AE8DED726313AC7095EE24A",
//         To : "singhabhisheklko315@gmail.com",
//         From : "singhabhisheklko315@gmail.com",
//         Subject : "portfolio enquiry",
//         Body : "Name:" + document.getElementById("clientname").value + "<br> Email: " +document.getElementById("clientemail").value + "<br> phone no: " + document.getElementById("clientphone").value + "<br> Messages: " + document.getElementById("details").value + "<br> is client:" + document.getElementById("isclient").value
//     }).then(
//         message => alert("Query Submitted Succesfully")
//     );
   
// }