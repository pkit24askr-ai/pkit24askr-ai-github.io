// Dynamically insert Bootstrap modals
document.getElementById("modals").innerHTML = `
  <!-- Fullstack Modal -->
  <div class="modal fade" id="fullstackModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Full Stack Development</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          Full stack = Frontend (HTML, CSS, JS, Bootstrap) + Backend (Server, Database).
        </div>
      </div>
    </div>
  </div>

  <!-- HTML Modal -->
  <div class="modal fade" id="htmlModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">HTML Demo</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body text-center">
          <h3>This is a Heading</h3>
          <p>This is a simple paragraph created with HTML.</p>
          <button class="btn btn-primary">Click Me</button>
        </div>
      </div>
    </div>
  </div>

  <!-- CSS Modal -->
<div class="modal fade" id="cssModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">CSS Demo</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <p><b>CSS makes your website beautiful</b> with colors, styles, and layouts.</p>
          
          <!-- Demo: Color Changing Box -->
          <div id="colorBox" 
               style="width:100px; height:100px; background:skyblue; border-radius:10px; transition:0.5s; margin:auto;">
          </div>
          <div class="text-center mt-3">
            <button class="btn btn-success btn-sm" onclick="toggleColor()">Change Color</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Bootstrap Modal -->
  <div class="modal fade" id="bootstrapModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Bootstrap Progress Bar Demo</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <p><b>Bootstrap Progress Bar</b> shows progress visually.</p>
          
          <div class="progress mb-2">
            <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 40%">40%</div>
          </div>

          <button class="btn btn-primary btn-sm" onclick="increaseProgress()">Increase Progress</button>
        </div>
      </div>
    </div>
  </div>
  

  <div class="modal fade" id="jsModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">JavaScript Demo</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <p><b>JavaScript adds interactivity to websites.</b> Try these demos:</p>

          <!-- Demo 1: Alert -->
          <button class="btn btn-primary mb-2" onclick="alert('Hello! This is a JavaScript Alert 🚀')">
            Show Alert
          </button>

          <!-- Demo 2: Mini Calculator -->
          <div class="mt-3">
            <input type="number" id="num1" placeholder="First number" class="form-control mb-2">
            <input type="number" id="num2" placeholder="Second number" class="form-control mb-2">
            <button class="btn btn-warning" onclick="calcSum()">Add Numbers</button>
            <p id="calcResult" class="fw-bold mt-2"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
`;



// JS for CSS demo
let isBlue = true;
function toggleColor() {
  const box = document.getElementById("colorBox");
  if (isBlue) {
    box.style.background = "tomato";
    box.style.transform = "rotate(20deg) scale(1.1)";
  } else {
    box.style.background = "skyblue";
    box.style.transform = "rotate(0deg) scale(1)";
  }
  isBlue = !isBlue;
}

// JS to handle dynamic Bootstrap demo
let progressValue = 60;
function increaseProgress() {
  progressValue = Math.min(progressValue + 10, 100);
  const bar = document.querySelector("#bootstrapModal .progress-bar");
  bar.style.width = progressValue + "%";
  bar.textContent = progressValue + "%";
}

// Reset progress when modal closes
document.addEventListener("DOMContentLoaded", function () {
  const bootstrapModal = document.getElementById("bootstrapModal");
  bootstrapModal.addEventListener("hidden.bs.modal", function () {
    progressValue = 0;
    const bar = bootstrapModal.querySelector(".progress-bar");
    bar.style.width = "0%";
    bar.textContent = "0%";
  });
});

// JavaScript functions demo calculator, alert
function calcSum() {
  const n1 = parseFloat(document.getElementById("num1").value) || 0;
  const n2 = parseFloat(document.getElementById("num2").value) || 0;
  document.getElementById("calcResult").innerText = "Result: " + (n1 + n2);
}