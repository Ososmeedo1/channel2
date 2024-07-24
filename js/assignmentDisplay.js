import { assignments } from "./assignment.js";


document.addEventListener('DOMContentLoaded', () => {
  const assignment = document.getElementById('assignment')
  let cartoona = ``;

  for (let i = 0; i < assignments.length; i++) {
    cartoona += `
    <div class="col-md-3 mt-5">
        <div class="content p-1 h-100">
          <img src="${assignments[i].img}" class="w-100 rounded-5" alt="" >
          <h2 class="text-center py-2 fw-bold text-warning">${assignments[i].number}</h2>
        </div>
      </div>
    `
    assignment.innerHTML = cartoona;
  }
})