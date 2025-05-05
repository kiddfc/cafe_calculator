document.addEventListener('DOMContentLoaded', () => {
    const items = {
        'Şekersiz Bitter': 150,
        'Proteinli Sütlü': 150,
        'Hafif bitter': 140,
        Beyaz: 120,
        '%55 Fındık Ezmesi 30 gr': 60,
        '%55 Fındık Ezmesi 180 gr': 220,
        '%75 Fındık Ezmesi 30 gr': 65,
        '%75 Fındık Ezmesi 180 gr': 250,
        '%80 Fındık Ezmesi 30 gr': 75,
        '%80 Fındık Ezmesi 180 gr': 310,
        '%55 Badem Ezmesi 30 gr': 60,
        '%55 Badem Ezmesi 180 gr': 220,
        '%75 Badem Ezmesi 30 gr': 65,
        '%75 Badem Ezmesi 180 gr': 250,
        '%80 Badem Ezmesi 30 gr': 75,
        '%80 Badem Ezmesi 180 gr': 310,
        'Espresso (single)': 50,
        'Espresso (double)': 100,
        'Macchiato': 110,
        Americano: 110,
        Latte: 120,
        Cappuccino: 120,
        'Flat White': 130,
        'Cocoa Works\' Mocha': 160,
        'Filtre Kahve': 100,
        'Sıcak Çikolata': 180,
        'Türk Kahvesi': 60,
        'Iced Latte': 130,
        'Iced Americano': 130,
        Soda: 40,
        'Bitkisel Süt': 40,
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