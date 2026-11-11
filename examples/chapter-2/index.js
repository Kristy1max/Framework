let TODO = ['Walk the dog', 'Water the plants', 'Sand the chairs']
      
const listElement = document.querySelector("#to-do-list")

const newTaskElement = document.querySelector("#new-task-input")

const btnAddNewTask = document.querySelector("#btn-add-new-task")

newTaskElement.addEventListener("input", (evt) => {
      btnAddNewTask.disabled = evt.target.value.length < 3;
})

newTaskElement.addEventListener("keydown", (evt) => {
      if (evt.key === "Enter" && newTaskElement.value.length > 3) {
            createTask(newTaskElement.value)
      } 
})

TODO.forEach((task) => {
      listElement.append(renderTodoInReadMode(task))
})

function createTask(task) {
      TODO.push(task)
      listElement.append(renderTodoInReadMode(task))
      newTaskElement.value = ''
      btnAddNewTask.disabled = true
}

function removeTask(task) {
      const index = TODO.findIndex((item) => item === task)
      TODO = [
            ...TODO.slice(0, index),
            ...TODO.slice(index + 1)
      ]
      listElement.children[index].remove()
}

function cancelTaskEdit(task) {

}

function renderTodoInReadMode(task) {
      const liEl = document.createElement("li")
      const spanEl = document.createElement("span")
      spanEl.textContent = task
      const btnEl = document.createElement("button")
      btnEl.textContent = "Done"
      liEl.append(spanEl, btnEl)

      btnEl.addEventListener("click", () => {
            removeTask(task)
      })

      spanEl.addEventListener("dblclick", () => {
            const idx = TODO.indexOf(task);
            listElement.replaceChild(
                  renderTodoEdit(task),
                  listElement.children[idx]
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
      btnCancelEl.addEventListener("click", () => {
            const viewMode = renderTodoInReadMode(task)
            const index = TODO.findIndex((item) => item === task )
            listElement.replaceChild(
                  viewMode, 
                  listElement.children[index]
            )
      })
      
      const btnSaveEl = document.createElement("button")
      btnSaveEl.textContent = "Save"
      btnSaveEl.addEventListener("click", () => {
            const currentValue = inputEl.value
            const index = TODO.findIndex((item) => item === task)
            TODO[index] === currentValue
            listElement.replaceChild(
                  renderTodoInReadMode(currentValue), 
                  listElement.children[index]
            )
      })

      liEl.append(inputEl, btnCancelEl, btnSaveEl)
      return liEl
}
