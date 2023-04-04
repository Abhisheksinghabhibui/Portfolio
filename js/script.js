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

function sendEmail(){
    let name= document.getElementById("clientname").value;
    let email= document.getElementById("clientemail").value;
    let phone= document.getElementById("clientphone").value;
    let details= document.getElementById("details").value;
    let checkbox= document.getElementById("isclient").value;



    Email.send({
        SecureToken :"deba718d-f6f1-4510-a782-9d99f15b727c",
        From : "singhabhisheklko315@gmail.com",
        To : "singhabhisheklko315@gmail.com",
        Subject : "Portfolio enquiry",
        Body : "NAME:" + name + "<br> Email: " + email +"__"+"__"+ phone+ "__" + details + "__"+ checkbox
    }).then(
        message => alert("Query Submitted Succesfully")
    );
   
}