import {Prompt} from "Helpers/Prompt";

export const PromptQuestionAnswer = {
    buttonIdentifier: "question-answer-init",
    button: null,
    prompt: null,
    questions: {
        "name": {
            "prompt": "What is Your name?",
        },
    },
    compose: (() => {
        let output = '';

        for (const [tag, answer] of Object.entries(PromptQuestionAnswer.prompt.answers)) {

            if (answer === null) {
                continue;
            }

            output += `Hello, ${answer}! How are you?`;
        }

        return output;
    }),
    display: ((bio) => {
        alert(bio);
    }),
    init: (() => {
        PromptQuestionAnswer.button = document.getElementById(PromptQuestionAnswer.buttonIdentifier);

        PromptQuestionAnswer.button.addEventListener('click', (event) => {
            PromptQuestionAnswer.prompt = Prompt.init(PromptQuestionAnswer.questions);
            PromptQuestionAnswer.prompt.getAnswersFromPrompts();

            PromptQuestionAnswer.display(PromptQuestionAnswer.compose());
        });
    }),
};