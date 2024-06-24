// Load everything for subtasks in homework №3

import {TypesList} from "./tasks/sub-task-1";
import {BioComposer} from "./tasks/sub-task-2";
import {Splitter} from "./tasks/sub-task-3";

// Invoke tasks

export const Homework_3 = () => {
    document.addEventListener('DOMContentLoaded', () => {
        TypesList.init();
        BioComposer.init();
        Splitter.init();
    });
};