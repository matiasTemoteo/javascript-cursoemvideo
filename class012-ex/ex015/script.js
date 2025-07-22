function verify() {
    var date = new Date();
    var year = date.getFullYear();
    var userYear = window.document.getElementById('txtYear');
    var outputTxt = window.document.getElementById('output-text');
    var outputImg = window.document.getElementById('output-img');

    if (userYear.value.length == 0 || Number(userYear.value) > year) {
        window.alert('Please, lookup the data and try again!');
    } else {
        var sex = document.getElementsByName('radSex');
        /*
            Creating element directly via js.
        */
        var img = document.createElement('img');

        /*
            Creating conditional tree to modify elements
            base on different values and input data.
        */
        img.setAttribute('id', 'photo');
        var age = year - Number(userYear.value);
        var gender = '';
        if (sex[0].checked) {
            gender = 'male';
            if (age >= 0 && age <= 10) {
                img.setAttribute('src', './images/baby-boy.png');
            } else if (age > 10 && age <= 25) {
                img.setAttribute('src', './images/young-boy.png');
            } else if (age > 25 && age < 65) {
                img.setAttribute('src', './images/middle-age-man.png');
            } else {
                img.setAttribute('src', './images/old-man.png');
            }
        } else if (sex[1].checked) {
            gender = 'female';
            if (age >= 0 && age <= 10) {
                img.setAttribute('src', './images/baby-girl.png');
            } else if (age > 10 && age <= 25) {
                img.setAttribute('src', './images/young-girl.png');
            } else if (age > 25 && age < 65) {
                img.setAttribute('src', './images/middle-age-woman.png');
            } else {
                img.setAttribute('src', './images/old-woman.png');
            }
        }

        /*
            Manipulating html using js.
        */
        outputTxt.innerHTML = `Age is ${age} as a ${gender}`;
        outputTxt.style.textAlign = 'center';
        outputTxt.style.padding = '15px 0px';
        outputImg.innerHTML = '';

        img.style.width = '240px';
        outputImg.appendChild(img);
        outputImg.style.display = 'flex';
        outputImg.style.justifyContent = 'center';
        outputImg.style.alignItems = 'center';
    }
}

function clearAll() {
    var userYear = window.document.getElementById('txtYear');
    var sex = document.getElementsByName('radSex');
    userYear.value = '';
    sex[0].checked = true;

    var outputTxt = window.document.getElementById('output-text');
    var outputImg = window.document.getElementById('output-img');
    outputTxt.innerHTML = '';
    outputImg.innerHTML = '';
}
