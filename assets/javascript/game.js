let teamOneShotButton = document.querySelector('#teamone-shoot-button')
let teamOneShotCounter = document.querySelector("#teamone-numshots")
let teamTwoShotButton = document.querySelector("#teamtwo-shoot-button")
let teamTwoShotCounter = document.querySelector("#teamtwo-numshots")
let teamonegoals = document.querySelector("#teamone-numgoals")
let teamtwogoals = document.querySelector("#teamtwo-numgoals")


teamOneShotButton.addEventListener("click", function() {
    let newCounterValue = Number(teamOneShotCounter.innerHTML) +1;
    teamOneShotCounter.innerHTML = newCounterValue
    var d = Math.random();
    if (d < 0.5){
        console.log("made shots")
        let madeshots = Number(teamonegoals.innerHTML) + 1;
        teamonegoals.innerHTML = madeshots;
    }
})

teamTwoShotButton.addEventListener("click", function() {
    let newCounterValue = Number(teamTwoShotCounter.innerHTML) +1;
    teamTwoShotCounter.innerHTML = newCounterValue
    var d = Math.random();
    if (d < 0.5){
        console.log("made shot")
        let madeshot = Number(teamtwogoals.innerHTML) +1;
        teamtwogoals.innerHTML = madeshot;
    }
})
