document.addEventListener("DOMContentLoaded", () => {
  update()
  document.getElementById("preview").classList.remove("hidden")
  document.getElementById("height").addEventListener("change", update)
  document.getElementById("width").addEventListener("change", update)
})

function update() {
  var height = parseFloat(document.getElementById("height").value)
  var width = parseFloat(document.getElementById("width").value)

  var preview = document.getElementById("preview")

  preview.style.gridTemplateRows = "[w-indicator] 3em [h] " + height + "cm";
  preview.style.gridTemplateColumns = "[w] " + width + "cm [h-indicator] max-content";

  document.querySelector("#width-indicator span").innerHTML = width + "cm"
  document.querySelector("#height-indicator span").innerHTML = height + "cm"
  document.querySelector("#area span").innerHTML = width * height + "cm²"
}
