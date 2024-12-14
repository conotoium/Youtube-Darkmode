// Check for stored preference
chrome.storage.sync.get("customDarkMode", (data) => {
    if (data.customDarkMode) {
        enableDarkMode();
    }
});

// Apply styles by toggling a class on the body
function enableDarkMode() {
    document.body.classList.add("custom-dark-mode");
    console.log("Custom Dark Mode Enabled");
}

// Disable styles
function disableDarkMode() {
    document.body.classList.remove("custom-dark-mode");
    console.log("Custom Dark Mode Disabled");
}

