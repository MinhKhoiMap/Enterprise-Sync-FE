// @ts-nocheck

// @ts-nocheck
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
        borderRadius: 5,
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
        borderRadius:5
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
                position: 'bottom', 
                align: 'start', 
                labels: {
                    usePointStyle: true, 
                    boxWidth: 10
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
const month = [{ month: 'Oct', dateMonth: ['Nov 1', 'Nov 5', 'Nov 10', 'Nov 15', 'Nov 20'] },{ month: 'Nov', dateMonth: ['Nov 1', 'Nov 5', 'Nov 10', 'Nov 15', 'Nov 20'] }];
const monthdata = [{ month: 'Oct', amount: [14, 22, 11, 21,35] },{ month: 'Nov', amount: [10, 20, 13, 15, 30] }];


// Lấy thẻ canvas và context của nó
const canvas = document.getElementById('lineChart');
const ctx = canvas.getContext('2d');

const canvas1 = document.getElementById('lineChart1');
const ctx1 = canvas1.getContext('2d');

const canvas2 = document.getElementById('lineChart2');
const ctx2 = canvas2.getContext('2d');

// Tạo gradient cho fill
const gradient = ctx.createLinearGradient(0, 0, 0, 350);
gradient.addColorStop(0, 'rgba(151, 71, 255, 0.50)', 'rgba(217, 217, 217, 0.00)'); // Bắt đầu với một màu nhạt
gradient.addColorStop(1, 'rgba(217, 217, 217, 0.00)'); // Kết thúc với màu trong suốt

const data2 = {
    labels: month[0].dateMonth,
    datasets: [{
        label: month[0].month,
        borderColor: 'rgba(101, 101, 117, 0.7)',
        data: monthdata[0].amount,
        tension: 0.4,
        borderDash: [10, 2],


    },
    {
      label: month[1].month,
      borderColor: 'rgba(99, 79, 190, 1)',
      data: monthdata[1].amount,
      tension: 0.4,
      fill: true,
      backgroundColor:gradient,

  }
  ]
};

const plugin = {
  beforeInit(chart) {
    
    const originalFit = chart.legend.fit;

    
    chart.legend.fit = function fit() {
      
      originalFit.bind(chart.legend)();
      
      this.height += 15;
    }
  }
}

const config3 = {
    type: 'line',
    data: data2,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
          
          legend: {
              position:'top', 
              align: 'end',
             
              labels: {
                  usePointStyle: true, 
                  boxWidth: 10
              },
              padding: {
               
                bottom: 20,
         
            }
          }
      },
      
    },
    plugins: [plugin]
};


ctx.fillStyle = gradient;


const lineChart = new Chart(ctx, config3);

const lineChart1 = new Chart(ctx1,config3);

const lineChart2 = new Chart(ctx2,config3);




document.addEventListener("DOMContentLoaded", function () {
  // Dữ liệu
  var success = 70;
  var failed = 30;

  var success1 = 60;
  var failed1 = 40;

  var success2 = 30;
  var failed2 = 70;

  // Tổng số
  var total = success + failed;



  // Tính phần trăm
  var successPercentage = (success / total) * 100;
  var failedPercentage = (failed / total) * 100;

  var successPercentage1 = (success1 / total) * 100;
  var failedPercentage1 = (failed1 / total) * 100;

  var successPercentage2 = (success2 / total) * 100;
  var failedPercentage2 = (failed2 / total) * 100;

  // Cập nhật chiều rộng của thanh tiến triển dựa trên phần trăm
  document.getElementById("successBar").style.width = successPercentage + "%";
  document.getElementById("failedBar").style.width = failedPercentage + "%";
  document.getElementById("successBar1").style.width = successPercentage1 + "%";
  document.getElementById("failedBar1").style.width = failedPercentage1 + "%";
  document.getElementById("successBar2").style.width = successPercentage2 + "%";
  document.getElementById("failedBar2").style.width = failedPercentage2 + "%";
});
