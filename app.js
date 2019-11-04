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
    height: "700px",
    selector: 'textarea',  // change this value according to the HTML
    plugins: ['print', 'image imagetools', 'wordcount', 'save', 'lists', 'fullscreen', 'bbcode'],
    menubar: false,
    toolbar: [
        'newdocument print | undo redo | numlist bullist | italic bold | alignleft aligncenter alignright | styleselect | wordcount link image fullscreen save'
    ],
    style_formats: [
        { title: 'Heading 1', format: 'h1', fontsize: '100px' },
        { title: 'Heading 2', format: 'h2' },
        { title: 'Heading 3', format: 'h3' },
        { title: 'Heading 4', format: 'h4' },
        { title: 'Heading 5', format: 'h5' },
        { title: 'Paragraph', format: 'p' }
      ],
  });
  

  