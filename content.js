// === CONFIGURATION ===
// Change this variable to the class name of the div you want to delete.
const CLASS_TO_DELETE = "fc-ab-root";
// =====================

/**
 * Deletes all elements with the specified class name.
 */
function deleteDivs() {
  // Use a query selector to find all elements with the given class.
  const elements = document.querySelectorAll(`.${CLASS_TO_DELETE}`);

  // Loop through the found elements and remove them from the DOM.
  elements.forEach(element => {
    // Check if the element has a parent node before attempting to remove it.
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
      console.log(`Removed a div with class: ${CLASS_TO_DELETE}`);
    }
  });
}

// Run the function immediately in case the div is already in the DOM.
deleteDivs();

// Use a MutationObserver to handle dynamically loaded content.
// This will watch for new elements being added to the page.
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    // Check if new nodes were added.
    if (mutation.addedNodes.length > 0) {
      deleteDivs(); // Call the function again to check for new divs.
    }
  });
});

// Start observing the entire document body for changes in the DOM tree.
observer.observe(document.body, { childList: true, subtree: true });

console.log(`Auto-Delete Div extension is active. Looking for elements with class: "${CLASS_TO_DELETE}"`);
