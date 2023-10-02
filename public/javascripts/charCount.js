const textarea = document.getElementById("message");
const charCount = document.getElementById("charCount");

const maxCount = 250;

function updateCharCount() {
    const currCount = textarea.value.length;
    charCount.textContent = currCount;

    if (currCount > maxCount) {
        charCount.style.color = "#E83A47";
        textarea.value = textarea.value.slice(0, maxCount);
    } else {
        charCount.style.color = "#F2BA1D";
    }
}

module.exports = {
    updateCharCount
}