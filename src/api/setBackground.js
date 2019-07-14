export default function setBackground(target, path) {
    let element = target;
    if (typeof target == "string") {
        element = document.querySelector(target);
    }
    element.style.transition = `0.3s`;
    element.style.background = `url(${path}) no-repeat`;
    element.style.backgroundSize = `100% 100%`;
}
