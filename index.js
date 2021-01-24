const inputs = document.getElementsByClassName('input'),
    //
    checkboxs = document.getElementsByClassName('checkbox'),
    //
    btnSubmit = document.getElementsByClassName('submit'),
    resultField = document.getElementById('results');

for (let i = 0; i < checkboxs.length; i++) {
    const checkbox = checkboxs[i];
    const inputElement = checkbox.previousElementSibling;

    checkbox.onclick = function () {
        checkbox.checked ? inputElement.classList.add('hasChecked') : inputElement.classList.remove('hasChecked');
    };
}

function hasMinimCheckedInput() {
    let totalChecked = 0;

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].classList.contains('hasChecked')) {
            totalChecked += 1;
        }
    }

    return totalChecked <= 1;
}

function getCheckedInputValue() {
    let values = [];

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].classList.contains('hasChecked')) {
            const value = parseInt(inputs[i].value);
            values.push(isNaN(value) ? 0 : value);
        }
    }

    return values;
}

for (let i = 0; i < btnSubmit.length; i++) {
    btnSubmit[i].onclick = function (e) {
        if (hasMinimCheckedInput()) {
            alert('Minimal 2 inputan yang harus diceklist');
            return;
        }

        const btnName = e.target.getAttribute('name');
        const inputValues = getCheckedInputValue();
        let result = inputValues.reduce((a, b) => {
            console.log(a, b);
            switch (btnName) {
                case 'adds':
                    return a + b;
                    break;

                case 'subtracts':
                    return a - b;
                    break;

                case 'multiplies':
                    return a * b;
                    break;

                default:
                    return a / b;
                    break;
            }
        });

        resultField.innerHTML = `Hasil: ${result}`;
    };
}
