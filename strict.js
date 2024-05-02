"use strict";
///Mortgage calcuator//
window.onload= init;
function init(){
}
function calculateMonthlyPayment() {
    let loanAmount = Number(document.getElementById("loanAmount").value);
    let interestRate = Number(document.getElementById("interestRate").value) / 100;
    let loanTerm = Number(document.getElementById("loanTerm").value);

    let monthlyInterestRate = interestRate / 12;
    let numberOfPayments = loanTerm * 12;

    let monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    let totalPayment = monthlyPayment * numberOfPayments;
    let totalInterest = totalPayment - loanAmount;

    document.getElementById('MonthlyPayment').value = monthlyPayment.toFixed(2);
    document.getElementById('TotalInterest').value = totalInterest.toFixed(2);
}
//// Compound interest calculator///
function calculateFutureValue(){
    let Deposit = Number(document.getElementById("Deposit").value);
    let InterestRateC= Number(document.getElementById("interestRateC").value) / 100;
    let Years = Number(document.getElementById("years").value);

    let D= 1+ InterestRateC;
    let FV = Deposit * Math.pow(D, Years);
    let answer= FV;
    let TI = FV - Deposit;

    document.getElementById('FutureValue').value = answer.toFixed(2);
    document.getElementById('TotalInterestC').value = TI.toFixed(2);
}
////Present Value Of Annuity Calculator///
function calculatePresentValue(){
    let PaymentAmount = Number(document.getElementById("paymentAmount").value);
    let InterestRateE= Number(document.getElementById("interestRateE").value);
    let NYears = Number(document.getElementById("N").value);
    let P= 12;
    let P_Year= NYears * P;
   let P_Interest= (InterestRateE/100)/P;
   let VP= PaymentAmount *((1 - Math.pow(1 + P_Interest, -P_Year))/P_Interest);
    let answer1= VP;
    document.getElementById('PresentValue').value = answer1.toFixed(2);
}
