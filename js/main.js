 window.onload = function () {
 	var addBtn = document.querySelector("#add");
 	var addNote = function () {
	var noteInput = document.querySelector("#note");
// 	conselo.log(noteInput);
	if (noteInput.value === ' ') return false;

	var noteHtml = "<li class='list-group-item'>" + noteInput.value	+"</li>";

	var listItems = document.querySelector(".list-items ul");
//agrego a la lista
	listItems.insertAdjacentHTML('afterbegin', noteHtml);

	noteInput.value =" ";
	}
//agregar evento click
	addBtn.addEventListener("click", function (e){
		e.preventDefault();
		addNote();

	})
 }

