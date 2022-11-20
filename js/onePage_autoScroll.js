$(() => {
  /////////// jQB /////////////////////

  // 페이지 이동을 위한 변수
  let pno = 0;
  let msg = $(".nav_cont .txt:first-child");
  let bar_line = $(".bar .line");

  // 전체 페이지수(페이지요소 개수를 할당)
  let totnum = $(".page").length;
  // console.log(totnum);

  // 광스크롤금지변수
  let prot = 0; // 0-허용,1-금지
  $(document).on("mousewheel wheel", (e) => {
    // e-이벤트전달

    //// 광스크롤 금지 /////
    if (prot) return;
    prot = 1; // 잠금!
    setTimeout(() => {
      prot = 0; // 해제!
    }, 800);
    ///////////////////////

    //e.preventDefault()
    // 기본기능막기는 window,document,body
    // 세가지 최상위객체에는 사용할 수 없다!(에러남!)

    // 호출확인
    // console.log("휠휠휠~~~!");

    // 이벤트 전달변수 처리
    e = window.event || e;
    // 오리지널 이벤트와 전달이벤트 중 유효한 값을 할당!
    // 변수 = 값 || 값 -> 두 값중 true인 값이 할당됨!

    // 1. 휠방향 알아내기
    // 방향은 델타값 사용!
    let delta = e.wheelDelta || e.detail;
    // e.wheelDelta - 일반 브라우저용 방향정보
    // e.detail - 파이어폭스용 방향정보

    // console.log(delta);

    // 2. 음수면 아랫방향 : 다음페이지
    if (delta < 0) {
      // 페이지수 증가
      pno++;
      if (pno === totnum) pno = totnum - 1;
      // 페이지수와 같아지면 끝번호 다음번호니까
      // 끝번호에 고정!!!
      // console.log("아랫방향");
    } ///// if ///////
    else {
      // 페이지수 감소
      pno--;
      if (pno === -1) pno = 0;
      // 첫페이지 이전으로 가면 첫번호에 고정!
      // console.log("윗방향")
    } ////// else  //////

    // 페이지 번호 확인
    // console.log(pno);
    // console.log("페이지번호:", pno);

    // 3. 위치이동 스크롤 애니메이션
    // 전체스크롤 대상: html,body(최상위 부모2개 동시에!)
    $("html,body")
      .stop()
      .animate(
        {
          scrollTop: $(window).height() * pno + "px",
          // 윈도우 높이값 * 순번
        },
        500
      );

    // 블릿이동 
    setTimeout(() => {
      switch (pno) {
      case 0:
        msg.text("01");
        bar_line.animate({top: "0px"});
        break;
        case 1:
        msg.text("02");
        bar_line.animate({top: "19px"});
        break;
      case 2:
        msg.text("03");
        bar_line.animate({top: "38px"});
        break;
      case 3:
        msg.text("04");
        bar_line.animate({top: "57px"});
        break;
      case 4:
        msg.text("05");
        bar_line.animate({top: "76px"});
        break;
      case 5:
        msg.text("06");
        bar_line.animate({top: "95px"});
        break;
      case 6:
        msg.text("07");
        bar_line.animate({top: "117px"});
        break;
      case 7:
        msg.text("07");
        bar_line.animate({top: "117px"});
        break;
      default:
        break;
    } //////// switch case ///////
    }, 500);
    
  }); ///////////// wheel ///////////////////

  // 스크롤 이벤트와 비교!
  //    $(window).scroll(()=>{console.log("스크롤이벤트!")})
}); ////////////// jQB /////////////////////
