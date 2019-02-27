var addItem = document.getElementById('addItem');
var newItemInput = document.getElementById('newItemInput');
var itemList = document.getElementById('itemList');
var item = document.getElementsByTagName('item');

function inputLength(){
    return newItemInput.value.length;
}

function createListElement() {
    var newItem = document.createElement('div');
    newItem.className = 'item';

    var itemText = document.createElement('div');
    itemText .className  = 'item-text';
    itemText.appendChild(document.createTextNode(newItemInput.value));
    // Clear the user input
    newItemInput.value = '';

    var deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.appendChild(document.createTextNode('X'));
    deleteButton.addEventListener('click', deleteListItem);

    // Add elements to the item
    newItem.appendChild(itemText);
    newItem.addEventListener('click',removeItem);
    newItem.appendChild(deleteButton);
    // Add item to the list
    itemList.appendChild(newItem);

    // Marks item as done (Changes colour)
    function removeItem() {
        newItem.classList.toggle('done');
    }
    // Removes item from list
    function deleteListItem(){
        newItem.classList.add('delete')
    }
}

function addListClick(){
    // Filters out empty string submissions on click
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListEnter(event) {
    // Filters out empty string submissions on enter
    // event.which === 13 is the code for the "enter" key
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}

// Event listener to add item to list
addItem.addEventListener('click',addListClick);
newItemInput.addEventListener('keypress', addListEnter);

