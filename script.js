// seleziono il pulsante con id "info" dalla pagina e ci assegno una funzione
const modalButton = document.getElementById('info') // riferimento al bottone info
console.log('ho trovato il bottone?', modalButton)
// assegno una funzione al click: 2 modi
// 1)
modalButton.addEventListener('click', function (e) {
  console.log('evento scatenato al click', e)
})
// 2)
// modalButton.onclick = function (e) {
//   console.log('evento scatenato al click', e)
// }
