const inputs = document.querySelectorAll(".controls input");

function handleUpdate(){
const suffix = this.dataset.sizing || "";
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

for(var i=0; i<3; i++){
  inputs[i].addEventListener("change", handleUpdate);
  inputs[i].addEventListener("mousemove", handleUpdate);
}
