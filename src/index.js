document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form")
  form.addEventListener("submit", onSubmit)
});


function onSubmit (e) {
  e.preventDefault()
  let task = e.target.children[1].value
  e.target.children[1].value = ''
  let li = document.createElement('li')
  let span = document.createElement('span')
  let deleteButton = document.createElement('button')
  let editButton = document.createElement('button')
  editButton.addEventListener("click", editMe)
  deleteButton.addEventListener("click", deleteMe)
  editButton.innerText = "Edit"
  deleteButton.innerText = 'X'
  span.innerText = task
  li.appendChild(span)
  li.appendChild(editButton)
  li.appendChild(deleteButton)
  let ul = document.querySelector('ul')
  ul.appendChild(li)
}

function deleteMe (e) {
  e.preventDefault()
  e.target.parentNode.remove()
}

function editMe (e) {
  e.preventDefault()
  let form = document.createElement('form')
  let textBox = document.createElement('input')
  textBox.type = 'text'
  textBox.value = e.target.parentNode.firstChild.innerText
  let button = document.createElement('input')
  button.type = 'submit'
  form.appendChild(textBox)
  form.appendChild(button)
  e.target.parentNode.appendChild(form)
  form.addEventListener('submit', onEdit)
  


}

function onEdit (e) {
  e.preventDefault()
  e.target.parentNode.children[0].innerText = e.target.children[0].value
  e.target.remove()
  

}