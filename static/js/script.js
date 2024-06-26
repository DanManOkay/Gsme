document.addEventListener('DOMContentLoaded', () => {
    const stickFigure = document.getElementById('stick-figure');
    let left = 50;

    const moveLeft = () => {
        if (left > 0) {
            left -= 5;
            stickFigure.style.left = left + '%';
        }
    };

    const moveRight = () => {
        if (left < 95) {
            left += 5;
            stickFigure.style.left = left + '%';
        }
    };

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            moveLeft();
        } else if (event.key === 'ArrowRight') {
            moveRight();
        }
    });
});
