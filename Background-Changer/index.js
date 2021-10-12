document.querySelector("button").addEventListener("click", changeBG)

function changeBG(){
  const col1 = randomRgb();
  const col2 = randomRgb();
  const col3 = randomRgb();

  const colorString = `rgb(${col1}, ${col2}, ${col3})`;

  document.body.style.background = colorString;
  document.querySelector("p").innerText = colorString;
}

function randomRgb(){
  return Math.round(Math.random() * 255) ;
}
