import "./style.css";
import { loadingObserver } from "./observer";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
 <div id="box"></div>
  <div id="loading">
    <h1>Loading</h1>
  </div>
 `;

const loadingEl = document.querySelector<HTMLDivElement>("#loading");

loadingObserver.observe(loadingEl!);
