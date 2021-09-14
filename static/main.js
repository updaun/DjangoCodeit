console.log('hello world')

const eventBox = document.getElementById('event-box')

const countdownBox = document.getElementById('countdown-box')

console.log(eventBox.textContent)
const eventDate = Date.parse(eventBox.textContent)
console.log(eventDate)


const myCountdown = setInterval(()=>{
    const now = new Date().getTime()
    // console.log(now)
    
    const diff = eventDate - now
    // console.log(diff)

    const d = Math.floor(eventDate / (1000 * 60 * 60 * 24) - (now / (1000 * 60 * 60 * 24)))
    const h = Math.floor((eventDate / (1000 * 60 * 60) - (now / (1000 * 60 * 60))) % 24)
    const m = Math.floor((eventDate / (1000 * 60) - (now / (1000 * 60))) % 60)
    const s = Math.floor((eventDate / (1000) - (now / (1000))) % 60)
    console.log(s)

    if (diff > 0) {
        countdownBox.innerHTML = d + " days, "+ h + " hours, " + m + " minutes, " + s + " seconds"
    } else {
        clearInterval(myCountdown)
        countdownBox.innerHTML = "Finish~!"
    }

}, 1000)


