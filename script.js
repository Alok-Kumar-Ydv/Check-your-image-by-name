document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('button');
    const nameInput = document.getElementById('nameid');
    const image = document.getElementById('image');

    button.addEventListener('click', function () {
        const a = nameInput.value;
        image.src = `https://joesch.moe/api/v1/${a}`;
    });
});
