//ex1
const push = function () {
    console.log("pushing it!")
}

const pull = function () {
    console.log("pulling it!")
}

const pushPull = func => func()

pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"


//ex2

const time = new Date()
const returnTime = function (time) {
    alert('The current time is: ' + time)
}
const getTime = func => func(time)
getTime(returnTime)

//ex3
const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
};

const logData = data => alert(data)

displayData(alert, logData, "I like to party")


//ex4

const sum = (num1, num2, num3) => console.log(num1 + num2 + num3)

sum(5, 5, 5)

//ex5

const capitalize = name => console.log(`${name[0].toUpperCase()}${name.substring(1).toLowerCase()}`)

capitalize("bOb") // returns Bob
capitalize("TAYLOR") // returns Taylor
capitalize("feliSHIA") // returns Felishia

//ex6
const determineWeather = temp => {
    if (temp > 25) {
        return "hot"
    }
    return "cold"
}

const commentOnWeather = temp => console.log(determineWeather(temp))

commentOnWeather(30) //returns "It's hot"
commentOnWeather(22) //returns "It's cold"

//ex7
const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    soundFunc(sound)
  }
      
  const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
  const makeSound = sound => alert(sound)
      
  explode(shineLight, makeSound, "BOOM")
