let balance = 0;
let incomeRate = 0;
let clickRate = 1;
let incomePerSecCost = 100;
let incomePerClickCost = 50;
let rank = 1;
let progress = 0;

const balanceDisplay = document.getElementById("balance");
const incomeRateDisplay = document.getElementById("incomeRate");
const clickRateDisplay = document.getElementById("clickRate");
const rankDisplay = document.getElementById("rank");
const progressDisplay = document.getElementById("progress");

const clickBtn = document.getElementById("clickBtn");
const incomePerSecBtn = document.getElementById("incomePerSecBtn");
const incomePerClickBtn = document.getElementById("incomePerClickBtn");

// Функция обновления отображения
function updateDisplay() {
    balanceDisplay.textContent = balance;
    incomeRateDisplay.textContent = incomeRate;
    clickRateDisplay.textContent = clickRate;
    rankDisplay.textContent = rank;
    progressDisplay.style.width = progress + "%";
}

// Обновление прогресса и ранга
function updateProgress() {
    progress += 1;

    if (progress >= 100) {
        rank += 1;
        progress = 0;
    }

    updateDisplay();
}

clickBtn.addEventListener("click", () => {
    balance += clickRate;
    updateProgress();
    updateDisplay();
});

incomePerSecBtn.addEventListener("click", () => {
    if (balance >= incomePerSecCost) {
        balance -= incomePerSecCost;
        incomeRate += 1;
        incomePerSecCost *= 2;
        incomePerSecBtn.textContent = `Увеличить доход за секунду (Стоимость: ${incomePerSecCost})`;
        updateDisplay();
    } else {
        alert("Недостаточно очков для улучшения дохода за секунду!");
    }
});

incomePerClickBtn.addEventListener("click", () => {
    if (balance >= incomePerClickCost) {
        balance -= incomePerClickCost;
        clickRate += 1;
        incomePerClickCost *= 2;
        incomePerClickBtn.textContent = `Увеличить доход за клик (Стоимость: ${incomePerClickCost})`;
        updateDisplay();
    } else {
        alert("Недостаточно очков для улучшения дохода за клик!");
    }
});

setInterval(() => {
    balance += incomeRate;
    updateDisplay();
}, 1000);

updateDisplay();
