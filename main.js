// accessing the form and the ul

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//creating an event when an ip value is added and submitted
form.addEventListener('submit',addIem);

function addIem(e){

    e.preventDefault();

    var newItem = document.getElementById('item').value;
   // console.log(newItem);
   var li = document.createElement('li');
   li.className = 'list-group-item';
   li.appendChild(document.createTextNode(newItem));
   //console.log(li)

    //adding the delete button
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
   // console.log(deleteBtn)

    //adding an edit button
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-sm float-right';
    editBtn.appendChild(document.createTextNode('Edit'));
    editBtn.style.borderBottom = 'solid 2px';
    li.appendChild(editBtn);


   li.appendChild(deleteBtn);

    itemList.appendChild(li);
    document.getElementById('item').value = '';

}


//for deleting the item row
itemList.addEventListener('click',deleteItem);

function deleteItem(e){

    e.preventDefault();
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }

}