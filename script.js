// Timer
const userTime = document.getElementById('userTime');
if (userTime) {
  setInterval(() => {
    userTime.textContent = Date.now();
  }, 50);
}

// Avatar change logic
const avatarUrlInput = document.getElementById('avatarUrlInput');
const avatarFileInput = document.getElementById('avatarFileInput');
const userAvatar = document.getElementById('userAvatar');
const displayedUrl = document.getElementById('displayedUrl');

if (avatarUrlInput && userAvatar && displayedUrl) {
  avatarUrlInput.addEventListener('input', () => {
    const url = avatarUrlInput.value.trim();
    if (url) {
      userAvatar.src = url;
      displayedUrl.textContent = url;
    } else {
      userAvatar.src = 'avatar-placeholder.png';
      displayedUrl.textContent = '(none)';
    }
  });
}

if (avatarFileInput) {
  avatarFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        userAvatar.src = reader.result;
        displayedUrl.textContent = '(uploaded file)';
      };
      reader.readAsDataURL(file);
    }
  });
}

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const status = document.getElementById('formStatus');

    if (!name || !email || !message) {
      status.textContent = 'Please fill in all fields.';
      status.style.color = 'red';
    } else if (!email.includes('@')) {
      status.textContent = 'Enter a valid email address.';
      status.style.color = 'red';
    } else {
      status.textContent = 'Message sent successfully!';
      status.style.color = 'green';
      contactForm.reset();
    }
  });
}

