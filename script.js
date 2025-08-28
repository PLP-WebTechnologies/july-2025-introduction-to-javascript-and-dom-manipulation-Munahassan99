// ===========================
// Part 1: Variables & Conditionals
// ===========================

// Custom smoothie menu
let smoothieMenu = [
    { name: "Berry Bliss", price: 6 },
    { name: "Golden Mango", price: 7 },
    { name: "Chocolate Dream", price: 5 },
    { name: "Tropical Sunrise", price: 6 }
];

let totalOrderAmount = 0;

// Check if a smoothie is available
let favoriteSmoothie = "Golden Mango";
if (smoothieMenu.some(item => item.name === favoriteSmoothie)) {
    console.log(`${favoriteSmoothie} is ready for you!`);
} else {
    console.log(`${favoriteSmoothie} is not on the menu.`);
}

// ===========================
// Part 2: Custom Functions
// ===========================

// Function to calculate total order
function calculateOrderTotal() {
    totalOrderAmount = smoothieMenu.reduce((sum, item) => sum + item.price, 0);
    document.getElementById("orderTotal").innerText = totalOrderAmount;
}

// Function to greet a customer
function greetCustomer(name = "Friend") {
    alert(`Hello ${name}! Welcome to Luna & Bloom 🌸`);
}

// ===========================
// Part 3: Loops
// ===========================

// Loop to display smoothies
let smoothieListEl = document.getElementById("smoothieMenuList");
for (let i = 0; i < smoothieMenu.length; i++) {
    let li = document.createElement("li");
    li.textContent = `${smoothieMenu[i].name} - $${smoothieMenu[i].price}`;
    smoothieListEl.appendChild(li);
}

// Loop to apply a $1 discount
for (let smoothie of smoothieMenu) {
    smoothie.price -= 1;
}

// ===========================
// Part 4: DOM Interactions
// ===========================

// 1. Greeting button
document.getElementById("sayHi").addEventListener("click", () => {
    greetCustomer();
});

// 2. Calculate total button
document.getElementById("calcTotalBtn").addEventListener("click", () => {
    calculateOrderTotal();
});

// 3. Contact form submission
document.getElementById("messageForm").addEventListener("submit", (event) => {
    event.preventDefault();
    let custName = document.getElementById("custName").value;
    alert(`Thanks ${custName}! Your message has been sent 💌`);
    event.target.reset();
});
