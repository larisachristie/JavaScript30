const keyNodeList = document.querySelectorAll("div.key");
const audioNodeList = document.querySelectorAll("audio");
const keyDatasetArray = Array.from(keyNodeList).map(item => parseInt(item.dataset.key));

function findNode(list, property) {
  const matchingNode = [...list].find(item => item.dataset.key == property);
  return matchingNode;
}

// // Optionally append audio elements to corresponding divs
// [...keyNodeList].forEach(item => {
//   item.appendChild(findNode(audioNodeList, item.dataset.key));
// });

window.addEventListener('keydown', event => {
  if (keyDatasetArray.includes(event.keyCode)) {
    const correspondingDiv = findNode(keyNodeList, event.keyCode);
    correspondingDiv.classList.add("playing");
    const correspondingAudio = findNode(audioNodeList, event.keyCode);
    correspondingAudio.autoplay = true;
    correspondingAudio.play();
  }
});

window.addEventListener('keyup', event => {
  if (keyDatasetArray.includes(event.keyCode)) {
    const correspondingDiv = findNode(keyNodeList, event.keyCode);
    correspondingDiv.classList.remove("playing");
  }
});