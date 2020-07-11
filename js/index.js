class Student{
	constructor(name, email, address, age, state) {
		this.name = name;
		this.email = email;
		this.address = address;
		this.age = age;
		this.id = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
		this.state = state;
	}
	outPut() {
		return "Class: " + "Hello " + this.name + " of " + this.age + "years of age, your email address is: " + this.email + " you live at: " + this.address;
	}
}
//day
let john = new Student("John", "john@codeschoolmgt.com", "Angola Close", "90", "Weekday");
let peter = new Student("Peter", "peter@codeschoolmgt.com", "Angola Close", "90", "Weekday");
let judas = new Student("Judas", "judas@codeschoolmgt.com", "Angola Close", "90", "Weekday");
let james = new Student("James", "james@codeschoolmgt.com", "Angola Close", "90", "Weekday");
let paul = new Student("Paul", "paul@codeschoolmgt.com", "Angola Close", "90", "Weekday");
let timothy = new Student("Timothy", "timothy@codeschoolmgt.com", "Angola Close", "90", "Weekday");
let elijah = new Student("Elijah", "elijah@codeschoolmgt.com", "Angola Close", "90", "Weekday");
let jacob = new Student("Jacob", "jacob@codeschoolmgt.com", "Angola Close", "90", "Weekday");
let judah = new Student("Judah", "judah@codeschoolmgt.com", "Angola Close", "90", "Weekday");
let namesWDay = [john, peter, judas, james, paul, timothy, elijah, jacob, judah];
//end
let skido = new Student("Skido", "skido@codeschoolmgt.com", "Angola Close", "90", "Weekend");
let chill = new Student("Chill", "chill@codeschoolmgt.com", "Angola Close", "90", "Weekend");
let lisky = new Student("Lisky", "lisky@codeschoolmgt.com", "Angola Close", "90", "Weekend");
let swiss = new Student("Swiss", "swiss@codeschoolmgt.com", "Angola Close", "90", "Weekend");
let jin = new Student("Jin", "jin@codeschoolmgt.com", "Angola Close", "90", "Weekend");
let mex = new Student("Mex", "mex@codeschoolmgt.com", "Angola Close", "90", "Weekend");
let jada = new Student("Jada", "jada@codeschoolmgt.com", "Angola Close", "90", "Weekend");
let tizza = new Student("Tizza", "tizza@codeschoolmgt.com", "Angola Close", "90", "Weekend");
let recidivist = new Student("Recidivist", "recidivist@codeschoolmgt.com", "Angola Close", "90", "Weekend");
let namesWEnd = [skido, chill, lisky, swiss, jin, mex, jada, tizza, recidivist];

let dayButton = $("#dayButton");
let endButton = $("#endButton");
let addButton = $("#addButton");
let submitButton = $("#submitButton");
let deleteButton = $("#deleteButton");
let searchButton = $("#searchButton");
let inputs = $(".inputs");
let list = $("#list");




let searchInput = $("#searchInput");
let nameInput = $("#nameInput");
let emailInput = $("#emailInput");
let addressInput = $("#addressInput");
let ageInput = $("#ageInput");
let classInput = $("#classState");
let idDisplay = $("#idDisplay");


let state = "";
let searchResult = [];


function addToList(whatToAdd, parentToAddTo){
	parentToAddTo.html(parentToAddTo.html() + whatToAdd);
}

function removeFromList(whatToRemove, parentToRemoveFrom){
	parentToRemoveFrom.remove(whatToRemove);
}

function setSimpleBar(){
	new SimpleBar(document.getElementById("studentList"), {
		classNames: {
			content: 'simplebar-content',
			autoHide: false,
			scrollContent: 'simplebar-scroll-content',
			scrollbar: 'simplebar-scrollbar',
			track: 'simplebar-track'
		},
		scrollbarMinSize: 25
	});
}
function setList(namesList) {
	for(let i = 0; i < namesList.length; i++){
		let display = `<div class="list-element" data-id="${namesList[i].id}">`
							+ `<p class="list-element-p" data-id="${namesList[i].id}">${namesList[i].name}</p>`
							+ `<button type="button" class="btn btn-light list-element-btn" data-id="${namesList[i].id}">`
									+ `<span class="fas fa-trash fa-1x"></span>`
							+ `</button>`
						+ `</div>`
						+`<div class='clear'></div>`;

		list = $("#list");
		addToList(display, list);
	}
}

function setDetailDisplay(selectedStudent) {
	if(selectedStudent != undefined){
		nameInput.val(selectedStudent.name);
		emailInput.val(selectedStudent.email);
		addressInput.val(selectedStudent.address);
		ageInput.val(selectedStudent.age);
		if(selectedStudent.state === "Weekday"){
			classInput[0].selectedIndex = 1;
		} else if(selectedStudent.state === "Weekend"){
			classInput[0].selectedIndex = 2;
		}
		idDisplay.text(selectedStudent.id);
		submitButton.text("Edit");
	} else {
		nameInput.val("");
		emailInput.val("");
		addressInput.val("");
		ageInput.val("");
		classInput[0].selectedIndex = 0;
		idDisplay.text("");
		submitButton.text("Submit");
	}
	
}
function dayOnClick(){
	list.html("");
	state = "Day";

	setList(namesWDay);

	setSimpleBar();
}
function endOnClick(){
	list.html("");
	state = "End";

	setList(namesWEnd);

	setSimpleBar();
}

function editStudent(studentToEdit, tempPerson){
	studentToEdit.name = tempPerson.tempName;
	studentToEdit.Email = tempPerson.tempEmail;
	studentToEdit.Address = tempPerson.tempAddress;
	studentToEdit.Age = tempPerson.tempAge;
	if(classInput[0].selectedIndex = 1){
		studentToEdit.state = "Weekday";
	} else if(classInput[0].selectedIndex = 2){
		studentToEdit.state = "Weekend";
	}
}
function submitOnClick(){
	let tempPerson = {
		tempName: nameInput.val(),
		tempEmail: emailInput.val(),
		tempAddress: addressInput.val(),
		tempAge: ageInput.val(),
		tempClass: classInput.val(),
		tempId: idDisplay.text()
	};
	if(tempPerson.tempName !== "" && tempPerson.tempEmail !== "" && tempPerson.tempAddress !== "" && tempPerson.tempAge !== "" && tempPerson.tempClass !== ""){
		if(submitButton.text() == "Submit"){
			if(classInput[0].selectedIndex == 1){
	 			let tempStudent = new Student(tempPerson.tempName, tempPerson.tempEmail, tempPerson.tempAddress, tempPerson.tempAge, "Weekday");
				namesWDay.push(tempStudent);
				dayOnClick();
			} else if(classInput[0].selectedIndex == 2){
				let tempStudent = new Student(tempPerson.tempName, tempPerson.tempEmail, tempPerson.tempAddress, tempPerson.tempAge, "Weekend");
				namesWEnd.push(tempStudent);
				endOnClick();
			}else {
				console.log("Please check your logic");
			}
			setDetailDisplay();
		} else if(submitButton.text() == "Edit"){
			if(state == "Day"){
				for(let i in namesWDay) {
					if(namesWDay[i].id == tempPerson.tempId){
						editStudent(namesWDay[i], tempPerson);
						setDetailDisplay();
						if (tempPerson.tempClass == 2) {
							namesWEnd.push(namesWDay.splice(i,1)[0]);
							removeFromList($(`div[data-id='${tempPerson.tempId}']`), list);
						}
						dayOnClick();
					}
				}
			} else if(state == "End"){
				for(let i in namesWEnd) {
					if(namesWEnd[i].id == tempPerson.tempId){
						editStudent(namesWEnd[i], tempPerson);
						setDetailDisplay();
						if (tempPerson.tempClass == 1) {
							namesWDay.push(namesWEnd.splice(i,1)[0]);
							removeFromList($(`div[data-id='${tempPerson.tempId}']`), list);
						}
						endOnClick();
					}
				}
			}else {
				console.log("Please check your logic");
			}
		}
	}
}
function matchSearch(textToSearch, nameToMatch){
	let rgSearch = new RegExp(textToSearch, "i");
	return rgSearch.test(nameToMatch);
}
function findDisplaySearch(textToSearch, s){
	let ar =[];
	let arraySearch
	(s === "Weekday")? (arraySearch = namesWDay): (arraySearch = namesWEnd);
	for(let i in arraySearch) {
		if(matchSearch(textToSearch, arraySearch[i].name)){
			ar.push(arraySearch[i]);
		}
	}
	if(state === "Search" && ar.length > 0){
		addToList(`<p> ${s} </p>`, list);
	}
	setList(ar);
	return ar;
}
function searchOnClick(){
	/*console.log("working");
	searchInput = $("#searchInput");*/
	let search = searchInput.val();
	searchResult = [];

	if(!search.length == 0){
		if(state === "Day"){
			list.html("");
			searchResult = searchResult.concat(findDisplaySearch(search, "Weekday"));
		} else if(state === "End"){
			list.html("");
			searchResult = searchResult.concat(findDisplaySearch(search, "Weekend"));
		} else {
			state = "Search"
			list.html("");
			searchResult = searchResult.concat(findDisplaySearch(search, "Weekday"));
			searchResult = searchResult.concat(findDisplaySearch(search, "Weekend"));
		}
		if(searchResult.length == 0){
			addToList(`<div class"alert alert-danger alert-dismissible fade" role="alert">
						<strong>Sorry</strong> there was to match to what you searched, Please check what you want to search again
						<button type="button" class="close" data-dismiss="alert" aria-label="close">
							<span aria-hidden="true"> &times; </span>
						</button>
						</div>`, list);
		}
	} else {
		console.log("Please enter something to search for");
    }
}

setDetailDisplay();
// Click EventListeners
dayButton.click(dayOnClick);
endButton.click(endOnClick);
searchButton.click(searchOnClick);
submitButton.click(submitOnClick);

Array.from(inputs).forEach(function(inp){
		inp.addEventListener('input', (e) => {
			if(e.target.value !== ""){
				submitButton.disabled = false;
				inp.style.borderColor = "green";
				setTimeout(function() {inp.style.borderColor = "initial";}, 5000);
			}else{
				submitButton.disabled = true;
				inp.style.borderColor = "red";
				setTimeout(function() {inp.style.borderColor = "initial";}, 5000);
			}
		});
});
addButton.click(()=>{
	setDetailDisplay();
});
list.on("click", ".close", ()=>{
	$(".alert").alert("close");
})
list.on("click", ".list-element-p", (p) => {
	easy(p, "p");
	/*let tempArray = [];
	if(state === "Day"){
		tempArray = namesWDay;
	} else if(state === "End"){
		tempArray = namesWEnd;
	}else if (state === "Search"){
		tempArray = searchResult;
	}
	for(let i in tempArray) {
		if(tempArray[i].id == p.target.dataset.id){
			setDetailDisplay(tempArray[i]);
		}
	}*/
});
function easy(p, op){
	let tempArray = [];
	let onClick;
	if(state === "Day"){
		tempArray = namesWDay;
		onClick = dayOnClick;
	} else if(state === "End"){
		tempArray = namesWEnd;
		onClick = endOnClick;
	}else if (state === "Search"){
		tempArray = searchResult;
		onClick = searchOnClick;
	}
	if(op === "p"){
		for(let i in tempArray) {
			if(tempArray[i].id == p.target.dataset.id){
				setDetailDisplay(tempArray[i]);
			}
		}
	}else if(op === "btn"){
		for(let i in tempArray) {
			if(tempArray[i].id == p.target.dataset.id){
				setDetailDisplay();
				tempArray.splice(i,1);
				removeFromList($(`div[data-id='${p.target.dataset.id}']`), list);
				onClick();
			}
		}
	}
	
}
list.on("click", ".list-element-btn", (p) => {
	easy(p, "btn");
	/*if(state === "Day"){
		for(let i in namesWDay) {
			if(namesWDay[i].id == p.target.dataset.id){
				setDetailDisplay();
				namesWDay.splice(i,1);
				removeFromList($(`div[data-id='${p.target.dataset.id}']`), list);
				dayOnClick();
			}
		}
	} else if(state === "End"){
		for(let i in namesWEnd) {
			if(namesWEnd[i].id == p.target.dataset.id){
				setDetailDisplay();
				namesWEnd.splice(i,1);
				removeFromList($(`div[data-id='${p.target.dataset.id}']`), list);
				endOnClick();
			}
		}
	}*/
});

//for ajax style search when eventually hooked to a database
/*searchBar.addEventListener("input", (e) => {
	//To check if the user has started typing to play the gif, else display nothing
	//This important to prevent an event of backspace and theres nothing in the search bar yet the gif is playing
	if(!searchBar.value.length == 0){
		$("#book-entries").html(initialHTML);
		loader = setTimeout(() => {
			$('#btn-login').css({display: "block"}).html('<img src="../img/loader-white.gif" alt="..." height="33">'); 
		}, 1000);
	} else {
		clearTimeout(loader);
		$('#btn-login').css({display: "none"}).html('');
    }

	//In the first place dont send request untill after a word
	//Else if the first word is long then it would start after the first 5 letters
	if(e.data === " "){
		newURL = URL +  searchBar.value.slice(0, -1);
		multipleAjax(newURL);
	}else if(searchBar.value.length >= 5){
		newURL = URL +  searchBar.value;
		multipleAjax(newURL);
	}            
});*/