import {Prompt} from "Helpers/Prompt";

export const CustomerInfo = {
    outputContainerIdentifier: "customer-info-container",
    buttonIdentifier: "customer-info-init",
    button: null,
    prompt: null,
    messages: {
        "reject" : "We are sorry you didn't wish to share your",
        "ageIsNan": "We are not sure about Your age...",
    },
    questionsWithPhrases: {
        "age": {
            "prompt": "What is Your year of birth?",
            "alias": "year of birth"
        },
        "home town": {
            "prompt": "What is Your home town?",
            "extra": {
                "message": "You live in the capital of",
                "overrideDefaultMessage": true,
                "variants": {
                    "kyiv": "Ukraine",
                    "london": "England",
                    "washington": "United States"
                }
            },
        },
        "sport": {
            "prompt": "What is Your favorite sport?",
            "prefix": "favourite ",
            "postfix": "?",
            "extra": {
                "message": "Cool, wanna be like",
                "variants": {
                    "boxing": "Oleksandr Usyk",
                    "chess": "Magnus Carlsen",
                    "swimming": "Michael Phelps",
                }
            },
        },
    },
    resolveMessage: ((tag, answer) => {
        const question = CustomerInfo.questionsWithPhrases[tag];
        const prefix = question.prefix ? question.prefix : '';
        const postfix = question.postfix ? question.postfix : '';
        const alias = question.alias ? question.alias : `${prefix} ${tag}`;
        let trimmedAnswer = answer.toLowerCase().trim();
        let outputBasedOnAnswer = '';
        let message = '';
        let overrideDefaultMessage = false;

        if (!trimmedAnswer) {
            return `${CustomerInfo.messages.reject} ${alias}`;
        }

        switch (tag) {
            case "age":
                if (isNaN(Number(trimmedAnswer))) {
                    outputBasedOnAnswer = CustomerInfo.messages.ageIsNan;
                    break;
                }

                outputBasedOnAnswer = new Date().getFullYear() - trimmedAnswer;
                break;
            case "home town":
            case "sport":
                if (trimmedAnswer in question.extra.variants) {
                    overrideDefaultMessage = question.extra.overrideDefaultMessage;

                    outputBasedOnAnswer = `${question.extra.message} ${question.extra.variants[trimmedAnswer]}`;
                    outputBasedOnAnswer = overrideDefaultMessage
                        ? outputBasedOnAnswer
                        : `${answer}. ${outputBasedOnAnswer}${postfix}`;
                    break;
                }

                outputBasedOnAnswer = answer;
                break;
            default:
                outputBasedOnAnswer = answer;
                break;
        }

        message = overrideDefaultMessage ? outputBasedOnAnswer : `Your ${prefix}${tag} is : ${outputBasedOnAnswer}`;

        return message;
    }),
    compose: (() => {
        const list = document.createElement("ul");

        for (const [tag, answer] of Object.entries(CustomerInfo.prompt.answers)) {
            const item = document.createElement('li');

            item.innerHTML = CustomerInfo.resolveMessage(tag, answer);

            list.append(item);
        }

        return list;
    }),
    display: ((bio) => {
        const outputContainer = document.getElementById(CustomerInfo.outputContainerIdentifier);

        document.querySelector('.customer-info-card').classList.remove('d-none');
        outputContainer.innerHTML = "";
        outputContainer.append(bio);
    }),
    init: (() => {
        CustomerInfo.button = document.getElementById(CustomerInfo.buttonIdentifier);

        CustomerInfo.button.addEventListener('click', (event) => {
            CustomerInfo.prompt = Prompt.init(CustomerInfo.questionsWithPhrases);
            CustomerInfo.prompt.getAnswersFromPrompts();

            CustomerInfo.display(CustomerInfo.compose());
        });
    }),
};