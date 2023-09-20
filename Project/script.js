// https://fakestoreapi.com/products

const url = "https://fakestoreapi.com/products";
const container = document.getElementById("container");

function getProductHTLM(products){
    const html = `
    <div class="product">
        <h3>${products.title}</h3>
        <img width="100px"
          src="${products.image}"
          alt=""
        />
        <p>Price => ${products.price}</p>
      </div>
    `;
    return html;
}
async function fetchAndDisplayProducts() {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(response);
    // console.log(data)

    for(let product of data){
           const productHTML = getProductHTLM(product);
           container.innerHTML += productHTML;
    }
}
fetchAndDisplayProducts();