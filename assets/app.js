document.getElementById("submit").addEventListener("click", function() {
    var inputValue = parseInt(document.getElementById("intervalsInput").value);
    var outputElement = document.getElementById("output");

    if (!isNaN(inputValue)) {
        var isPower = isPowerOfTwo(inputValue);
        outputElement.innerText = isPower ? "true" : "false";
    } else {
        outputElement.innerText = "Please enter a valid number.";
    }
});

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return (n > 0 && (n & (n - 1)) === 0);
};


// Add this script to clear the input field on page load
document.addEventListener('DOMContentLoaded', function() {
    var intervalsInput = document.getElementById('intervalsInput');
    intervalsInput.value = ''; // Set the input value to an empty string
  });