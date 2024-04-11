const js = "JavaScript for all"; // The original string
let lifo = ""; // The reversed string

// Reversing the string using LIFO approach
for (let i = js.length - 1; i >= 0; i--) {
  lifo += js[i]; // Appending each character to the reversed string
}

console.log(lifo); // Output the reversed string