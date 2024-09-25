document.addEventListener('DOMContentLoaded', function () {
    // Data for coffee items
    const coffeeData = {
        items: [
            {
                name: "Cappuccino",
                description: "A warm, comforting cup of cappuccino made with freshly ground coffee beans.",
                price: 4.50,
                image: "Images/cappucino.jpg"
            },
            {
                name: "Espresso",
                description: "A rich and intense espresso shot, perfect for a quick boost of energy.",
                price: 3.00,
                image: "Images/espresso.jpg"
            },
            {
                name: "Latte",
                description: "A smooth and creamy latte with a touch of sweetness.",
                price: 4.00,
                image: "Images/latte.jpg"
            }
        ]
    };

    // Data for snack items
    const snacksData = {
        items: [
            {
                name: "Blueberry Muffin",
                description: "A freshly baked blueberry muffin, bursting with juicy berries.",
                price: 2.50,
                image: "Images/blueberry_muffin.jpg"
            },
            {
                name: "Croissant",
                description: "A flaky, buttery croissant, perfect for a morning treat.",
                price: 2.00,
                image: "Images/croissant.jpg"
            },
            {
                name: "Chocolate Cake",
                description: "A decadent slice of chocolate cake, rich and moist.",
                price: 3.50,
                image: "Images/chocolatecake.jpg"
            }
        ]
    };

    // Function to render the menu using Handlebars
        function renderMenu(categoryData) {
            const templateScript = document.getElementById('menu-template').innerHTML;
            const template = Handlebars.compile(templateScript);
            const compiledHtml = template(categoryData);
            document.getElementById('menu-grid').innerHTML = compiledHtml;
        }

    // Initial render with coffee items
    renderMenu(coffeeData);

    // Event listener for menu category buttons
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', function () {
            const category = this.getAttribute('data-category');
            if (category === 'coffee') {
                renderMenu(coffeeData);
            } else if (category === 'snacks') {
                renderMenu(snacksData);
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
