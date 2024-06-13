const mainBox = document.querySelector(".Mainbox");

for (let i = 0; i < 800; i++) {
    const div = document.createElement("div");
    div.className = "gridbox";
    mainBox.appendChild(div);
}

 const gridBoxes = document.querySelectorAll(".gridbox");
 const colorPicker = document.querySelector("#colorPicker")
 const reset = document.querySelector(".Reeset")

 reset.addEventListener("click", function() {

    gridBoxes.forEach(gridbox => {
        gridbox.style.backgroundColor = "white";

    })

 })

 let currentColor = colorPicker.value; // You can set this to any initial color

 colorPicker.addEventListener("input", function() {
    currentColor = colorPicker.value;
});

 // Add event listener to each gridbox
 const eraser = document.querySelector("#eraser")
 
 gridBoxes.forEach(function(gridBox) {
     gridBox.addEventListener("mouseover", function() {
        if (eraser.checked)
        {
            gridBox.style.backgroundColor = "white";
        }
        else{
            gridBox.style.backgroundColor = currentColor;
        }
         
     });
 });

 





  
