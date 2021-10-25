//await allows us to resolve the promise before doing next items

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve("Satisfied color change request");
        }, delay);
    });
};

const rainbow = async () => {
    await delayedColorChange("red", 1000);
    await delayedColorChange("orange", 1000);
    await delayedColorChange("yellow", 1000);
    await delayedColorChange("green", 1000);
    await delayedColorChange("skyblue", 1000);
    await delayedColorChange("blue", 1000);
    await delayedColorChange("purple", 1000);
};
