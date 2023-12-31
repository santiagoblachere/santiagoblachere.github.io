export default const forms = (function () {
    function checkIfItExists() {
        let previousForm = document.querySelectorAll('.form')
        
        if (previousForm.length > 0) {
            previousForm.forEach((form) => {
                form.remove()
            })
        }
    }
    function createProjectForm() {
        // Create and return the HTML for the project form
        checkIfItExists()
        let projectForm = document.createElement('form')
        projectForm.classList.add('form')

        let projectName = document.createElement('input')
        projectName.setAttribute('id', 'project-name')
        projectName.setAttribute('type', 'text')
        projectName.setAttribute('name', 'project')

        let projectNameLabel = document.createElement('label')
        projectNameLabel.setAttribute('for', 'project-name')
        projectNameLabel.innerText = 'Project name: '
        projectName.required = true

        let submitProjectBtn = document.createElement('input')
        submitProjectBtn.setAttribute('type', 'submit')
        submitProjectBtn.innerText = 'Submit Project'

        projectForm.appendChild(projectNameLabel)
        projectForm.appendChild(projectName)
        projectForm.appendChild(submitProjectBtn)

        return projectForm
    }

    function createToDoForm() {
        // Create and return the HTML for the to-do form
        checkIfItExists()
        let todoForm = document.createElement('form')
        todoForm.classList.add('form')
        /* title input: */
        let divTitle = document.createElement('div')
        divTitle.classList.add('inputDiv')
        let divTitleLabel = document.createElement('label')
        divTitleLabel.setAttribute('for', 'title')
        divTitleLabel.innerText = 'Title: *'
        let divTitleInput = document.createElement('input')
        divTitleInput.setAttribute('type', 'text')
        divTitleInput.setAttribute('name', 'title')
        divTitleInput.setAttribute('id', 'title')
        divTitleInput.setAttribute('required', true)

        divTitle.appendChild(divTitleLabel)
        divTitle.appendChild(divTitleInput)
        /* priority input: */
        let divPriority = document.createElement('div')
        divPriority.classList.add('inputDiv')
        let select = document.createElement('select')
        select.classList.add('custom-select')
        select.setAttribute('id', 'select')
        let divPriorityLabel = document.createElement('label')
        divPriorityLabel.setAttribute('for', 'select')
        divPriorityLabel.innerText = 'Priority: '
        /* options */
        let divPriorityLow = document.createElement('option')
        divPriorityLow.setAttribute('value', 'Low')
        divPriorityLow.setAttribute('name', 'low')
        divPriorityLow.setAttribute('selected', true)
        divPriorityLow.setAttribute('required', true)
        divPriorityLow.innerText = 'Low'

        let divPriorityMid = document.createElement('option')
        divPriorityMid.setAttribute('value', 'Mid')
        divPriorityMid.setAttribute('name', 'mid')
        divPriorityMid.setAttribute('required', true)
        divPriorityMid.innerText = 'Mid'

        let divPriorityHigh = document.createElement('option')
        divPriorityHigh.setAttribute('value', 'High')
        divPriorityHigh.setAttribute('name', 'priority')
        divPriorityHigh.setAttribute('required', true)
        divPriorityHigh.innerText = 'High'

        divPriority.appendChild(divPriorityLabel)
        divPriority.appendChild(select)
        select.appendChild(divPriorityLow)
        select.appendChild(divPriorityMid)
        select.appendChild(divPriorityHigh)
        select.setAttribute('name', 'priority')

        /* description input */
        let divDescription = document.createElement('div')
        divDescription.classList.add('inputDiv')
        let divDescriptionLabel = document.createElement('label')
        divDescriptionLabel.setAttribute('for', 'description')
        divDescriptionLabel.innerText = 'Description: '
        let divDescriptionInput = document.createElement('input')
        divDescriptionInput.setAttribute('type', 'text')
        divDescriptionInput.setAttribute('name', 'description')
        divDescriptionInput.setAttribute('id', 'description')

        divDescription.appendChild(divDescriptionLabel)
        divDescription.appendChild(divDescriptionInput)

        /* Due date input */
        let divDate = document.createElement('div')
        divDate.classList.add('inputDiv')
        let divDateLabel = document.createElement('label')
        divDateLabel.setAttribute('for', 'date')
        divDateLabel.innerText = 'Due date: *'
        let divDateInput = document.createElement('input')
        divDateInput.setAttribute('type', 'date')
        divDateInput.setAttribute('id', 'date')
        divDateInput.setAttribute('name', 'date')
        divDateInput.required = true

        divDate.appendChild(divDateLabel)
        divDate.appendChild(divDateInput)

        
        let divProject = document.createElement('div')
        divProject.classList.add('inputDiv')
        todoForm.appendChild(divTitle)
        todoForm.appendChild(divPriority)
        todoForm.appendChild(divDescription)
        todoForm.appendChild(divDate)
        todoForm.appendChild(divProject)
        return todoForm
    }

    // Expose the functions you want to make public
    return {
        projectForm: createProjectForm,
        toDoForm: createToDoForm,
    }
})()
