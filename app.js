// Sidabar

function openNav() {
    document.getElementById("secondSideBar").style.width = "300px";
    document.getElementById("main").style.width = "70%";
    document.getElementById("main").style.marginLeft = "420px";
}

function closeNav() {
    document.getElementById("secondSideBar").style.width = "0";
    document.getElementById("main").style.width = "90%";
    document.getElementById("main").style.marginLeft = "130px";
}

tinymce.init({
    selector: 'textarea',  // change this value according to the HTML
    plugins: ['print', 'image imagetools'],
    menubar: 'file edit view print',
    toolbar: [
        'newdocument | undo redo | bold italic | link image',
        'alignleft aligncenter alignright'
      ]
  });
  