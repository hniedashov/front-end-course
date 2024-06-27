export const Functions = {
    clearStringFromCustomer: (() => {
        const text = prompt('Enter a string');
        const symbols = prompt('Enter symbols to erase');

        if (! text || ! symbols) {
            return 'Please enter a string and symbols';
        }

        return Functions.removeItemsFromString(text, symbols.split(''));
    }),
    removeItemsFromString: ((string, itemsToRemove) => {
        function replace(string, item) {
            return string.replace(new RegExp(`${item.toLowerCase()}|${item.toUpperCase()}`, "g"), '');
        }

        if (Array.isArray(itemsToRemove)) {
            let temp = string;

            for (let item of itemsToRemove) {
                temp = replace(temp, item);
            }

            return temp;
        }

        return replace(string, itemsToRemove);
    }),
    findArithmeticMean: ((array) => {
        let filteredArray;

        filteredArray = array.filter((item) => {
            return ['number', 'string'].includes(typeof item) && ! isNaN(Number(item));
        }).map((item) => {
            return Number(item);
        });

        return filteredArray.reduce((sum, item) => sum + item, 0) / filteredArray.length;
    }),
    removeItemFromArray: ((array, item) => {
        return array.filter(arrayItem => arrayItem !== item);
    }),
    removeItemFromArrayWithMutation: ((array, item) => {
        const index = array.indexOf(item);

        if (index === -1) {
            return ;
        }

        return array.splice(index, 1);
    }),
    init: (() => {
        console.log("Clear string received from prompt : ", Functions.clearStringFromCustomer());
        console.log("Find arithmetic mean : ", Functions.findArithmeticMean(['1', '22', 'asdsad', '23dsd', {}, [], 1, 2]));
        console.log("Remove items from array : ", Functions.removeItemFromArray(['1', 1, 1, '11', 11, 22], 1));
    }),
};