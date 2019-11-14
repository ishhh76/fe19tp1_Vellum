let noteList = [];
const savebtn = document.querySelector('.savebtn');
const justText = document.querySelector('#justText');

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



//Save button
savebtn.addEventListener('click', () => {

  let note = {
    id: Date.now(),
    title: editor.getText(0, 10),
    contents: editor.getContents(),
    favourite: false,
    started: true
  };

  let newDiv = document.createElement("div");
  newDiv.id = note.id;
  justText.insertBefore(newDiv, justText.childNodes[0]);
  newDiv.classList.add('div');
  newDiv.innerHTML = `<strong>Title:</strong> ${note.title}....<br><strong>Tema:</strong>... <br><strong>Datum:</strong>${Date(note.id)}`;

  noteList.unshift(note);
  saveNotes();
  clearEditor();

});


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

//Laddar info från local storage
function loadNotes() {
  if (localStorage.getItem('quire')) {
    noteList = JSON.parse(localStorage.getItem('quire')).notes
    editor.setContents(noteList[0].contents);
    renderDocs();
  } else {
    noteList = [];
  }
}

//Rensar editorn
function clearEditor() {
  editor.setContents([
    { insert: '\n' }
  ]);
}

//Sparar dokumentet till local storage
function saveNotes() {
  localStorage.setItem('quire', JSON.stringify({ showSplash: true, notes: noteList }))
}

//Renderar dokumentet samt div när sidan laddas om
function renderDocs() {
  noteList.forEach(e => {
    let newDiv = document.createElement("div");
    newDiv.id = e.id;
    justText.appendChild(newDiv);
    newDiv.classList.add('div');
    newDiv.innerHTML = `<strong>Title:</strong> ${e.title}....<br><strong>Tema:</strong>... <br><strong>Datum:</strong>${Date(e.id)}`;
  });
}

//Click event för divarna
justText.addEventListener('click', e => {
  const newDiv = document.querySelectorAll('#justText > div');
  const loadData = JSON.parse(localStorage.getItem('quire')).notes;
  for (let i = 0; i < loadData.length; i++) {
    if (loadData[i].id == e.target.id) {
      editor.setContents(loadData[i].contents);
      newDiv.forEach(event => {
        if (e.target == event) {
          event.classList.add('picked');
        } else { event.classList.remove('picked') }
      })

    }
  }

})


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