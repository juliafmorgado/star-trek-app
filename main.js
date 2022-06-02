 document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const alienName = document.querySelector('input').value.toLocaleLowerCase()
    try{
        const response = await fetch(`https://st-api-demo.herokuapp.com/${alienName}`)
        const data = await response.json()
        console.log(data);
    } catch(error){
        console.error(error)
    }
}