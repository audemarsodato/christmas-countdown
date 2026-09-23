const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

const christmasDate = new Date('12-25-2026')

// 1000 millisecond === 1 second
// 60 secondsLeft === 1 minute
// 1000 * 60 === 1 minute
// 60 minutesLeft === 1 hour
// (1000 * 60) * 60 ===  1 hour
// 24 hoursLeft = 1 day
// ((1000 * 60) * 60) * 24 ===  1 hour

setInterval(() => {
        const today = new Date()

        const daysLeft = ((christmasDate - today) / (((1000 * 60) * 60) * 24))
        const hoursLeft = (daysLeft - roundDown(daysLeft)) * 24
        const minutesLeft = (hoursLeft - roundDown(hoursLeft)) * 60
        const secondsLeft = (minutesLeft - roundDown(minutesLeft)) * 60

        daysEl.textContent = `${roundDown(daysLeft)}d`
        hoursEl.textContent = `${roundDown(hoursLeft)}h`
        minutesEl.textContent = `${roundDown(minutesLeft)}m`
        secondsEl.textContent = `${secondsLeft.toFixed()}s`
}, 1000)

function roundDown(number) {
        return Math.floor(number)
}