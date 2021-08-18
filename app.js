function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinStr = pin + '';
    if (pinStr.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
    
}
function generatePin() {
    const showGeneratePin = document.getElementById('show-generate-pin');
    showGeneratePin.value = getPin();
    document.getElementById('tryCount').innerText = 3; 
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const key = event.target.innerText;
    const showKeyPadNumber = document.getElementById('show-keyPad-number');
    const currentKey = showKeyPadNumber.value;
    if (isNaN(key)) {
        if (key == 'C') {
            showKeyPadNumber.value = '';
        }
    }
    else {
        showKeyPadNumber.value = currentKey + key;
    }
});

function verification() {
    const typedNumber = document.getElementById('show-keyPad-number').value;
    const generatePin = document.getElementById('show-generate-pin').value;
    const successMsg = document.getElementById('success-msg');
    const failMsg = document.getElementById('fail-msg');
    const tryAction = document.getElementById('try-action');
    const tryActionValue = document.getElementById('tryCount');
    const tryActionCount = parseInt(tryActionValue.innerText);
    if (tryActionCount == 0) {
        alert("Please Generate New Pin");
    }
    else {
        if (generatePin == typedNumber) {
            successMsg.style.display = 'block';
            failMsg.style.display = 'none';
        }
        else {
            tryActionValue.innerText = tryActionCount-1;
            failMsg.style.display = 'block';
            successMsg.style.display = 'none';
        }
    }
    
}