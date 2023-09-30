const textarea = document.getElementById("message");
const charCount = document.getElementById("charCount");

const maxCount = 250;

textarea.addEventListener("input", function updateCharCount() {
    const currCount = textarea.value.length;
    charCount.textContent = currCount;

    if (currCount >= maxCount) {
        charCount.style.color = "#E83A47";
        return;
    } else {
        charCount.style.color = "#F2BA1D";
    }
})

module.exports = {
    updateCharCount
}