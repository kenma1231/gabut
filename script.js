let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('submit').addEventListener('click', function() {
    const guess = Number(document.getElementById('guess').value);
    attempts++;

    if (guess === randomNumber) {
        document.getElementById('result').textContent = `Selamat! Anda menebak angka ${randomNumber} dalam ${attempts} percobaan.`;
        document.getElementById('restart').style.display = 'block';
        document.getElementById('submit').disabled = true;
    } else if (guess < randomNumber) {
        document.getElementById('result').textContent = 'guoblok banget anda tebaan anda terlalu rendah!';
    } else {
        document.getElementById('result').textContent = 'terlalu tinggi tolol!';
    }
});

document.getElementById('restart').addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('result').textContent = '';
    document.getElementById('guess').value = '';
    document.getElementById('submit').disabled = false;
    this.style.display = 'none';
});