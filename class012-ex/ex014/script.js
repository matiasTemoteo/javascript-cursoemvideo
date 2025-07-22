
function load () {
    var date = new Date();
    var body = window.document.body;
    var msg = window.document.getElementById('msg');
    var photo = window.document.getElementById('photo');

    var hours = date.getHours();
    msg.innerText = `Now, there is ${hours} hrs.`;

    /*
        Using js to modify html elements, adding styles
        and changing atributes.
    */
    if (hours >= 0 && hours < 12) {
        photo.src = './images/morning.png';
        body.style.backgroundColor = '#e2cd9f';
    } else if (hours >= 12 && hours < 18) {
        photo.src = './images/afternoon.png';
        body.style.backgroundColor = '#b9846f';
    } else {
        photo.src = './images/night.png';
        body.style.backgroundColor = '#515154';
    }
}