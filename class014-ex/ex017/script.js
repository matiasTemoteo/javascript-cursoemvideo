function generateTable() {
    var num = window.document.getElementById('iNum');
    var outputSelect = window.document.getElementById('iOutputSel');

    if (!num.value.length) {
        window.alert('Por favor, digite um número!');

    } else {

        var tableSize = 10;

        outputSelect.innerHTML = '';

        for(var i = 1; i <= tableSize; i++) {
            var multply = Number(num.value) * Number(i);
            var expression = `${num.value} X ${i} = ${multply}`;

            var newOpt = window.document.createElement('option');
            newOpt.value = expression;
            newOpt.text = expression;

            outputSelect.appendChild(newOpt);
        }
    }
}

function clearAll() {
    var num = window.document.getElementById('iNum');
    num.value = '';

    var outputSelect = window.document.getElementById('iOutputSel');

    outputSelect.innerHTML = '';
    var newOpt = window.document.createElement('option');
    newOpt.text = 'Digite um número acima';
    outputSelect.appendChild(newOpt);
}
