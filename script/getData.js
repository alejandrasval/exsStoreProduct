let btnWomen = document.getElementById('btnWomen');
let btnMen = document.getElementById('btnMen');

const getProducts = async (url) => {
    let printProducts = document.querySelector(".grid-products");
    printProducts.innerHTML = '';
    const resp = await fetch(url);
    const data = await resp.json();
    data.forEach(article => {
        const { image, name, price } = article
        printProducts.innerHTML += `
        <div class="col products">
            <div class="card">                
                <img src="${image}" class="card-img" alt="...">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">$ ${price}</p>
            </div>
        </div>
        `
    });
    
}
const getProduct = async () => {
    let url = 'http://localhost:4000/product'

    const resp = await fetch(url);
    const data = await resp.json();
  
    return data   
}

document.addEventListener('DOMContentLoaded', getProducts('http://localhost:4000/product'))

btnWomen.addEventListener('click', () => {
    getProducts('http://localhost:4001/women');
   
})

btnMen.addEventListener('click', () => {
    getProducts('http://localhost:4002/men');
})

let btnSearch = document.getElementById('inputSearch')

btnSearch.addEventListener('keyup', async() => {
    let name = document.getElementById('inputSearch').value 
    console.log(name)
    
    

   
    if(name !== ''){
        let printProducts = document.querySelector(".grid-products");
    printProducts.innerHTML = '';

    let data = await getProduct()
    console.log(data)

    let lookUp = data.filter( art => art.name.toLowerCase() === name)
    console.log(lookUp)
    
    lookUp.forEach(article => {
        const { image, name, price } = article
        printProducts.innerHTML += `
        <div class="col products">
            <div class="card">                
                <img src="${image}" class="card-img" alt="...">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">$ ${price}</p>
            </div>
        </div>
        `
    });
        name.value=''
    }else{
        window.location.reload()
    }

})
/**------------------------------------------------------*/

const handbag = document.getElementById('handbag')
const backpack = document.getElementById('backpack')
const wristwatch = document.getElementById('wristwatch')
const shoes = document.getElementById('shoes')
const clothing = document.getElementById('clothing')

handbag.onclick = async function () {


    let printProducts = document.querySelector(".grid-products");
    printProducts.innerHTML = '';

    let data = await getProduct()
    console.log(data)

    let lookUp = data.filter( art => art.name.toLowerCase() === 'handbag')
    console.log(lookUp)
    
    lookUp.forEach(article => {
        const { image, name, price } = article
        printProducts.innerHTML += `
        <div class="col products">
            <div class="card">                
                <img src="${image}" class="card-img" alt="...">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">$ ${price}</p>
            </div>
        </div>
        `
    });
       
    
}

backpack.onclick = async function () {


    let printProducts = document.querySelector(".grid-products");
    printProducts.innerHTML = '';

    let data = await getProduct()
    console.log(data)

    let lookUp = data.filter( art => art.name.toLowerCase() === 'backpack')
    console.log(lookUp)
    
    lookUp.forEach(article => {
        const { image, name, price } = article
        printProducts.innerHTML += `
        <div class="col products">
            <div class="card">                
                <img src="${image}" class="card-img" alt="...">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">$ ${price}</p>
            </div>
        </div>
        `
    });
       
    
}
wristwatch.onclick = async function () {


    let printProducts = document.querySelector(".grid-products");
    printProducts.innerHTML = '';

    let data = await getProduct()
    console.log(data)

    let lookUp = data.filter( art => art.name.toLowerCase() === 'wristwatch')
    console.log(lookUp)
    
    lookUp.forEach(article => {
        const { image, name, price } = article
        printProducts.innerHTML += `
        <div class="col products">
            <div class="card">                
                <img src="${image}" class="card-img" alt="...">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">$ ${price}</p>
            </div>
        </div>
        `
    });
       
    
}
shoes.onclick = async function () {


    let printProducts = document.querySelector(".grid-products");
    printProducts.innerHTML = '';

    let data = await getProduct()
    console.log(data)

    let lookUp = data.filter( art => art.name.toLowerCase() === 'shoes')
    console.log(lookUp)
    
    lookUp.forEach(article => {
        const { image, name, price } = article
        printProducts.innerHTML += `
        <div class="col products">
            <div class="card">                
                <img src="${image}" class="card-img" alt="...">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">$ ${price}</p>
            </div>
        </div>
        `
    });
       
    
}
clothing.onclick = async function () {


    let printProducts = document.querySelector(".grid-products");
    printProducts.innerHTML = '';

    let data = await getProduct()
    console.log(data)

    let lookUp = data.filter( art => art.name.toLowerCase() === 'clothing')
    console.log(lookUp)
    
    lookUp.forEach(article => {
        const { image, name, price } = article
        printProducts.innerHTML += `
        <div class="col products">
            <div class="card">                
                <img src="${image}" class="card-img" alt="...">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">$ ${price}</p>
            </div>
        </div>
        `
    });
       
    
}
handbag.onclick = async function () {


    let printProducts = document.querySelector(".grid-products");
    printProducts.innerHTML = '';

    let data = await getProduct()
    console.log(data)

    let lookUp = data.filter( art => art.name.toLowerCase() === 'handbag')
    console.log(lookUp)
    
    lookUp.forEach(article => {
        const { image, name, price } = article
        printProducts.innerHTML += `
        <div class="col products">
            <div class="card">                
                <img src="${image}" class="card-img" alt="...">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">$ ${price}</p>
            </div>
        </div>
        `
    });
       
    
}