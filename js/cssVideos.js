
import { cssVideos } from "./Videos.js";

document.addEventListener('DOMContentLoaded', () => {
  const cssVideo = document.getElementById('cssVideo')
  let cartoona = ``;

  for (let i = 0; i < cssVideos.length; i++) {
    cartoona += `
    <div class="col-md-3 mt-5">
        <div class="content p-1 h-100">
          <a href="${cssVideos[i].link}" class="text-decoration-none" target="_blank">
            <img src="${cssVideos[i].img}" class="w-100 rounded-5" alt="" >
            <h2 class="text-center py-2 fw-bold text-warning">${cssVideos[i].number}</h2>
            <h2 class="text-white text-center py-2 fw-bold w-100 mx-auto">${cssVideos[i].title}</h2>
          </a>
      </div>
      </div>
    `
    cssVideo.innerHTML = cartoona;
  }
})
