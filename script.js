window.onload = () => {
  const body = document.querySelector("body");

  body.addEventListener("click", event => {
    const clickedIndicator = createClickedIndicator(event);

    body.append(clickedIndicator);

    setTimeout(() => {
      body.removeChild(clickedIndicator);
    }, 500);
  });
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function createClickedIndicator(event) {
  const left = event.clientX - event.currentTarget.getBoundingClientRect().left;
  const top = event.clientY - event.currentTarget.getBoundingClientRect().top;
  const color = `rgb(${getRandomInt(256)} ${getRandomInt(256)} ${getRandomInt(256)})`

  const clickedIndicator = document.createElement("div");
  clickedIndicator.className = "clickedIndicator fadeout enlarge";

  clickedIndicator.style.position = "absolute";
  clickedIndicator.style.border = `1px solid ${color}`;
  clickedIndicator.style.borderRadius = "15px";
  clickedIndicator.style.width = "25px";
  clickedIndicator.style.height = "25px";
  clickedIndicator.style.top = top;
  clickedIndicator.style.left = left;

  return clickedIndicator;
}