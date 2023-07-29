// GLOBAL VARS
const villagers = document.getElementsByClassName("btnVillager");
const zombieWalker = document.getElementsByClassName("zombieWalker");
const tromboneWaWaWa = document.getElementsByClassName("trumbone-sad");



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
        // Call the villagerSound function if needed
        zombieWalkerSound()
    });
}
for (const wawa of tromboneWaWaWa) {
    wawa.addEventListener("click", () => {
        console.log("FIRED");
        // Call the villagerSound function if needed
        tromboneWaWaWaSound()
    });
}