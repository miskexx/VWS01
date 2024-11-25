// Accessing and storing elements
var allFiltres = document.querySelectorAll('section.btns li.btn');
var allCards = document.querySelectorAll('section.gallery .card');

// Click event for all buttons
for (var i = 0; i < allFiltres.length; i++) {
    allFiltres[i].addEventListener('click', function () {
        // Access the button with the active class and remove the active class
        var currentTab = document.querySelector('section.btns .active');
        if (currentTab) {
            currentTab.classList.remove('active');
        }

        // Add active class to the button that is clicked
        this.classList.add('active');

        // Get the value of the data-filter attribute of the clicked button
        var filter = this.getAttribute('data-filter');

        // Show the clicked button's gallery
        for (var i = 0; i < allCards.length; i++) {
            var currentItem = allCards[i].getAttribute('data-items');

            // Reset animation for all cards before displaying
            allCards[i].classList.remove('active');
            void allCards[i].offsetWidth; // Forces reflow (reset animation)

            // Show the cards based on the filter
            if (filter === 'All' || currentItem === filter) {
                allCards[i].classList.remove('hide');
                allCards[i].classList.add('active');
            } else {
                allCards[i].classList.add('hide');
                allCards[i].classList.remove('active');
            }
        }
    });
}
document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll('section.btns li.btn');
    var definitions = document.querySelectorAll('section.definition .def');

    buttons.forEach((button) => {
        button.addEventListener('click', function () {
            // Remove the 'active' class from all buttons
            buttons.forEach((btn) => btn.classList.remove('active'));

            // Add the 'active' class to the clicked button
            button.classList.add('active');

            // Get the filter value from the clicked button
            var filter = button.getAttribute('data-filter');

            // Toggle the visibility of the definitions
            definitions.forEach((def) => {
                if (filter === 'All' || def.getAttribute('data-items') === filter) {
                    def.style.display = 'block'; // Show matching definition
                    def.setAttribute('aria-hidden', 'false'); // Accessible
                } else {
                    def.style.display = 'none'; // Hide non-matching definitions
                    def.setAttribute('aria-hidden', 'true'); // Accessible
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll('section.btns li.btn');
    var definitions = document.querySelectorAll('section.definition .def');

    buttons.forEach((button) => {
        button.addEventListener('click', function () {
            // Remove the 'active' class from all buttons
            buttons.forEach((btn) => btn.classList.remove('active'));

            // Add the 'active' class to the clicked button
            button.classList.add('active');

            // Get the filter value from the clicked button
            var filter = button.getAttribute('data-filter');

            // Toggle the visibility of the definitions
            definitions.forEach((def) => {
                if (filter !== 'All' && def.getAttribute('data-items') === filter) {
                    def.style.display = 'block'; // Show matching definition
                    def.setAttribute('aria-hidden', 'false'); // Accessible
                } else {
                    def.style.display = 'none'; // Hide non-matching definitions
                    def.setAttribute('aria-hidden', 'true'); // Accessible
                }
            });
        });
    });
});

