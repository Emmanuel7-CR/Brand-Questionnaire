// Enhanced form validation for EDUN Graphics brand questionnaire
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('brandForm');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    let isValid = true;

    // Validate all required text inputs and textareas
    const requiredInputs = form.querySelectorAll('input[required]:not([type="radio"]), textarea[required]');
    requiredInputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.classList.add('is-invalid');
      } else {
        input.classList.remove('is-invalid');
      }
    });

    // Validate logo type (radio group)
    const logoChecked = form.querySelector('input[name="LogoType"]:checked');
    if (!logoChecked) {
      isValid = false;
      // Optional: add visual feedback
      const logoGroup = form.querySelector('.logo-options');
      if (logoGroup) {
        logoGroup.classList.add('was-validated');
        // You could add a small error note if desired
      }
    }

    if (!isValid) {
      e.preventDefault();
      alert('Please complete all required fields, including your preferred logo type.');
    }
  });

  // Optional: remove error styling when user starts typing
  form.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', () => {
      if (input.classList.contains('is-invalid')) {
        input.classList.remove('is-invalid');
      }
    });
  });
});
