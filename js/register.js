window.onload = function () {
  // 아이디 필드를 가져와서 변수에 저장
  var userId = document.querySelector("#user-id");
  // 비밀번호 필드를 가져와서 변수에 저장
  var userPw1 = document.querySelector("#user-pw1");
  // 비밀번호 확인 필드를 가져와서 변수에 저장
  var userPw2 = document.querySelector("#user-pw2");
  userId.onchange = checkId;
  userPw1.onchange = checkPw;
  userPw2.onchange = comparePw;
  function checkId() {
    // if (userId.value.length < 4 || userId.value.length < 15) {
    //   // *|| = OR
    //   alert("4~15자리의 영문과 숫자를 입력해주세요."); // 오류메세지 출력
    //   userId.select(); // 다시 입력할 수 있도록 userId 필드를 선택해라
    // }
    var regex = /^[a-zA-Z0-9]+$/; // 영문이랑 숫자만 사용

    // 영문, 숫자, 특수문자를 혼합해서 사용
    // var regex =
    //   /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/;

    if (userId.value.length < 4 || userId.value.length > 15) {
      // *|| = OR
      alert("4~15자리의 영문과 숫자를 입력해주세요."); // 오류메세지 출력
      userId.select(); // 다시 입력할 수 있도록 userId 필드를 선택해라
    } // 정규표현식 검사
    if (!regex.test(userId.value)) {
      alert("아이디에는 영문과 숫자만 사용하세요.");
      userId.select();
      return;
    }
  }
  function checkPw() {
    if (userPw1.value.length < 8) {
      alert("비밀번호는 8자리 이상 입력하셔야 합니다.");
      userPw1.value = ""; // 비밀번호 필드 지움
      userPw1.focus(); // 비밀번호를 다시 입력할 수 있게 포커싱
    }
  }
  function comparePw() {
    if (userPw1.value != userPw2.value) {
      alert("비밀번호가 일치하지 않습니다.");
      userPw2.value = "";
      userPw2.focus();
    }
  }
};
