const form = document.getElementById('multi-step-form');
const steps = form.querySelectorAll('.form-step');
const prevButtons = form.querySelectorAll('.prev-step');
const nextButtons = form.querySelectorAll('.next-step');

let currentStep = 0;

nextButtons.forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault();
        steps[currentStep].classList.remove('active');
        currentStep++;
        if (currentStep >= steps.length) {
            currentStep = steps.length - 1;
        }
        steps[currentStep].classList.add('active');
    });
});

prevButtons.forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault();
        steps[currentStep].classList.remove('active');
        currentStep--;
        if (currentStep < 0) {
            currentStep = 0;
        }
        steps[currentStep].classList.add('active');
    });
});
