export const TypesList = {
    listIdentifier: 'types-list',
    listContainerIdentifier: 'types-list-container',
    buttonIdentifier: 'types-list-init',
    buttonDisplayText: 'Output JavaScript types',
    buttonClearText: 'Clear Types',
    button: null,
    get: (() => {
        return {
            "String": "s",
            "Number": 1,
            "BigInt": BigInt("129847120957127523059394763475943753"),
            "Boolean": true,
            "Undefined": undefined,
            "Null": null,
            "Symbol": Symbol("id"),
            "Object": {},
        };
    }),
    build: (() => {
        let list = document.createElement("ul");

        list.classList.add("list-group");
        list.setAttribute("id", TypesList.listIdentifier);

        for (const [typeName, type] of Object.entries(TypesList.get())) {
            const listElement = TypesList.composeSingleTypeElement(typeName, type);

            list.appendChild(listElement);
        }

        return list;
    }),
    display: ((list) => {
        document.getElementById(TypesList.listContainerIdentifier).appendChild(list);
    }),
    clear: (() => {
        document.getElementById(TypesList.listIdentifier).remove();
        TypesList.button.setAttribute('data-action', '');
        TypesList.button.innerHTML = TypesList.buttonDisplayText;
    }),
    setClear: (() => {
        TypesList.button.setAttribute('data-action', 'clear');
        TypesList.button.innerHTML = TypesList.buttonClearText;
    }),
    composeSingleTypeElement: ((typeName, type) => {
        let output = document.createElement('li');

        output.setAttribute('class', 'list-group-item');
        output.innerHTML = `${typeName} : typeof ${typeName} = ${typeof type}`;

        return output;
    }),
    init: (() => {
        TypesList.button = document.getElementById(TypesList.buttonIdentifier);

        TypesList.button.addEventListener('click', (event) => {

            if (event.target.dataset.action === 'clear') {
                TypesList.clear();

                return;
            }

            TypesList.display(TypesList.build());
            TypesList.setClear();
        });
    }),
};