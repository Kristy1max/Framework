const TODO = ['Walk the dog', 'Water the plants', 'Sand the chairs']
      
const listElement = document.querySelector("#to-do-list")

for (const task of TODO) {
      listElement.append(renderTodoInReadMode(task))
}

function renderTodoInReadMode(task) {
      const liEl = document.createElement("li")
      const spanEl = document.createElement("span")
      spanEl.textContent = task
      const btnEl = document.createElement("button")
      btnEl.textContent = "Done"
      liEl.append(spanEl, btnEl)

      spanEl.addEventListener("dblclick", () => {
            const idx = TODO.indexOf(task);
            listElement.replaceChild(
                  renderTodoEdit(task),
                  listElement.childNodes[idx]
            )
      })
      return liEl
}

function renderTodoEdit(task) {
      const liEl = document.createElement("li")
      const inputEl = document.createElement("input")
      inputEl.value = task
      const btnCancelEl = document.createElement("button")
      btnCancelEl.textContent = "Cancel"
      const btnSaveEl = document.createElement("button")
      btnSaveEl.textContent = "Save"
      liEl.append(inputEl, btnCancelEl, btnSaveEl)

      return liEl
}