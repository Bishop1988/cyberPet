//declaring elements
let diceButton = document.getElementById("dice_btn");
let diceImage = document.getElementById("diceImage");
let urScore = document.getElementById("your_score");
let h1 = document.querySelector(".title")
let wrapper = document.getElementById("dice_game")
let reload = document.getElementById("restart")
const diceSound = document.getElementById("diceSound")
const loserSound = document.getElementById("loser")
let displayText = document.querySelector(".dog-text")
const buttonPlay = document.querySelector("#play")
const buttonFeed = document.querySelector("#feed")
const buttonDrink = document.querySelector("#drink")
const buttonSleep = document.querySelector("#sleep")
const buttonWalk = document.querySelector("#walk")
const buttonSpeak = document.querySelector("#speak")
const soundWoof = document.getElementById("woof_Sound")
var diceRoll = 0
let isFeed = false
let isPlay = false

reload.addEventListener("click", () => {
    window.location.reload()
})

//////////////// dice game above ///////////////////

class CyberPet {
    constructor(name) {
        this._name = name
        this._hungry = 100
        this._thirsty = 100
        this._happy = 100
        this._sleepy = 100
        this._bored = 100
    }
    get name() {
        return this._name
    }
    get hungry() {
        return this._hungry
    }
    
    get thirsty() {
        return this._thirsty
    }

    get happy() {
        return this._happy
    }

    get sleepy() {
        return this._sleepy
    }

    get bored() {
        return this._bored
    }

    feed() {
        // this._hungry -= 20
        // this._sleepy -= 10
        // this._thirsty += 10
        // this._happy += 10
        // diceGameFunc()
        
        isPlay = false
        isFeed = true
        displayText.innerHTML = "Roll the dice to get food"
        diceButton.innerHTML = "Feed"
        
        // if (diceRoll == 1) {
        //     displayText.innerHTML = `You rolled a ${diceRoll}`
        // } else if (diceRoll == 2) {
        //     displayText.innerHTML = `You rolled a ${diceRoll}`
        // } else if (diceRoll == 3) {
        //     displayText.innerHTML = `You rolled a ${diceRoll}`
        // } else if (diceRoll == 4) {
        //     displayText.innerHTML = `You rolled a ${diceRoll}`
        // } else if (diceRoll == 5) {
        //     displayText.innerHTML = `You rolled a ${diceRoll}`
        // } else if (diceRoll == 6) {
        //     displayText.innerHTML = `You rolled a ${diceRoll}`
        // }
    }

    drink() {
        this._thirsty -= 20
        this._happy += 10

        if (this._thirsty== 80) {
            displayText.innerHTML = `${this._name} is still thirsty, current thirst level is: ${this._thirsty}`
        } else if (this._thirsty >= 60) {
            displayText.innerHTML = `${this._name} is still thirsty, current thirst level is: ${this._thirsty}`
        } else if (this._thirsty >= 40) {
            displayText.innerHTML = `${this._name} is still thirsty, current thirst level is: ${this._thirsty}`
        } else if (this._thirsty >= 20) {
            displayText.innerHTML = `${this._name} is still thirsty, current thirst level is: ${this._thirsty}`
        } else if (this._thirsty < 20) {
            displayText.innerHTML = `${this._name} is hydrated, current thirst level is: ${this._thirsty}`
        }
    }

    play() {
        // this._bored -= 20
        // this._thirsty += 20
        // this._sleepy += 20
        // this._hungry += 20
        // this._happy += 50

        isFeed = false
        isPlay = true
        displayText.innerHTML = "Roll the dice to play"
        diceButton.innerHTML = "Play"

        // if (this._bored >= 80) {
        //     displayText.innerHTML = `${this._name} is still bored, current boredom level is: ${this._bored}`
        // } else if (this._bored >= 60) {
        //     displayText.innerHTML = `${this._name} is still bored, current boredom level is: ${this._bored}`
        // } else if (this._bored >= 40) {
        //     displayText.innerHTML = `${this._name} is still bored, current boredom level is: ${this._bored}`
        // } else if (this._bored >= 20) {
        //     displayText.innerHTML = `${this._name} is still bored, current boredom level is: ${this._bored}`
        // } else if (this._bored < 20) {
        //     displayText.innerHTML = `${this._name} is not bored, current boredom level is: ${this._bored}`
        // }
    }

    sleep() {
        this._sleepy -= 50
        this._happy += 50
        this._hungry += 20

        if (this._sleepy >= 80) {
            displayText.innerHTML = `${this._name} is still sleepy, current sleep level is: ${this._sleepy}`
        } else if (this._sleepy >= 60) {
            displayText.innerHTML = `${this._name} is still sleepy, current sleep level is: ${this._sleepy}`
        } else if (this._sleepy >= 40) {
            displayText.innerHTML = `${this._name} is still sleepy, current sleep level is: ${this._sleepy}`
        } else if (this._sleepy >= 20) {
            displayText.innerHTML = `${this._name} is still sleepy, current sleep level is: ${this._sleepy}`
        } else if (this._sleepy < 20) {
            displayText.innerHTML = `${this._name} is rested, current sleep level is: ${this._sleepy}`
        }
    }
}

// const pet1 = new CyberPet("pet 1")

class Dog extends CyberPet {
    constructor(name) {
        super(name)
        this._bark = "Woof"
        this._walk = 100
    }
    
    get bark() {
        return this._bark
    }

    get walk() {
        return this._walk
    }

    speak() {
        displayText.innerHTML = `${this._bark}`
    }

    walkies() {
        this._walk -= 20
        if (this._walk >= 80) {
            displayText.innerHTML = `${this._name} has been walked but is still restless, current energy level is: ${this._walk}`
        } else if (this._walk >= 60) {
            displayText.innerHTML = `${this._name} has been walked but is still restless, current energy level is: ${this._walk}`
        } else if (this._walk >= 40) {
            displayText.innerHTML = `${this._name} has been walked but is still restless, current energy level is: ${this._walk}`
        } else if (this._walk >= 20) {
            displayText.innerHTML = `${this._name} has been walked but is still restless, current energy level is: ${this._walk}`
        } else if (this._walk < 20) {
            displayText.innerHTML = `${this._name} has been walked but is tired, current energy level is: ${this._walk}. ${this._name} needs to rest`
        }
    }
}

let pet2 = new Dog("pet 2")

//  6 images stored inside the sixImgs object with the assgined number properties (object initializer)
const sixImgs = {
    1:"images/dice1.png",
    2:"images/dice2.png",
    3:"images/dice3.png",
    4:"images/dice4.png",
    5:"images/dice5.png",
    6:"images/dice6.png",
};

const diceGameFunc = () => {
    diceRoll = Math.floor(Math.random() *6 + 1); //will generate random numbers between 1-6
    diceImage.src = sixImgs[diceRoll]; //targeted "diceImage" src attribute , allowing me to return the value src attributes of the images inside the id = diceImage & then assigning diceRoll to the object sixImgs

    urScore.innerHTML = diceRoll
    urScore.style.marginLeft = "20px";//style element
    urScore.style.paddingLeft = "100px";//style element
    urScore.style.fontSize = "1.9rem";//style element
    diceSound.src = "sound/roll.wav";//dice sound

    console.log(diceRoll)
    if (isFeed == true) {
        if (diceRoll == 1) {
            let chicken = 15
            pet2._hungry -= chicken
            displayText.innerHTML = `You rolled a ${diceRoll} Have some chicken. Chicken is worth ${chicken} points. Current hunger level ${pet2._hungry}`
        } else if (diceRoll == 2) {
            let bone = 5
            pet2._hungry -= bone
            displayText.innerHTML = `You rolled a ${diceRoll} Have a bone. Bone is worth ${bone} points. Current hunger level ${pet2._hungry}`
        } else if (diceRoll == 3) {
            let pizza = 10
            pet2._hungry -= pizza
            displayText.innerHTML = `You rolled a ${diceRoll} Have some pizza. Pizza is worth ${pizza} points. Current hunger level ${pet2._hungry}` 
        } else if (diceRoll == 4) {
            let pumpkin = 5
            pet2._hungry = pumpkin
            displayText.innerHTML = `You rolled a ${diceRoll} Have some pumpkin. Pumpkin is worth ${pumpkin} points. Current hunger level ${pet2._hungry}`
        } else if (diceRoll == 5) {
            let sushi = 15
            pet2._hungry -= sushi
            displayText.innerHTML = `You rolled a ${diceRoll} Have some sushi. Sushi is worth ${sushi} points. Current hunger level ${pet2._hungry}`
        } else if (diceRoll == 6) {
            let cake = 25
            pet2._hungry -= cake
            displayText.innerHTML = `You rolled a ${diceRoll} Have some cake. Cake is worth ${cake} points. Current hunger level ${pet2._hungry}`
        }
    } else if (isPlay == true) {
        if (diceRoll == 1) {
            let fetchTheBall = 15
            pet2._bored -= fetchTheBall
            displayText.innerHTML = `You rolled a ${diceRoll} You play with the ball. Playing with the ball is worth ${fetchTheBall} points. Current bordedom level ${pet2._bored}`
        } else if (diceRoll == 2) {
            let frisbee = 5
            pet2._bored -= frisbee
            displayText.innerHTML = `You rolled a ${diceRoll} You play with the frisbee. Playing with the frisbee is worth ${frisbee} points. Current bordedom level ${pet2._bored}`
        } else if (diceRoll == 3) {
            let chewToy = 10
            pet2._bored -= chewToy
            displayText.innerHTML = `You rolled a ${diceRoll} You play with the chewToy. Playing with the chewToy is worth ${chewToy} points. Current bordedom level ${pet2._bored}` 
        } else if (diceRoll == 4) {
            let playWithOtherDog = 5
            pet2._bored = playWithOtherDog
            displayText.innerHTML = `You rolled a ${diceRoll} You play with the other dog. Playing with the dog is worth ${playWithOtherDog} points. Current bordedom level ${pet2._bored}`
        } else if (diceRoll == 5) {
            let hideAndSeek = 15
            pet2._bored -= hideAndSeek
            displayText.innerHTML = `You rolled a ${diceRoll} You play hide and seek. Playing hide and seek is worth ${hideAndSeek} points. Current bordedom level ${pet2._bored}`
        } else if (diceRoll == 6) {
            let tugOfWar = 25
            pet2._bored -= tugOfWar
            displayText.innerHTML = `You rolled a ${diceRoll} You play with the tug of war. Playing tug of war is worth ${tugOfWar} points. Current bordedom level ${pet2._bored}`
        }
    }
}

diceButton.addEventListener("click", () => { //added click event to button
    diceGameFunc()
});



//eventlistener
buttonPlay.addEventListener("click", () => {
    pet2.play()
})

buttonFeed.addEventListener("click", () => {
    pet2.feed()
})

buttonDrink.addEventListener("click", () => {
    pet2.drink()
})

buttonSleep.addEventListener("click", () => {
    pet2.sleep()
})

buttonWalk.addEventListener("click", () => {
    pet2.walkies()
})

buttonSpeak.addEventListener("click", () => {
    pet2.speak()
    soundWoof.src = "sound/single-dog-woof-sound.mp3"
})