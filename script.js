document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");

  // Add click event
  container.addEventListener("click", (event) => {
    // if clicked element is a remove

    if (event.target.classList.contains("remove-button")) {
      // Get all .P elements as an array
      const panes = Array.from(document.querySelectorAll(".pane"));

      // Filter to find and remove  P
      panes.filter((pane) => {
        if (pane.contains(event.target)) {
          pane.remove();
          return true; // remove the P
        }
        return false;
      });
    }
  });
});
