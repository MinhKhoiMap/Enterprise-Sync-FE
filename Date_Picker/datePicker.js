document.addEventListener('DOMContentLoaded', function () {
    var date = new Date();
    var today = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    
    var datepicker = flatpickr("#dropdownMenuButton", {
        enableTime: false,
        dateFormat: "d/m/Y",
        defaultDate: today,
        onChange: function(selectedDates, dateStr, instance) {
            var dateInput = document.querySelector('#datepicker');
            dateInput.value = dateStr;
        }
    });

    var dateInput = document.querySelector('#datepicker');
    dateInput.value = today;
});