// Add an event listener to each tab link
const tabLinks = document.querySelectorAll('.tabs a');
tabLinks.forEach(tabLink => {
    tabLink.addEventListener('click', function (event) {
        event.preventDefault();

        // Remove the 'active' class from all tab links
        tabLinks.forEach(link => link.classList.remove('active'));

        // Add the 'active' class to the clicked tab link
        this.classList.add('active');

        // Get the target tab content ID from the href attribute
        const targetId = this.getAttribute('href').substring(1);

        // Hide all tab contents
        const tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(content => {
            content.style.display = 'none';
        });

        // Show the target tab content
        document.getElementById(targetId).style.display = 'block';
    });
});

// Show the initially active tab content
const initialTabLink = document.querySelector('.tabs a');
initialTabLink.classList.add('active');
const initialTabContentId = initialTabLink.getAttribute('href').substring(1);
document.getElementById(initialTabContentId).style.display = 'block';
