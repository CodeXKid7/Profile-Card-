// ========== PROFILE CARD CLOCK ==========
const userTime = document.getElementById("userTime");
userTime.textContent = Date.now();

setInterval(() => {
  userTime.textContent = Date.now();
}, 1000);

// ========== AVATAR UPLOAD & URL HANDLER ==========
const avatarPreview = document.getElementById("userAvatar");
const avatarUrlInput = document.getElementById("avatarUrlInput");
const avatarFileInput = document.getElementById("avatarFileInput");
const displayedUrl = document.getElementById("displayedUrl");
const avatarDropZone = document.getElementById("avatarDropZone");

let currentBlobUrl = null;

// --- Handle URL input ---
avatarUrlInput.addEventListener("input", () => {
  const url = avatarUrlInput.value.trim();
  if (url) displayImage(url);
  else clearPreview();
});

// --- Handle file upload ---
avatarFileInput.addEventListener("change", () => {
  const file = avatarFileInput.files[0];
  if (!file) return;

  if (currentBlobUrl) URL.revokeObjectURL(currentBlobUrl);
  const blobUrl = URL.createObjectURL(file);
  currentBlobUrl = blobUrl;
  displayImage(blobUrl);
});

// --- Drag & Drop upload support ---
avatarDropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  avatarDropZone.classList.add("dragover");
});

avatarDropZone.addEventListener("dragleave", () => {
  avatarDropZone.classList.remove("dragover");
});

avatarDropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  avatarDropZone.classList.remove("dragover");
  const file = e.dataTransfer.files[0];
  if (file) {
    if (currentBlobUrl) URL.revokeObjectURL(currentBlobUrl);
    const blobUrl = URL.createObjectURL(file);
    currentBlobUrl = blobUrl;
    displayImage(blobUrl);
  }
});

// --- Helper functions ---
function displayImage(url) {
  avatarPreview.src = url;
  displayedUrl.textContent = url;
}

function clearPreview() {
  avatarPreview.src = "https://i.pravatar.cc/200";
  displayedUrl.textContent = "(none)";
}