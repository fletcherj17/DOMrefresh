let homeScore = 0;
let guestScore = 0;
let homeScoreEl = document.getElementById('home-score')
let guestScoreEl = document.getElementById('guest-score')

const newGame = () => {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = "0"
    guestScoreEl.textContent = "0"
    homeScoreEl.classList.remove('leader')
    guestScoreEl.classList.remove('leader')
}

const leader = () => {
    if (homeScore > guestScore) {
        document.getElementById('home-score').classList.add('leader')
        document.getElementById('guest-score').classList.remove('leader')
    } else if (homeScore < guestScore) {
        document.getElementById('home-score').classList.remove('leader')
        document.getElementById('guest-score').classList.add('leader')
    } else {
         document.getElementById('home-score').classList.remove('leader')
        document.getElementById('guest-score').classList.remove('leader')
    }
}

const add1PointHome = () => {
   ++homeScore 
   let currentScore = document.getElementById('home-score')
    currentScore.textContent = homeScore
    leader()
}

const add2PointsHome = () => {
      homeScore = homeScore + 2
   let currentScore = document.getElementById('home-score')
    currentScore.textContent  = homeScore
    leader()
}

const add3PointsHome = () => {
         homeScore = homeScore + 3
   let currentScore = document.getElementById('home-score')
    currentScore.textContent  = homeScore
    leader()
}

const add1PointGuest = () => {
    ++guestScore
    let currentScore = document.getElementById('guest-score') 
    currentScore.textContent  = guestScore
    leader()
}

const add2PointsGuest = () => {
    guestScore = guestScore + 2
    let currentScore = document.getElementById('guest-score')
    currentScore.textContent  = guestScore
    leader()
}

const add3PointsGuest = () => {
    guestScore = guestScore + 3
    let currentScore = document.getElementById('guest-score')
    currentScore.textContent  = guestScore
    leader()
}