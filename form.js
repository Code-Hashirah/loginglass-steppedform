let currentStep=2;
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