    function calculateBill() {
      // Prices
      const prices = {
        rainbow: 300,
        chocolate: 200,
        redvelvet: 250,
        blackforest: 350
      };
      // Quantities
      let rainbowQty = parseInt(document.getElementById("rainbow").value) || 0;
      let chocolateQty = parseInt(document.getElementById("chocolate").value) || 0;
      let redvelvetQty = parseInt(document.getElementById("redvelvet").value) || 0;
      let blackforestQty = parseInt(document.getElementById("blackforest").value) || 0;
      // Total Calculation
      let total =
        (rainbowQty * prices.rainbow) +
        (chocolateQty * prices.chocolate) +
        (redvelvetQty * prices.redvelvet) +
        (blackforestQty * prices.blackforest);
      // Display Result
      document.getElementById("totalPrice").innerText = "Rs. " + total;
      document.getElementById("billBox").style.display = "block";
    }
