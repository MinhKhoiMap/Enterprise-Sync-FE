const navItemList = document.querySelector(".sidebar .sidebar-nav");

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

const apiUrl = "http://localhost:5000"; // Replace this with your actual API URL
let currentPage = 1;
let totalPage = 1;

// If the fetch from the API fails, use the sample data instead
async function handleRenderOrder() {
  axios
    .get(`${apiUrl}/api/orders?page=${currentPage}`, {
      headers: {
        authorization: localStorage.getItem("user_token"),
      },
    })
    .then((res) => {
      document.getElementById("contentTableBody").innerHTML = "";
      return res.data;
    })
    .then((response) => {
      const { data, total_page } = response;

      totalPage = total_page;

      function StatusComponent(props) {
        const statusDiv = document.createElement("div");

        const img = document.createElement("img");
        img.src = props.imgSrc;
        // img.alt = props.imgAlt;

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
          case "Return":
            statusDiv.classList.add("status-Return");
            break;
        }
        return statusDiv;
      }

      data.forEach((order) => {
        let row = document.createElement("tr");

        console.log(order.status_order);
        let orderId = document.createElement("td");
        let orderDay = document.createElement("td");
        let chanel = document.createElement("td");
        let totalPrice = document.createElement("td");
        let status = document.createElement("td");

        orderId.textContent = order.id_order;
        orderDay.textContent = new Date(order.order_date).toLocaleDateString();
        chanel.textContent = order.channel_platform;
        totalPrice.textContent = order.total_price;
        status.setAttribute("class", "status");

        let imgUrl = "",
          statusText;
        switch (order.status_order) {
          case "D":
            statusText = "Done";
            imgUrl = "../src/green.png";
            break;
          case "P":
            statusText = "Pending";
            imgUrl = "../../src/yellow.png";
            break;
          case "R":
            statusText = "Return";
            imgUrl = "../../src/pseudo.png";
            break;
        }

        // Append the StatusComponent to the 'status' td
        status.appendChild(
          StatusComponent({
            status: statusText,
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
    });
}

handleRenderOrder();

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
