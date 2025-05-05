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

    let selectedItems = {};
    let total = 0;

    function updateDisplay() {
        const reviewList = document.getElementById('review');
        reviewList.innerHTML = ''; // Clear the container

        const table = document.createElement('table');
        table.style.width = '100%';
        table.style.borderCollapse = 'collapse';

        Object.keys(selectedItems).forEach(item => {
            const row = document.createElement('tr');

            const actionCell = document.createElement('td');
            const increaseButton = document.createElement('span');
            increaseButton.innerHTML = '<i class="fas fa-plus-circle" style="color: green;"></i>';
            increaseButton.style.cursor = 'pointer';
            increaseButton.style.marginRight = '10px';
            increaseButton.addEventListener('click', () => {
                selectedItems[item] += 1;
                total += items[item];
                updateDisplay();
            });

            const decreaseButton = document.createElement('span');
            decreaseButton.innerHTML = '<i class="fas fa-minus-circle" style="color: red;"></i>';
            decreaseButton.style.cursor = 'pointer';
            decreaseButton.style.marginRight = '10px';
            decreaseButton.addEventListener('click', () => {
                if (selectedItems[item] > 1) {
                    selectedItems[item] -= 1;
                    total -= items[item];
                } else {
                    total -= items[item];
                    delete selectedItems[item];
                }
                updateDisplay();
            });

            actionCell.appendChild(increaseButton);
            actionCell.appendChild(decreaseButton);
            actionCell.style.textAlign = 'left';
            row.appendChild(actionCell);

            const nameCell = document.createElement('td');
            nameCell.textContent = item;
            nameCell.style.textAlign = 'left';
            row.appendChild(nameCell);

            const countCell = document.createElement('td');
            countCell.textContent = `x${selectedItems[item]}`;
            countCell.style.textAlign = 'left';
            row.appendChild(countCell);

            const totalCell = document.createElement('td');
            totalCell.textContent = `₺${(selectedItems[item] * items[item]).toFixed(2)}`;
            totalCell.style.textAlign = 'left';
            row.appendChild(totalCell);

            table.appendChild(row);
        });

        reviewList.appendChild(table);
        document.getElementById('total').innerText = `Total: ₺${total.toFixed(2)}`;
    }

    Object.keys(items).forEach(id => {
        document.getElementById(id).addEventListener('click', () => {
            if (selectedItems[id]) {
                selectedItems[id] += 1;
            } else {
                selectedItems[id] = 1;
            }
            total += items[id];
            updateDisplay();
        });
    });

    document.getElementById('clear-all').addEventListener('click', () => {
        selectedItems = {};
        total = 0;
        updateDisplay();
    });

    updateDisplay();
});