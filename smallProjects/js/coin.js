const root = document.getElementById("root");
let score = 0;

setInterval(addCoin, 500);
setInterval(addBomb, 500);

function addCoin() {
  const coin = document.createElement("img");
  coin.src =
    "https://images-platform.99static.com/ZGWMPGt5Yll4-wKR0grdDrFuLv8=/500x500/top/smart/99designs-contests-attachments/49/49133/attachment_49133556";

  coin.style.width = "50px";
  coin.style.height = "50px";
  coin.style.position = "absolute";
  coin.style.top = Math.random() * 100 + "vh";
  coin.style.left = Math.random() * 100 + "vw";
  root.appendChild(coin);

  const timeout = setTimeout(() => {
    root.removeChild(coin);
    // coin.parentNode.removeChild(coin);
  }, 3000);

  coin.addEventListener("mouseover", () => {
    score = score + 10;
    document.getElementById("score").textContent = `Score: ${score}`;
    root.removeChild(coin);
    // coin.parentNode.removeChild(coin);
    clearTimeout(timeout);
  });
}

function addBomb() {
  const bomb = document.createElement("img");
  bomb.src =
    "https://i.pinimg.com/originals/5d/c1/77/5dc177ab9197a6c5af969bc10fd8952e.gif";
  bomb.style.width = "100px";
  bomb.style.width = "100px";
  bomb.style.position = "absolute";
  bomb.style.top = Math.random() * 100 + "vh";
  bomb.style.left = Math.random() * 100 + "vw";
  root.appendChild(bomb);

  const timeout = setTimeout(() => {
    root.removeChild(bomb);
  }, 500);

  bomb.addEventListener("mouseover", () => {
    score = 0;
    document.getElementById("score").textContent = `Score : ${score}`;
    root.removeChild(bomb);
    clearTimeout(timeout);
  });
}
