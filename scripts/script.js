
function openMenu() {
    document.getElementById("menu_aba").style.width = "100%";
      
  }
  
  function closeMenu() {
    document.getElementById("menu_aba").style.width = "0";
      
  }
  
  //Java script para mudar o tema... 
  
  function temaLim() {
      document.documentElement.style.setProperty('--cor-click', '#38184C');
      document.documentElement.style.setProperty('--cor-sombra', '#9b0a59');
      document.documentElement.style.setProperty('--cor-text', 'black');
      document.documentElement.style.setProperty('--cor-back1', '#CEF09D');
      document.documentElement.style.setProperty('--cor-back2', '#4f6a93');
    
  }
  
  function temaDark() {
      document.documentElement.style.setProperty('--cor-click', '#CEF09D');
      document.documentElement.style.setProperty('--cor-sombra', '#9b0a59');
      document.documentElement.style.setProperty('--cor-text', 'black');
      document.documentElement.style.setProperty('--cor-back1', '#38184C');
      document.documentElement.style.setProperty('--cor-back2', '#4f6a93');
    
  }
  
  function temaInatel() {
      document.documentElement.style.setProperty('--cor-click', '#126ae2');
      document.documentElement.style.setProperty('--cor-sombra', '#0a599b');
      document.documentElement.style.setProperty('--cor-text', 'black');
      document.documentElement.style.setProperty('--cor-back1', '#edf2f4');
      document.documentElement.style.setProperty('--cor-back2', '#6a937a');
    
  }
  // Quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', function() {
  // Mostra o popup
  var popup = document.getElementById('meuPopup');
  popup.style.display = 'block';

  // Quando o usuário clicar no 'x' para fechar
  document.querySelector('.fechar').onclick = function() {
      popup.style.display = 'none';
  };

  // Quando o usuário clicar fora do popup, ele também fecha
  window.onclick = function(event) {
      if (event.target == popup) {
          popup.style.display = 'none';
      }
  };
});
