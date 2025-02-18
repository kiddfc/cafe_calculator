const items = {
    Latte: 150,
    Chocolate: 200,
    Paste: 250
};

let total = 0;
let selectedItems = [];

const updateDisplay = () => {
    const totalDisplay = document.getElementById('total');
    const reviewDisplay = document.getElementById('review');
    totalDisplay.textContent = `Total: ₺${total.toFixed(2)}`;
    reviewDisplay.textContent = `Selected Items: ${selectedItems.join(', ') || 'None'}`;
};

const addItem = (item) => {
    selectedItems.push(item);
    total += items[item];
    updateDisplay();
};

const deleteLastItem = () => {
    if (selectedItems.length > 0) {
        const lastItem = selectedItems.pop();
        total -= items[lastItem];
        updateDisplay();
    }
};

document.getElementById('latte').addEventListener('click', () => addItem('Latte'));
document.getElementById('chocolate').addEventListener('click', () => addItem('Chocolate'));
document.getElementById('paste').addEventListener('click', () => addItem('Paste'));
document.getElementById('delete').addEventListener('click', deleteLastItem);