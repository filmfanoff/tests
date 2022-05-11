const questions = [
	{
		question: "Помните ли вы в каком году происходили события фильма?",
		answers: ["1941", "1942", "1943", "1944"],
		correct: 2,
	},
	{
		question: "А где происходят действия фильма?",
		answers: [
			"Архангельская облость",
			"Московская область",
			"Республика Карелия",
			"Ленинград",
		],
		correct: 3,
	},
	{
		question: "Какое звание имел Федот Васкова? Что-то знакомое, но как же оно было точно...",
		answers: [
			"Старшина",
			"Сержант",
			"Лейтенант",
			"Капитан",
		],
		correct: 1,
	},
	{
		question: "На что так часто жаловался Федот Васков до приезда нового отряда? Чем же они так не угодили...",
		answers: [
			"на небольшое количество солдат", 
			"на пьющих солдат", 
			"на слишком молодых солдат", 
			"на плохо обученных солдат"
		],
		correct: 2,
	},
	{
		question: "Как звали сержанта двух взоводов, назначенных старшине Васкову.",
		answers: [
			"Комелькова", 
			"Осянина", 
			"Гурвич", 
			"Кирьянова"
		],
		correct: 4,
	},
	{
		question: "Деушка, с детства живущая в деревне и хорошо отрентирующаяся на местности. Скромная, влюбчивая, но отважная и упёртая.",
		answers: [
			"Женя Комелькова", 
			"Лиза Бричкина", 
			"Рита Осянина", 
			"Галя Четвертак"
		],
		correct: 2,
	},
	{
		question: "Кто первым доложил старшине Васкову о диверсантах? Ловко скрывшись от немецких солдат, она, что есть сил, бросилась в дервню.",
		answers: [
			"Галя Четвертак", 
			"Лиза Бричкина", 
			"Рита Осянина", 
			"Соня Гурвич"
		],
		correct: 3,
	},
	{
		question: "Сколько девушек из отряда собрал Федот Васков для этой операции?",
		answers: ["5", "4", "6", "3"],
		correct: 1,
	},
	{
		question: "Какая цель стояла перед Федотом Васковым и его отрядом?",
		answers: [
			"Разведать информацию о приближающихся немецких войсках и доложить начальству", 
			"Держать оборону транспортного пути", 
			"Напасть на приближающиеся немецкие войска", 
			"Устранить угрозу немецкой диверсии железнодорожного пути"
		],
		correct: 4,
	},
	{
		question: "Про кого были слова 'Не верь ангельскому виду, чёрт в юбке!'. А ведь именно она взяла на себя смелось отвлечь немецких солдат.",
		answers: [
			"Рита Осянина", 
			"Женя Комелькова", 
			"Соня Гурвич", 
			"Лиза Бричкина"
		],
		correct: 2,
	},
	{
		question: "В чём заключалась главная трудность операции, о которой Федот и его отряд, к сожелению, не знали?",
		answers: [
			"Неизвестно расположение немецких солдат", 
			"Неизвестен уровень вооружённости немецких солдат", 
			"Неизвестна численность немецких солдат", 
			"Неизвсетна цель операции немецких солдат"
		],
		correct: 3,
	},
	{
		question: "Кого старшина Васков назначил заместителем на время операции? ",
		answers: [
			"Галя Четвертак", 
			"Женя Комелькова", 
			"Соня Гурвич", 
			"Рита Осянина"
		],
		correct: 4,
	},
	{
		question: "Как Федот и его отряд решили сократить свой путь? На обратном пути это стало серьёзной проблемой.",
		answers: [
			"Перебраться через болото", 
			"Пройти через деревню", 
			"Перебраться через гору", 
			"Обойти через лес"
		],
		correct: 1,
	},
	{
		question: "Кто до начала войны на отлично учился в Московском университете?",
		answers: [
			"Лиза Бричкина", 
			"Соня Гурвич", 
			"Женя Комелькова", 
			"Федот Васков"
		],
		correct: 2,
	},
	{
		question: "Что Галя Четвертак потеряла во время переправы через болото?",
		answers: [
			"Патроны", 
			"Винтовку", 
			"Фурашку", 
			"Сапог"
		],
		correct: 4,
	},
	{
		question: "Сколько немецких диверсантов оказалось на самом деле? И кто же знал, что так получиться...",
		answers: [
			"8", 
			"16", 
			"12", 
			"20"
		],
		correct: 2,
	},
	{
		question: "Кому старшина Васков доверяет вернуться в деревню за подкрплением? Она ловко пробиралась через болото, лишь быстрее, лишь бы успеть...",
		answers: [
			"Женя Комелькова", 
			"Галя Четвертак", 
			"Лиза Бричкина", 
			"Соня Гурвич"
		],
		correct: 3,
	},
	{
		question: "Кто погиб переправляясь через болото?",
		answers: [
			"Лиза Бричкина", 
			"федот Васков", 
			"Рита Осянина", 
			"Галя Четвертак"
		],
		correct: 1,
	},
	{
		question: "Что при сметри попросила Рита Осянина у старшины Васкова?",
		answers: [
			"Защитить других девушек", 
			"Присмотреть за её сыном", 
			"Не дать немецким войскам пройти к железной дороге", 
			"Не позволить немцам убить его"
		],
		correct: 2,
	},
	{
		question: "Если вы досмотрели до конца, то вы точно помните чем закончился фильм.",
		answers: [
			"Прибыло подкрепление и все немецкие солдаты попали в плен", 
			"Старшина Васков и его отряд потерпели поражение, а немецкие солдаты пробралисть к железной дороге", 
			"Все девушки погибли выполняя приказ", 
			"Девушки погибли, и от тяжести вины Ваксов отказался от своей должности",
		],
		correct: 3,
	},
];

const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');

let score = 0;
let questionIndex = 0;

headerContainer.innerHTML = '';
listContainer.innerHTML = '';

clearPage()
showQuestion()
submitBtn.onclick = checkAnswer;

function clearPage(){
	headerContainer.innerHTML = '';
	listContainer.innerHTML = '';
}

function showQuestion(){
	console.log('showQuestion');
	
	const headerTemplate = `<h2 class="title">%title%</h2>`;
	const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
	headerContainer.innerHTML = title;
	
	let answerNumber = 1;
	for ([index, answerText] of questions[questionIndex]['answers'].entries()) {
		
		const questionTemplate = 
			`<li>
				<label>
					<input value="%number%" type="radio" class="answer" name="answer" />
					<span>%answer%</span>
				</label>
			</li>`;

			const answerHTML = questionTemplate
									.replace('%answer%', answerText)
									.replace('%number%', answerNumber);
			
			listContainer.innerHTML += answerHTML;
			answerNumber++;
	}
}

function checkAnswer(){
	console.log('checkAnswer started!');
	
	const checkedRadio = listContainer.querySelector('input:checked')
	
	if (!checkedRadio){
		submitBtn.blur();
		return
	}
	
	const userAnswer = parseInt(checkedRadio.value)

	if (userAnswer === questions[questionIndex]['correct']) {
		score++;
	}
	console.log('score = ', score);
	
	if (questionIndex !== questions.length - 1){
		console.log('Это НЕ последний вопрос');
		questionIndex++;
		clearPage();
		showQuestion();
		return;
	} else {
		console.log('Это последний вопрос');
		clearPage();
		showResults();
		
	}
}

function showResults() {
	console.log('showResults started!');
	console.log(score);
	
	const resultsTemplate = `
			<h2 class="title">%title%</h2>
			<h3 class="summary">%message%</h3>
			<p class="result">%result%</p>
		`;
		
	let title, message;
	
	if (score === questions.length) {
		title = 'Поздравляем!';
		message = 'Вы ответили верно на все вопросы!';
	} else if ((score * 100)/questions.length >= 50) {
		title = 'Неплохой результат!';
		message = 'Вы дали более половины правильных ответов.';
	} else {
		title = 'Возможно стоит пересмотреть этот фильм.';
		message = 'Пока у вас меньше половины правильных ответов.';
	}
	
	let result = `${score} из ${questions.length}`;
	
	const finalMessage = resultsTemplate
							.replace('%title%', title)
							.replace('%message%', message)
							.replace('%result%', result)
							
	headerContainer.innerHTML = finalMessage;
	
	submitBtn.blur();
	submitBtn.innerText = 'Начать заново';
	submitBtn.onclick = () => history.go();
	
}
