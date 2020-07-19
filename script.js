let obj;
let getAmount = 1;
  window.onload = function() {
    $.ajax({
      type: "GET",
      url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json', 
      dataType : "json",
      success: function (data) { 
            let i = 1;
            obj = data;
            for (let value of Object.values(obj)) {
              $("#currencies").append('<option value="' + value['cc'] + '">');
            }
          }
    });
  };

  $('#test_input').on('input', function() {
    for (let item of Object.values(obj)) {
      if ($(this).val() == item['cc']) {
        $("h3").html("Текущий курс: " + getAmount + " " + item['cc'] + " = " + item['rate'] * getAmount + " " + " грн.");
      }
    };
  })
  
  $('#amount').on('input', function() {
    getAmount = $(this).val()
    if (getAmount === '' || !isFinite(getAmount)) {
      getAmount = 1;
    }
   
  })
    

