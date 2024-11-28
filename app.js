const slider = document.getElementById('slider');
const thumb = document.getElementById('thumb');
const valueDisplay = document.getElementById('value');

let isDragging = false;

thumb.addEventListener('mousedown', (e) => {
    isDragging = true;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

function onMouseMove(event) {
    if (!isDragging) return;

    const sliderRect = slider.getBoundingClientRect();
    let newLeft = event.clientX - sliderRect.left;

    if (newLeft < 0) newLeft = 0;
    if (newLeft > sliderRect.width) newLeft = sliderRect.width;

    thumb.style.left = newLeft + 'px';

    const value = Math.round((newLeft / sliderRect.width) * 100);
    valueDisplay.textContent = value;
}

    
function onMouseUp() {
    isDragging = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
}