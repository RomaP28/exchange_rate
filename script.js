let obj;
let getAmount = 1;
  window.onload = function() {
    var request = new XMLHttpRequest();
        request.open("GET","https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");
        request.onreadystatechange = function(){

          if(request.readyState === 4 && request.status === 200) {
            obj = JSON.parse(request.responseText);
            for (let value of Object.values(obj)) {
              $("#currencies").append('<option value="' + value['cc'] + '">');
              //console.log(typeof(value['rate']));
            }
          }
        }
      request.send(null);
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
  


