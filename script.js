function playGuess2() {
	var a = parseInt(Math.random()*100); // случайное целое число от 0 до 100
	var user = 1;

	while (true) {
		var b = prompt("Игрок N " + user + " Введите число от 0 до 100, для выхода нажмите q"); // число пользователя
	    if (b=="q") {
	    	break;
	    }
	    b = parseInt(b);

	    if(b>a) {
		    alert("Ваш ответ слишком большой");
	    } else if (b<a) {
		    alert ("Ваш ответ слишком маленький");
	    } else if(b==a) {
		    alert("Вы угадали! Выиграл Игрок N " + user);
		    break;
	    } else {
		    alert("Необходимо ввести число");
	    }

	    if(user == 1) {
			user = 2;
		} else {
			user = 1;
		}
	}
}
var count = 0;

function askQuestion(textBoxId, answer) {
	var userAnswer = document.getElementById(textBoxId).value;

	if (userAnswer == answer) {
		count++;
	} 
}
		
/*function playPuzzle() {
	count = 0;
	askQuestion("puzzle1", "всадник");
	askQuestion("puzzle2", "сухих");
	askQuestion("puzzle3", "часы");
	askQuestion("puzzle4", "эхо");

	document.getElementById("result").innerHTML = 
	"<p>Правильных ответов: " + count + "</p>";

}*/

function playGuess() {
	var a = parseInt(Math.random()*100); // случайное целое число от 0 до 100

	while (true) {
		var b = prompt("Введите число от 0 до 100, для выхода нажмите q"); // число пользователя
	    if (b=="q") {
	    	break;
	    }
	    b = parseInt(b);

	    if(b>a) {
		    alert("Ваш ответ слишком большой");
	    } else if (b<a) {
		    alert ("Ваш ответ слишком маленький");
	    } else if(b==a) {
		    alert("Вы угадали!");
		    break;
	    } else {
		    alert("Необходимо ввести число");
	    }
	}
}