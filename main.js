let display = document.querySelector(".display")
let addcontent = document.querySelector(".content")
let evaluate = document.querySelector(".equal")
let operator = document.querySelector(".operator")
let clear = document.querySelector(".clear")

clear.addEventListener("click", () => display.textContent = "")

for (let element of document.querySelectorAll(".content , .operator")) {
    element.addEventListener("click", (event) => display.textContent += event.target.textContent)
}

evaluate.addEventListener("click", () => display.textContent = eval(display.textContent))