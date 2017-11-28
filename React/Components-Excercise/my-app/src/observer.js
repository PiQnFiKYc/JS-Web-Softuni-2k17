let functions = {};

let observer = {
    addFunc: (name, func) => {
        functions[name] = func;
    },
    applyFunc: (name, params) => {
        functions[name](params);
    }
}

export default observer;