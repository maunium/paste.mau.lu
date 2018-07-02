var editor = ace.edit("editor");

function updateLanguage(){
  editor.getSession().setMode("ace/mode/" + $("#language").val());
}

function submit(){
  editor.setOptions({
    readOnly: true,
    highlightActiveLine: false,
    highlightGutterLine: false
  });
  editor.renderer.$cursorLayer.element.style.opacity=0;
}

editor.setTheme("ace/theme/xcode");
editor.getSession().setUseWorker(false);
editor.getSession().setUseWrapMode(true);
editor.setShowPrintMargin(false);
updateLanguage();

$('#btn-submit').on("click", submit);

$('#notreadyalert').on('closed.bs.alert', fixFooter)
