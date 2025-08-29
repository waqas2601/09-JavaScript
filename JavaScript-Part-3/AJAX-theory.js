// Ajax basic theory //
// AJAX lets your webpage talk to the server without reloading the whole page.

// It helps websites send/receive data in the background — without refreshing.
// Like how YouTube loads more videos as you scroll. Or how Gmail fetches new emails without refreshing the page.

fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => {
    console.log("Data received:", data);
    // update the page using data
  })
  .catch((error) => {
    console.log("Error:", error);
  });
