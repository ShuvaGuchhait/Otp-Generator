document.getElementById('generateOtpBtn').addEventListener('click', function() {
    const otp = generateOtp();
    document.getElementById('otpDisplay').textContent = otp;
});

function generateOtp() {
    const length = 6;
    const characters = '0123456789';
    let otp = '';
    for (let i = 0; i < length; i++) {
        otp += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return otp;
}
