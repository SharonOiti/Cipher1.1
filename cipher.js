//QUESTION 1.
//1. `shiftAmount`: This variable would represent the fixed number by which each letter should be shifted.
//2. `originalMessage`: This variable would hold the original message that needs to be encrypted.
//3. `encryptedMessage`: This variable would store the resulting encrypted message after applying the cipher.
//4. `decryptedMessage`: This variable would be used to hold the decrypted message when the cipher is reversed.
//5. `alphabet`: This could be an array or a string containing all the letters in the alphabet, which would be used as a reference for the shifting process.
//6. `inviteLocation`: This would be a string variable that contains the actual location of the party, which needs to be encrypted before sending out the invites.
let shiftAmount = 3; // The fixed number for shifting the letters
let originalMessage = 'GARDEN'; // The original location to be encrypted
let encryptedMessage = ''; // To store the encrypted message
let decryptedMessage = ''; // To store the decrypted message after reversing the cipher
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // The reference alphabet
//QUESTION 2.
let partyLocation = "GARDEN"; // String - This holds the plaintext location of the party.
let shiftValue = 3; // Number - This is the number of positions each letter will be shifted in the cipher.
let encryptedMessage = ""; // String - This will be used to store the encrypted version of the party location.
let decryptedMessage = ""; // String - This will store the decrypted message if needed.
let isPartySafe = false; // Boolean - This could be used as a flag to indicate whether the party location is safe from unwanted guests.
//QUESTION 3.
//`partyLocation`: Since the location of the party is unlikely to change once it's set, you can declare it as `const`.
//`shiftValue`: The shift value for the cipher is typically constant for a given encryption process, so it can also be declared as `const`.
//`encryptedMessage` and `decryptedMessage`: These are expected to change as they will be assigned the results of the encryption and decryption processes, so they should be declared with `let`.
//`isPartySafe`: This is a Boolean flag that might change based on certain conditions, so it should be declared with `let`.
const partyLocation = "GARDEN"; // String
const shiftValue = 3; // Number
let encryptedMessage = ""; // String
let decryptedMessage = ""; // String
let isPartySafe = false; // Boolean
//QUESTON 4.
const shiftValue = 3;
Number.isInteger(shiftValue);
