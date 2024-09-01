// Переменные с цифрами
let balance = 0;
let lvl_up_money = 100;
let lvl_up_rank = 1;
let mnozhitel = 5;
let tact = 0;
var up = document.getElementById("idAudio");
var main = document.getElementById("main_music")
function playaudio_up() {
    up.volume = 0.15;
	up.play();
    main.pause();
	main.currentTime = 0;
}
function stopaudio_up() {
	up.pause();
	up.currentTime = 0;
    main.volume = 0.10;
	main.play();
}
function playaudio_main() {
    main.volume = 0.10;
	main.play();
}
function stopaudio_main() {
	main.pause();
	main.currentTime = 0;
}

// document.querySelector(".level_score-top").textContent = lvl_up_rank
// Тап по экрану на персонажа
document.querySelector(".main__button").addEventListener("click", () => {
    balance += mnozhitel
    document.querySelector(".balance").textContent = balance
})
// Взаимодействия с кнопками нижнего меню
// Меню магазина
// Открытие меню магазина
document.querySelector("#shop").addEventListener("click", () => {
    document.querySelector(".shop").style = "display: block";
})
// Закрытие меню магазина
document.querySelector(".close__button-shop").addEventListener("click", () => {
    document.querySelector(".shop").style = "display: none";
})
// Меню Улучшений
// Открытие меню улучшений
document.querySelector("#up").addEventListener("click", () => {
    document.querySelector(".up").style = "display: block";
    document.querySelector("#lvl_up_money").textContent = lvl_up_money
    document.querySelector(".level_score").textContent = lvl_up_rank
    if (balance >= lvl_up_money) {
        document.querySelector("#lvl_up_money").style = "color: rgb(17, 255, 0)"
    }else {
        document.querySelector("#lvl_up_money").style = "color: red"
    }
    if (lvl_up_rank <= 10) {
        document.querySelector(".level_score").style = "color: rgb(255, 234, 0)"
    } 
    if (lvl_up_rank > 10) {
        document.querySelector(".level_score").style = "color: rgb(0, 64, 255)"
    } 
    if (lvl_up_rank >= 50) {
        document.querySelector(".level_score").style = "color: rgb(55, 255, 0)"
    }
    if (lvl_up_rank >= 100) {
        document.querySelector(".level_score").style = "color: rgb(157, 0, 255)"
    }
})
// Логика улучшений
document.querySelector("#up__btn").addEventListener("click", () => {
    if (balance >= lvl_up_money) {
        balance -= lvl_up_money
        lvl_up_rank += 1
        mnozhitel += 1
        lvl_up_money += 100
        document.querySelector("#lvl_up_money").textContent = lvl_up_money
        document.querySelector(".level_score").textContent = lvl_up_rank
        document.querySelector(".level_score-top").textContent = lvl_up_rank
        document.querySelector(".balance").textContent = balance
    }
    if (balance >= lvl_up_money) {
        document.querySelector("#lvl_up_money").style = "color: rgb(17, 255, 0)"
    }else {
        document.querySelector("#lvl_up_money").style = "color: red"
    }
    document.querySelector("#lvl_up_money").textContent = lvl_up_money
    document.querySelector(".level_score").textContent = lvl_up_rank
    if (balance >= lvl_up_money) {
        document.querySelector("#lvl_up_money").style = "color: rgb(17, 255, 0)"
    }else {
        document.querySelector("#lvl_up_money").style = "color: red"
    }
    if (lvl_up_rank <= 10) {
        document.querySelector(".level_score").style = "color: rgb(255, 234, 0)"
    } 
    if (lvl_up_rank > 10) {
        document.querySelector(".level_score").style = "color: rgb(0, 64, 255)"
    } 
    if (lvl_up_rank >= 50) {
        document.querySelector(".level_score").style = "color: rgb(55, 255, 0)"
    }
    if (lvl_up_rank >= 100) {
        document.querySelector(".level_score").style = "color: rgb(157, 0, 255)"
    }
})
// Закрытие меню улучшений
document.querySelector(".close__button-up").addEventListener("click", () => {
    document.querySelector(".up").style = "display: none";
})
// Меню Биржа
// Открытие меню биржи
document.querySelector("#burse").addEventListener("click", () => {
    document.querySelector(".burse").style = "display: block";
})
// Закрытие меню биржи
document.querySelector(".close__button-burse").addEventListener("click", () => {
    document.querySelector(".burse").style = "display: none";
})
// Функция +1 при нажатии на кнопку
const btn = document.getElementById('btn');

btn.addEventListener('click', function(e) {
  const text = document.createElement('div');
  text.textContent = "+" + mnozhitel;
  text.style = "color: #fff; font-size: 50px"
  text.style.position = 'absolute';
  text.style.top = e.clientY + 'px';
  text.style.left = e.clientX + 'px';
  document.body.appendChild(text);
  

  setTimeout(function() {
    text.style.transition = 'top 1s, opacity 1s';
    text.style.top = (e.clientY - 50) + 'px';
    text.style.opacity = 0;
  }, 1);
  setTimeout(function() {
    text.style = "display: none";
  }, 400); // 3 seconds
});
// Меню
document.querySelector("#menu__play").addEventListener("click", () => {
    document.querySelector(".menu").style = "display: none";
})