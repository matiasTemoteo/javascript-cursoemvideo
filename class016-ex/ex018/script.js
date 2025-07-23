let numberList = [];

function getViewElement() {
    return window.document.getElementById('view');
}

function getOutputElement() {
    return window.document.getElementById('output');
}

function getTextNumberElement() {
    return window.document.getElementById('txtNum');
}

function isNumber(num) {
    return !isNaN(num);
}

function modifyViewList(operation='add', value) {
    let viewSel = getViewElement();

    if (operation == 'add') {
        let newOpt = window.document.createElement('option');
        newOpt.value = value;
        newOpt.text = `Valor ${value} adicionado!`;
        viewSel.appendChild(newOpt);

    } else if (operation == 'clear') {
        viewSel.innerHTML = '';
    }
    
}

function modifyOutput(operation='add', value) {
    let output = getOutputElement();

    if (operation == 'add') {
        let newP = window.document.createElement('p');
        newP.innerText = value;
        newP.style.padding = '10px 0';
        output.appendChild(newP);

        output.style.borderTop = '1px solid black';
        output.style.borderBottom = '1px solid black';
        output.style.marginTop = '35px';
        
    } else if (operation == 'clear') {
        output.innerHTML = '';
        output.style.border = 'none';
        output.style.marginTop = '0';
    } 
}

function addNumber() {
    let txtNum = getTextNumberElement();
    txtNum = txtNum.value;

    getTextNumberElement().value = '';

    if (!txtNum.length || !isNumber(txtNum)) {
        window.alert('Por favor, difite um número!');
        return;
    } else if (Number(txtNum) < 1 || Number(txtNum) > 100) {
        window.alert('Digite apenas números entre 1 e 100!');
        return;
    } else if (
        numberList.length > 0 &&
        numberList.indexOf(Number(txtNum)) != -1
    ) {
        window.alert('Este número já foi adicionado!');
        return;
    }

    numberList.push(Number(txtNum));

    modifyViewList('add', txtNum);

    let output = getOutputElement();
    if (output.innerText.length > 0) {
        modifyOutput('clear');
    }
}

function resumeNumbers() {
    if (!numberList.length) {
        window.alert('Adicione um número antes de finalizar!');
        return;
    }

    numberList.sort();
    let count = numberList.length;
    let biggest = numberList[numberList.length -1];
    let smallest = numberList[0];
    let sum = 0;
    for(let i = 0; i < numberList.length; i++) {
        sum += numberList[i];
    }
    let media = (sum / count).toFixed(2);

    modifyOutput(
        'add',
            count > 1 ?
            `Ao todo, ${count} números foram adicionados!`
            : 'Ao todo, 1 número foi adicionado!'
    );
    modifyOutput(
        'add', `O maior valor informado foi ${biggest}.`
    );
    modifyOutput(
        'add', `O menor valor informado foi ${smallest}.`
    );
    modifyOutput(
        'add', `Somando todos os valores, temos ${sum}.`
    );
    modifyOutput(
        'add', `A média dos valores é ${media}.`
    );
}

function clearAll() {
    numberList = [];
    getTextNumberElement().value = '';
    modifyViewList('clear');
    modifyOutput('clear');
}
