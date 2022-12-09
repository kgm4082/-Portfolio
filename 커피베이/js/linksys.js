// 커피베이 포트폴리오 링크시스템 JS - linksys.js


$(()=>{ 
    //////////////////// jQB ////////////////////

    // 로딩완료!
    // console.log("로딩완료!");

    /***************************************************** 
        [ 링크 시스템 기능구현 ] 
        1. 이벤트 종류: click
        2. 이벤트 대상: 이동버튼(.link .a)
        3. 기능 설계:

            (1) 스위치문을 이용하여 완성된 링크에 해당되는
                페이지로 이동시킨다

            (2) 완성되지 않은 페이지는 
            "현재 페이지는 공사중입니다~!" 라는 안내창을 띄우고
            기본은 index페이지로 이동시킨다.
        
    *****************************************************/
    /// 링크 대상: .top a -> .gnb a + .tmenu a + logo a
    const link = document.querySelectorAll(".link a");
    // console.log(link);

    /// 링크 이벤트 셋팅하기 /////
    // click 이벤트
    link.forEach((ele) => {
        // ele - 각a요소

        ele.onclick = () => {
            // 1. a요소 글자데이터
            let atxt = ele.innerText;

            // 주소할당변수
            let url;

            // 2. 링크 분기하기
            switch (atxt) {
                case "APP 다운":
                    url = "app";
                    break;
                case "가맹점 전용":
                    url = "member";
                    break;
                case "INSTAGRAM":
                    url = "insta";
                    break;
                case "BLOG":
                    url = "blog";
                    break;
                case "회사소개":
                    url = "etc";
                    break;
                case "COFFEEBAY":
                    url = "etc";
                    break;
                case "가치경영":
                    url = "etc";
                    break;
                case "회사연혁":
                    url = "etc";
                    break;
                case "오시는 길":
                    url = "etc";
                    break;
                case "메뉴":
                    url = "etc";
                    break;
                case "NEW MENU":
                    url = "etc";
                    break;
                case "COFFEE":
                    url = "etc";
                    break;
                case "BEVERAGE":
                    url = "etc";
                    break;
                case "FOOD":
                    url = "etc";
                    break;
                case "MD":
                    url = "etc";
                    break;
                case "매장":
                    url = "etc";
                    break;
                case "멤버쉽":
                    url = "etc";
                    break;
                case "커피베이 멤버십":
                    url = "etc";
                    break;
                case "이용혜택":
                    url = "etc";
                    break;
                case "자주묻는 질문":
                    url = "etc";
                    break;
                case "새소식":
                    url = "etc";
                    break;
                case "공지사항":
                    url = "etc";
                    break;
                case "미디어":
                    url = "etc";
                    break;
                case "이벤트":
                    url = "etc";
                    break;
                case "창업안내":
                    url = "etc";
                    break;
                default:
                    url = "index";
            } //////// switch case ///////

            // 3. 해당 url로 페이지 이동
            if (url === "etc") {
                alert("현재 페이지는 공사중입니다~!");
            } //////// if /////////
            else {
                // 새창열고 페이지이동
                if (
                    url === "member" ||
                    url === "app" ||
                    url === "insta" ||
                    url === "blog"
                ) {
                    window.open().location.href =
                        url === "member" // 가맹점 전용
                            ? "https://www.coffeebay.com/franchisee/member/login.php"
                            : url === "app" // APP 전용
                            ? "https://play.google.com/store/apps/details?id=com.app.coffeebay"
                            : url === "insta" // 인스타그램
                            ? "https://www.instagram.com/coffeebay_official/"
                            : "https://blog.naver.com/dldb1208";
                    // 전부 아니라면 블로그로 이동
                } /////////// if /////////
                else {
                    // 해당이름 페이지로 이동!
                    location.href = url + ".html";
                } ///////// else ///////////
            } //////// else //////////
        }; //////// click //////////
    }); //////////// forEach /////////


}); //////////////////// jQB ////////////////////