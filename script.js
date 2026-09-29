//your code here!
const list = document.getElementById("infi-list");

function addItem() {
  const li = document.createElement("li");
  li.textContent = `Item ${list.children.length + 1}`;
  list.appendChild(li);
}

// Add 10 items by default
for (let i = 0; i < 10; i++) {
  addItem();
}

// Add 2 more items when the user reaches the bottom
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 10) {
    addItem();
    addItem();
  }
});

