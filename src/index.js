import "./styles.scss";
const boxesContainer = document.getElementById("boxes");
const magicButton = document.getElementById("btn");
magicButton.addEventListener("click", () =>
  boxesContainer.classList.toggle("big")
);
function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const div = document.createElement("div");
      div.classList.add("box");
      div.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      boxesContainer.append(div);
    }
  }
}
createBoxes();
