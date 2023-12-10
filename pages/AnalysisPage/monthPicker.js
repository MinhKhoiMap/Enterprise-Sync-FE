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
      var inputValue = $("#myMonthPicker3 input").val();

      console.log("Giá trị của ô input sau khi chọn tháng:",inputValue);
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
 