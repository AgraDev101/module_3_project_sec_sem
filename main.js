let feet = Number(document.getElementById("feet").value)
let inch = Number(document.getElementById("inch").value)
let weight = Number(document.getElementById("weight").value)
let score = document.getElementById("score")

const getBMI = () => {
    let feetInCM = ((feet * 12) + inch) * 2.54
    let cmInM = (feetInCM / 100)
    let BMIScore = (weight / (cmInM * cmInM))
    BMIScore = BMIScore.toFixed(1)
    score.innerText = BMIScore
}