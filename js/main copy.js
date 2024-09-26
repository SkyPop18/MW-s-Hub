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