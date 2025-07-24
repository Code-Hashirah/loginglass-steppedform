// import ('axios.min.js');
sigInState=document.getElementById('submit');
let registerForm=document.forms['registerForm'];
registerForm.addEventListener('submit',(e)=>{
    e.preventDefault(e)
    sigInState.value="Loading...";
    let name=registerForm['Name'].value.trim();
    let email=registerForm['Email'].value.trim();
    let status="disabled";
    let phone=registerForm['Phone'].value.trim();
    let imageInput = registerForm['Pic'];
    // console.log(imageInput); // Check what imageInput contains
    let imageFile = imageInput.files[0];
    let formData=new FormData();
    let address=registerForm['Address'].value.trim();
    let password=registerForm['Password'].value.trim();
    let role="user";
    let url="register_server.php";
    formData.append('serverimage',imageFile);
    if(name.length==0){
        document.getElementById('nameErr').innerHTML="Field is required!";
    }
    else{
        document.getElementById('nameErr').style.color="green";
        document.getElementById('nameErr').innerHTML="Good!";
    }
    if(email.length==0){
        document.getElementById('emailErr').innerHTML="Field is required!";
    }
    else{
        document.getElementById('emailErr').className="text-success";
        document.getElementById('emailErr').innerHTML="Good!";
    }
    if(phone.length==0){
        document.getElementById('phoneErr').innerHTML="Field is required!";
    }
    else{
        document.getElementById('phoneErr').className="text-success";
        document.getElementById('phoneErr').innerHTML="Good!";
    }
    // if(imageFile.length==0){
    //     document.getElementById('imgErr').innerHTML="Field is required!";
    // }
    // else{
    //     document.getElementById('imgErr').className="text-success";
    //     document.getElementById('imgErr').innerHTML="Good!";
    // }
    if(address.length==0){
        document.getElementById('addressErr').innerHTML="Field is required!";
    }
    else{
        document.getElementById('addressErr').style.color="green";
        document.getElementById('addressErr').innerHTML="Good!";
    }
    if(address.length==0){
        document.getElementById('passwordErr').innerHTML="Field is required!";
    }
    else{
        document.getElementById('passwordErr').style.color="green";
        document.getElementById('passwordErr').innerHTML="Good!";
    }
    if(address.length==0){
        document.getElementById('confirmErr').innerHTML="Field is required!";
        // sigInState.style.visibility="hidden";
    }
    else{
        sigInState.style.visibility="visibility";
        document.getElementById('imgErr').style.color="green";
        document.getElementById('imgErr').innerHTML="Good!";
    }

//    sigInState.onclick = callMultipleFunctions;
    const userData={
    servername:name,            
    serveremail:email,    
    serverstatus:status,  
    serverphone:phone,                         
    serveraddress:address,          
    serverpassword:password,
    serverrole:role              
    };
    // formData.append('servername',name);
    // formData.append('serveremail',email);
    // formData.append('serverstatus',status);
    // formData.append('serverphone',phone);
    // formData.append('serveraddress',address);
    // formData.append('serverpassword',password);
    // formData.append('serverrole',role);
    // console.log(formData);
    axios.post(url,userData).then(response=>{
        if(response.data.success){
            console.log(response.data.success);
           window.alert("Registration complete");
            setTimeout(()=>{
                // successMsg.innerHTML="Access Granted, Welcome!";
                console.log("Ready to redirect");
                location.assign('login.php');
            }, 2000)
        }
        else{
            console.log(response.data)
            console.log("no response");
            // window.alert(JSON.stringify(response.data))
        }
    })
})











// **************************step design code in Js*********************
let currentStep=1;
const form=document.getElementById('main-form');
const formStep=form.querySelectorAll('.form-step');

function showStep(stepNumber){
    formStep.forEach((step)=>step.classList.remove('active'));
    formStep[stepNumber - 1].classList.add('active');
}

function nextStep(stepNumber){
    if(stepNumber >= currentStep + 1){
        currentStep++;
        showStep(currentStep);
    }
}

function prevStep(){
    if(currentStep > 1){
        currentStep--;
        showStep(currentStep);
    }
}
showStep(currentStep);

