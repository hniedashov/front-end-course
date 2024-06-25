import {PromptQuestionAnswer} from "./tasks/sub-task-1";
import {NumberChecker} from "./tasks/sub-task-2";
import {CustomerInfo} from "./tasks/sub-task-3";

export const Homework_4 = () => {
    document.addEventListener('DOMContentLoaded', () => {
        PromptQuestionAnswer.init();
        NumberChecker.init();
        CustomerInfo.init();
    });
};