// script.js
let loginAttempts = 0;

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('loginMessage');
    const contentContainer = document.getElementById('contentContainer');
    const inputs = document.querySelectorAll('input, textarea');

    if ((username === "admin" && password === "1234") || (username === "root" && password === "1234")) {
        alert("Đăng nhập thành công!");
        message.innerText = "";
        contentContainer.style.display = 'block';
        if (username === "admin") {
            inputs.forEach(input => input.disabled = true);
        } else if (username === "root") {
            inputs.forEach(input => input.disabled = false);
        }
        loginAttempts = 0;
    } else {
        loginAttempts++;
        message.innerText = "Bạn đã nhập sai thông tin đăng nhập";
        if (loginAttempts >= 5) {
            alert("Bạn đã nhập sai thông tin đăng nhập quá 5 lần. Nội dung trang web sẽ bị ẩn.");
            contentContainer.style.display = 'none';
        }
    }
}

function saveCode() {
    const htmlCode = document.getElementById('htmlCode').value;
    const cssCode = document.getElementById('cssCode').value;
    const jsCode = document.getElementById('jsCode').value;

    const codeBlob = new Blob([htmlCode, cssCode, jsCode], { type: 'text/plain' });
    const url = URL.createObjectURL(codeBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'code.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Chống sao chép
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('copy', event => event.preventDefault());
document.addEventListener('cut', event => event.preventDefault());
document.addEventListener('paste', event => event.preventDefault());
