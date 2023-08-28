// GLOBAL VARS
const villagers = document.getElementsByClassName("villager");
const zombieWalker = document.getElementsByClassName("zombieWalker");
const tromboneWaWaWa = document.getElementsByClassName("trumbone-sad");
const yodaDied = document.getElementsByClassName("yoda")
const bruh = document.getElementsByClassName("bruh")
const babyatripple = document.getElementsByClassName("babyatripple")
const farts = document.getElementsByClassName("fart")
const knuckles = document.getElementsByClassName("knuckles")
const snores = document.getElementsByClassName("snoring")
const slipping = document.getElementsByClassName("slipping")
const spiderman = document.getElementsByClassName("spiderman")
const r2d2 = document.getElementsByClassName("r2d2")
const halo = document.getElementsByClassName("halo")
const okay = document.getElementsByClassName("ok")
const windows = document.getElementsByClassName("window")


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
const knucklesSound = () => {
    let sound = new Audio('audio/knuckles.mp3');
    sound.play();
};

const snoringSound = () => {
    let sound = new Audio('audio/snoring.mp3');
    sound.play();
};

const slippingSound = () => {
    let sound = new Audio('audio/slipping.mp3');
    sound.play();
};
const spiderManSound = () => {
    let sound = new Audio('audio/spiderman.mp3');
    sound.play();
};
const r2d2Sound = () => {
    let sound = new Audio('audio/r2d2.mp3');
    sound.play();
};

const slayerSound = () => {
    let sound = new Audio('audio/slayer.mp3');
    sound.play();
};
const okaySound = () => {
    let sound = new Audio('audio/okay.mp3');
    sound.play();
};
const windowSound = () => {
    let sound = new Audio('audio/windows.mp3');
    sound.play();
};
////////////////
// GLOBAL EVENTS
////////////////
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
for (const knuckle of knuckles) {
    knuckle.addEventListener("click", () => {
        console.log("FIRED");
        // Call the knucklesSound function if needed
        knucklesSound();
    });
}
for (const snore of snores) {
    snore.addEventListener("click", () => {
        console.log("FIRED");
        // Call the snoringSound function if needed
        snoringSound();
    });
}
for (const slip of slipping) {
    slip.addEventListener("click", () => {
        console.log("FIRED");
        // Call the slippingSound function if needed
        slippingSound();
    });
}
for (const spider of spiderman) {
    spider.addEventListener("click", () => {
        console.log("FIRED");
        // Call the  spiderManSound() function if needed
        spiderManSound()
    });
}
for (const r2 of r2d2) {
    r2.addEventListener("click", () => {
        console.log("FIRED");
        // Call the  r2d2Sound() function if needed
        r2d2Sound()
    });
}
for (const slayer of halo) {
    slayer.addEventListener("click", () => {
        console.log("FIRED");
        // Call the  slayerSound() function if needed
        slayerSound()
    });
}
for (const ok of okay) {
    ok.addEventListener("click", () => {
        console.log("FIRED");
        // Call the  okaySound() function if needed
        okaySound();
    });
    for (const win of windows) {
        win.addEventListener("click", () => {
            console.log("FIRED");
            // Call the  windowSound() function if needed
            windowSound();
        });
    }

}