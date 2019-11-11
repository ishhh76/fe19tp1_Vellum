let noteList = [];
/*
quire: {noteList: [{}...],
      showSplash: false,
}}
*/
// Sidabar
function openNav() {
  document.getElementById("secondSideBar").style.width = "300px";
  document.getElementById("editor").style.width = "70%";
  document.getElementById("editor").style.marginLeft = "420px";
}
function closeNav() {
  document.getElementById("secondSideBar").style.width = "0";
  document.getElementById("editor").style.width = "90%";
  document.getElementById("editor").style.marginLeft = "130px";
}
/* Editor */
const savebtn = document.querySelector('.savebtn');
const justText = document.querySelector('#justText');
var Delta = Quill.import('delta');
var options = {
  modules: {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline'],
      ['link', 'image'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'align': [] }],
    ]
  },
  placeholder: null,
  // 'Write something fun...'
  theme: 'snow'
};
var editor = new Quill('#quillEditor', options);
var justTextContent = document.getElementById('justText');
// editor.on('text-change', function() {
//   var text = editor.root.innerHTML;
//   justTextContent.innerHTML = text;
// });
/* var change = new Delta();
editor.on('text-change', function (delta) {
change = change.compose(delta);
});
// Save periodically
setInterval(function () {
if (change.length() > 0) {
  // Save the entire updated text to localStorage
  const data = JSON.stringify(editor.getContents());
  localStorage.setItem('key', data);
  change = new Delta();
};
}, 5 * 1000); */
const retrieveData = () => {
  const loadData = JSON.parse(localStorage.getItem('quire')); //ändra kod. hämta array från local
  editor.setContents(loadData);
}
savebtn.addEventListener('click', () => {
  let note = {
    id: Date.now(),
    title: editor.getText(0, 10),
    contents: editor.getContents(),
    favourite: false
  };
  noteList.push(note);
  saveNotes();
  //
  let newDiv = document.createElement("div");
  newDiv.id = note.id;
  justText.appendChild(newDiv);
  newDiv.classList.add('div');
  newDiv.innerHTML = note.title;
  //
  clearEditor();
});
justText.addEventListener('click', e => {
  if (e.target) {
    retrieveData();
  }
});
function loadNotes() {
  if (localStorage.getItem('quire')) {
    noteList = JSON.parse(localStorage.getItem('quire')).notes
  } else {
    noteList = [];
  }
}
function saveNotes() {
  localStorage.setItem('quire', JSON.stringify({ showSplash: true, notes: noteList }))
}
// Load localstorage när sidan laddar
window.addEventListener('DOMContentLoaded', (event) => {
  let quire = JSON.parse(localStorage.getItem('quire'));
  if (quire.showSplash) {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
  loadNotes();
});
function clearEditor() {
  editor.setContents([
    { insert: '\n' }
  ]);
}
/* Popup */

// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal
window.onload = function () {
  //modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

  