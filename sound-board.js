// GLOBAL VARS
const villagers = document.getElementsByClassName("villager");
const zombieWalker = document.getElementsByClassName("zombieWalker");
const tromboneWaWaWa = document.getElementsByClassName("trumbone-sad");
const yodaDied = document.getElementsByClassName("yoda")
const bruh = document.getElementsByClassName("bruh")
const babyatripple = document.getElementsByClassName("babyatripple")
const farts = document.getElementsByClassName("fart")

// GLOBAL FUNCTIONS
const villagerSound = () => {
    let sound = new Audio('audio/villager.mp3');
    sound.play();
};

const zombieWalkerSound = () => {
    let sound = new Audio('audio/zombie-walker.mp3');
    sound.play();
};

const tromboneWaWaWaSound = () => {
    let sound = new Audio('audio/Trombone.mp3');
    sound.play();
};

const yodaSound = () => {
    let sound = new Audio('audio/yoda.mp3');
    sound.play();
};

const bruhSound = () => {
    let sound = new Audio('audio/bruh.mp3');
    sound.play();
};
const babyatrippleSound = () => {
    let sound = new Audio('audio/babyatripple.mp3');
    sound.play();
};
const fartSound = () => {
    let sound = new Audio('audio/fart.mp3');
    sound.play();
};
// GLOBAL EVENTS

for (const villager of villagers) {
    villager.addEventListener("click", () => {
        console.log("FIRED");
        // Call the villagerSound function if needed
        villagerSound();
    });
}
for (const zombie of zombieWalker) {
    zombie.addEventListener("click", () => {
        console.log("FIRED");
        // Call the zombie function if needed
        zombieWalkerSound()
    });
}
for (const wawa of tromboneWaWaWa) {
    wawa.addEventListener("click", () => {
        console.log("FIRED");
        // Call the trombone function if needed
        tromboneWaWaWaSound()
    });
}
for (const yoda of yodaDied) {
    yoda.addEventListener("click", () => {
        console.log("FIRED");
        // Call the yodaSound
        yodaSound()
    });
}
for (const bro of bruh) {
    bro.addEventListener("click", () => {
        console.log("FIRED");
        // Call the bruhSound function
        bruhSound()
    });
}
for (const oh of babyatripple) {
    oh.addEventListener("click", () => {
        console.log("FIRED");
        // Call the babyatrippleSound function
        babyatrippleSound()
    });
}
for (const fart of farts) {
    fart.addEventListener("click", () => {
        console.log("FIRED");
        // Call the fartSound function
        fartSound()
    });
}

