const forms = document.querySelectorAll('.form-step');
const prevButtons = document.querySelectorAll('.prev-step');
const nextButtons = document.querySelectorAll('.next-step');
var formInstance1 = document.getElementsByName('step1');
var formInstance2 = document.getElementsByName('step2');
var formInstance3 = document.getElementsByName('step3');



let currentStep = 0;

function updateURL() {
    history.replaceState(null, '', `#${currentStep + 1}`);
}

function showStep(stepIndex) {
    forms.forEach((form, index) => {
        if (index === stepIndex) {
            form.style.display = 'block';
        } else {
            form.style.display = 'none';
        }
    });
}

window.addEventListener('load', () => {
    const initialStep = parseInt(window.location.hash.substring(1)) || 0;
    currentStep = initialStep;
    showStep(currentStep);
    updateURL();
});

nextButtons.forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault();
        currentStep++;
        if (currentStep >= forms.length) {
            currentStep = forms.length - 1;
        }
        showStep(currentStep);
        updateURL();
    });
});

prevButtons.forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault();
        currentStep--;
        if (currentStep < 0) {
            currentStep = 0;
        }
        showStep(currentStep);
        updateURL();
    });
});
