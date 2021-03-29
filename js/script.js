//1. Adding a new item to the list of items:

function newItem() {

  let li = $('<li></li>'); // Declaration of the variable with $('<li></li>')
  let inputValue = $('#input').val(); // $('#input') is used to target the index element
  // val() is used to store & return the value of inputValue 
  li.append(inputValue); // inputValue is appended directly to li 

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li); // Appending li (respectively indirectly the input value) to the list 
  }

//2. Crossing an item out:
  function crossOut() {
		li.toogleClass("strike"); // instead of classList.toogle we use toogleClass() in jquery
	}

	li.on("dblclick", function crossOut() { // .on () --> Attach an event handler function 
    //for one or more events to the selected elements.
		li.toogleClass("strike");
	});

  //3. Adding a delete button
  let crossOutButton = $('<crossOutButton></crossOutButton>'); // we create a new element in the DOM
  crossOutButton.append(document.createTextNode('X')); // 
  li.append(crossOutButton); // X shows up  at the right corner of an li element 

  // 4. Delete Function   
  crossOutButton.on("click", deleteListItem); // .on () --> Attach an event handler function 
  function deleteListItem(){
  li.addClass("delete") // CSS Selector with display none 
 	}

  //5. Enable a group of DOM elements to be sortable.
   $('#list').sortable(); 

}

