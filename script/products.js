let formu = document.getElementById('form');
let url = 'http://localhost:4003/products'

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let category = document.getElementById('category').value;
    let price = document.getElementById('price').value;
    let description = document.getElementById('description').value;
    let name = document.getElementById('name').value;

    await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            category,
            price,
            description,
            name
        }),
        headers: { 
            'Content-Type':"application/json; charset=UTF-8"
        }
    })
})