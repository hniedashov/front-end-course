export const Splitter = {
    outputContainerIdentifier: "splitter-container",
    inputIdentifier: "splitter-input",
    init: (() => {

        document.getElementById(Splitter.inputIdentifier).addEventListener('input', (event) => {
            const target = event.target;

            document.getElementById(Splitter.outputContainerIdentifier)
                .innerHTML = ("" + target.value).split("").join(" ");
        });
    }),
};