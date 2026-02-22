const calculateBtn = document.getElementById("calculateBtn");
const distanceInput = document.getElementById("distance");
const fareResult = document.getElementById("fareResult");

const farePerKm = 500; 

calculateBtn.addEventListener("click", function() {
    const distance = parseFloat(distanceInput.value);

    if (isNaN(distance) || distance <= 0) {
        fareResult.textContent = "Please enter a valid distance greater than 0.";
        fareResult.style.color = "red";
        return;
    }

    const fare = distance * farePerKm;
    fareResult.textContent = `Estimated fare: ${fare} RWF`;
    fareResult.style.color = "green";
});
