import viteLogo from "/vite.svg";
import { imgObserver } from "./observer";

export function addBoxItem(count: number) {
  console.log("add");
  const box = document.querySelector<HTMLDivElement>("#box");
  const newElString = ` <div class="box-item">
    <img class="infinity-img" src="${viteLogo}" data-src="https://cdn.pixabay.com/photo/2023/06/22/16/34/man-8081871_1280.jpg" />
  </div>`.repeat(count);

  const tempWrap = document.createElement("div");
  tempWrap.innerHTML = newElString;
  const newImgElementArr = Array.from(tempWrap.children);

  newImgElementArr.forEach((imgEle) => {
    imgObserver.observe(imgEle.children[0]);
    box?.appendChild(imgEle);
  });
}
