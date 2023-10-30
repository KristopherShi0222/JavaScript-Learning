document.getElementById('countBtn').addEventListener('click', countHTMLElements);
document.getElementById('countContainer1Btn').addEventListener('click', () => countElementsInContainer('container1'));
document.getElementById('countContainer2Btn').addEventListener('click', () => countElementsInContainer('container2'));

function countHTMLElements() {
    const elements = document.querySelectorAll('*');
    document.getElementById('result1').innerHTML = `There are ${elements.length} HTML elements on this page.`;
}

function countElementsInContainer(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        const elements = container.getElementsByTagName('*');
        document.getElementById('result2').innerHTML = `There are ${elements.length} elements in ${containerId}.`;
    } else {
        document.getElementById('result2').innerHTML = `Container not found.`;
    }
}