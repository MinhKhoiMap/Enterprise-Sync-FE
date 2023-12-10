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
const month = [
  { month: 'Jan', dateMonth: ['Jan 1', 'Jan 5', 'Jan 10', 'Jan 15', 'Jan 20'] },
  { month: 'Feb', dateMonth: ['Feb 1', 'Feb 5', 'Feb 10', 'Feb 15', 'Feb 20'] },
  { month: 'Mar', dateMonth: ['Mar 1', 'Mar 5', 'Mar 10', 'Mar 15', 'Mar 20'] },
  { month: 'Apr', dateMonth: ['Apr 1', 'Apr 5', 'Apr 10', 'Apr 15', 'Apr 20'] },
  { month: 'May', dateMonth: ['May 1', 'May 5', 'May 10', 'May 15', 'May 20'] },
  { month: 'Jun', dateMonth: ['Jun 1', 'Jun 5', 'Jun 10', 'Jun 15', 'Jun 20'] },
  { month: 'Jul', dateMonth: ['Jul 1', 'Jul 5', 'Jul 10', 'Jul 15', 'Jul 20'] },
  { month: 'Aug', dateMonth: ['Aug 1', 'Aug 5', 'Aug 10', 'Aug 15', 'Aug 20'] },
  { month: 'Sep', dateMonth: ['Sep 1', 'Sep 5', 'Sep 10', 'Sep 15', 'Sep 20'] },
  { month: 'Oct', dateMonth: ['Oct 1', 'Oct 5', 'Oct 10', 'Oct 15', 'Oct 20'] },
  { month: 'Nov', dateMonth: ['Nov 1', 'Nov 5', 'Nov 10', 'Nov 15', 'Nov 20'] },
  { month: 'Dec', dateMonth: ['Dec 1', 'Dec 5', 'Dec 10', 'Dec 15', 'Dec 20'] },
];

const monthdata = [
  { month: 'Jan', amount: [40, 18, 12, 30, 12] },
  { month: 'Feb', amount: [12, 55, 25, 48, 45] },
  { month: 'Mar', amount: [15, 30, 20, 35, 50] },
  { month: 'Apr', amount: [18, 35, 25, 40, 55] },
  { month: 'May', amount: [20, 40, 10, 45, 60] },
  { month: 'Jun', amount: [22, 25, 35, 70, 65] },
  { month: 'Jul', amount: [25, 50, 40, 55, 70] },
  { month: 'Aug', amount: [28, 55, 15, 60, 85] },
  { month: 'Sep', amount: [30, 30, 50, 65, 80] },
  { month: 'Oct', amount: [14, 22, 11, 21, 35] },
  { month: 'Nov', amount: [10, 20, 13, 15, 30] },
  { month: 'Dec', amount: [5, 15, 10, 25, 40] },
];



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

const plugin = {
  beforeInit(chart) {
    
    const originalFit = chart.legend.fit;

    
    chart.legend.fit = function fit() {
      
      originalFit.bind(chart.legend)();
      
      this.height += 15;
    }
  }
}

const dataShopee = {
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

const configShopee = {
    type: 'line',
    data: dataShopee,
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

const dataLazada = {
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

const configLazada = {
  type: 'line',
  data: dataLazada,
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
const dataTiktok = {
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

const configTiktok = {
  type: 'line',
  data: dataTiktok,
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


const lineChart = new Chart(ctx, configShopee);

const lineChart1 = new Chart(ctx1,configLazada);

const lineChart2 = new Chart(ctx2,configTiktok);




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


function showLogoutConfirmation() {

  var confirmation = confirm("Are you sure you want to log out?");


  if (confirmation) {

      window.location.href = "../../login.html";
  } else {

      console.log("Log out canceled");
  }
}

function filterChart3() {
  // Lấy giá trị của ô input
  var inputValue = $("#myMonthPicker3 input").val();

  // Tách giá trị thành tháng và năm
  var selectedMonth = inputValue.split(' ')[0];
  var selectedYear = inputValue.split(' ')[1];

  console.log(selectedMonth);
  console.log(selectedYear);

  var monthIndex = month.findIndex((m) => m.month === selectedMonth);
  console.log(monthIndex);

  configTiktok.data.labels = month[monthIndex].dateMonth;
  configTiktok.data.datasets[1].label=month[monthIndex].month;
  configTiktok.data.datasets[0].label=month[monthIndex-1].month;
  configTiktok.data.datasets[1].data = monthdata[monthIndex].amount;
  configTiktok.data.datasets[0].data = monthdata[monthIndex-1].amount;
  
    // Cập nhật biểu đồ
  lineChart2.update();
  
}

function filterChart1() {
  // Lấy giá trị của ô input
  var inputValue = $("#myMonthPicker1 input").val();

  // Tách giá trị thành tháng và năm
  var selectedMonth = inputValue.split(' ')[0];
  var selectedYear = inputValue.split(' ')[1];

  console.log(selectedMonth);
  console.log(selectedYear);

  var monthIndex = month.findIndex((m) => m.month === selectedMonth);
  console.log(monthIndex);

  configShopee.data.labels = month[monthIndex].dateMonth;

  configShopee.data.datasets[0].label=month[monthIndex-1].month;
  configShopee.data.datasets[1].label=month[monthIndex].month;
  configShopee.data.datasets[0].data = monthdata[monthIndex-1].amount;
  configShopee.data.datasets[1].data = monthdata[monthIndex].amount;
  
    // Cập nhật biểu đồ
  lineChart.update();
}

function filterChart2() {
  // Lấy giá trị của ô input
  var inputValue = $("#myMonthPicker2 input").val();

  // Tách giá trị thành tháng và năm
  var selectedMonth = inputValue.split(' ')[0];
  var selectedYear = inputValue.split(' ')[1];

  console.log(selectedMonth);
  console.log(selectedYear);

  var monthIndex = month.findIndex((m) => m.month === selectedMonth);
  console.log(monthIndex);

  configLazada.data.labels = month[monthIndex].dateMonth;
  configLazada.data.datasets[1].label = month[monthIndex].month;
  configLazada.data.datasets[0].label = month[monthIndex-1].month;
  configLazada.data.datasets[1].data = monthdata[monthIndex].amount;
  configLazada.data.datasets[0].data = monthdata[monthIndex-1].amount;
  

  lineChart1.update();
 
  
}


// @ts-nocheck
$(document).ready(function() {
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var year = new Date().getFullYear();
  var startYear = year - 10;
  var endYear = year + 10;

//    for (var i = startYear; i <= endYear; i++) {
//      $("#selectedYear").append('<option value="' + i + '">' + i + '</option>');
//    }

  $("#myMonthPicker").on("click", function() {
    $("#myMonthFrame").collapse("toggle");
    
  });

  $("#myMonthFrame").on("show.bs.collapse", function() {
    $("#selectedYear").text(new Date().getFullYear());
    $(this).addClass("margin");
  });
 
  

  $(".monthBtn").on("click", function() {
    var selectedMonth = $(this).text();
    var selectedYear = $("#selectedYear").text();
    $("#myMonthPicker input").val(selectedMonth + " " + selectedYear);
    $("#myMonthFrame").collapse("toggle");
    $(this).removeClass("margin");
  });
  $("#prevYear").on("click", function() {
    var currentYear = parseInt($("#selectedYear").text());
    $("#selectedYear").text(currentYear - 1);
  });

  $("#nextYear").on("click", function() {
    var currentYear = parseInt($("#selectedYear").text());
    $("#selectedYear").text(currentYear + 1);
  });
  //
  $("#myMonthPicker1").on("click", function() {
    $("#myMonthFrame1").collapse("toggle");
    
  });

  $("#myMonthFrame1").on("show.bs.collapse", function() {
    $("#selectedYear1").text(new Date().getFullYear());
    $(this).addClass("margin");
  });
 
  

  $(".monthBtn1").on("click", function() {
    var selectedMonth = $(this).text();
    var selectedYear = $("#selectedYear1").text();
    $("#myMonthPicker1 input").val(selectedMonth + " " + selectedYear);
    $("#myMonthFrame1").collapse("toggle");
    $(this).removeClass("margin");
    filterChart1();
  });
  $("#prevYear1").on("click", function() {
    var currentYear = parseInt($("#selectedYear1").text());
    $("#selectedYear1").text(currentYear - 1);
  });

  $("#nextYear1").on("click", function() {
    var currentYear = parseInt($("#selectedYear1").text());
    $("#selectedYear1").text(currentYear + 1);
  });
  //
  $("#myMonthPicker2").on("click", function() {
    $("#myMonthFrame2").collapse("toggle");
    
  });

  $("#myMonthFrame2").on("show.bs.collapse", function() {
    $("#selectedYear2").text(new Date().getFullYear());
    $(this).addClass("margin");
  });
 
  

  $(".monthBtn2").on("click", function() {
    var selectedMonth = $(this).text();
    var selectedYear = $("#selectedYear2").text();
    $("#myMonthPicker2 input").val(selectedMonth + " " + selectedYear);
    $("#myMonthFrame2").collapse("toggle");
    $(this).removeClass("margin");
    filterChart2();
  });
  $("#prevYear2").on("click", function() {
    var currentYear = parseInt($("#selectedYear2").text());
    $("#selectedYear2").text(currentYear - 1);
  });

  $("#nextYear2").on("click", function() {
    var currentYear = parseInt($("#selectedYear2").text());
    $("#selectedYear2").text(currentYear + 1);
  });
  //
  $("#myMonthPicker3").on("click", function() {
    $("#myMonthFrame3").collapse("toggle");
    
  });

  $("#myMonthFrame3").on("show.bs.collapse", function() {
    $("#selectedYear3").text(new Date().getFullYear());
    $(this).addClass("margin");
  });
 
  

  $(".monthBtn3").on("click", function() {
    var selectedMonth = $(this).text();
    var selectedYear = $("#selectedYear3").text();
    $("#myMonthPicker3 input").val(selectedMonth + " " + selectedYear);
    $("#myMonthFrame3").collapse("toggle");
    $(this).removeClass("margin");
    filterChart3();
  });
  $("#prevYear3").on("click", function() {
    var currentYear = parseInt($("#selectedYear3").text());
    $("#selectedYear3").text(currentYear - 1);
  });

  $("#nextYear3").on("click", function() {
    var currentYear = parseInt($("#selectedYear3").text());
    $("#selectedYear3").text(currentYear + 1);
  });
});