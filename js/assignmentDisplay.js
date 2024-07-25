import { assignments } from "./assignment.js";


document.addEventListener('DOMContentLoaded', () => {
  const assignment = document.getElementById('assignment')
  let cartoona = ``;

  for (let i = 0; i < assignments.length; i++) {
    cartoona += `
    <div class="col-md-3 mt-5">
        <div class="content pb-4 h-100 bg-danger rounded-5" id="task ${i + 1}">
          <img src="${assignments[i].img}" class="w-100  rounded-5" alt="" >
          <h2 class="text-center py-2 fw-bold text-white">Task ${i +1}</h2>
          <div class="d-flex justify-content-around">
            <a href="${assignments[i].task}" class="text-center text-decoration-none btn btn-success fw-semibold w-25" target="_blank">Task</a>
            <a href="${assignments[i].solution}" class="text-center text-decoration-none btn btn-warning fw-semibold w-25" target="_blank">Solution</a>
          </div>
        </div>
      </div>
    `
    assignment.innerHTML = cartoona;
  }
  
})


