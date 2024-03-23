// Code your solutions in this file
// Function to create thank you cards
function writeCards(names, eventName) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouMessages;
  }
  
  // Function to count down from a positive integer to zero
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  // Example usage of writeCards function
  const names = ["Charlie", "Samip", "Ali"];
  const eventName = "birthday";
  const thankYouCards = writeCards(names, eventName);
  console.log(thankYouCards);
  
  // Example usage of countDown function
  countDown(10);
  