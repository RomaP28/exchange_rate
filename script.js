let obj;
let getAmount = 1;
  window.onload = function() {
    
    $.ajax({
      type: "GET",
      url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json', 
      dataType : "json",
      success: function (data) { 
            let i = 0;
            obj = data;
            for (let value of Object.values(obj)) {
                $("#table" + getAmount + " thead tr").append("<td>" + value['cc'] + "</td>");
                $("#table" + getAmount + " tbody tr").append("<td>" + value['rate'] + "</td>");
                i++;
              if (i == 9){
                getAmount += 1;
                $("#result").append('<table id="table' + getAmount + '"><thead><tr></tr></thead><tbody><tr></tr></tbody></table><br>');
                i=0;
              }
            }

          }
    });
  };

  $('#name').on('input', function() {

    let str = $(this).val().toUpperCase();
    
    if(str == ""){

      let j = 1;
      $("#table1 tr").remove();
      $("#table1 thead").append("<tr></tr>");
      $("#table1 tbody").append("<tr></tr>");

      for (let item of Object.values(obj)) {
        if (j<10) {
          $("#table1 thead tr").append("<td>" + item['cc'] + "</td>");
          $("#table1 tbody tr").append("<td>" + item['rate'] + "</td>"); 
          j++;
        }
      }
      return $("table").show(); 

    } else {

      $("table").hide(); 
      $("#table1 tr").remove();
      $("#table1 thead").append("<tr></tr>");
      $("#table1 tbody").append("<tr></tr>");

      for (let item of Object.values(obj)) {
        if (item['cc'].startsWith(str)) {
          $("#table1 thead tr").append("<td>" + item['cc'] + "</td>");
          $("#table1 tbody tr").append("<td>" + item['rate'] + "</td>");
          $("#table1").show();
        }
      };
    };
 
  })


