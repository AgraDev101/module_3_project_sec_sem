let message = document.getElementById("welcome_text")

const date = new Date()
const currHr = date.getHours()

if (currHr >= 0 && currHr <= 12) {
    message.innerText = "Hi, Good Morning"
} else if (currHr >= 12 && currHr <= 17) {
    message.innerText = "Hi, Good Afternoon"
} else if (currHr >= 17 && currHr <= 24) {
    message.innerText = "Hi, Good Evening"
} else {
    message.innerText = "Hi"
}