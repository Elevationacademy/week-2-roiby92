//ex1
const StringFormatter = function () {

    const capitalizeFirst = function (str) {
        return console.log(str[0].toUpperCase() + str.substring(1).toLowerCase())
    }
    const skewerCase = function (str) {
        return console.log(str.replace(' ', '-'))
    }

    return { capitalizeFirst, skewerCase }
}

const formatter = StringFormatter()

formatter.capitalizeFirst("dorothy") //should print Dorothy
formatter.skewerCase("blue box") //should print blue-box

//ex2
const Bank = function () {
    let money = 500

    const depositCash = function (cash) {
        return money += cash
    }
    const checkBalance = () => console.log(money)

    return { depositCash, checkBalance }
}
const bank = Bank()
bank.depositCash(200)
bank.depositCash(250)
bank.checkBalance() //should print 950


//ex3 c
const SongsManager = function () {
    const songs = {}

    const addSong = function (name, url) {
        for (i in url) {
            if (url[i] === "=") {
                songs[name] = url.substring(url[i])
            }
        }
    }
    const getSong = function (name) {
        console.log(songs[name]);
    }


    return { addSong, getSong }
}


const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
    