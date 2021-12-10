const select = (selector) => document.querySelector(selector)

const form = select('.form')
const message = select ('.message')
//display error message 
const displayMessage = (text, color) => {
    message.style.visibility = 'visible'
    message.style.backgroundColor = color
    message.innerText = text
    setTimeout(() => {
        message.style.visibility = 'hidden'
    }, 5000);
} 

const expectedImageFiles = ['jpg', 'jpeg', 'png']
//form validator
const validateForm = () => {
    const title = select('#title').value.trim()
    const content = select('#content').value.trim()
    const thumbnail = select('#thumbnail').value
    const category = select('#category').value
    if(!title || !thumbnail || !content || category =='0'){
        //show error message 
        return displayMessage("Field can not be empty", 'red')
    } 
    const extension = thumbnail.split('.').pop()
    if(!expectedImageFiles.includes(extension)){
        return displayMessage("Image file is not valid", 'red')
    }
    return true 
}



form.addEventListener('submit', async (e) => {
    e.preventDefault()
    console.log('submitting');
    const valid = validateForm()
    if(valid ){
        //submit form 
        const formData = new FormData(form)
        await postData(formData)
    }
})

const resetForm = () => {
    select('#title').value = ''
    select('#content').value = ''
    select('#thumbnail').value =null
    select('#category').value ='0'
    select('#feature-content').checked =false
}

const postData = async(data) => {
    const result = await fetch('http://localhost:3000/api/create', {
        method: 'POST',
        body: data,
    })
    if(result.ok){
        const response = await result.json()
        if(response.success){
            displayMessage(response.message, 'green')
            resetForm()
        }
        if(!response.success){
            displayMessage(response.message, 'red')
        }
    }
}