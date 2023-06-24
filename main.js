// accessing the form and the ul

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//creating an event when an ip value is added and submitted
form.addEventListener('submit',addIem);

function addIem(e){

    e.preventDefault();

    var newItem = document.getElementById('item').value;
    var newDescription = document.getElementById('item2').value;

    var newString = newItem.concat(" ",newDescription);

   // console.log(newItem);
   var li = document.createElement('li');
   li.className = 'list-group-item';
   li.appendChild(document.createTextNode(newString));
   

    //adding the delete button
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
   

    //adding an edit button
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-sm float-right';
    editBtn.appendChild(document.createTextNode('Edit'));
    editBtn.style.borderBottom = 'solid 2px';
    
    var eachList = document.getElementsByTagName('li');
   // console.log(eachList);
   
   


   // console.log(li)
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    itemList.appendChild(li);
    document.getElementById('item').value = '';
    document.getElementById('item2').value = '';





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


//for filtering
var filter = document.getElementById('filter');

filter.addEventListener('keyup',filterItem);

function filterItem(e){

    var text = e.target.value.toLowerCase();

    //get the list
    var ite = itemList.getElementsByTagName('li');

    //convert the htm collectables to an array
    Array.from(ite).forEach(function(itemText){
        console.log(itemText)
        var text1 = itemText.firstChild.textContent;
        
        var itemName = text1
        if(itemName.toLowerCase().indexOf(text) != -1){
            itemText.style.display = 'block';
        }
        else{
            itemText.style.display = 'none';
        }

    })

}
