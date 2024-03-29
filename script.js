// script.js

function joinMeeting() {
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var stringLength = 30;

    function pickRandom() {
        return possible[Math.floor(Math.random() * possible.length)];
    }

    var randomString = Array.apply(null, Array(stringLength)).map(pickRandom).join('');

    var domain = "meet.jit.si";
    var jitsiURL = "https://" + domain + "/" + randomString;

    // Redirect to the Jitsi meeting URL
    window.location.href = jitsiURL;
}
