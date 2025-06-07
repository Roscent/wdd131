const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

document.addEventListener('DOMContentLoaded', function () {
    const productSelect = document.getElementById('productName');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1);
        productSelect.appendChild(option);
    });

    productSelect.focus();
});

document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

document.addEventListener('DOMContentLoaded', function () {
    let count = localStorage.getItem('reviewCount') || 0;
    count++;
    localStorage.setItem('reviewCount', count);
    document.getElementById('reviewCounter').textContent = count;
});