// Exercise #1:
// When the user clicks the 'copy' button, copy the user input to the output area
// Fetch JavaScript objects representing specific elements in the DOM
// Add an event listener on the target element
// Callback function to handle event

$('document').ready(() => {
  $('#copy').on('click', (event) => {
    console.log('click event', event);
    $('#output1').text($('#userInput1').val());
  });
});

// Exercise #2:
// When the user enters input text, copy the user input to the output area
// Fetch JavaScript objects representing specific elements in the DOM
// Add an event listener on the target element
// Callback function to handle event

$('document').ready(() => {
  $('#userInput2').on('input', (event) => {
    console.log('input event', event);
    $('#output2').text($('#userInput2').val());
  });
});
