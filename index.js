// defining javascript elements with dom
const dragItems = document.getElementsByClassName("list");
const leftBox = document.getElementById("left");
const rightBox = document.getElementById("right");
// logic for dragging and dropping objects
for (dragItem of dragItems) {
  dragItem.addEventListener("dragstart", (e) => {
    let selected = e.target;
    e.target.classname += " hold"
    rightBox.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    rightBox.addEventListener("drop", (e) => {
      rightBox.appendChild(selected);
      alert("Item dropped successfuly")
      
    });
  });
}
// reset button handler function
const resetHandler = ()=> {
    window.location.reload()
}