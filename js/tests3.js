const questions = [
	{
		question: "Полное имя Шерлока Холмса?",
		answers: [
			"Уильям Шерлок Том Холмс.",
			"Хэмиш Шерлок Скотт Холмс.",
			"Уильям Шерлок Скотт Холмс.",
			"Хэмиш Шерло Том Холмс.",
		],
		correct: 3,
	},
	{
		question: "Имя главного злодея 1-ого и 2-ого сезона?",
		answers: [
			"Джек Мариарти.",
			"Майкрофт Холмс.",
			"Джеймс Мариарти.",
			"Эвр Холмс.",
		],
		correct: 3,
	},
	{
		question: "Кем был доктор Ватсон до встречи с Шерлоком?",
		answers: [
			"Военным врачом.",
			"Следователем.",
			"Военным.",
			"Хирургом.",
		],
		correct: 1,
	},
	{
		question: "Где служил Джон Ватсон?",
		answers: [
			"Ирак.",
			"Афганистан.",
			"Сирия.",
			"Вьетнам.",
		],
		correct: 2,
	},
	{
		question: "Как называется профессия Шерлока?",
		answers: [
			"Детектив.",
			"Следователь.",
			"Частный детектив.",
			"Детектив-консультант.",
		],
		correct: 4,
	},
	{
		question: "Как звали детектива, который постоянно обращался за помощью к Шерлоку?",
		answers: [
			"Филип Андерсон.",
			"Грегори Лестрейд.",
			"Джон Лейстрейд.",
			"Фил Андерсон.",
		],
		correct: 2,
	},
	{
		question: 'Кто оказывается убийцей в серии "Этюд в розовых тонах"?',
		answers: [
			"Официант.",
			"Журналист.",
			"Таксист.",
			"Врач.",
		],
		correct: 3,
	},
	{
		question: 'К кому обращена эта фраза: "<Имя героя> не говори вслух, ты понижаешь IQ всей улицы"?',
		answers: [
			"Грег Лейстрейд.",
			"Джон Ватсон.",
			"Филипу Андерсону.",
			"Миссис Хадсон.",
		],
		correct: 3,
	},
	{
		question: "Муж миссис Хадсон был...",
		answers: [
			"Киллером.",
			"Шпионом.",
			"Детективом.",
			"Наркоторговцем.",
		],
		correct: 4,
	},
	{
		question: "В чём одет Шерлок в Букингемском дворце?",
		answers: [
			"В дорогой костюм.",
			"в пижаму.",
			"В костюм, подаренный братом.",
			"В простынь.",
		],
		correct: 4,
	},
	{
		question: "Как себя характеризует Шерлок?",
		answers: [
			"Высокоактивный социопат.",
			"Психопат.",
			"Гений.",
			"Социопат.",
		],
		correct: 1,
	},
	{
		question: "Кто помог Шерлоку инсценировать свою смерть?",
		answers: [
			"Джон Ватсон.",
			"Молли Хупер.",
			"Джим Мариарти.",
			"Майкрофт Холмс.",
		],
		correct: 2,
	},
	{
		question: "Как звали возлюбленную Джона Ватсона?",
		answers: [
			"Ирэн Адлер.",
			"Джанин Хокинс.",
			"Молли Хупер.",
			"Мэри Морстен.",
		],
		correct: 4,
	},
	{
		question: "Какой фразой Мориарти предсказал появление Эвр Холмс?",
		answers: [
			"Грядёт Восточный ветер.",
			"До встречи с моим хорошим другом.",
			"Тебе конец, Шерлок.",
			"Удачи, Шерлок.",
		],
		correct: 1,
	},
	{
		question: "Как знакомятся Шерлок и Ватсон?",
		answers: [
			"Несколько лет назад, на военной службе в Афганистане.",
			"Они оба искали соседа по квартире, и познакомились через общего знакомого.",
			"На одном из раскрытии дел, благодаря Грегори Лейстрейду.",
			"Учились в одном университете, а потом случайно встретились в кафе.",
		],
		correct: 2,
	},
	{
		question: "На каком инструменте играет Шерлок?",
		answers: [
			"На пианино.",
			"На флейте.",
			"На скрипке.",
			"На виолончели.",
		],
		correct: 3,
	},
	{
		question: "Какой пароль от телефона мисс Адлер?",
		answers: [
			'"SHERLOCK"',
			'"SHERHOLMS"',
			'"SHERLOCKED"',
			'"SHER"',
		],
		correct: 4,
	},
	{
		question: "Как зовут дочь Мери и Джона?",
		answers: [
			"Китти.",
			"Рози.",
			"Крис.",
			"Элизабетт.",
		],
		correct: 2,
	},
	{
		question: "Кто такая Эвр Холмс?",
		answers: [
			"Родная сестра Шерлока.",
			"Тётя Шерлока.",
			"Двоюродная сестра Шерлока.",
			"Никто, у них просто одна фамилия.",
		],
		correct: 1,
	},
	{
		question: "Почему Эвр убила Редберда?",
		answers: [
			"Она хотела отомстить.",
			"Ей хотелось иметь лучшего друга.",
			"Она его ненавидела.",
			"Чтобы придумать загадку для своих братьев.",
		],
		correct: 2,
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