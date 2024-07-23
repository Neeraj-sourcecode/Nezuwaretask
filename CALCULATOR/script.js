// Function to play key press sound
function playKeySound() {
    var audio = document.getElementById('keySound');
    audio.currentTime = 0; // Rewind to the start
    audio.play();
}

// Function to append characters to the input box
function appendToInput(value) {
    playKeySound(); // Play sound
    document.getElementById('inputBox').value += value;
}

// Function to clear the input box
function clearInput() {
    playKeySound(); // Play sound
    document.getElementById('inputBox').value = '';
}

// Function to delete the last character from the input box
function deleteChar() {
    playKeySound(); // Play sound
    let currentValue = document.getElementById('inputBox').value;
    document.getElementById('inputBox').value = currentValue.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    playKeySound(); // Play sound
    let input = document.getElementById('inputBox').value;
    let result;
    try {
        result = eval(input);
        document.getElementById('inputBox').value = result;
    } catch (error) {
        document.getElementById('inputBox').value = 'Error';
    }
}
