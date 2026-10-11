// Aahil Penwalla — Lab 7

// Part 2: Variables, Data Types & Operators
const studentName = "Ada";
let labsCompleted = 6;
let isEnrolled = false;
labsCompleted = labsCompleted + 1;
console.log(`${studentName} has completed ${labsCompleted} labs.`);

// Part 3: Selecting Elements & Handling Clicks 
const likeBtn = document.querySelector("#like-btn");
const likeCount = document.querySelector("#like-count");
let likes = 0;

likeBtn.addEventListener("click", function() {
    likes = likes + 1;
    likeCount.textContent = `${likes} likes`;
});

// Part 4: Updating Styles Dynamically (Dark Mode Toggle)
const themeBtn = document.querySelector("#theme-btn");

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");
});
