import {Prompt} from "Helpers/Prompt";

export const BioComposer = {
    outputContainerIdentifier: "bio-container",
    buttonIdentifier: "bio-init",
    button: null,
    prompt: null,
    questionsWithPhrases: {
        "name": {
            "prompt": "What is Your name?",
            "phrase": "You are",
        },
        "age": {
            "prompt": "How old are You?",
            "phrase": "at the age of",
        },
        "location": {
            "prompt": "Where are You from?",
            "phrase": "from",
        },
    },
    compose: (() => {
        let output = '';
        let space = '';

        for (const [index, [answerTag, answer]] of Object.entries(Object.entries(BioComposer.prompt.answers))) {

            if (index !== '0') {
                space = ' ';
            }

            if (answer === null) {
                continue;
            }

            output += `${space}${BioComposer.questionsWithPhrases[answerTag].phrase} ${answer}`;
        }

        return output;
    }),
    display: ((bio) => {
        document.querySelector('.card').classList.remove('d-none');
        document.getElementById(BioComposer.outputContainerIdentifier).innerHTML = bio;
    }),
    init: (() => {
        BioComposer.button = document.getElementById(BioComposer.buttonIdentifier);

        BioComposer.button.addEventListener('click', (event) => {
            BioComposer.prompt = Prompt.init(BioComposer.questionsWithPhrases);
            BioComposer.prompt.getAnswersFromPrompts();

            BioComposer.display(BioComposer.compose());
        });
    }),
};