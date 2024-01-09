let balance = 5000000000;
let ownedItems = {};

function buyItem(price, itemId) {
    if (balance >= price) {
        balance -= price;

        // Increase the count or set to 1 if it's the first time buying
        ownedItems[itemId] = (ownedItems[itemId] || 0) + 1;

        updateBalance();
        showOwnedItemsCount();
        alert('Item purchased successfully!');
    } else {
        alert('Not enough funds to buy this item.');
    }
}

function sellItem(price, itemId) {
    if (ownedItems[itemId] && ownedItems[itemId] > 0) {
        balance += price;
        ownedItems[itemId]--;
        updateBalance();
        showOwnedItemsCount();
        alert('Item sold successfully!');
    } else {
        alert('You do not own this item to sell.');
    }
}

function claimItem(itemId) {
    ownedItems[itemId] = 1; // Set Zidan count to 1 (free)
    updateBalance();
    showOwnedItemsCount();
    alert('Item claimed successfully!');
}

function updateBalance() {
    document.getElementById("balance").innerText = `Balance: $${balance}`;
}

function showOwnedItemsCount() {
    Object.keys(ownedItems).forEach(itemId => {
        const countElement = document.getElementById(`${itemId}Count`);
        if (countElement) {
            countElement.innerText = `Owned: ${ownedItems[itemId]}`;
        }
    });
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', function () {
    showOwnedItemsCount();
});