document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('yes').addEventListener('click', handleYes);
    document.getElementById('no').addEventListener('mouseover', moveNoButton);
    document.getElementById('no').addEventListener('click', handleNo);
});

function handleYes() {
    updateContent(`
        <h1>Я так і знав!</h1>
        <img id="cat" class="cat dance" src="https://media1.tenor.com/m/ZNFCm72UkTAAAAAC/%D0%BA%D0%BE%D1%82-%D1%82%D0%B0%D0%BD%D0%B5%D1%86.gif">
        <div class="buttons">
            <button onclick="goHome()">Дома</button>
            <button onclick="goOut()">Кудись вийти :(</button>
        </div>
        ${createBackButton()}
    `);
}

function handleNo() {
    document.getElementById('cat').src = 'https://media1.tenor.com/m/0eg7MZS_Q_YAAAAC/cat-cats.gif';
    document.getElementById('message').innerText = 'Ти точно впевнена?';
    this.disabled = true;
}

function moveNoButton() {
    this.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`;
}

function goHome() {
    updateContent(`
        <h1>ШОК</h1>
        <img src="https://media1.tenor.com/m/2K-78RA2aDsAAAAC/inyawnzz-omprazol.gif">
        <div>
            <button onclick="orderFood()">Замовити</button>
            <button onclick="cookFood()">Приготувати</button>
        </div>
        ${createBackButton()}
    `);
}

function orderFood() {
    updateContent(`
        <h1>Що замовимо?</h1>
        <img src="https://media1.tenor.com/m/A6WyQeVgeSoAAAAC/kitty-kitty-stare.gif">
        <div>
            <button onclick="confirmOrder()">Суші</button>
            <button onclick="confirmOrder()">Бургери</button>
            <button onclick="confirmOrder()">Піца</button>
            <button onclick="confirmOrder()">Грузинська кухня</button>
        </div>
        ${createBackButton()}
    `);
}

function updateContent(html) {
    document.body.innerHTML = html;
}

function createBackButton() {
    return `<div class="back-button"><button onclick="location.reload()">Котик Юлічка передумала <3</button></div>`;
}
