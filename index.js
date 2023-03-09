const qs = function(identifier)
{
  return document.querySelector(`${identifier}`);
};
const qsa = function(identifier)
{
  return document.querySelectorAll(`${identifier}`);
};
// App Setup
const data = {
  "personal": [
    "Personal Task 1", "Personal Task 2", "Personal Task 3"
  ],
  "work": [
    "Work Task 1", "Work Task 2", "Work Task 3"
  ],
  "groceries": ["Groceries Task 1", "Groceries Task 2", "Groceries Task 3"]
};
let selectedList = 'Personal'
let activeList = data.personal;

// Initialize App
const taskLists = qs(".task-list");
const populateListOfLists = function()
{
  taskLists.innerHTML = null;
  Object.keys(data).forEach((list) =>
  {
    let myClass="";
    if(selectedList == list) myClass+="active-list";
    taskLists.innerHTML += `<li class='list-name ${myClass}'>${list} </li>`;
  });
};
const populateActiveList = function() 
{
  
}
populateListOfLists();
populateActiveList();

// Add New List

const addListBtn = qs("#new-list");
const newListName = qs("#new-list-name");

const addList = function(listName)
{
  Object.defineProperty(data, listName,
  {
    value: [],
    writable: true,
    enumerable: true
  });
};
addListBtn.addEventListener("click", function()
{
  addList(newListName.value);
  populateListOfLists(data);
  newListName.value = null;
});


// Switch Active List
const lists = qsa(".list-name");

const removeActiveClassFromListName = function(){
  lists.forEach(list => {
    list.classList.remove("active-list");
  })
}

const switchActiveList = function()
{
  activeList = data[selectedList];
}

lists.forEach(list =>{
  list.addEventListener("click", function(e){
    removeActiveClassFromListName();
    e.target.classList.add("active-list");
    selectedList = e.target.innerHTML.trim();
    switchActiveList(e);
  })
})
