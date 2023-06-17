document.getElementById("bmiForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height)) {
        document.getElementById("result").innerHTML = "Please enter valid values for weight and height.";
        return;
    }

    var bmi = weight / Math.pow(height / 100, 2);
    var category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal weight";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    document.getElementById("result").innerHTML = "Your BMI is: " + bmi.toFixed(2) + "<br>Category: " + category;
});
