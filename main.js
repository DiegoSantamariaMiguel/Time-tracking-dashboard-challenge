


document.getElementById("dailyClick").addEventListener("click", changeInfoDaily);

function changeInfoDaily() {
    for (let i = 1; i < 7; i++) {
        let cardBigHourSign = document.getElementById("card0" + i + "MainText");
        let cardSmallHourSign = document.getElementById("card0" + i + "SecondaryText");

        let randomNumber = Math.floor(Math.random() * 32) + 1;

        cardBigHourSign.innerHTML = randomNumber + "hrs";
        cardSmallHourSign.innerHTML = "Last Week -" + randomNumber + "hrs";


    }
}


document.getElementById("weeklyClick").addEventListener("click", changeInfoWeekly);

function changeInfoWeekly() {
    for (let i = 1; i < 7; i++) {
        let cardBigHourSign = document.getElementById("card0" + i + "MainText");
        let cardSmallHourSign = document.getElementById("card0" + i + "SecondaryText");

        let randomNumber = Math.floor(((Math.random() * 32) + 1) * 3);

        cardBigHourSign.innerHTML = randomNumber + "hrs";
        cardSmallHourSign.innerHTML = "Last Week -" + randomNumber + "hrs";
    }
}


document.getElementById("monthlyClick").addEventListener("click", changeInfoMontly);

function changeInfoMontly() {
    for (let i = 1; i < 7; i++) {
        let cardBigHourSign = document.getElementById("card0" + i + "MainText");
        let cardSmallHourSign = document.getElementById("card0" + i + "SecondaryText");

        let randomNumber = Math.floor(((Math.random() * 32) + 1) * 7);

        cardBigHourSign.innerHTML = randomNumber + "hrs";
        cardSmallHourSign.innerHTML = "Last Week -" + randomNumber + "hrs";
    }
}




