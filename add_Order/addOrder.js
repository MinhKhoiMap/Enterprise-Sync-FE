const searchInput = document.getElementById("search-product__input")

searchInput.oninput = (e) => {
    fetch(`https://1d86-171-248-168-162.ngrok-free.app/api/products?product_name=${e.target.value}&platform=Shopee`)
        .then(response => response.json())
        .then((res) => {
            document.getElementById("search_order_res").innerHTML = ""

            function quantityComponent() {
                const quanDiv = document.createElement('div');

                const minus = document.createElement('btn');
                const quantity_text = document.createElement('label');
                const plus = document.createElement('btn');


                quanDiv.appendChild(minus);
                quanDiv.appendChild(quantity_text);
                quanDiv.appendChild(plus);

                return quanDiv;
            }


            const searchProductRes = document.getElementById("search_order_res")

            if (res?.data.length > 0) {
                searchProductRes.innerHTML = res.data.map(({ id_product, product_name, price }) => {
                    return `
                    <div class="d-flex justify-content-between" style="background-color: white; text-align:center">
                        
                        <p style="width: 502px">${product_name}</p>
                    </div>
                    `
                }).join("");

                const productBox = document.getElementById("search_order");

                const products = document.querySelectorAll('.product');
                products.forEach(product => {
                    product.addEventListener('click', () => {
                        const selectedProduct = res.data.find(({ id_product }) => id_product === product.id_product);
                        productBox.innerHTML += `
                        <div class="d-flex">
                            <p>${selectedProduct.product_name}</p>
                            <p>$${selectedProduct.price}</p>
                        </div>
                        `;
                    });
                });

            } else {
                searchProductRes.innerHTML = "<p class='text-center'>No products found</p>"
            }

            // console.log(res)
        }).catch(err => {
            console.log(err);
        })

        function hideSearchResults() {
            document.querySelector("#search_order_res").style.display = "none";
        }
        
        // When a click event occurs on the document, execute the hideSearchResults function
        document.onclick = hideSearchResults;
        
        // Add a click event listener to the search order results
        document.querySelector("#search_order_res").addEventListener("click", (e) => {
            // Prevent the hideSearchResults function from executing when clicking on the search order results
            e.stopPropagation();
        });
        
}



