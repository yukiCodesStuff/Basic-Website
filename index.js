const navbar_image = document.getElementById("navbar-image");

let rotationDegree = 0;

function spin_image() {
    console.log("spinning")
    rotationDegree += 3600; // Increment the rotation value by 360 degrees
    navbar_image.style.transform = `rotate(${rotationDegree}deg)`; // Apply the new rotation value
}