function count() {
    var txtStart = window.document.getElementById('istart');
    var txtEnd = window.document.getElementById('iend');
    var txtStep = window.document.getElementById('istep');

    if (!txtStart.value.length) {
        window.alert('Please, fill up start value!!');
    } else if (!txtEnd.value.length) {
        window.alert('Please, fill up end value!!');
    } else if (txtStep.value == 0) {
        window.alert('Please use no zero negative step!');
    } else {

        var output = window.document.getElementById('output');

        output.innerHTML = '';
        output.innerHTML = 'Couting:<br><br>';

        var step = Number(txtStep.value);
        var start = Number(txtStart.value);
        var end = Number(txtEnd.value);

        if (start < end) {
            var currCount = start;
            while(currCount <= end) {
                output.innerHTML += `${currCount} \u{1f449} `;
                currCount+=step;
            }
        } else if (start > end) {
            var currCount = start;
            while(currCount >= end) {
                output.innerHTML += `${currCount} \u{1f449} `;
                currCount-=step;
            }
        }
        
        output.innerHTML += `\u{1f3C1}`;
    }
}

function clearAll() {
    var txtStart = window.document.getElementById('istart');
    var txtEnd = window.document.getElementById('iend');
    var txtStep = window.document.getElementById('istep');
    txtStart.value = '';
    txtEnd.value = '';
    txtStep.value = '';

    var output = window.document.getElementById('output');
    output.innerHTML = '';
}
