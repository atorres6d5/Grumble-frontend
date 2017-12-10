function adminRenderSnacks() {
  return RequestSnacks.all()
    .then(response => {
      const content = response.data.map(item => adminSnackTemplate(item))
      document.querySelector("#main-container").innerHTML = content.join(" ")
      editSnack()
    })
    .catch(error => console.error("Can't render snacks"))
}

function editSnack(){
  document.querySelectorAll('.edit').forEach(element => {
    element.addEventListener('click', (event) => {
      const id = parseInt(event.target.id.replace('edit', ''))
      adminRenderOneSnack(id)
    })
  })
}
