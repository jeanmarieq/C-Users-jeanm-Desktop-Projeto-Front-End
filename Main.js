function validar() {

    let nomeuser = document.getElementById("nome");
    let email = document.getElementById("email");
  

    if (nomeuser.value == "") {
    alert("Nome não foi informado");    
    nomeuser.focus();
    return;
    }

    if (email.value == "") {
        alert("E@mail não foi informado");
        email.focus();
        return;
    }
    

}

// Api Quotable Quotes

fetch ( 'https://api.quotable.io/random' ) 
  .then ( response  =>  response. json ( ) ) 
  .then ( data =>  { 
    let frases = document.getElementById('frase')
    frases.innerHTML = `
    <p>'${data.content}'</p>
    <p>'${data.author}'</p>
    `
    console.log ( ` ${data.content} - ${data.author} `) 
  } )


//   api de imagenes loren picsun

/* const url = 'https://picsum.photos/v2/list'

fetch(url)
.then(response => response.json() )
.then(data =>{
    let geoloca = document.getElementById('geo')
    // geoloca.innerHTML = `<img src='${data.download_url}'/>`;
    console.log(data)
})

.catch(err=>console.log(err))
 */


//  api gelocalocalizacion por ip

/* const url = 'https://freegeoip.app/'

 
// const location = document.querySelector('#geo')

async function obterlocation() {
    const endpoint =  'json'
    // https://freegeoip.app/json/
    const url = API + endpoint

    let response = await fetch(url)
    let geo = await response.json()


    const container = document.querySelector('#geo')
    const lista = document.createElement('ul')
    console.log

    for (location of geo){
        const li = document.createElement('li')
        li.textContent = location.city
        lista.appendChild(li)
    }


    container.appendChild(lista)
    
 
    // return geo
} */
