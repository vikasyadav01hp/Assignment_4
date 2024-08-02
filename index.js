function toggleVisibility() {
    const userSelect = document.getElementById('userSelect');
    const parentElements = document.querySelectorAll('.parent');
    const childElements = document.querySelectorAll('.child');
    
    if (userSelect.value === 'dropdown') {
        parentElements.forEach(parent => {
            parent.style.display = 'block';
        });
        childElements.forEach(child => {
            child.style.display = 'block';
        });
    } else {
        parentElements.forEach(parent => {
            parent.style.display = 'none';
        });
        childElements.forEach(child => {
            child.style.display = 'none';
        });
    }
}