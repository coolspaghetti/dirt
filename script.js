document.addEventListener('DOMContentLoaded', function() {
    // Enable dragging for shirt, pants, jackets and others options
    setupDraggableItems('#shirt-options .shirt', 'shirt');
    setupDraggableItems('#pants-options .pants', 'pants');
    setupDraggableItems('#jackets-options .jackets', 'jackets');
    setupDraggableItems('#others-options .others', 'others');

    // Allow the character container to be a drop zone
    const characterContainer = document.getElementById('character-container');
    characterContainer.addEventListener('dragover', function(e) {
        e.preventDefault(); // Necessary to allow the drop
        console.log('Drag over container');
    });

    // Drop event handler logic
characterContainer.addEventListener('drop', function(e) {
    e.preventDefault();
    const itemType = e.dataTransfer.getData('type');
    const itemSrc = e.dataTransfer.getData('text');
    const equippedSrc = e.dataTransfer.getData('equipped-src');
    console.log('Dropped item type:', itemType);
    console.log('Dropped item src:', itemSrc);

    if (itemType === 'shirt') {
        const selectedShirt = document.getElementById('selected-shirt');
        selectedShirt.src = equippedSrc; // Use the equipped image source
        selectedShirt.style.display = 'block';
    } else if (itemType === 'pants') {
        const selectedPants = document.getElementById('selected-pants');
        selectedPants.src = equippedSrc; 
        selectedPants.style.display = 'block';
    } else if (itemType === 'jackets') {
        const selectedJacket = document.getElementById('selected-jackets');
        selectedJacket.src = equippedSrc;
        selectedJacket.style.display = 'block';
    } else if (itemType === 'others') {
        const selectedOther = document.getElementById('selected-others');
        selectedOther.src = equippedSrc;
        selectedOther.style.display = 'block';
    }
});

});

function setupDraggableItems(selector, type) {
    document.querySelectorAll(selector).forEach(item => {
        item.addEventListener('dragstart', function(e) {
            console.log('Drag started for', type);
            e.dataTransfer.setData('text', e.target.src); // Transfer item image src for preview
            e.dataTransfer.setData('equipped-src', e.target.getAttribute('data-equipped-src')); // Transfer equipped image src
            e.dataTransfer.setData('type', type); // Indicate whether it's a shirt, pants, jacket or other
        });
    });
}
