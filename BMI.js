function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    if (weight > 0 && height > 0) {
        let bmi = weight / (height * height);
        let category = "";

        if (bmi < 18.5) {
            category = " You are Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = "You have Normal weight";
        } else if (bmi >= 25 && bmi < 29.9) {
            category = "You are Overweight";
        } else {
            category = "You are Obese";
        }

        document.getElementById("result").innerHTML = `Your BMI: ${bmi.toFixed(2)} (${category})`;
    } else {
        document.getElementById("result").innerHTML = "Please enter valid weight and height!";
    }
}