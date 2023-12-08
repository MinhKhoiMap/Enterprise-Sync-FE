const searchInput = document.getElementById("search-product__input");
const search_order = [];

class Order {
  total = 0;
  order = [];
  constructor(
    status_order,
    order_date,
    customer_name,
    customer_address,
    customer_phone,
    platform
  ) {
    this.status_order = status_order;
    this.order_date = order_date;
    this.customer_name = customer_name;
    this.customer_address = customer_address;
    this.customer_phone = customer_phone;
    this.platform = platform;
  }

  addProduct(product) {
    this.order.push(product);
    this.total = this.calTotal();
  }

  removeProduct(id_product) {
    this.order = this.order.filter((item) => item.id_product !== id_product);
    this.total = this.calTotal();
  }

  minusQuantityProduct(id_product, num) {
    this.order.forEach((item) => {
      if (item.id_product === id_product) {
        item.quantity -= num;
        if (item.quantity < 1) {
          this.removeProduct(id_product);
        }
      }
    });
    this.total = this.calTotal();
  }

  plusQuantityProduct(id_product, num) {
    console.log(id_product);
    console.log(this.order);
    let t = this.order.map((item) => {
      console.log(item, "hmm");
      if (item.id_product === id_product) {
        item.quantity += num;
      }
      console.log(item);
      return item;
    });
    console.log(t);
    this.total = this.calTotal();
  }

  calTotal() {
    this.total = 0;
    this.order.forEach((item) => {
      console.log(this.total, item.price, item.quantity);
      this.total += item.price * item.quantity;
    });

    return this.total;
  }
}

const currentOrder = new Order();

let totalprice_order = document.getElementById("totalPrice");

function addToOrder(id, name, price) {
  currentOrder.addProduct({ id_product: id, name, price, quantity: 1 });
  renderCart();
}

function renderCart() {
  const productCart = document.getElementById("search_order");
  productCart.innerHTML = "";

  currentOrder.order.forEach(({ id_product, name, price, quantity }) => {
    let temp = document.createElement("div");
    temp.setAttribute("class", "d-flex justify-content-between");
    temp.setAttribute(
      "style",
      "width: 502px; background-color: white; text-align: center"
    );

    temp.innerHTML = `<p style="width: 110px;">${id_product}</p>
        <p style="width: 180px;">${name}</p>
        <p style="width: 90px;">${price}</p>
        <div class="quan" style="width:100px; ">
            <button style="" id="minus" onClick="handleMinusQuantity(event)"><img src="/img/minus.svg"></button>
            <label id="quantity" style="">${quantity}</label>
            <button style="" id="plus"><img src="/img/minus.svg"></button>
        </div>`;

    const buttonPlus = temp.querySelector("button#plus");
    const buttonMinus = temp.querySelector("button#minus");

    buttonPlus.onclick = () => {
      currentOrder.plusQuantityProduct(id_product, 1);
      renderCart();
    };

    buttonMinus.onclick = () => {
      currentOrder.minusQuantityProduct(id_product, 1);
      renderCart();
    };

    productCart.appendChild(temp);
  });

  totalprice_order.innerText = currentOrder.calTotal();
}

searchInput.oninput = (e) => {
  fetch(
    `https://9bf9-14-161-27-27.ngrok-free.app/api/products?product_name=${e.target.value}&platform=Shopee`
  )
    .then((response) => response.json())
    .then((res) => {
      document.getElementById("search_order_res").innerHTML = "";

      function quantityComponent() {
        const quanDiv = document.createElement("div");

        const minus = document.createElement("btn");
        const quantity_text = document.createElement("label");
        const plus = document.createElement("btn");

        quanDiv.appendChild(minus);
        quanDiv.appendChild(quantity_text);
        quanDiv.appendChild(plus);

        return quanDiv;
      }

      const searchProductRes = document.getElementById("search_order_res");

      if (res?.data.length > 0) {
        searchProductRes.style.display = "block";
        // searchProductRes.innerHTML =
        res.data.forEach(({ id_product, product_name, price }) => {
          let temp = document.createElement("div");
          temp.setAttribute(
            "class",
            "d-flex justify-content-between productDiv"
          );
          temp.setAttribute(
            "style",
            "width: 502px; background-color: white; text-align:center"
          );
          temp.innerHTML = `<p class="id">${id_product}</p>
                        <p class="product_name">${product_name}</p>
                        <p class="price">${price}</p>`;

          temp.onclick = () => {
            hideSearchResults();
            addToOrder(id_product, product_name, price);
          };

          searchProductRes.appendChild(temp);
        });
      } else {
        searchProductRes.innerHTML =
          "<p class='text-center'>No products found</p>";
      }

      // console.log(res)
    })
    .catch((err) => {
      console.log(err);
    });
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
};
