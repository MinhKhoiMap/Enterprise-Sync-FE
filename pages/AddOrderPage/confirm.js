const DOMAIN_SERVER = "http://localhost:5000";
const navItemList = document.querySelector(".sidebar .sidebar-nav");

console.log([navItemList.children], "navItemList");
let clicking = false;
for (let child of navItemList.children) {
  // child.addEventListener("click", () => {

  //   for (let child of navItemList.children)
  //     if (child.classList.contains("nav-item__active")) {

  //       let itemName = child.getAttribute("id");
  //       const imageChild = child.children[0].children[0];
  //       console.log(itemName, "falsjdkf");
  //       imageChild.setAttribute("src", `../../img/${itemName}.svg`);
  //       child.classList.remove("nav-item__active");
  //     }
  //   clicking=true;
  //   let itemName = child.getAttribute("id");
  //   const imageChild = child.children[0].children[0];
  //   console.log(itemName, "falsjdkf");
  //   imageChild.setAttribute("src", `../../img/${itemName}_click.svg`);

  //   child.classList.add("nav-item__active");
  // });
  child.addEventListener("mouseenter", () => {
    let itemName = child.getAttribute("id");
    const imageChild = child.querySelector(".icon_nav");
    if (child.classList.contains("nav-item__active")) {
      imageChild.setAttribute("src", `../../img/${itemName}.svg`);
    } else {
      imageChild.setAttribute("src", `../../img/hover/${itemName}_hover.svg`);
    }
  });
  child.addEventListener("mouseleave", () => {
    let itemName = child.getAttribute("id");
    const imageChild = child.querySelector(".icon_nav");
    if (child.classList.contains("nav-item__active")) {
      imageChild.setAttribute("src", `../../img/${itemName}_click.svg`);
    } else {
      imageChild.setAttribute("src", `../../img/${itemName}.svg`);
    }
  });
}

const searchInput = document.getElementById("search-product__input");
const search_order = [];

class Order {
  total = 0;
  products = [];
  constructor(
    status_order,
    order_date,
    customer_name,
    customer_address,
    customer_phone,
    channel_platform
  ) {
    this.status_order = status_order;
    this.order_date = order_date;
    this.customer_name = customer_name;
    this.customer_address = customer_address;
    this.customer_phone = customer_phone;
    this.channel_platform = channel_platform;
  }

  addProduct(product) {
    this.products.push(product);
    this.total = this.calTotal();
  }

  removeProduct(id_product) {
    this.products = this.products.filter(
      (item) => item.id_product !== id_product
    );
    this.total = this.calTotal();
  }

  minusQuantityProduct(id_product, num) {
    this.products.forEach((item) => {
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
    let t = this.products.map((item) => {
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
    this.products.forEach((item) => {
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

  currentOrder.products.forEach(({ id_product, name, price, quantity }) => {
    let temp = document.createElement("div");
    temp.setAttribute("class", "d-flex justify-content-between");
    temp.setAttribute("style", "background-color: white; text-align: center");

    temp.innerHTML = `<p style="width: 20%; margin-bottom:6px; ">${id_product}</p>
        <p class="search_order_name" style="width: 40%; margin-bottom:6px; flex: 1">${name}</p>
        <p style="width: 20%; margin-bottom:6px;">${price}</p>
        <div class="quan" style="display: flex; width:15%; border: 0.5px solid #767676; margin-bottom: 6px; border-radius: 8px; ">
            <button style="background-color:transparent; border:none; margin-right:2px" id="minus" onClick="handleMinusQuantity(event)"><img src="/img/minus.svg"></button>
            <label id="quantity" style="margin:0%">${quantity}</label>
            <button style="background-color:transparent; border:none; margin-left:2px" id="plus"><img src="../../src/plus-solid.svg"></button>
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

  let p = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "VND",
  })
    .format(currentOrder.calTotal())
    .toString();

  totalprice_order.innerText = p.substring(0, p.length - 1);
}

searchInput.oninput = (e) => {
  fetch(
    `${DOMAIN_SERVER}/api/products?product_name=${e.target.value}&platform=${currentOrder.channel_platform}`
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
          temp.setAttribute("style", "text-align:center");
          temp.setAttribute("title", product_name);

          temp.innerHTML = `<p class="id" style="padding:0%; border-radius: 8px;">${id_product}</p>
                        <p class="product_name" style="padding:0%; border-radius: 8px;">${product_name}</p>
                        <p class="price" style="padding:0%; border-radius: 8px;">${price}</p>`;

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

async function handleShowOrder() {
  const customer_name = document.getElementById("name").value;
  const customer_phone = document.getElementById("phonenumber").value;
  const customer_address = document.getElementById("address").value;
  const ttt = document.getElementById("tttttt");
  const bodyContent = document.getElementById("body_content");

  ttt.classList.add("d-none");
  bodyContent.classList.remove("d-none");

  currentOrder.customer_address = customer_address;
  currentOrder.customer_phone = customer_phone;
  currentOrder.customer_name = customer_name;

  const showOrderName = document.getElementById("show_order_name");
  const showOrderPhone = document.getElementById("show_order_phone");
  const showOrderAddress = document.getElementById("show_order_address");
  const showOrderChannel = document.getElementById("show_order_channel");
  const showOrderDate = document.getElementById("show_order_date");
  const showOrderStatus = document.getElementById("show_order_status");
  const showOrderTotal = document.getElementById("show_order_total");

  showOrderName.textContent = currentOrder.customer_name;
  showOrderAddress.textContent = currentOrder.customer_address;
  showOrderPhone.textContent = currentOrder.customer_phone;
  showOrderChannel.textContent = currentOrder.channel_platform;
  showOrderDate.textContent = currentOrder.order_date;
  showOrderStatus.textContent = currentOrder.status_order;
  showOrderTotal.textContent = currentOrder.total;

  const frameDetail = document.getElementsByClassName("frame_detail")[0];

  console.log(currentOrder.products, "flakjsfd");

  frameDetail.innerHTML = currentOrder.products
    .map((product) => {
      return `
        <div class="frame_detail_item">
          <div class="row">
            <div
              class="col-2 d-flex align-items-center justify-content-center"
            >
              ${product.id_product}
            </div>
            <div
              class="col-5 d-flex align-items-center justify-content-center border-bottom"
            >
              ${product.name}
            </div>
            <div
              class="col-4 d-flex align-items-center justify-content-center border-bottom"
            >
              ${product.price}
            </div>
            <div class="col-1">
              <div class="d-flex w-100 justify-content-center">
                <div class="quantity">${product.quantity}</div>
              </div>
            </div>
          </div>
        </div>
    `;
    })
    .join("");

  alert("Add Order Success!");

  // axios
  //   .post(`${DOMAIN_SERVER}/api/orders`, currentOrder, {
  //     headers: {
  //       authorization: localStorage.getItem("user_token"),
  //     },
  //   })
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));
}
