const cube = document.getElementById("cube-rubik");

const randomCalor= () => {
    return (Math.floor(Math.random() * 222222));
}
setInterval(() => {
for(let i = 0; i < 25; i++){
    const inner = document.createElement("div");
    cube.appendChild(inner);
    inner.style.cssText = "height:50px; width: 50px;background:${randColor()}";
    }
}, 1000);