const getElement = (selection) => {
    const element = document.querySelector(selection);
    if(element) return element;
    throw new Error("There is no selected element");
};

export default getElement;