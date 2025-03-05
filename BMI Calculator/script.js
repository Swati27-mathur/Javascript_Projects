
function bmicalculate(){
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value)
    if (isNaN(weight) || isNaN(height)) {
        document.getElementById("result").innerText =
          "please provide all the necessary inputs";
        return;
    }
    let bmicalculate = weight/height;
    document.getElementById("result").innerText=`BMI Weight is ${bmicalculate}`
}

bmicalculate();