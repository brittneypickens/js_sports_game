let teamOneShotButton = document.querySelector('#teamone-shoot-button')
let teamOneShotCounter = document.querySelector("#teamone-numshots")
let teamTwoShotButton = document.querySelector("#teamtwo-shoot-button")
let teamTwoShotCounter = document.querySelector("#teamtwo-numshots")
let goalOne = document.querySelector("#teamone-numgoals")
let goalTwo = document.querySelector("#teamtwo-numgoals")


teamOneShotButton.addEventListener("click", function() {
    let newCounterValue = Number(teamOneShotCounter.innerHTML) +1;
    teamOneShotCounter.innerHTML = newCounterValue

})

teamTwoShotButton.addEventListener("click", function() {
    let newCounterValue = Number(teamTwoShotCounter.innerHTML) +1;
    teamTwoShotCounter.innerHTML = newCounterValue
})
