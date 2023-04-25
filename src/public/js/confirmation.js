const deleteButton = document.getElementById('delete')
const changeButton = document.getElementById('change')

changeButton.addEventListener('click', (e) => {
    checker(e)
})

function checker(e) {
    let response = confirm("Are you sure?")

    if (!response) {
        e.preventDefault()
    } else {
        req.session.confirmed = true
    }
}

console.log(req.session.confirmed)