// DECLARE VARIABLES
const todayDate = new Date();
displayDate = document.getElementById("date")

displayDate.innerHTML = todayDate;

let title = document.getElementById("title")
let titleError = document.getElementById("titleError")
let firstName = document.getElementById("firstName")
let firstError = document.getElementById("firstError")
let middleName = document.getElementById("middleName")
let middleError = document.getElementById("middleError")
let lastName = document.getElementById("lastName")
let lastError = document.getElementById("lastError")
let accountBal = document.getElementById("accountBal")
let acctError = document.getElementById("acctError")
let loan = document.getElementById("loan")
let loanError = document.getElementById("loanError")
let acctType = document.getElementById("acctType")
let accttypeError = document.getElementById("accttypeError")
let creditHistory = document.getElementById("creditHistory")
let credithistoryError = document.getElementById("credithistoryError")
let lastDeposit = document.getElementById("lastDeposit")
let depositError = document.getElementById("depositError")
let lastLoan  = document.getElementById("lastLoan")
let dateError = document.getElementById("dateError")
let repayment = document.getElementById("repayment")
let repaymentError = document.getElementById("repaymentError")
let btn = document.getElementById("btn")
let accountPercent
let pointAward = 0

// EVENT LISTENER


btn.addEventListener("click", function () {

    accountPercent = parseInt(accountBal.value)*45 / 100;
    
    // Math.round(accountPercent);
    accountPercent = Math.round(accountPercent)
    // console.log(accountPercent);
    
    validateData()
})

function validateData() {

    if (title.value == "") {
        titleError.textContent = "* Required"
    } else {
        titleError.textContent = ""
    }

    if (firstName.value == "") {
        firstError.textContent = "* Required"
    } else {
        firstError.textContent = ""
    }

    if (lastName.value == "") {
        lastError.textContent = "* Required"
    } else {
        lastError.textContent = ""
    }

    if (accountBal.value != "") {
        acctError.textContent = ""
    } else {
        acctError.textContent = "* Required"
    }

    if (loan.value == "") {
        loanError.textContent = "* Required"
    } else {
        loanError.textContent = ""
    }

    if (acctType.value == "") {
        accttypeError.textContent = "* Required"
    } else {
        accttypeError.textContent = ""
    }

    if (creditHistory.value == "") {
        credithistoryError.textContent = "* Required"
    } else {
        credithistoryError.textContent = ""
    }

    if (lastDeposit.value == "") {
        depositError.textContent = "* Required"
    } else {
        depositError.textContent = ""
    }

    if (lastLoan.value == "") {
        dateError.textContent = "* Required"
    } else {
        dateError.textContent = ""
    }
    console.log(date);

    if (repayment.value == "") {
        repaymentError.textContent = "* Required"
    } else {
        repaymentError.textContent = ""
    }

    if (title.value != "" && firstName.value != "" && lastName.value != "" && accountBal.value != "" && loan.value != "" && acctType.value != "" && creditHistory.value != "" && lastDeposit.value != "" && lastLoan.value != "" && repayment.value != "") {
        proceed()
    }

}


function proceed() {


    if (accountPercent > loan.value) {
        pointAward += 10
    } else {
        pointAward -= 10
    }

    if (creditHistory.value == "1") {
        pointAward += 0
    } else {
        pointAward += 10
    }

    if (lastDeposit.value == "1") {
        pointAward += 5
    } else {
        pointAward += 0
    }

    if (lastLoan.value == "1") {
        pointAward += 0
    } else {
        pointAward += 10
    }

    if (repayment.value == "1") {
        pointAward += 5
    } else {
        pointAward += 0
    }

    if (acctType.value == "1") {
        pointAward += 10
    } else {
        pointAward += 5
    }

    process()

}

function process() {
    if (pointAward > 30) {
        messageTxt.textContent = "Dear, " + title.value + " " + " " + firstName.value + " " + middleName.value + " " + lastName.value + " congratulations! Your Loan request has been accepted"
        messageTxt.style.color = "green"
    } else {
        messageTxt.textContent = "Dear, " + title.value + " " + " " + firstName.value + " " + middleName.value + " " + lastName.value + " we are sorry to inform you that your Loan request has been rejected"
        messageTxt.style.color = "red"
    }

    endService()
}

function endService() {

    title.value = ""
    firstName.value = ""
    middleName.value = ""
    lastName.value = ""
    accountBal.value = ""
    lastLoan.value = ""
    acctType.value = ""
    creditHistory.value = ""
    lastDeposit.value = ""
    date.value = ""
    repayment.value = ""

}