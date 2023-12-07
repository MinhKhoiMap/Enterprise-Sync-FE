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
 });