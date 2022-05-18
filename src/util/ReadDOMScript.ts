export const readDOMScript = (id: String) => {
    const element = document.getElementById(id);
    let obj;
    if (element) {
        obj = JSON.parse(element.innerText);
    }
    return obj;
}
