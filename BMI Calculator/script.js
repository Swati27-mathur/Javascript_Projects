function calculateBMI(){
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let result = document.getElementById("result");
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0){
        result.innerHTML = "❌ Please enter valid height and weight";
        result.className = "text-red-400 font-semibold";
        return;
    }
    let bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
    let category ="";
    if(bmi < 18.5){
        category = "Underweight";
    }else if(bmi < 25){
        category = "Normal weight";
    }else if(bmi < 30){
        category = "overweight";
    }else {
        category = "Obese";
    }
    result.innerHTML = `your bmi is <strong>${bmi}</strong> (${category})`
}

document.getElementById("calculate").addEventListener("click", calculateBMI)

// function calculateBMI() {
//     let height = parseFloat(document.getElementById("height").value);
//     let weight = parseFloat(document.getElementById("weight").value);
//     let result = document.getElementById("result");
//     if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
//       result.innerHTML = "❌ Please enter valid height and weight";
//       result.className = "text-red-400 font-semibold";
//       return;
//     }
//     let bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
//     let category = "";
//     if (bmi < 18.5) {
//       category = "Underweight";
//     } else if (bmi < 25) {
//       category = "Normal weight";
//     } else if (bmi < 30) {
//       category = "Overweight";
//     } else {
//       category = "Obese";
//     }
//     result.innerHTML = `Your BMI is <strong>${bmi}</strong> (${category})`;
//   }
  
//   document.getElementById("calculate").addEventListener("click", calculateBMI);