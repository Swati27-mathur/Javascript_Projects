function calculateInterest() {
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let time = parseFloat(document.getElementById("time").value);
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
      document.getElementById("result").innerText =
        "please provide all the necessary inputs";
      return;
    }
    let interest = (principal * rate * time) / 100;
    let totalamount = principal + interest;
    document.getElementById(
      "result"
    ).innerText = `Simple interest is Rs.${interest}\n and Total Amount is ${totalamount} `;
  }
  calculateInterest();
