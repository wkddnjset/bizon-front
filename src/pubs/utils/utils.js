

import $ from 'jquery';

let isScrolling = false;
let timer;
const func = {
    /**
     * 시작지점 부터 특정 구간길이동안 1에서 점점 0으로 작아짐
     * @param {*} position : 현재 구간 위치
     * @param {*} intStartPosi : 사리지기 시작 지점
     * @param {*} intZeroLength : 완전히 사라지기 까지의 구간 길이
     * @returns 1 -> 0
     */
    getOneToZero: function (position, intStartPosi, intZeroLength) {
        let result = 1;
        if (position > intStartPosi) {
            let intCurLength = position - intStartPosi;

            result = 1 - (intCurLength / intZeroLength);
            result = result < 0 ? 0 : result;
        }

        return result;
    },

    /**
     * 시작지점부터 특정 구간길이동안 0에서 점점 1로 커짐
     * @param {*} position : 현재 구간 위치
     * @param {*} intStartPosi : 사리지기 시작 지점
     * @param {*} intZeroLength : 완전히 사라지기 까지의 구간 길이
     * @returns 0 -> 1
     */
    getZeroToOne: function (position, intStartPosi, intZeroLength) {
        return 1 - this.getOneToZero(position, intStartPosi, intZeroLength);
    },

    /**
     * 최대값에서 1로 점차 변경
     * @param {*} position : 현재 구간 위치
     * @param {*} intStartPosi : 시작 position 지점
     * @param {*} intLength : 점점 작아지는 구간길이
     * @param {*} intSize : 최대값
     */
    getSmallScale: function (position, intStartPosi, intLength, intSize) {
        let result = 1;

        if (position > intStartPosi && position <= intStartPosi + intLength) {
            let intTotalLength = (intStartPosi + intLength) - position;
            result = intSize * (intTotalLength / intLength);

            if (result < 1) {
                result = 1
            }
        }

        return result;
    },

    /**
     * 상단값이 점점 나타나게
     * @param {*} position : 현재 구간 위치
     * @param {*} sectionStyle : 기존 스타일
     * @param {*} intLength : 점점 작아지는 구간길이
     */
    getTopFadeOut: function (position, sectionStyle, intLength) {
        if (position < intLength) {
            sectionStyle.transform = `translateY(${intLength - position}px)`;
            sectionStyle.opacity = this.getZeroToOne(position, 0, intLength);
        }
        return sectionStyle
    },

    /**
     * 상단값이 올라가며 점점 나타나게
     * @param {*} position : 현재 구간 위치
     * @param {*} sectionStyle : 기존 스타일
     * @param {*} intLength : 점점 작아지는 구간길이
     */
    getTopScrollFadeOut: function (position, sectionStyle, intLength) {
        if (position < intLength) {
            sectionStyle.transform = `translateY(${intLength - position}px)`;
            sectionStyle.opacity = this.getZeroToOne(position, 0, intLength);
        }
        return sectionStyle
    },

    /**
     * 하단이 점점 사라지게
     * @param {*} position : 현재 구간 위치
     * @param {*} heightLength : Section 전체 높이값
     * @param {*} sectionStyle : 기존 스타일 정보
     * @param {*} intTransLength : 위로 움직이는 구간 길이
     * @param {*} intFadeInLength : 사라지기 시작하는 구간 길이
     */
    getBottomFadeIn: function (position, heightLength, sectionStyle, intTransLength, intFadeInLength) {
        // section 전환 시 부드럽게 전환 테스트 
        if (position >= (heightLength - intTransLength) && position < heightLength) {
            // 세션을 상위로 이동
            sectionStyle = {
                height: window.innerHeight,
                transform: `translateY(${-(position - (heightLength - intTransLength)) * 2}px)`,
                opacity: 1,
            };

            // position 100 남았을 때 점점 흐려지게
            if (position >= (heightLength - intFadeInLength) && position < heightLength) {
                sectionStyle.opacity = (heightLength - position) / intFadeInLength;
            }
        }

        return sectionStyle;
    },

    /**
     * %를 position 으로 변환
     * @param {*} heightLength : Section 전체 높이값
     * @param {*} intPer : 퍼센트 위치
     */
    getPerToPosi: function (heightLength, intPer) {
        return heightLength / 100 * intPer;
    },


    /**
     * 상단 여백을 주기위한 Px길이
     * @param {*} intWindowHeigh : 윈도우 창 높이값
     * @param {*} heightLength : Section 전체 높이값
     */
    getTopPx: function (intWindowHeigh, heightLength) {
        // 여백 계산 : 윈도우 높이값 - Section 높이값
        let intHeightMargin = intWindowHeigh - heightLength;

        // 여백이 0보다 클 경우 여백의 반을 리턴
        // 여백이 0보다 작을 경우 0을 리턴
        return intHeightMargin > 0 ? (intHeightMargin) / 2 : 0;
    },


    /**
     * 특정 구간 이상일 경우부터 position 차액 리턴
     * @param {*} position : 현재 구간 위치
     * @param {*} intPosi : 특정구간
     */
    getOverPosi: function (position, intPosi) {
        if (position >= intPosi) {
            return position - intPosi;
        } else {
            return 0;
        }
    },


    /**
     * 특정 구간 이하일 경우부터 position 리턴
     * @param {*} position : 현재 구간 위치
     * @param {*} intPosi : 특정구간
     */
    getUnderPosi: function (position, intPosi) {
        if (position < intPosi) {
            return position;
        } else {
            return intPosi;
        }
    },

    /**
     * 점점 나타나다가 흐려지기
     * 점점 진해지는 구간 : 0 > 1
     * 유지되는 구간 : 1
     * 흐려지는 구간 : 1 > 0
     * @param {*} position : 현재 구간 위치
     * @param {*} intStartPosi : 시작 position 지점
     * @param {*} intViewLength : 점점 진해지는 구간길이
     * @param {*} intNoneLength : 진한게 유지되는 구간
     * @param {*} intUnViewLength : 흐려지는 구간길이
     */
    getViewOpacity: function (position, intStartPosi, intViewLength, intNoneLength, intUnViewLength) {
        let result = 0;
        if (position > intStartPosi && position <= (intStartPosi + intViewLength + intNoneLength + intUnViewLength)) {
            // 전체길이 --> 0;
            let intTotalLength = (intStartPosi + intViewLength + intNoneLength + intUnViewLength) - position;

            if (intTotalLength > intViewLength) {
                // 진해지게
                result = 1 - ((intTotalLength - intUnViewLength - intNoneLength) / intViewLength);
            } else if (intTotalLength > intViewLength + intNoneLength) {
                // 진하게 유지
                result = 1
            } else {
                // 흐려지게
                result = intTotalLength / intViewLength;
            }
        }

        result = result > 1 ? 1 : result;
        return result;
    },


    /**
     * 구간내 진입 여부
     * 구간 내 진입 : 1
     * 구간 외 : 0
     * @param {*} position : 현재 구간 위치
     * @param {*} intStartPosi : 시작 position 지점
     * @param {*} intEndPosi : 종료 position 지점
     */
    getPositionCheck: (position, intStartPosi, intEndPosi) => {
        let result = 0;

        if (position >= intStartPosi && position < intEndPosi) {
            result = 1;
        }

        return result;
    },

    /**
     * 구간내 진입 여부
     * 구간 내 진입 : 1
     * 구간 외 : 0
     * @param {*} scrollPercent : 현재 구간 퍼센트 위치
     * @param {*} intTotScrollHeight : 전체 스크롤 높이 
     * @param {*} intStartPosi : 시작 position 지점
     * @param {*} intEndPosi : 종료 position 지점
     */
    getPercentCheck: (scrollPercent, intTotScrollHeight, intStartPosi, intEndPosi) => {
        let position = scrollPercent * intTotScrollHeight / 100;
        return this.func.getPositionCheck(position, intStartPosi, intEndPosi);
    },

    /**
     * 스크롤의 특정위치로 지정한 속도동안 이동
     * ex) scrollTop : 1300, duration: 1000 > 스크롤 1300위치까지 1초동안 이동
     * ex) scrollTop : 1300, duration: 5000 > 스크롤 1300위치까지 5초동안 이동
     * @param {*} scrollTop 스크롤 높이 위치
     * @param {*} duration 이동 속도
     */
    setScroll:async(scrollTop,duration)=>{
        let result = await new Promise((resolve)=>{
            if(!isScrolling){
                isScrolling = true;
                $('#container').on('scroll touchstart touchmove touchend mousewheel focus', function(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    return false;
                });
                $('.downScroll, .upScroll').on('click', function(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    return false;
                });
                $('#container').animate({ scrollTop: scrollTop }, duration,'',()=>{
                    isScrolling = false;
                    $('#container').off('scroll touchstart touchmove touchend mousewheel');
                    $('.downScroll, .upScroll').off('click');
                    resolve(true);
                });
            }
        })
        
        return result;
    },

    /**
     * 메인 스크롤 애니메이션 이벤트를 취소하고 상단으로 이동하는 이벤트
     * @returns 
     */
     setMainScrollTop: async () => {
        let result = await new Promise((resolve) => {
            $('#container').stop();
            isScrolling = false;
            $('#container').off('scroll touchstart touchmove touchend mousewheel');
            resolve();
        })
        return result;
    },

    /**
     * 서브 스크롤 애니메이션 이벤트를 취소하고 상단으로 이동하는 이벤트
     * @returns 
     */
    setSubScrollTop: async () => {
        let result = await new Promise((resolve) => {
            $('#container').stop().scrollTop(0).animate({ scrollTop: 0 }, () => {
                isScrolling = false;
                $('#container').off('scroll touchstart touchmove touchend mousewheel');
                resolve(true);
            })
        })
        return result;
    },

    /**
     * 세로축 스크롤 이동 방향
     * @param {*} beforeScroll 이전 스크롤 높이 위치
     * @param {*} afterScroll 자금 스크롤 높이 위치
     * 위로 이동 : -1
     * 정지 : 0
     * 아래로 이동 : 1
     */
    getScrollMoveY: (beforeScroll, afterScroll) => {
        let result = beforeScroll - afterScroll;
        return result > 0 ? -1 : result < 0 ? 1 : 0;
    },

    /**
     * 타이머 사용
     * 타이머 가 종료된후, callback 이벤트 호출
     * @param {*} callback 
     * @param {*} time 
     */
    setScrollTime:(callback,time)=>{
        timer = setTimeout(()=>{
            callback();
        },time);
    },

    /**
     * 사용자 스크롤 종료확인을 위한 이벤트
     * 스크롤 이벤트에서 호출
     * 계속 스크롤 중일경우, 타이머 초기화
     * 스크롤 종료후 설정 time이 지나면 callback 이벤트 호출
     * @param {*} callback 
     * @param {*} time 
     */
    endScroll:(callback,time)=>{
        if(timer){
            clearTimeout(timer);
        }
        func.setScrollTime(callback,time);
    }

}

export default func;