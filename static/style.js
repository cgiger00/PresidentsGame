var answers = JSON.parse(sessionStorage.getItem('answers'));

if (answers == null) {
	answers = [ 18 , 7 , 1, 3 ];
}

function endGame() {
	if (isNaN(correct)) {
		correct = 0;
	}
	return correct;	
}


console.log(answers);
function myAnswer(answer_list) //get's the correct answer for this round  
{
	var x = answer_list[Math.floor(Math.random() * (answer_list.length))]
	var x = Number(x);
	var index = answer_list.indexOf(x);
	answer_list.splice(index,1);
	return x; //president answer and key 
}

var count = 0; //for which point clue
var score = JSON.parse(sessionStorage.getItem('score')); //total score
var correct = myAnswer(answers); //correct answer
endGame();
var page_load = JSON.parse(sessionStorage.getItem('page_load')); //for table 

var question_storage = JSON.parse(sessionStorage.getItem('question_storage')); //points for table

if (question_storage == null) {
	question_storage = [];
}

function cleveland(correct) {
	if (correct == 22) {
		return 24;
	}
	else if (correct == 24) {
		return 22;
	}
	else {
		return correct;
	}
}

console.log(correct);

function which_clue(dictionary,key){ //which clue to display and where
	if (count == 2) {		
		return [dictionary[key][2], '2point', count];
	}
	else if (count == 1) {	
		return [dictionary[key][1], '4point', count];
	}
	else {
		return [(dictionary[key][0]), '6point', count];
	}

};

function onClick() { //when user presses the next_clue
	if (correct != 0){ 
		printClue(which_clue(pres_dict, correct));
		document.getElementById('count').innerHTML = count;
		count = count + 1;
		return count;
	}
	else {
		document.getElementById('right_answer').innerHTML = "Sorry, no more clues are avaliable, press Finish to continue";
	}

};

function printClue(answer_array) { //display clue selected from which_clue()
	var clue_num = answer_array;
	var clue = clue_num[0];
	var ID = clue_num[1];
	document.getElementById(ID).innerHTML = clue;
	document.getElementById(ID).style.color = 'black';
}

function changeColor(new_color) {
	document.body.style.backgroundColor = new_color;
}

function checkAnswer(right,guess,points) { //checks answer and returns total score and how many points earned
	var point_worth;
	var cleveland = cleveland(right)
	if (guess == right || guess == cleveland) {
		if (points <= 1) {
			point_worth = 6;
			question_storage.push(point_worth);
			score += 6;
			changeColor("#00FF00");
			return [score, point_worth];
		}
		else if (points == 2) {
			point_worth = 4;
			question_storage.push(point_worth);
			score += 4;
			changeColor("#00FF00");
			return [score, point_worth];
		}
		else {
			point_worth = 2;
			question_storage.push(point_worth);
			score +=2;
			changeColor("#00FF00");
			return [score, point_worth];		
		}
	}
	else {
		point_worth = 0; /*!!!!!!*/
		question_storage.push(point_worth);
		changeColor('#F75D59');
		return [score, point_worth, false];
	}
}
function right_answer(ID) { //if you get it wrong what is the right answer
	if (correct == 35) {
		correct = "JFBAE </3";
	}
	document.getElementById(ID).innerHTML = "Sorry, the correct answer is actually number " + correct;
}

var hidden = true;
function show(elementId) { //enable/disable buttons
	hidden = !hidden;
	if (hidden) {
		document.getElementById(elementId).disabled = true; 
	}
	else {
		document.getElementById(elementId).disabled = false
	}
}

function newScore(elementId,point_num) {
	if (point_num == null) {
		point_num = 0;
	}
	document.getElementById(elementId).innerHTML = "Score = " + point_num;
}

function pointsGot(elementId,point_get) {
	if (point_get == undefined) {
		point_get = 0;
	}
	document.getElementById(elementId).innerHTML = point_get + ' Points'
}

function submitAnswer() { //when user presses submit button 
	var input = document.getElementById('button').value;
	var final_count = which_clue(pres_dict,correct);
	var score_total = checkAnswer(correct, input, final_count[2]); 
	newScore('score', score_total[0]);
	pointsGot('points', score_total[1]);
	show('next_question');
	if (score_total[2] == false) {
		right_answer('right_answer');
	}
	hide.disabled = true;
	submit.disabled = true;

}

function makeTable(number,elementId) { //exporting data to next page
	console.log('work');
	var row_number = number;
	var column_number = 3;

	for (var row = 0; row < row_number; row++) {
		var table_place = document.getElementById(elementId).insertRow(row);
		for (var column; column < (column_number + 1); column++) {
			var table = table_place.insertCell(column);
			table.innerHTML = 'filler';
		}
	}
}

function tableLoad() {
	makeTable(page_load,'table');
}

function reloadPage() { //when user presses next_question 
	if (page_load == null) {
	page_load == 1;
	}
	page_load = page_load + 1;
	sessionStorage.setItem('page_load', JSON.stringify(page_load));
	sessionStorage.setItem('score', JSON.stringify(score));
	sessionStorage.setItem('question_storage', JSON.stringify(question_storage));
	sessionStorage.setItem("answers", JSON.stringify(answers));
	endGame('right_answer');
	console.log(answers);
	window.location.reload();
}
function getQuestionArray() {
	return question_storage;
}

function appendRow(tableID, insert_row, text) { //generic add row function 
	var tableRef = document.getElementById(tableID);					
	var newRow = tableRef.insertRow(insert_row);
	var newCell = newRow.insertCell(0);
	var newText = document.createTextNode(text); 
	newCell.appendChild(newText);	
}

function makeTable(variable,option, tableID) { //which table to add data to 
	if (option == 0){
		for (i = variable; i > 0; i--) {
			appendRow(tableID, 1, i);
		}
		appendRow(tableID, -1, 'Total:')
	}
	else if (option == 1){
		for (i = variable; i > 0; i--) {
			appendRow(tableID, 1, 6);
		}
		total_possible = page_load * 6	
		appendRow(tableID, -1, total_possible)	
		return total_possible;	
	}
	else if (option == 2) {
		var point_array = getQuestionArray();
		var your_total = 0;
		for (i = variable; i > 0; i--) {
			appendRow(tableID, 1, point_array[(i-1)]);
			your_total = your_total + point_array[(i-1)];
		}
		appendRow(tableID, -1, your_total);
		return your_total;		
	}		
	else {
		return 0;
	}	
}

function gradeCalculator(result, perfect, elementId) {
	var grade = Math.round((result / perfect) * 100);
	var letter_grade;
	if (grade >= 90) {
		letter_grade = 'A'; 
	}
	else if (grade >= 80) {
		letter_grade = 'B';
	}
	else if (grade >= 70) {
		letter_grade = 'C';
	}
	else if (grade >= 60) {
		letter_grade = 'D';  
	}
	else {
		letter_grade = 'F';
	}
	document.getElementById(elementId).innerHTML = 'Grade: ' + grade + '% ; ' + letter_grade;
}
function showRows() { //when user presses show results
	makeTable(page_load, 0, 'question_number');
	gradeCalculator(makeTable(page_load, 2, 'points_got'),makeTable(page_load, 1, 'points_possible'), 'grade');
	button.style.visibility = 'hidden';
}