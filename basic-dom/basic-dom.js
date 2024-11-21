const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const red = document.createElement("p");
red.textContent = "Hey I'm red!"

container.appendChild(red);

const blue = document.createElement("h3");
blue.textContent = "I'm a blue h3!";

container.appendChild(blue);

const pinkblack = document.createElement("div");

const iminadiv = document.createElement("h1");
iminadiv.textContent = "I'm in a div";

pinkblack.appendChild(iminadiv);

const metoo = document.createElement("p");
metoo.textContent = "ME TOO!";

pinkblack.appendChild(metoo);

container.appendChild(pinkblack);

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    alert("Hello World");
})
btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });