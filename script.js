document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.navbar-ul').classList.toggle('active');
    this.classList.toggle('active'); // Toggle the cross icon
});
