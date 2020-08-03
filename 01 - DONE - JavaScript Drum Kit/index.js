const keyNodeList = document.querySelectorAll("div.key");
const audioNodeList = document.querySelectorAll("audio");
const keyDatasetArray = Array.from(keyNodeList).map(item => parseInt(item.dataset.key));

function findNode(list, property) {
  const matchingNode = [...list].find(item => item.dataset.key == property);
  return matchingNode;
}

window.addEventListener("keydown", event => {
  // Works only with keys A through L on the keyboard
  if (keyDatasetArray.includes(event.keyCode)) {
    const correspondingDiv = findNode(keyNodeList, event.keyCode);
    correspondingDiv.classList.add("playing");

    const correspondingAudio = findNode(audioNodeList, event.keyCode);
    correspondingAudio.currentTime = 0;
    correspondingAudio.play();

    correspondingDiv.addEventListener("transitionend", () => {
      correspondingDiv.classList.remove("playing");
    });
  }
});