// @ts-nocheck

// @ts-nocheck
const navItemList = document.querySelector(".sidebar .sidebar-nav");

console.log([navItemList.children], "navItemList");
let clicking = false;
for (let child of navItemList.children) {
  
  child.addEventListener("click", () => {

    for (let child of navItemList.children)
      if (child.classList.contains("nav-item__active")) {
        
        let itemName = child.getAttribute("id");
        const imageChild = child.children[0].children[0];
        console.log(itemName, "falsjdkf");
        imageChild.setAttribute("src", `../../img/${itemName}.svg`);
        child.classList.remove("nav-item__active");
      }
    clicking=true;
    let itemName = child.getAttribute("id");
    const imageChild = child.children[0].children[0];
    console.log(itemName, "falsjdkf");
    imageChild.setAttribute("src", `../../img/${itemName}_click.svg`);

    child.classList.add("nav-item__active");
  });
  child.addEventListener("mouseenter", () => {
    let itemName = child.getAttribute("id");
    const imageChild = child.querySelector(".icon_nav");
    if(child.classList.contains("nav-item__active"))
    {
      imageChild.setAttribute("src", `../../img/${itemName}.svg`);
    }
    else{
      imageChild.setAttribute("src", `../../img/hover/${itemName}_hover.svg`);
    }
  });
  child.addEventListener("mouseleave", () => {
    let itemName = child.getAttribute("id");
    const imageChild = child.querySelector(".icon_nav");
    if(child.classList.contains("nav-item__active"))
    {
      imageChild.setAttribute("src", `../../img/${itemName}_click.svg`);
    }
    else{
      imageChild.setAttribute("src", `../../img/${itemName}.svg`);
    }
  });

}






const salesNumber = [
    { platform: 'Shopee', amount: { success: 10500, failed: 1400 } },
    { platform: 'Lazada', amount: { success: 15000, failed: 5400 } },
    { platform: 'Tiktok Shop', amount: { success: 5500, failed: 11400 } },
   
];

// setup 
const data = {

    datasets: [{
        label: 'Successful Order',
        data: salesNumber,
        backgroundColor: 'rgba(52, 181, 58, 1)',
        borderColor: 'rgba(255, 26, 104, 1)',
        tension: 0.4,
        parsing: {
            
            yAxisKey: 'amount.success',
        },
        barThickness:30,
    },
    {
        label: 'Failed Order',
        data: salesNumber,
        backgroundColor: 'rgba(220, 53, 53, 1)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.4,
        parsing: {
            
            yAxisKey: 'amount.failed'
        },
        barThickness:30,
    }]
};

// config 
const config = {
    type: 'bar',
    data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        parsing:{
            xAxisKey: 'platform'
        },
        scales: {
            y: {
                
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                position: 'bottom', // Đặt vị trí của legend ở dưới
                align: 'start', // Canh lề trái
                labels: {
                    usePointStyle: true, // Sử dụng hình tròn cho label
                    boxWidth: 10 // Kích thước của hình tròn
                },
               
            }
        },
        
    }
};

// render init block
const myChart = new Chart(
    document.getElementById('Total_Bar_Chart'),
    config
);




const percentage = [70,30];
const data1 = {
    labels: [
      'Succesful',
      'Failed'
    ],
    datasets: [{
      label: 'Order Statistics',
      data: percentage,
      backgroundColor: [
        'rgba(52, 181, 58, 1)',
        'rgba(220, 53, 53, 1)',
        
      ],
      borderWidth:0
    }]
  };

const config2 = {
    type: 'doughnut',
    data: data1,
    options:{
        cutout:'70%',
        plugins:{
            legend:{
                display:false,
            }
        },
    }
};

const doughnutChart = new Chart(
    document.getElementById('doughnutChart'),
    config2
);
