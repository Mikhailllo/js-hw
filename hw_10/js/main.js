const buttonNodeList = document.querySelectorAll(".btn");
const btncont = document.querySelector(".buttonMixer");
const soundArr = ["bumboks", "kolaba", "rave", "rusya"];
const letterArray = ["A", "S", "D", "F",];
const soundArray = soundArr.map((item, index) => {
    const sound = new Audio(`./sound/sounds_${item}.mp3`);
    sound.setAttribute("id", `btn-${index + 1}`);
    sound.setAttribute("code", "Key" + letterArray[index]);
    return sound;
});
document.addEventListener("keydown", (event) => {
    console.trace();
    soundArray.forEach(
        (item) => event.code === item.attributes.code.value && item.play()
    );
});
btncont.addEventListener("click", (event) => {
    console.trace();
    soundArray.forEach((item) => event.target.id === item.id && item.play());
});

