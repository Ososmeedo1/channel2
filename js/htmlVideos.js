import { htmVideos } from "./Videos.js";



document.addEventListener('DOMContentLoaded', () => {
  const htmlVideos = document.getElementById('htmlVideos')
  let cartoona = ``;

  for (let i = 0; i < htmVideos.length; i++) {
    cartoona += `
    <div class="col-md-3 mt-5">
        <div class="content p-1 h-100">
          <a href="${htmVideos[i].link}" class="text-decoration-none" target="_blank">
            <img src="${htmVideos[i].img}" class="w-100 rounded-5" alt="${htmVideos[i].title}" >
            <h2 class="text-center py-2 fw-bold text-warning">${htmVideos[i].number}</h2>
            <h2 class="text-white text-center py-2 fw-bold w-100 mx-auto">${htmVideos[i].title}</h2>
          </a>
      </div>
      </div>
    `
    htmlVideos.innerHTML = cartoona;
  }
})


