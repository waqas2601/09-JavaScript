// Get refrences //
const tabs = document.querySelectorAll(".tab");

const contents = document.querySelectorAll(".content");

// Loop through all events and add click event

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active from all tabs //
    tabs.forEach((t) => t.classList.remove("active"));

    // Hide all contents //
    contents.forEach((c) => c.classList.remove("show"));

    // Add active to click tab //
    tab.classList.add("active");

    // Get the data-tab value //
    const tabNumber = tab.getAttribute("data-tab");

    // show the correct content base on iD //
    document.getElementById("tab" + tabNumber).classList.add("show");
  });
});
