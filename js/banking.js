// add to deposit
document.getElementById("Deposit-btn").addEventListener("click", function () {
    const depositAdded = document.getElementById("Deposit-added");
    const newdepositAmountText = depositAdded.value;
    const newdepositAmount = parseFloat(newdepositAmountText);
    const depositInput = document.getElementById("deposit-input");

    const perviousDepositText = depositInput.innerText;
    const perviousDeposit = parseFloat(perviousDepositText);
    const depositTotal = perviousDeposit + newdepositAmount;

    depositInput.innerText = depositTotal;
    depositAdded.value = "";

    // balance added
    const totalBalance = document.getElementById("total-balance");
    const totalBalancText = totalBalance.innerText;
    const totalBalanceInput = parseFloat(totalBalancText)
    const totalDepositBalance = totalBalanceInput + newdepositAmount;
    totalBalance.innerText = totalDepositBalance;

});

// withdraw click and withdraw;
document.getElementById("withdraw-btn").addEventListener("click", function () {
    const withdrawAdded = document.getElementById("withdraw-added")
    const withdrawText = withdrawAdded.value;
    const withdrowInput = parseFloat(withdrawText)

    const withdrawAmount = document.getElementById("withdraw-amount");
    const withdrowAmonutText = withdrawAmount.innerText;
    const withdrowBeforAmonut = parseFloat(withdrowAmonutText);
    const withdrowTotal = withdrowBeforAmonut + withdrowInput;
    withdrawAmount.innerText = withdrowTotal;
    withdrawAdded.value = "";

    const totalBalance = document.getElementById("total-balance");
    const totalBalanceText = totalBalance.innerText;
    const totalInputBalance = parseFloat(totalBalanceText);
    const totalBalanceAmount = totalInputBalance - withdrowTotal;
    totalBalance.innerText = totalBalanceAmount;
})