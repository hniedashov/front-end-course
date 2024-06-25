export const Cycles = {
    dollarMultiplier: 26,
    outputDivider: ((text) => {
        console.log(`------------------${text}------------------`);
    }),
    outputNumbers: (() => {
        Cycles.outputDivider('Task 1');

        for (let i = 20; i <= 30; i += 0.5) {
            console.log(i);
        }
    }),
    outputCurrencyValue: (() => {
        Cycles.outputDivider('Task 2');

        for (let i = 10; i <= 100; i += 10) {
            console.log(i * Cycles.dollarMultiplier);
        }
    }),
    outputAvailablePow: (() => {
        Cycles.outputDivider('Task 3');

        const number = prompt("Input number");

        if (isNaN(+number)) {
            console.error("Please enter a number!");
            return;
        }

        for (let i = 1; i <= 100; i++) {

            if (Math.pow(i, 2) >= Number(number)) {
                break;
            }

            console.log(i);
        }
    }),
    outputPrimeNumbers: (() => {
        Cycles.outputDivider('Task 4');

        const number = prompt("Input number for prime test");

        if (isNaN(+number)) {
            console.error("Please enter a number!");
            return;
        }

        for (let i = 2; i <= Math.sqrt(Number(number)); i++) {

            if (number % i === 0) {
                console.log(number, "isn't prime...");
                return;
            }
        }

        console.log(number, "is prime!");
    }),
    init: (() => {
        Cycles.outputNumbers();
        Cycles.outputCurrencyValue();
        Cycles.outputAvailablePow();
        Cycles.outputPrimeNumbers();
    }),
};