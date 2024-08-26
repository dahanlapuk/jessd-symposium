
// Set the target date
var targetDate = new Date("November 15, 2024 00:00:00").getTime();

// Update the countdown every second
var countdown = setInterval(function() {
    var now = new Date().getTime();
    var distance = targetDate - now;

    // Calculate time components
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the respective span elements
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;

    // If the countdown is over, display some text
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown-timer").innerHTML = "Submission Closed";
        document.querySelector('.countdown-labels').style.display = 'none';
        document.querySelector('.countdown-text').style.display = 'none';
    }
}, 1000);

document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('navbar-menu').classList.toggle('active');
});

