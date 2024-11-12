# Tree Menu and Card Removal UI
This project implements two interactive UI components: a collapsible tree menu and a dynamic card removal interface. Both components use JavaScript to handle user interactions with efficient DOM manipulation.

# Features
# 1- Tree Menu:

- A collapsible tree menu that allows users to expand or collapse nested items.
- Only one event listener is used for handling clicks on the menu, thanks to event delegation.
- All nested lists are initially hidden.
- Hovering over a list item makes its text bold, enhancing the visual experience.
-
  # 2- Card Removal Interface:

  - Each card (representing an animal) contains information and a close button ("[x]") in the top right corner.
- Clicking the close button removes the specific card from the DOM.
- This is achieved using a single event listener on the container, allowing dynamic handling of all card removal buttons.
- 
# Getting Started
Follow these instructions to get the project up and running on your local machine.

# Prerequisites
- A text editor (e.g., Visual Studio Code)
- A browser to view the project
- (Optional) Live Server Extension for VS Code to view changes in real-time
- 
# Installation
Clone the Repository
#bash
Code kopieren
git clone https://github.com/your-username/your-repository.git
Navigate to the Project Directory
# bash

cd your-repository
# Usage
Open index.html:

# 1- Open index.html in your browser directly, or
Use a live server for real-time changes by opening index.html in VS Code and selecting "Go Live".
# Tree Menu:

All nested lists are hidden by default.
Click on any list item to expand or collapse its child items.
Hover over list items to see the bold hover effect.
Card Removal:

Each card has an "[x]" button in the top-right corner.
Click the "[x]" button to remove the specific card from the display.
Project Structure
#graphql

.
├── index.html          # Main HTML file
├── style.css           # CSS file for styling the tree menu and cards
└── script.js           # JavaScript file for implementing tree and card functionality
#Code Overview
index.html: Contains the HTML structure for both the tree menu and card removal sections.
style.css: Defines styles for the collapsible tree menu, card layout, and hover effects.
script.js: Implements JavaScript functionality to:
Toggle visibility of nested lists in the tree menu.
Remove cards dynamically from the DOM when their respective close buttons are clicked.
License
This project is open source and available under the MIT License.

