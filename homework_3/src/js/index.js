import '../scss/styles.scss'

// Load everything for subtasks in homework №3

import {TypesList} from "./tasks/3-1";
import {BioComposer} from "./tasks/3-2";
import {Splitter} from "./tasks/3-3";

// Invoke tasks

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        TypesList.init();
        BioComposer.init();
        Splitter.init();
    });
})();