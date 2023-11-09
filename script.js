document.addEventListener('DOMContentLoaded', function () {
    const messageElement = document.getElementById('message');
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const messageInput = document.getElementById('messageInput');
    const updateMessageBtn = document.getElementById('updateMessage');

    function changeMessage(text) {
        messageElement.textContent = text;
    }

    btn1.addEventListener('click', function () {
        changeMessage("I can't wake up without drinking coffee");
    });

    btn2.addEventListener('click', function () {
        changeMessage("Sometimes I tried to go out without drinking coffee, but I failed");
    });

    updateMessageBtn.addEventListener('click', function () {
        const newMessage = messageInput.value;
        changeMessage(newMessage);
    });
});