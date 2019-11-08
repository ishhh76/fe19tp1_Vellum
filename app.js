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
    [ 'link' ,'image'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
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

  var change = new Delta();
editor.on('text-change', function(delta) {
 change = change.compose(delta);
});
// Save periodically
setInterval(function() {
 if (change.length() > 0) {
   // Save the entire updated text to localStorage
   const data = JSON.stringify(editor.getContents());
   localStorage.setItem('key', data);
   change = new Delta();
 };
}, 5*1000);

  const retrieveData = () => {
    const loadData = JSON.parse(localStorage.getItem('key'));
    editor.setContents(loadData);
   }
   savebtn.addEventListener('click', ()=> {
    let newDiv = document.createElement("div");
    justText.appendChild(newDiv);
    newDiv.classList.add('div');
    let NewData = editor.root.innerHTML;
    newDiv.innerHTML = NewData;
   });
   justText.addEventListener('click', e => {
    if(e.target) {
      retrieveData();
    }else {console.log('hej')}
   })

  /* Popup */

  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
window.onload = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

  