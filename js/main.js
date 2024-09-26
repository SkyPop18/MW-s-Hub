// Function to show or hide buttons based on search input and selected category
function filterButtons() {
    

    buttons.forEach(button => {
        const tags = button.getAttribute('data-tags').toLowerCase();
        const category = button.getAttribute('data-category').toLowerCase();

        // Check if the search input matches the tags
        const matchesSearch = tags.includes(searchInput);

        // Check if the selected category matches or is empty (i.e., "All Categories")
        const matchesCategory = !categoryInput || category === categoryInput;

        // Show or hide the button based on the search and category filters
        if (matchesSearch && matchesCategory) {
            button.style.display = 'inline-block'; // Show button
        } else {
            button.style.display = 'none'; // Hide button
        }
    });
}

// Existing functions to show/hide popups and copy code remain unchanged
function showPopup(popupId) {
    document.getElementById(popupId).style.display = 'block';
    document.querySelector('.popup-backdrop').style.display = 'block';
}

function hidePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
    document.querySelector('.popup-backdrop').style.display = 'none';
}

function copyCode(elementId) {
    const codeElement = document.getElementById(elementId);
    const codeText = codeElement.textContent;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(codeText)
            .then(() => alert('Code copied to clipboard!'))
            .catch(() => alert('Failed to copy code.'));
    } else {
        // Fallback for older browsers
        const range = document.createRange();
        range.selectNodeContents(codeElement);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);

        try {
            document.execCommand('copy');
            alert('Code copied to clipboard!');
        } catch (err) {
            alert('Failed to copy code.');
        }
        selection.removeAllRanges();
    }
}
