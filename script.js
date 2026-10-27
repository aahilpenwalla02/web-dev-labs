// Aahil Penwalla — Lab 8

// Part 1: Synchronous and asynchronous execution.
console.log("1. Starting");

setTimeout(function() {
    console.log("2. This runs later");
}, 1000);

console.log("3. This runs immediately");

// Select the page elements.
const likeBtn = document.querySelector("#like-btn");
const likeCount = document.querySelector("#like-count");
const likeMessage = document.querySelector("#like-message");
const themeBtn = document.querySelector("#theme-btn");
const goalsList = document.querySelector("#goals-list");

// Part 2: Store the goals in an array.
const goals = ["HTML", "CSS", "JavaScript"];

// Parts 1 and 5: Group the counter's state and named methods.
const LikeCounter = {
    likes: 0,

    // Update the number, then ask render() to update the page.
    increment() {
        this.likes = this.likes + 1;
        this.render();
    },

    // Update the displayed count and reward message.
    render() {
        if (likeCount) {
            likeCount.textContent = `${this.likes} likes`;
        }

        // Part 3: Choose a message using three conditions.
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

// Part 1: Use a named function for the like-button handler.
function incrementLikes() {
    LikeCounter.increment();
}

// Keep the dark-mode behavior in a named function.
function toggleTheme() {
    document.body.classList.toggle("dark");
}

// Part 4: Check that the like button exists before using it.
if (likeBtn) {
    likeBtn.addEventListener("click", incrementLikes);
} else {
    console.warn("like-btn not found on this page");
}

// Explain missing display elements with clear warnings.
if (!likeCount) {
    console.warn("like-count not found on this page");
}

if (!likeMessage) {
    console.warn("like-message not found on this page");
}

// Check the theme button before attaching its event listener.
if (themeBtn) {
    themeBtn.addEventListener("click", toggleTheme);
} else {
    console.warn("theme-btn not found on this page");
}

// Parts 2 and 4: Build the list only if its container exists.
if (goalsList) {
    goals.forEach(function(goal) {
        const item = document.createElement("li");
        item.textContent = goal;
        goalsList.appendChild(item);
    });
} else {
    console.warn("goals-list not found on this page");
}

// Show the starting count and message when the page loads.
LikeCounter.render();