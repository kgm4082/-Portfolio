// 커피베이 포트폴리오 공통 JS - common.js

$(() => {
    //////////////////// jQB ////////////////////

    /*****************************************************
        [ 1. 스크롤 액션 기능구현 ]
        스크롤 위치값 100 이상일때 클래스 .on 생성
        스크롤 위치값이 100미만일때 클래스 .on 제거

        [ 2. 맨위로가기버튼 기능구현]
        맨위로가기버튼 클릭시 스크롤탑 0으로 위치 이동

        [ 3. 검색창 기능구현 ]
        검색아이콘 클릭시 .on 클래스를 주어 나타내기
        검색창 외의 영역클릭시 검색창 닫기
    *****************************************************/
    // 변경대상

    // 헤더
    const topA = $("#header");
    // 위젯 레이어
    const widget = $(".widget-layer");
    // 맨위로가기 버튼
    const topBTn = $(".widget-layer .top")
    // 검색 아이콘
    const sch = $(".sch");
    // 검색창 영역
    const schArea = $(".sch_area");
    // 검색창 박스
    const schBox = $(".sch_boxs");
    
    // 스크롤위치변수
    let scTop;
    // 마지막 스크룰위치값
    let lastSc = 0;

    //////// 스크롤 이벤트 함수 /////////////
    $(window).scroll(() => {
        // 현재 스크롤값 scTop에 저장
        scTop = $(this).scrollTop();
        // 현재 스크롤 위치값 콘솔 출력
        //    console.log(scTop);

        // 1. 슬림메뉴 클래스on적용
        // 기준위치는 스크롤위치 100px이상
        if (scTop >= 100) {
            // 100px이상
            topA.addClass("on");
            widget.addClass("on");
        } else {
            // 100px 미만
            topA.removeClass("on");
            widget.removeClass("on");
        } //////// else /////////

        // 마지막위치 업데이트
        lastSc = scTop;
    });
    ////////// 맨위로가기 버튼 클릭 설정 /////////
    topBTn.click(()=>{
        $("html,body").animate(
            {
                scrollTop: "0",
            },
            800,
            "easeOutQuart"
            );
        })
    ////////// 검색창 클릭 설정 /////////
    sch.click(()=>{
        $(schArea).addClass("on");
    })
    ////////// 검색창 외의 영역 클릭시 검색창 닫기 설정 /////////
    $(document).mouseup((e)=>{
        if(schBox.has(e.target).length === 0){
            $(schArea).removeClass("on");
        }
    })
}); //////////////////// jQB ////////////////////
