document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('box');
    const clickCountSpan = document.getElementById('clickCount');
    let clickCount = 0;
    let rotation = 0;

    box.addEventListener('click', () => {
        clickCount++;
        rotation += 90;
        box.style.transform = `rotate(${rotation}deg)`;
        clickCountSpan.textContent = clickCount;
    });
});