document.addEventListener('DOMContentLoaded', () => {
    const items = {
        Şekersiz: 150,
        Proteinli: 140,
        'Hafif bitter': 140,
        Beyaz: 120,
        Fındık: 275,
        'Badem (șeker ilavesiz)': 325,
        'Badem (vegan sütlü)': 375,
        Latte: 120,
        Americano: 110,
        Cappuccino: 120,
        Filtre: 100,
        'Türk kahvesi': 60,
        Soda: 40
    };

    let selectedItems = [];
    let total = 0;

    function updateDisplay() {
        document.getElementById('review').innerText = `Selected Items: ${selectedItems.join(', ') || 'None'}`;
        document.getElementById('total').innerText = `Total: ₺${total.toFixed(2)}`;
    }

    Object.keys(items).forEach(id => {
        document.getElementById(id).addEventListener('click', () => {
            selectedItems.push(id);
            total += items[id];
            updateDisplay();
        });
    });

    document.getElementById('delete').addEventListener('click', () => {
        if (selectedItems.length > 0) {
            const lastItem = selectedItems.pop();
            total -= items[lastItem];
            updateDisplay();
        }
    });

    updateDisplay();
});