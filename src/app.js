export function sumar(a, b) {
  return a + b;
}

export function agregarItem(texto) {
  const lista = document.getElementById('lista');

  const li = document.createElement('li');
  li.textContent = texto;

  lista.appendChild(li);
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnAgregar');

  btn.addEventListener('click', () => {
    const elementos = document.querySelectorAll('#lista li').length;
    const nuevoTexto = `Item ${elementos + 1}`;
    agregarItem(nuevoTexto);
  });
});

console.log('App lista');
