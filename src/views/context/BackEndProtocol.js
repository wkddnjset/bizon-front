/**
 * API 호출 주소 변수 네이밍 규칙
 * 호출대상자 + '_' + API URL 에서 맨 마지막 path
 *
 * 호출대상자 : URER OR AMDIN
 * API 맨마지막 URL
 *  예시) http://abc.com/a/b/c -> 이 경우에는 c
 *
 * 상수 라는 것을 인식하기 위해 모두 대문자 처리
 */


/**
 * 로컬 : http://localhost:8484/
 * 테스트서버 : http://58.224.117.49/douzoneweb/api/
 * 운영서버 : https://amaranth10.com/douzoneweb/api/
 */
const SERVERURL = 'http://58.224.117.49/douzoneweb/api/';

/**
 * ACCESS TOKEN 재발급
 */
export const COMMON_TOKENREFRESH = SERVERURL + 'apiToken';

/**
 * RESOURECE 직접 접근 시 사용 URL
 */
export const COMMON_RESOURCE = SERVERURL + 'upload/';

/**
 * FileDownload URL 정의
 */
export const COMMON_FILEDOWN = SERVERURL + 'fileDown/';

/**
 * 메인화면에서 팝업창 호출 정보 조회
 */
export const USER_GETPOPUPLIST = SERVERURL + 'main/getPopupList';

/**
 * 도입문의 문의하기 작성
 */
export const USER_SETUSERINTRODATA = SERVERURL + 'intro/setUserIntroData';

/**
 * 미디어센터 - 광고 - [ TVC , 지면광고 ] 조회
 */
export const USER_GETADLIST = SERVERURL + 'bbs/getAdList';

/**
 * 미디어센터 - 광고 - TVC 조회
 */
export const USER_GETADTVLIST = SERVERURL + 'bbs/getAdTvList';

/**
* 미디어센터 - 광고 - 지면광고 조회
*/
export const USER_GETADPAPERLIST = SERVERURL + 'bbs/getAdPaperList';

/**
 * 미디어센터 - 보도자료 - [ Amararnth10 , CEO칼럼 ] 조회
 */
export const USER_GETREPORTLIST = SERVERURL + 'bbs/getReportList';

/**
 * 미디어센터 - 보도자료 - Amaranth10 조회
 */
export const USER_GETREPORTAMARANTHLIST = SERVERURL + 'bbs/getReportAmaranthList';

/**
* 미디어센터 - 보도자료 - CEO칼럼 조회
*/
export const USER_GETREPORTCEOLIST = SERVERURL + 'bbs/getReportCeoList';

/**
 * 미디어센터 - 영상콘텐츠 - [ 세미나, CEO인터뷰, 주요기능, 홍보 ] 조회
 */
export const USER_GETMEDIALIST = SERVERURL + 'bbs/getMediaList';

/**
 * 미디어센터 - 영상콘텐츠 - 세미나 조회
 */
export const USER_GETMEDIASEMINARLIST = SERVERURL + 'bbs/getMediaSeminarList';

/**
* 미디어센터 - 영상콘텐츠 - CEO인터뷰 조회
*/
export const USER_GETMEDIACEOLIST = SERVERURL + 'bbs/getMediaCeoList';

/**
* 미디어센터 - 영상콘텐츠 - 주요기능 조회
*/
export const USER_GETMEDIAFEATURELIST = SERVERURL + 'bbs/getMediaFeatureList';

/**
* 미디어센터 - 영상콘텐츠 - 홍보 조회
*/
export const USER_GETMEDIAPROMOTIONLIST = SERVERURL + 'bbs/getMediaPromotionList';


export const USER_SET_AD_COUNT = SERVERURL + 'bbs/setAdCount';
export const USER_SET_REPORT_COUNT = SERVERURL + 'bbs/setReportCount';
export const USER_SET_MEDIA_COUNT = SERVERURL + 'bbs/setMediaCount';

/**
 * 관리자 로그인
 */
export const AMDIN_SIGNIN = SERVERURL + 'signIn';

/**
 * 관리자 팝업관리 등록 & 수정
 */
export const ADMIN_SETPOPUPDATA = SERVERURL + 'admin/popup/setPopUpData';

/**
 * 관리자 팝업관리 현황 조회
 */
export const ADMIN_GETPOPUPDATALIST = SERVERURL + 'admin/popup/getPopUpDataList';

/**
 * 관리자 팝업관리 삭제
 */
export const ADMIN_DELETEPOPUPDATA = SERVERURL + 'admin/popup/deletePopUpData';

/**
 * 관리자 도입문의 현황 조회
 */
export const ADMIN_GETINTRODATALIST = SERVERURL + 'admin/intro/getIntroDataList';

/**
 * 관리자 도입문의 엑셀다운로드
 */
export const ADMIN_GETINTROEXCELFILEDOWN = SERVERURL + 'admin/intro/getIntroExcelFileDown';

/**
 * 관리자 도입문의 수정
 */
export const ADMIN_SETINTRODATA = SERVERURL + 'admin/intro/setIntroData';

/**
 * 관리자 도입문의 삭제
 */
export const ADMIN_DELETEINTRODATA = SERVERURL + 'admin/intro/deleteIntroData';

/**
* 관리자 미디어센터 광고 조회
*/
export const ADMIN_GETMGRADDATALIST = SERVERURL + 'admin/media/bbs/getMgrAdDataList';

/**
* 관리자 미디어센터 광고 추가 및 수정
*/
export const ADMIN_SETMGRADDATA = SERVERURL + 'admin/media/bbs/setMgrAdData';

/**
* 관리자 미디어센터 광고 삭제
*/
export const ADMIN_DELETEMGRADDATA = SERVERURL + 'admin/media/bbs/deleteMgrAdData';

/**
* 관리자 미디어센터 보도자료 조회
*/
export const ADMIN_GETMGRREPORTDATALIST = SERVERURL + 'admin/media/bbs/getMgrReportDataList';

/**
* 관리자 미디어센터 보도자료 추가 및 수정
*/
export const ADMIN_SETMGRREPORTDATA = SERVERURL + 'admin/media/bbs/setMgrReportData';

/**
* 관리자 미디어센터 보도자료 삭제
*/
export const ADMIN_DELETEMGRREPORTDATA = SERVERURL + 'admin/media/bbs/deleteMgrReportData';

/**
* 관리자 미디어센터 영상콘텐츠 조회
*/
export const ADMIN_GETMGRMEDIADATALIST = SERVERURL + 'admin/media/bbs/getMgrMediaDataList';

/**
* 관리자 미디어센터 영상콘텐츠 추가 및 수정
*/
export const ADMIN_SETMGRMEDIADATA = SERVERURL + 'admin/media/bbs/setMgrMediaData';

/**
* 관리자 미디어센터 영상콘텐츠 삭제
*/
export const ADMIN_DELETEMGRMEDIADATA = SERVERURL + 'admin/media/bbs/deleteMgrMediaData';