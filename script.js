// Add Html
function addHtml(){
  var edithtml = document.getElementById('txtHtml').value;
  console.log(edithtml);
  var view = document.getElementById('view');
  view.innerHTML = edithtml;
}

// delete VUE

function deleteVue() {
  document.getElementById('view').innerHTML = "";
}

// reset Html
function resetHtml() {
  document.getElementById('txtHtml').value = "";
}
// Add JS

function addJs() {
  var baliseScript = document.createElement('script'),
      view = document.getElementById('view'),
      inputJs = document.getElementById('txtJs').value;
      
  baliseScript.type = "text/javascript";
  baliseScript.text = inputJs;
  view.appendChild(baliseScript);
}

//Effacer JS
function deleteJs() {
  document.getElementById('txtJs').value = "";
}

//actualiser JS 

function reloadJs() { 
  location.reload();
}
