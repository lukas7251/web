function startCounterAnimation() {
  let timerElement = document.getElementById('timer');
  timerElement.classList.add('slide-up');

  let closeButton = document.getElementById('close-button');
  closeButton.addEventListener('click', function () {
    timerElement.classList.remove('slide-up');
    timerElement.classList.add('slide-down');
  });
}
// Set a timer to execute the animation for the counter after a predefined time
setTimeout(startCounterAnimation, 45000);


// Function to update the displayed time
let count = 0;
function updateCounter() {
  count++;
  let index = document.getElementById("counter");
  let unit = document.getElementById("counterUnit");

  // Update the displayed time based on the count value
  if (count < 60) {
    index.textContent = count;
    unit.textContent = 'second' + (count === 1 ? '' : 's');
  } else {
    const minutes = Math.floor(count / 60);
    const seconds = count % 60;

    index.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    unit.textContent = 'minutes';
  }
}
// To update the counter every second
setInterval(updateCounter, 1000);


// Function to show an alert of the user input
function showAlert() {
  const userInput = document.getElementById("userInput").value;
  alert("You typed: " + userInput);
}


// Function to toggle dark mode
function toggleDarkMode() {
  const element = document.body;
  element.classList.toggle("dark-mode");
  const darkMode = document.getElementById("dark");

  if (element.classList.contains("dark-mode")) {
    darkMode.textContent = "Light";
  } else {
    darkMode.textContent = "Dark";
  }
}


class ColorFetcher {
  constructor() {
    // Wait for the DOM to be fully loaded before executing
    document.addEventListener("DOMContentLoaded", () => {

      this.colorInput = document.getElementById("color-input");
      this.colorContainer = document.getElementById("color-container");
      this.fetchButton = document.getElementById("fetch-colors");

      this.fetchButton.addEventListener("click", () => this.fetchColors());
      this.fetchColors();
    });
  }

  // Convert a hex color code to RGB format
  hexToRgb(hex) {
    hex = hex.replace(/^#/, "");
    const bigint = parseInt(hex, 16);
    const rgb = [];
    for (let i = 0; i < 3; i++) {
      rgb[i] = (bigint >> (16 - i * 8)) & 255;
    }
    return { r: rgb[0], g: rgb[1], b: rgb[2] };
  }

  // Asynchronously fetch colors based on user input
  async fetchColors() {

    const selectedColor = this.colorInput.value;

    // Convert the selected color to RGB
    const rgbColor = this.hexToRgb(selectedColor);

    // API URL
    const apiUrl = `https://www.thecolorapi.com/scheme?rgb=${rgbColor.r},${rgbColor.g},${rgbColor.b}&format=json&mode=monochrome&count=6&named=true`;

    try {
      // Send a request to the API and wait for the response
      const response = await fetch(apiUrl);
      const data = await response.json();
      // Handle the retrieved color data
      this.handelData(data.colors);
    } catch (error) {
      console.error("Oops:", error);
    }
  }

  // Handle the retrieved color data and update
  handelData(colors) {
    // Clear the existing content of colorContainer
    this.colorContainer.innerHTML = "";

    // Loop through the retrieved colors and create color boxes with names
    colors.forEach((color) => {
      const colorBox = document.createElement("div");
      colorBox.classList.add("color-box");
      colorBox.style.backgroundColor = color.hex.value;

      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", "80");
      svg.setAttribute("height", "80");

      const colorName = document.createElement("p");
      colorName.classList.add("color-name");
      colorName.innerText = color.name.value;

      // Append the color and it's name to colorContainer
      colorBox.appendChild(svg);
      colorBox.appendChild(colorName);
      this.colorContainer.appendChild(colorBox);
    });
  }
}

const colorFetcher = new ColorFetcher();
