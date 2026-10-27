// Aahil Penwalla — Lab 9

// Select the existing page elements.
const likeBtn = document.querySelector("#like-btn");
const likeCount = document.querySelector("#like-count");
const likeMessage = document.querySelector("#like-message");
const themeBtn = document.querySelector("#theme-btn");
const goalsList = document.querySelector("#goals-list");

// Lab 9 Part 4: Select the fact button and display.
const factBtn = document.querySelector("#fact-btn");
const factDisplay = document.querySelector("#fact-display");

// Keep the goals list from Lab 8.
const goals = ["HTML", "CSS", "JavaScript"];

// Keep the organized like counter from Lab 8.
const LikeCounter = {
    likes: 0,

    increment() {
        this.likes = this.likes + 1;
        this.render();
    },

    render() {
        if (likeCount) {
            likeCount.textContent = `${this.likes} likes`;
        }

        if (likeMessage) {
            if (this.likes >= 10) {
                likeMessage.textContent = "Wow, thanks for all the likes!";
            } else if (this.likes >= 5) {
                likeMessage.textContent = "Glad you like it!";
            } else {
                likeMessage.textContent = "";
            }
        }
    }
};

// Named handler for the like button.
function incrementLikes() {
    LikeCounter.increment();
}

// Named handler for the dark mode button.
function toggleTheme() {
    document.body.classList.toggle("dark");
}

// Attach the existing event listeners with defensive checks.
if (likeBtn) {
    likeBtn.addEventListener("click", incrementLikes);
} else {
    console.warn("like-btn not found on this page");
}

if (!likeCount) {
    console.warn("like-count not found on this page");
}

if (!likeMessage) {
    console.warn("like-message not found on this page");
}

if (themeBtn) {
    themeBtn.addEventListener("click", toggleTheme);
} else {
    console.warn("theme-btn not found on this page");
}

// Build the goals list from the array.
if (goalsList) {
    goals.forEach(function(goal) {
        const item = document.createElement("li");
        item.textContent = goal;
        goalsList.appendChild(item);
    });
} else {
    console.warn("goals-list not found on this page");
}

// Show the starting like count.
LikeCounter.render();

// Lab 9 Part 2: Create a Promise that resolves after a delay.
function getGreetingAfterDelay() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Hello from the future!");
        }, 800);
    });
}

// Lab 9 Part 3: Consume the Promise using async/await.
async function showGreeting() {
    const message = await getGreetingAfterDelay();
    console.log(message);
}

// Run the greeting when the page loads.
showGreeting();

// Lab 9 Part 4: Fetch, parse, and display a cat fact.
async function loadFact() {
    if (!factBtn || !factDisplay) {
        console.warn("The fact button or display is missing");
        return;
    }

    // Show a loading message while the request is running.
    factDisplay.textContent = "Loading...";
    factBtn.disabled = true;

    try {
        const response = await fetch("https://catfact.ninja/fact");

        // Treat an unsuccessful HTTP response as an error.
        if (!response.ok) {
            throw new Error("Server responded with an error");
        }

        const data = await response.json();

        // Show the fact returned by the API.
        factDisplay.textContent = data.fact;
    } catch (error) {
        // Show a friendly message if the request fails.
        factDisplay.textContent =
            "Couldn't load a fact right now. Try again.";

        console.error(error);
    } finally {
        // Allow another attempt after success or failure.
        factBtn.disabled = false;
    }
}

// Attach the fact button only when both elements exist.
if (factBtn && factDisplay) {
    factBtn.addEventListener("click", loadFact);
} else {
    console.warn("fact-btn or fact-display not found on this page");
}