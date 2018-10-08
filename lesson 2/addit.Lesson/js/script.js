let week = ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"];

let i = 0;
while(i < week.length){
    console.log(week[i]);
    document.getElementById('text').innerHTML += week[i] + '<br/>';
    i++;
}
