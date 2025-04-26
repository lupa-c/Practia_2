
window.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById("entrada");
    const botonAplicar = document.getElementById("aplicar");
    const resultado = document.getElementById("resultado");
    const contador = document.getElementById("contador");
  
    function aplicarTexto() {
      const texto = textarea.value;
      resultado.textContent = texto;
      contador.textContent = `Caracteres: ${texto.length}`;
    }
  
    botonAplicar.addEventListener("click", aplicarTexto);
  
    textarea.addEventListener("input", () => {
      contador.textContent = `Caracteres: ${textarea.value.length}`;
    });
  });
  