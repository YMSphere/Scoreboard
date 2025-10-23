const homeScoreEl = document.getElementById("home-score-el")
const guestScoreEl = document.getElementById("guest-score-el")

homeScoreEl.textContent = 0
guestScoreEl.textContent = 0

let homeScore = 0
let guestScore = 0

function addOneHome() {
    let AddOne = homeScore += 1
    homeScoreEl.textContent = AddOne
}

function addTwoHome() {
    let AddTwo = homeScore += 2
    homeScoreEl.textContent = AddTwo
}

function addThreeHome() {
    let AddThree = homeScore += 3
    homeScoreEl.textContent = AddThree
}

function addOneGuest() {
    let AddOne = guestScore += 1
    guestScoreEl.textContent = AddOne
}

function addTwoGuest() {
    let AddTwo = guestScore += 2
    guestScoreEl.textContent = AddTwo
}

function addThreeGuest() {
    let AddThree = guestScore += 3
    guestScoreEl.textContent = AddThree
}

function restart() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
}