
const jsUtils = {

    /**
     * 메뉴 명칭 조회
     * @param {메뉴 별 구분 값} serviceDiv 
     * @param {} pageNum 
     */
    getSubMenuText: (serviceDiv, pageNum) => {

        if(serviceDiv === 'brand') 
        {
            switch(pageNum) {
                case '1':
                    return '새롭게 정의하다';
                case '2':
                    return '브랜드 스토리';
                case '3':
                    return 'BI';
                default:
                    return 'ERROR';
            }
        }
        else if(serviceDiv === 'service') 
        {
            switch(pageNum) {
                case '1':
                    return 'For Me(임직원업무관리)';
                case '2':
                    return '그룹웨어';
                case '3':
                    return 'ERP(회계관리)';
                case '4':
                    return 'ERP(인사관리)';
                case '5':
                    return 'ERP(편의기능)';
                case '6':
                    return '문서관리(ONEFFICE)';
                case '7':
                    return '문서관리(ONECHAMBER)';
                case '8':
                    return '모바일';
                default:
                    return 'ERROR';
            }
        }
        else if(serviceDiv === 'introduction') 
        {
            switch(pageNum) {
                case '1':
                    return '서비스 유형';
                case '2':
                    return '요금안내';
                case '3':
                    return '도입문의';
                default:
                    return 'ERROR';
            }
        }
        else if(serviceDiv === 'media') 
        {
            switch(pageNum) {
                case '1':
                    return '광고';
                case '2':
                    return '보도자료';
                case '3':
                    return '영상';
                default:
                    return 'ERROR';
            }
        }
        else if(serviceDiv === 'terms') 
        {
            switch(pageNum) {
                case '1':
                    return '개인정보처리방침';
                case '2':
                    return '이용약관';
                case '3':
                    return '마케팅 수신동의';
                default:
                    return 'ERROR';
            }
        }

    }
}

export default jsUtils;
