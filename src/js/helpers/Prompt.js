export const Prompt = {
    questions: {},
    answers: {},
    getPromptAnswer: ((question) => {
        return prompt(question);
    }),
    getAnswersFromPrompts: (() => {
        for (const [questionTag, question] of Object.entries(Prompt.questions)) {
            let answer = Prompt.getPromptAnswer(question.prompt);

            while (answer === '') {
                answer = Prompt.getPromptAnswer(question.prompt);
            }

            Prompt.answers[questionTag] = answer;
        }
    }),
    getAnswers: (() => {
        return Prompt.answers;
    }),
    init: ((questions) => {
        Prompt.questions = questions;

        return Prompt;
    }),
};