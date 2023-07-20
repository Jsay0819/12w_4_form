window.onload = function () {
  var check = document.querySelector("#shippingInfo"); // 체크박스의 아이디를 담음
  check.addEventListener("click", function () {
    if (check.checked == true) {
      document.querySelector("#shippingName").value =
        document.querySelector("#billingName").value;
      document.querySelector("#shippingTel").value =
        document.querySelector("#billingTel").value;
      document.querySelector("#shippingAdr").value =
        document.querySelector("#billingAdr").value;
    } else {
      document.querySelector("#shippingName").value = "";
      document.querySelector("#shippingTel").value = "";
      document.querySelector("#shippingAdr").value = "";
    }
  });
};
