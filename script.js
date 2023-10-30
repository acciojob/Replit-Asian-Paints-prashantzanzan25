//your JS code here. If required.
document.getElementById('change_button').addEventListener('click', function () {
    const blockId = document.getElementById('block_id').value;
    const color = document.getElementById('color_id').value;
    const gridItem = document.getElementById(blockId);

    if (gridItem) {
        gridItem.style.backgroundColor = color;
    }
});

document.getElementById('reset_button').addEventListener('click', function () {
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach((item) => {
        item.style.backgroundColor = 'transparent';
    });
});
