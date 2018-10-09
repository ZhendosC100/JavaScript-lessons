let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц : ", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц : ", "");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    incom: [],
    savings: false
};

function chooseExpenses() {
    for (let i=0; i<2; i++) {
        let a  = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b  = prompt('Во сколько обойдется?', '');
    
        if( (typeof(a))=== 'string' && a != null && b != null
            && a != '' && b != '' && a.length < 50 ) {
                console.log("done");
                appData.expenses[a] = b;
        }   else {
                alert("Введите все данные!");
                i--;
        }
        
    }
}

chooseExpenses();

appData.moneyPerDay = (appData.budget/30).toFixed();

console.log("Ежедневный бюджет : " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Низкий уровень дохода");
}   else if (appData.moneyPerDay > 100 && appData.moneyPerDay <2000) {
        console.log("Средний уровень достатка");
}   else {
    console.log("Высокий уровень дохода");
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений ?", ""),
            percent = +prompt("Под какой процент?", "");
            appData.mounthIncome = save/100/12*percent;
            alert("Доход в месяц от депозита: " + appData.mounthIncome);
    }
}

checkSavings();