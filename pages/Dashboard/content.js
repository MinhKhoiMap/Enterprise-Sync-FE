// @ts-nocheck

// @ts-nocheck
const navItemList = document.querySelector(".sidebar .sidebar-nav");

// console.log([navItemList.children], "navItemList");

let clicking = false;
for (let child of navItemList.children) {
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

let apiUrl = "YOUR_API_URL"; // Replace this with your actual API URL

// Define the sample data to use in case the fetch from the API fails
let sampleData = [
  {
    orderId: 1,
    orderDay: "2022-03-01",
    chanel: "Shopee",
    totalPrice: 150,
    status: "Done",
  },
  {
    orderId: 2,
    orderDay: "2022-03-02",
    chanel: "Tiki",
    totalPrice: 150,
    status: "Done",
  },
  {
    orderId: 3,
    orderDay: "2022-03-03",
    chanel: "TikTokShop",
    totalPrice: 100,
    status: "Pending",
  },
  {
    orderId: 4,
    orderDay: "2022-03-03",
    chanel: "Lazada",
    totalPrice: 100,
    status: "Return",
  },
  {
    orderId: 5,
    orderDay: "2022-03-03",
    chanel: "Tiki",
    totalPrice: 100,
    status: "Done",
  },
  {
    orderId: 6,
    orderDay: "2022-03-03",
    chanel: "Sendo",
    totalPrice: 100,
    status: "Done",
  },
  {
    orderId: 7,
    orderDay: "2022-03-03",
    chanel: "Sendo",
    totalPrice: 100,
    status: "Done",
  },
  {
    orderId: 8,
    orderDay: "2022-03-03",
    chanel: "Sendo",
    totalPrice: 100,
    status: "Done",
  },
  {
    orderId: 9,
    orderDay: "2022-03-03",
    chanel: "Sendo",
    totalPrice: 100,
    status: "Done",
  },
  {
    orderId: 10,
    orderDay: "2022-03-03",
    chanel: "Sendo",
    totalPrice: 100,
    status: "Done",
  },
  {
    orderId: 11,
    orderDay: "2022-03-03",
    chanel: "Sendo",
    totalPrice: 100,
    status: "Done",
  },
];

// If the fetch from the API fails, use the sample data instead
axios
  .get(apiUrl)
  .then((response) => {
    function StatusComponent(props) {
      const statusDiv = document.createElement("div");

      const img = document.createElement("img");
      img.src = props.imgSrc;
      img.alt = props.imgAlt;

      // Append the img element to the statusDiv
      statusDiv.appendChild(img);

      // Add some spacing between the image and the text
      statusDiv.appendChild(document.createTextNode(" "));

      // Add the status text
      statusDiv.appendChild(document.createTextNode(props.status));

      // Apply the status-specific CSS class
      switch (props.status) {
        case "Done":
          statusDiv.classList.add("status-Done");
          break;
        case "Pending":
          statusDiv.classList.add("status-Pending");
          break;
        case "Failed":
          statusDiv.classList.add("status-Failed");
          break;
        case "Return":
          statusDiv.classList.add("status-Return");
          break;
      }

      return statusDiv;
    }

    response.data.forEach((order) => {
      let row = document.createElement("tr");

      let orderId = document.createElement("td");
      let orderDay = document.createElement("td");
      let chanel = document.createElement("td");
      let totalPrice = document.createElement("td");
      let status = document.createElement("td");

      orderId.textContent = order.orderId;
      orderDay.textContent = order.orderDay;
      chanel.textContent = order.chanel;
      totalPrice.textContent = order.totalPrice;
      let imgUrl = "";
      switch (order.status) {
        case "Done":
          imgUrl = "src/green.png";
          break;
        case "Pending":
          imgUrl = "src/yellow.png";
          break;
        case "Failed":
          imgUrl = "image.jpg";
          break;
        case "Return":
          imgUrl = "src/pseudo.png";
          break;
      }

      // Append the StatusComponent to the 'status' td
      status.appendChild(
        StatusComponent({
          status: order.status,
          imgSrc: imgUrl,
        })
      );

      row.appendChild(orderId);
      row.appendChild(orderDay);
      row.appendChild(chanel);
      row.appendChild(totalPrice);
      row.appendChild(status);

      document.getElementById("contentTableBody").appendChild(row);
    });
  })
  //Test with Sample data
  .catch((error) => {
    console.error("Error fetching data from API:", error);

    function StatusComponent(props) {
      const statusDiv = document.createElement("div");

      const img = document.createElement("img");
      img.src = props.imgSrc;
      img.alt = props.imgAlt;

      // Append the img element to the statusDiv
      statusDiv.appendChild(img);

      // Add some spacing between the image and the text
      statusDiv.appendChild(document.createTextNode(" "));

      // Add the status text
      statusDiv.appendChild(document.createTextNode(props.status));

      // Apply the status-specific CSS class
      switch (props.status) {
        case "Done":
          statusDiv.classList.add("status-Done");
          break;
        case "Pending":
          statusDiv.classList.add("status-Pending");
          break;
        case "Failed":
          statusDiv.classList.add("status-Failed");
          break;
        case "Return":
          statusDiv.classList.add("status-Return");
          break;
      }

      return statusDiv;
    }

    // If the fetch fails, use the sample data instead
    sampleData.forEach((order) => {
      // Define a new component called 'StatusComponent'
      let row = document.createElement("tr");

      let orderId = document.createElement("td");
      let orderDay = document.createElement("td");
      let chanel = document.createElement("td");
      let totalPrice = document.createElement("td");
      let status = document.createElement("td");

      orderId.textContent = order.orderId;
      orderDay.textContent = order.orderDay;
      chanel.textContent = order.chanel;
      totalPrice.textContent = order.totalPrice;
      let imgUrl = "";
      switch (order.status) {
        case "Done":
          imgUrl = "../../src/green.png";
          break;
        case "Pending":
          imgUrl = "../../src/yellow.png";
          break;
        case "Failed":
          imgUrl = "image.jpg";
          break;
        case "Return":
          imgUrl = "../../src/pseudo.png";
          break;
      }

      // Append the StatusComponent to the 'status' td
      status.appendChild(
        StatusComponent({
          status: order.status,
          imgSrc: imgUrl,
        })
      );

      row.appendChild(orderId);
      row.appendChild(orderDay);
      row.appendChild(chanel);
      row.appendChild(totalPrice);
      row.appendChild(status);

      document.getElementById("contentTableBody").appendChild(row);
    });

    // Initialize the pagination after loading the data
  });

function showLogoutConfirmation() {
  var confirmation = confirm("Are you sure you want to log out?");

  if (confirmation) {
    window.location.href = "../../login.html";
  } else {
    console.log("Log out canceled");
  }
}

function handelNavigate(e) {
  e.preventDefault();
  const { target } = e;
  console.log(target, target.parentNode.getAttribute("id"));
  window.history.pushState(null, null, "pages/AnalysisPage/analysis.html");
  window.location.pathname = "pages/AnalysisPage/analysis.html";
}
