// events behind the scene

// You register an event listener using addEventListener()

// Browser waits for that event (click, input, keydown, etc.)

// When event happens:

// Browser creates an event object

// Calls your function and gives it that object

// Your function runs using that event info


// what happens 

// JavaScript doesn’t constantly check if a button is clicked
// Instead, it tells the browser:

// ❗ “Hey browser, if someone clicks this button, call this function.”

// So you're registering a callback function (a function that should be called later).
