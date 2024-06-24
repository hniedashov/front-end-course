export const Prompt = {
    instance: null,
    getPromptAnswer: ((question) => {
        return prompt(question);
    }),
    getAnswersFromPrompts: (() => {
        for (const [questionTag, question] of Object.entries(Prompt.instance.questions)) {
            let answer = Prompt.instance.getPromptAnswer(question.prompt);

            while (answer === '') {
                answer = Prompt.instance.getPromptAnswer(question.prompt);
            }

            Prompt.instance.answers[questionTag] = answer;
        }
    }),
    getAnswers: (() => {
        return Prompt.instance.answers;
    }),
    init: ((questions) => {
        Prompt.instance = Object.create(Prompt);

        Prompt.instance.questions = questions;
        Prompt.instance.answers = {};

        return Prompt.instance;
    }),
};