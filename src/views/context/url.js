/**
 * 메뉴 URL 정의
 */

const CONTEXT_PATH = '/douzoneweb'; // 개발 서버
//const CONTEXT_PATH = ''; //운영 서버

const URL = {

    // 모바일 redirect 페이지
    MOBILE_REDIRECT: CONTEXT_PATH + "/mredirect",

    // 메인페이지
    MAIN: CONTEXT_PATH + "/",

    /* 사용자 메뉴 정의 */

    // 브랜드 - 새롭게 정의하다
    BRAND_B001: CONTEXT_PATH + "/brand/B001",
    // 브랜드 - 브랜드 스토리
    BRAND_B002: CONTEXT_PATH + "/brand/B002",
    // 브랜드 - BI
    BRAND_B003: CONTEXT_PATH + "/brand/B003",

    // 서비스 소개 - For Me(임직원업무관리)
    SERVICE_S001: CONTEXT_PATH + "/service/S001",
    // 서비스 소개 - 그룹웨어
    SERVICE_S002: CONTEXT_PATH + "/service/S002",
    // 서비스 소개 - ERP(회계관리)
    SERVICE_S003: CONTEXT_PATH + "/service/S003",
    // 서비스 소개 - ERP(인사관리)
    SERVICE_S004: CONTEXT_PATH + "/service/S004",
    // 서비스 소개 - ERP(편의기능)
    SERVICE_S005: CONTEXT_PATH + "/service/S005",
    // 서비스 소개 - 문서관리(ONEFFICE)
    SERVICE_S006: CONTEXT_PATH + "/service/S006",
    // 서비스 소개 - 문서관리(ONECHAMBER)
    SERVICE_S007: CONTEXT_PATH + "/service/S007",
    // 서비스 소개 - 모바일
    SERVICE_S008: CONTEXT_PATH + "/service/S008",

    // 도입안내 - 서비스유형
    INTRODUCTION_IN001: CONTEXT_PATH + "/introduction/IN001",
    // 도입안내 - 요금안내
    INTRODUCTION_IN002: CONTEXT_PATH + "/introduction/IN002",
    // 도입안내 - 도입문의
    INTRODUCTION_IN003: CONTEXT_PATH + "/introduction/IN003",

    // 미디어센터 - 광고
    MEDIA_M001: CONTEXT_PATH + "/media/M001",
    // 미디어센터 - 보도자료
    MEDIA_M002: CONTEXT_PATH + "/media/M002",
    // 미디어센터 - 영상콘텐츠
    MEDIA_M003: CONTEXT_PATH + "/media/M003",

    // 가상체험관 - 가상체험관
    VIRTUALEX_V001: CONTEXT_PATH + "/virtualEx/V001",

    // 약관 및 정책 - 개인정보처리방침
    TERM_T001: CONTEXT_PATH + "/term/T001",
    // 약관 및 정책 - 이용약관
    TERM_T002: CONTEXT_PATH + "/term/T002",
    // 약관 및 정책 - 개인정보처리방침
    TERM_T003: CONTEXT_PATH + "/term/T003",


    /* 관리자 메뉴 정의 */

    // 로그인 화면
    ADMIN_MAIN: CONTEXT_PATH + "/adm/signIn",

    // 팝업관리 - 현황
    ADMIN_MGR_POPUP_LIST: CONTEXT_PATH + "/admin/mgr/popupList",

    // 팝업관리 - 등록 & 수정
    ADMIN_MGR_POPUP: CONTEXT_PATH + "/admin/mgr/popup",

    // 도입문의 - 현황
    ADMIN_MGR_INTRO_LIST: CONTEXT_PATH + "/admin/mgr/introList",

    // 도입문의 - 등록 & 수정
    ADMIN_MGR_INTRO: CONTEXT_PATH + "/admin/mgr/intro",

    // 미디어센터 - 광고 > 현황
    ADMIN_MGR_AD_LIST: CONTEXT_PATH + "/admin/mgr/adList",

    // 미디어센터 - 광고 > 등록 & 수정
    ADMIN_MGR_AD: CONTEXT_PATH + "/admin/mgr/ad",

    // 미디어센터 - 보도자료 > 현황
    ADMIN_MGR_REPORT_LIST: CONTEXT_PATH + "/admin/mgr/reportList",

    // 미디어센터 - 보도자료 > 등록 & 수정
    ADMIN_MGR_REPORT: CONTEXT_PATH + "/admin/mgr/report",

    // 미디어센터 - 영상콘텐츠 > 현황
    ADMIN_MGR_MEDIA_LIST: CONTEXT_PATH + "/admin/mgr/mediaList",

    // 미디어센터 - 영상콘텐츠 > 등록 & 수정
    ADMIN_MGR_MEDIA: CONTEXT_PATH + "/admin/mgr/media"
}

export default URL;