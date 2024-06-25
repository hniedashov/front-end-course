export const NumberChecker = {
    outputContainerIdentifier: "number-checker-container",
    inputIdentifier: "number-checker-input",
    number: null,
    getNumberAsArray: (() => {
        return NumberChecker.number.split("");
    }),
    isDigitsIdentical: (() => {
        return NumberChecker.getNumberAsArray().every((digit) => digit === NumberChecker.number[0]);
    }),
    getRepeatedDigits: (() => {
        return new Set(NumberChecker.getNumberAsArray().filter((digit, index) => {
            return NumberChecker.getNumberAsArray().indexOf(digit) !== index;
        }));
    }),
    display: ((message) => {
        document.getElementById(NumberChecker.outputContainerIdentifier).innerHTML = message;
        document.querySelector('.number-checker-card').classList.remove('d-none');
    }),
    init: (() => {
        document.getElementById(NumberChecker.inputIdentifier).addEventListener('input', (event) => {
            let message = "";

            NumberChecker.number = event.target.value;

            if (! NumberChecker.number) {
                NumberChecker.display('Not a number');

                return;
            }

            switch (NumberChecker.isDigitsIdentical()) {
                case true:
                    message = "All digits within a given number are identical";
                    break;
                default:
                    const repeatedDigits = NumberChecker.getRepeatedDigits();

                    message = "Number contains different digits.";

                    message += NumberChecker.getRepeatedDigits().size
                        ? ` Number contains duplicated digits : ${Array.from(NumberChecker.getRepeatedDigits()).join(", ")}`
                        : " No duplicated digits found.";
                    break;
            }

            NumberChecker.display(message);
        });
    }),
};