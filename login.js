
import ('../j  s/axios.min.js');

let loginState=document.getElementById('login')
let successMsg=document.getElementById('successMsg');
successMsg.style.display="none";
let loginForm=document.forms['login'];
loginForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    loginState.value="Loading...";
    let email=loginForm['Email'].value.trim();
    let password=loginForm['Password'].value.trim();
    let url='loginServer.php';
    const userData={
        serverEmail:email,
        serverPassword:password
    };
    if(email.length==0 || password.length==0){
        document.getElementById('emailError').innerHTML="Field is required *";
        document.getElementById('passwordError').innerHTML="Field is required *";
    }
    // console.log("Success1")
    axios.post(url,userData).then(response=>{
        var jsonStart = response.data.indexOf('{'); // Find the first '{' character
        var jsonResponse = response.data.slice(jsonStart); // Extract the JSON part
        
        try {
          var responseJSON = JSON.parse(jsonResponse);
          var successValue = responseJSON.success;
        
        //   console.log(successValue); // This will log true
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
        if(successValue){
            console.log(response.data);
            successMsg.style.display="block";
            loginState.value="Login";
            document.getElementById('emailError').innerHTML="Filled!";
            document.getElementById('passwordError').innerHTML="Filled!";
            setTimeout(()=>{
                successMsg.style.backgroundColor="green";
                successMsg.innerHTML="Access Granted, Welcome!";
                console.log("Ready to redirect");
                location.assign('../../views/dashboard.php');
            }, 5000)
           
            
        }
        else{
           setTimeout(()=>{
            // console.log(successValue);
           
            successMsg.style.display="block";
            successMsg.style.backgroundColor="red";
            successMsg.innerHTML=JSON.stringify(responseJSON);
           loginState.value="Login";
           },1000)
        }
        
    }).catch(err=>{
        console.log(err)
        loginState.value="Login";
    });
})
