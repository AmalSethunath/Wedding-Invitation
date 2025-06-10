document.addEventListener('DOMContentLoaded', (event) => {
    // Countdown Logic
    function updateCountdown() {
        const weddingDate = new Date(2025, 8, 13, 10, 30, 0).getTime();
        const now = new Date().getTime();
        const distance = weddingDate - now;

        const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById('months').innerHTML = months;
        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = 'The wedding has started!';
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000 * 60);
    updateCountdown();

    // Add to Calendar Logic for Wedding and Reception
    window.addToCalendar = function (type) {
        if (type === 'wedding') {
            window.open('calendar-wedding.html', '_blank');
        } else if (type === 'reception') {
            window.open('calendar-reception.html', '_blank');
        }
    };
});
