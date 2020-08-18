// const person = {
//     username: "Felicia",
//     introduce: function(){
//       console.log(`Hi, I'm ${this.username}`)
//     }
//   }

//   person.introduce() //prints "Hi, I'm Felicia"




// const counter = {
//     count: 0,

//     updateCounter: function () {
//       this.count += 1;
//     }
//   };

//   counter.updateCounter();
//   counter.updateCounter();
//   counter.updateCounter();

//   alert(counter.count);


//   const cat = {
//     makeNoise: function () {
//       alert(this.noise);
//     },
//     noise: "Meow!"
//   };

//   const dog = {
//     makeNoise: cat.makeNoise,
//     noise: "Woof!"
//   };

//   cat.makeNoise();
//   dog.makeNoise();


//ex1
const person = {
    hungry: true,

    feed: function () {
        if (this.hungry) {
            hungry = false;
            alert('Im no longer hungry!')
        }
    }
}

person.feed() //should alert "I'm no longer hungry"


//ex2
const pump = function (amount) {
    this.liters += amount;
    console.log('You put ' + amount + ' liters in ' + this.name);
};

const garage = {
    car1: {
        name: 'Audi',
        liters: 3,
        fillTank: pump
    },
    car2: {
        name: 'Mercedes',
        liters: 1,
        fillTank: pump
    }
};

garage.car1.fillTank(2);
console.log('Audi should have 5 liters: ', garage.car1.liters);

garage.car2.fillTank(30);
console.log('Mercedes should have 31 liters: ', garage.car2.liters);


//ex3
const pumpFuel = function (plane) {
    plane.fuel += 1;
};

const airplane = {
    fuel: 0,
    fly: function () {
        if (this.fuel < 2) {
            return 'on the ground!';
        }
        else {
            return 'flying!';
        }
    }
};

console.log('The plane should not be able to fly (yet): ' + airplane.fly());

pumpFuel(airplane);
console.log('The plane should STILL not be able to fly: ' + airplane.fly());

pumpFuel(airplane);
console.log('Take off! ' + airplane.fly());

//ex4
const tipJar = {
    coinCount: 20,
    tip: function () {
        this.coinCount += 1;
    },
    stealCoins: function (number) {
        return this.coinCount -= number
    }
};

tipJar.tip();
console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

tipJar.stealCoins(3);
console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

tipJar.stealCoins(10);
console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);

//ex5
const revealSecret = function () {
    return this.secret;
};

const shoutIt = function (person, func) {
    person.revealItAll = func;
    const result = person.revealItAll();
    alert(person.name + " said: " + result);
};

const avi = {
    name: "Avi",
    secret: "Im scared of snakes!"
};

const narkis = {
    name: "Narkis",
    secret: "I dont have secrets because I'm zen like that."
};

shoutIt(avi, revealSecret);
shoutIt(narkis, revealSecret);



//ex6
const coffeeShop = {
    money: 100,
    beans: 40,

    drinkRequirements: {
        latte: { beanRequirement: 10, price: 5 },
        americano: { beanRequirement: 5, price: 2.5 },
        doubleShot: { beanRequirement: 15, price: 7.5 },
        frenchPress: { beanRequirement: 12, price: 6 },
    },

    makeDrink: function (drinkType) {
        for (let i in this.drinkRequirements) {
            if (this.beans < this.drinkRequirements[i].beanRequirement) {
                return console.log("Sorry, we're all out of beans!")
            }
            else if (drinkType == i) {
                this.beans -= this.drinkRequirements[i].beanRequirement
                return console.log(`${i} is in order`)
            }
        }
        return console.log(`sorry , we don't make ${drinkType}`)
    },
    //ext-1
    buyBeans: function (numBeans) {
        const beansCost = 5
        if (numBeans <= 0) {
            return alert(`you can't buy 0 Beans`)
        } else {
            this.beans += numBeans
            this.money -= (beansCost * numBeans)
            console.log(this.money, this.beans)
        }
    },
    //ext-2
    buyDrink: function (drinkType) {
        this.makeDrink(drinkType)
        for (let i in this.drinkRequirements) {
            if (drinkType == i) {
                this.money += this.drinkRequirements[i].price
            }
        }
        console.log(this.money)
    }
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
coffeeShop.buyBeans(20)
coffeeShop.buyDrink('latte')







