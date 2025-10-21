// Handles contact form validation and UI feedback
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const fields = {
    fullName: {
      el: document.getElementById('fullName'),
      errorEl: document.getElementById('error-fullName'),
      testid: 'test-contact-error-fullName',
      validator: value => value.trim().length > 0 || 'Full name is required.'
    },
    email: {
      el: document.getElementById('email'),
      errorEl: document.getElementById('error-email'),
      validator: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Please enter a valid email address.'
    },
    subject: {
      el: document.getElementById('subject'),
      errorEl: document.getElementById('error-subject'),
      validator: value => value.trim().length > 0 || 'Subject is required.'
    },
    message: {
      el: document.getElementById('message'),
      errorEl: document.getElementById('error-message'),
      validator: value => value.trim().length >= 10 || 'Message must be at least 10 characters.'
    }
  };

  function showError(field, message) {
    field.errorEl.textContent = message || '';
    field.el.setAttribute('aria-invalid', !!message);
  }

  function clearErrors() {
    Object.values(fields).forEach(f => {
      f.errorEl.textContent = '';
      f.el.removeAttribute('aria-invalid');
    });
  }

  function validateAll() {
    let isValid = true;
    Object.values(fields).forEach(f => {
      const result = f.validator(f.el.value);
      if (result !== true) {
        showError(f, result);
        isValid = false;
      } else {
        showError(f, '');
      }
    });
    return isValid;
  }

  // Real-time validation on blur
  Object.values(fields).forEach(f => {
    f.el.addEventListener('blur', () => {
      const result = f.validator(f.el.value);
      showError(f, result === true ? '' : result);
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();
    const ok = validateAll();
    const successMessage = document.getElementById('successMessage');
    if (ok) {
      // Show success message, reset form
      successMessage.hidden = false;
      successMessage.textContent = 'Thanks! Your message was sent.';
      form.reset();
      // Clear ARIA-invalid flags
      Object.values(fields).forEach(f => f.el.removeAttribute('aria-invalid'));
      // Focus success for screen readers
      successMessage.focus && successMessage.focus();
    } else {
      successMessage.hidden = true;
      // Focus first invalid field
      const firstInvalid = Object.values(fields).find(f => f.el.getAttribute('aria-invalid') === 'true');
      if (firstInvalid) firstInvalid.el.focus();
    }
  });
});
