const checkboxtrue = document.getElementById('truecheck')
checkboxtrue.addEventListener('change', (event) => {
    updateStyle(true);
})

const checkboxfalse = document.getElementById('falsecheck')
checkboxfalse.addEventListener('change', (event) => {
    updateStyle(false);
})

function enableStylesheet(index) {
    var stylesheets = document.styleSheets;
    if (index >= 0 && index < stylesheets.length) {
      var stylesheet = stylesheets[index];
      if (!stylesheet.disabled) {
        // Stylesheet is already enabled, so do nothing
        return;
      }
      stylesheet.disabled = false;
    }
}
  

function toggleStylesheet(index) {
    var stylesheets = document.styleSheets;
    if (index >= 0 && index < stylesheets.length) {
      var stylesheet = stylesheets[index];
      if (stylesheet.disabled) {
        // Stylesheet is already disabled, so do nothing
        return;
      }
      stylesheet.disabled = true;
    }
  }

function updateStyle(updateon){
    if (updateon == true){
        if (checkboxfalse.checked == false){}
        else{
            checkboxfalse.checked = false;
        }
    }
    if (updateon == false){
        if (checkboxtrue.checked == false){}
        else{
            checkboxtrue.checked = false;
        }
    }

    if (checkboxfalse.checked == false && checkboxtrue.checked == false){
        toggleStylesheet(0);
        toggleStylesheet(1);
        enableStylesheet(2);
    }
    else if (checkboxfalse.checked == true && checkboxtrue.checked == false){
        toggleStylesheet(0);
        enableStylesheet(1);
        toggleStylesheet(2);
    }
    else if (checkboxfalse.checked == false && checkboxtrue.checked == true){
        enableStylesheet(0);
        toggleStylesheet(1);
        toggleStylesheet(2);
    }
}
toggleStylesheet(0);
toggleStylesheet(1);
enableStylesheet(2);