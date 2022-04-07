let displayText = document.querySelector(".dog-text")

const buttonPlay = document.querySelector("#play")
const buttonFeed = document.querySelector("#feed")
const buttonDrink = document.querySelector("#drink")
const buttonSleep = document.querySelector("#sleep")
const buttonWalk = document.querySelector("#walk")
const buttonSpeak = document.querySelector("#speak")

//Sound

const soundWoof = document.getElementById("woof_Sound")

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
        this._hungry -= 20
        this._sleepy -= 10
        this._thirsty += 10
        this._happy += 10
        
        if (this._hungry >= 80) {
            displayText.innerHTML = `${this._name} is still hungry, current hunger level is: ${this._hungry}`
        } else if (this._hungry >= 60) {
            displayText.innerHTML = `${this._name} is still hungry, current hunger level is: ${this._hungry}`
        } else if (this._hungry >= 40) {
            displayText.innerHTML = `${this._name} is still hungry, current hunger level is: ${this._hungry}`
        } else if (this._hungry >= 20) {
            displayText.innerHTML = `${this._name} is still hungry, current hunger level is: ${this._hungry}`
        } else if (this._hungry < 20) {
            displayText.innerHTML = `${this._name} is full, current hunger level is: ${this._hungry}`
        }
    }

    drink() {
        this._thirsty -= 20
        this._happy += 10

        if (this._thirsty >= 80) {
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
        this._bored -= 20
        this._thirsty += 20
        this._sleepy += 20
        this._hungry += 20
        this._happy += 50

        if (this._bored >= 80) {
            displayText.innerHTML = `${this._name} is still bored, current boredom level is: ${this._bored}`
        } else if (this._bored >= 60) {
            displayText.innerHTML = `${this._name} is still bored, current boredom level is: ${this._bored}`
        } else if (this._bored >= 40) {
            displayText.innerHTML = `${this._name} is still bored, current boredom level is: ${this._bored}`
        } else if (this._bored >= 20) {
            displayText.innerHTML = `${this._name} is still bored, current boredom level is: ${this._bored}`
        } else if (this._bored < 20) {
            displayText.innerHTML = `${this._name} is not bored, current boredom level is: ${this._bored}`
        }
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





// function boredFunc() {
//     pet2._bored -= 10
//     console.log(pet2._bored)
//     if (pet2._bored <= 90) {
//         displayText.innerHTML = "I'm bored, Play with me!"
//     } else if (pet2._bored <= 50) {
//         displayText.innerHTML = "I died of boredom"
//     }
// }

// setInterval(() => pet2.boredFunc(), 1000)



