import React, { Component, Fragment } from 'react';
import MediaSubLnb from './unit/MediaSubLnb';

// 보도자료
export default class MediaSub02 extends Component {
    constructor(props) {
        super(props);
        this.state = {

            TopLnb01:true,
            TopLnb02:false,

        }
    }

    handleTopClick = (type) => {

        if (type === '1') {
            this.setState({
                TopLnb01:true,TopLnb02:false,
            })
        }else if (type === '2') {
            this.setState({
                TopLnb01:false,TopLnb02:true,
            })
        }
    };

    render() {
        return (
            <Fragment>
                <MediaSubLnb
                    mediaSub01={this.props.mediaSub01}
                    mediaSub02={this.props.mediaSub02}
                    mediaSub03={this.props.mediaSub03}
                    mediaSub04={this.props.mediaSub04}
                    handleGnbMenu={this.props.handleGnbMenu}
                    Titletext03={this.props.Titletext03}
                />
                <div id="MediaSub02">
                    <div className="BG01"/>
                    <div className="BG02"/>
                    <div className="BG03"/>
                    <div className="TopBox h-box">
                        <div className={`TopLnb ${this.state.TopLnb01 ? 'on':''}`} onClick={()=>{this.handleTopClick('1');}}>Amaranth 10</div>
                        <div className="LineShort"/>
                        <div className={`TopLnb ${this.state.TopLnb02 ? 'on':''}`} onClick={()=>{this.handleTopClick('2');}}>CEO 칼럼</div>
                    </div>
                    {/* Amaranth 10 영역 */}
                    <ul className="ReportAllBox" style={{display:this.state.TopLnb01 ? '':'none'}}>
                        <li className="ReportBox">
                            <div className="Title h-box">
                                <p onClick={()=>{window.open('https://www.etnews.com/20211220000034');}}>[2021 하반기 인기상품]고객만족-더존비즈온/ERP/아마란스10</p>
                                <em className="ReportIcon" onClick={()=>{window.open('https://www.etnews.com/20211220000034');}}/>
                            </div>
                            <div className="ReportText01" onClick={()=>{window.open('https://www.etnews.com/20211220000034');}}>
                                아마란스10은 지금까지 경험하지 못했던 새로운 가치를 제공한다. 기업 내에서 단절되고 복잡하게 처리될 수밖에 없던 업무 절차가 간결해지고, 시간과 비용
                                효율성을 높일 수 있다. 클라우드, 인공지능(AI), 빅데이터 등 최신 기술이 적용으로 업무 오류가 사라지고 빠르고 정확한 업무가 가능해진다. 
                            </div>
                            <div className="ReportText02 h-box">
                                <div className="Name">전자신문</div><em>2021.12.21</em>
                            </div>
                        </li>
                        <li className="ReportBox">
                            <div className="Title h-box">
                                <p onClick={()=>{window.open('https://www.mk.co.kr/news/special-edition/view/2021/12/1138871/');}}>더존비즈온 ‘아마란스 텐’, 기업용 디지털플랫폼..업무효율 쑥</p>
                                <em className="ReportIcon" onClick={()=>{window.open('https://www.mk.co.kr/news/special-edition/view/2021/12/1138871/');}}/>
                            </div>
                            <div className="ReportText01" onClick={()=>{window.open('https://www.mk.co.kr/news/special-edition/view/2021/12/1138871/');}}>
                                아마란스 10은 그동안 ERP와 그룹웨어, 커뮤니케이션, 오피스 프로그램, 문서 중앙화 등 업무용 솔루션을 하나의 플랫폼에 완벽히 융합했다는 점에서 획기적인 
                                솔루션으로 평가받고 있다.
                            </div>
                            <div className="ReportText02 h-box">
                                <div className="Name">매일경제</div><em>2021.12.16</em>
                            </div>
                        </li>
                        <li className="ReportBox">
                            <div className="Title h-box">
                                <p onClick={()=>{window.open('http://www.kado.net/news/articleView.html?idxno=1101001');}}>디지털 비즈니스 해법 ‘아마란스 텐’ 기업경영 혁신 날개</p>
                                <em className="ReportIcon" onClick={()=>{window.open('http://www.kado.net/news/articleView.html?idxno=1101001');}}/>
                            </div>
                            <div className="ReportText01" onClick={()=>{window.open('http://www.kado.net/news/articleView.html?idxno=1101001');}}>
                                내부의 ‘사용자 경험’과 ‘직원 경험’이 곧 ‘고객 경험’이 되고 이들의 총합이 결국 성공적인 ‘디지털 전환’으로 이어진다는 것이다.
                                실제로 Amaranth 10은 업무에 필수적인 ERP와 그룹웨어,문서관리 기능을 통합해 기업이 디지털 전환을 실현하기 위한 새로운 가치를 만들어 냈다.
                            </div>
                            <div className="ReportText02 h-box">
                                <div className="Name">강원도민일보</div><em>2021.11.26</em>
                            </div>
                        </li>
                        <li className="ReportBox">
                            <div className="Title h-box">
                                <p onClick={()=>{window.open('https://www.inews24.com/view/1414209');}}>‘아마란스 텐’ 필두로 기업 DX 가속화 지원</p>
                                <em className="ReportIcon" onClick={()=>{window.open('https://www.inews24.com/view/1414209');}}/>
                            </div>
                            <div className="ReportText01" onClick={()=>{window.open('https://www.inews24.com/view/1414209');}}>
                                지용구 더존비즈온 솔루션사업부문 대표는 “비대면, 모바일 사업 환경의 3대 구성 요소인 솔루션과 하드웨어, 네트워크에 있어 전에 없던 DX 모델을 선보일 수 
                                있게 됐다”며 “이번 기회에 더 많은 기업이 DX를 경험하고 지속 가능한 성장을 이루길 기대한다”고 말했다.
                            </div>
                            <div className="ReportText02 h-box">
                                <div className="Name">마이뉴스24</div><em>2021.10.22</em>
                            </div>
                        </li>
                        <li className="ReportBox">
                            <div className="Title h-box">
                                <p onClick={()=>{window.open('http://www.kwnews.co.kr/nview.asp?aid=221102100001');}}>모든 업무 앱 하나로 오케이…기업용 솔루션 혁신 아이콘</p>
                                <em className="ReportIcon" onClick={()=>{window.open('http://www.kwnews.co.kr/nview.asp?aid=221102100001');}}/>
                            </div>
                            <div className="ReportText01" onClick={()=>{window.open('http://www.kwnews.co.kr/nview.asp?aid=221102100001');}}>
                                그동안 ERP, 그룹웨어, 커뮤니케이션, 오피스 프로그램, 문서 중앙화 등 업무용 솔루션이 하나로 통합되는 것은 기업용 애플리케이션의 오래된 숙원이자
                                과제였다. 이같은 이유로 이들을 하나의 플랫폼에 완벽히 통합한 Amaranth 10의 출시는 그 자체로 획기적이라 할 수 있다.
                            </div>
                            <div className="ReportText02 h-box">
                                <div className="Name">강원일보</div><em>2021.10.22</em>
                            </div>
                        </li>
                        <li className="ReportBox">
                            <div className="Title h-box">
                                <p onClick={()=>{window.open('http://www.taxtimes.co.kr/news/article.html?no=251770');}}>신개념 디지털 전환 패키지 ‘DX One Pack’ 출시</p>
                                <em className="ReportIcon" onClick={()=>{window.open('http://www.taxtimes.co.kr/news/article.html?no=251770');}}/>
                            </div>
                            <div className="ReportText01" onClick={()=>{window.open('http://www.taxtimes.co.kr/news/article.html?no=251770');}}>
                                더존비즈온이 플랫폼・모바일・통신이 융합된 신개념 디지털 전환(DX)패키지 ‘DX 원팩’을 출시한다고 1일 밝혔다. DX One Pack 프로모션은 기업이 디지털
                                전환을 쉽고 빠르게 경험할 수 있도록 더존비즈온의 올인원 디지털 비즈니스 플랫폼 ‘Amaranth 10’과…
                            </div>
                            <div className="ReportText02 h-box">
                                <div className="Name">세정신문</div><em>2021.10.01</em>
                            </div>
                        </li>
                        <li className="ReportBox">
                            <div className="Title h-box">
                                <p onClick={()=>{window.open('https://www.fnnews.com/news/202106281731271838');}}>"모든 업무 통합" 더존비즈온, ‘아마란스 10’ 출시</p>
                                <em className="ReportIcon" onClick={()=>{window.open('https://www.fnnews.com/news/202106281731271838');}}/>
                            </div>
                            <div className="ReportText01" onClick={()=>{window.open('https://www.fnnews.com/news/202106281731271838');}}>
                                기업의 디지털 전환을 돕는 신개념 ERP ‘아마란스 10’을 올해 주력사업으로 추진하고 있다. ‘아마란스 10’은 PC, 테블릿, 모바일 등 다양한 환경에서
                                업무를 처리할 수 있다. 즉 대면과 비대면 업무를 동시에 지원해 언제 어디서나 통합된 환경에서 업무 처리가 가능하다.
                            </div>
                            <div className="ReportText02 h-box">
                                <div className="Name">파이낸셜뉴스</div><em>2021.06.28</em>
                            </div>
                        </li>
                        <li className="ReportBox">
                            <div className="Title h-box">
                                <p onClick={()=>{window.open('https://www.mk.co.kr/news/special-edition/view/2021/06/571345/');}}>‘Amaranth 10’, 회사일을 앱 하나로…軍계약으로 입증된 철통보안</p>
                                <em className="ReportIcon" onClick={()=>{window.open('https://www.mk.co.kr/news/special-edition/view/2021/06/571345/');}}/>
                            </div>
                            <div className="ReportText01" onClick={()=>{window.open('https://www.mk.co.kr/news/special-edition/view/2021/06/571345/');}}>
                                ERP와 그룹웨어는 더존비즈온이 강력한 경쟁력을 보유한 분야다. 해당 분야 시장 선도 기업으로서 오랜 기간 축적해온 기술, 인력, 인프라스트럭처, 서비스
                                네트워크는 물론 구축과 운영 노하우에 이르기까지 더존비즈온 핵심 역량이 모두 아마란스 10에 집대성됐다.아마란스 10은 군본부와 계약을…
                            </div>
                            <div className="ReportText02 h-box">
                                <div className="Name">매일경제</div><em>2021.06.14</em>
                            </div>
                        </li>
                        <li className="ReportBox">
                            <div className="Title h-box">
                                <p onClick={()=>{window.open('https://www.joongang.co.kr/article/24054862');}}>더존비즈온, 그룹웨어에 ERP 묶은 ‘아마란스10’ 내놨다</p>
                                <em className="ReportIcon" onClick={()=>{window.open('https://www.joongang.co.kr/article/24054862');}}/>
                            </div>
                            <div className="ReportText01" onClick={()=>{window.open('https://www.joongang.co.kr/article/24054862');}}>
                                아마란스 10에는 클라우드, 인공지능, 빅데이터 등 최신 기술이 적용돼 업무 오류가 사라지고 빠르고 정확한 업무가 가능해진다. 대면 및 비대면 업무를
                                동시에 지원하기 때문에 언제 어디서나 통합된 환경에서 업무를 처리할 수 있는 것도 강점이다. 기업의 디지털 트랜스포메이션 역시 도울 수 있다는…
                            </div>
                            <div className="ReportText02 h-box">
                                <div className="Name">중앙일보</div><em>2021.05.11</em>
                            </div>
                        </li>
                    </ul>
                    {/* CEO 칼럼 영역 */}
                    <ul className="ReportAllBox" style={{display:this.state.TopLnb02 ? '':'none'}}>
                        <li className="ReportBox">
                            <div className="Title h-box">
                                <p onClick={()=>{window.open('http://www.tradetimes.co.kr/news/articleView.html?idxno=10721');}}>ESG경영, 디지털 전환에서 답을 찾다</p>
                                <em className="ReportIcon" onClick={()=>{window.open('http://www.tradetimes.co.kr/news/articleView.html?idxno=10721');}}/>
                            </div>
                            <div className="ReportText01" onClick={()=>{window.open('http://www.tradetimes.co.kr/news/articleView.html?idxno=10721');}}>
                                디지털 전환은 ESG 경영의 시작점과도 같다. 디지털 전환 핵심 기술인 클라우드로 친환경 에너지를 관리하고, 탄소배출을 감소시키거나 폐기물 처리에
                                로봇을 이용하는 등 환경 분야에서의 ICT 이용은 4차 산업혁명 시대의 큰 흐름 중 하나기도 하다.
                            </div>
                            <div className="ReportText02 h-box">
                                <div className="Name">전자신문</div><em>2021.12.21</em>
                            </div>
                        </li>
                        <li className="ReportBox">
                            <div className="Title h-box">
                                <p onClick={()=>{window.open('http://www.ceopartners.co.kr/news/articleView.html?idxno=12485');}}>디지털 전환시대, ‘애자일’조직이 답이다</p>
                                <em className="ReportIcon" onClick={()=>{window.open('http://www.ceopartners.co.kr/news/articleView.html?idxno=12485');}}/>
                            </div>
                            <div className="ReportText01" onClick={()=>{window.open('http://www.ceopartners.co.kr/news/articleView.html?idxno=12485');}}>
                                기업에게 조직문화는 매우 중요한 의미를 갖는데, 디지털 전환 시대인 지금도 기업의 조직문화가 가진 가치는 변하지 않는다. 전 세계적인 팬데믹 상황을
                                보더라도 위기 상황을 유연하게 극복하거나 재빠르고 유연한 조직문화가 상상 이상의 큰 힘을 발휘했다.
                            </div>
                            <div className="ReportText02 h-box">
                                <div className="Name">CEO&amp;</div><em>2021.11.30</em>
                            </div>
                        </li>
                        <li className="ReportBox">
                            <div className="Title h-box">
                                <p onClick={()=>{window.open('http://www.tradetimes.co.kr/news/articleView.html?idxno=10430');}}>복잡한 자동화의 먼 미래 AI, 단순한 자동화의 가까운 미래 RPA</p>
                                <em className="ReportIcon" onClick={()=>{window.open('http://www.tradetimes.co.kr/news/articleView.html?idxno=10430');}}/>
                            </div>
                            <div className="ReportText01" onClick={()=>{window.open('http://www.tradetimes.co.kr/news/articleView.html?idxno=10430');}}>
                                속도와 편의, 효율이라는 세 가지 속성은 기업의 디지털 전환을 가속화하는 핵심 요소다. 반면, 조직이 성장하는 과정에서 쌓이게 되는
                                실효성 없는 단순 반복적 업무는 디지털 전환을 방해하는 요소가 된다.
                            </div>
                            <div className="ReportText02 h-box">
                                <div className="Name">무역경제신문</div><em>2021.11.13</em>
                            </div>
                        </li>
                        <li className="ReportBox">
                            <div className="Title h-box">
                                <p onClick={()=>{window.open('http://www.ceopartners.co.kr/news/articleView.html?idxno=12412');}}>디지털 전환 시대의 도구와 기술</p>
                                <em className="ReportIcon" onClick={()=>{window.open('http://www.ceopartners.co.kr/news/articleView.html?idxno=12412');}}/>
                            </div>
                            <div className="ReportText01" onClick={()=>{window.open('http://www.ceopartners.co.kr/news/articleView.html?idxno=12412');}}>
                                도구에 대한 접근성이 좋아진 디지털 전환 시대에 기술의 활용은 이제 기업의 성패를 좌우하는 수준에까지 이르렀다. 기업의 성공을 위해 좋은 도구와 좋은
                                기술을 계속 업그레이드하는 것이 필요하다. 이때 필요한 것이 ‘지식’이다. 단지 알고 있는 상태를 넘어 경험을 통해 이해하는 상태, 언제든지…
                            </div>
                            <div className="ReportText02 h-box">
                                <div className="Name">CEO&amp;</div><em>2021.10.28</em>
                            </div>
                        </li>
                        <li className="ReportBox">
                            <div className="Title h-box">
                                <p onClick={()=>{window.open('http://www.tradetimes.co.kr/news/articleView.html?idxno=6363');}}>혁신 SW가 디지털 대전환 이끈다</p>
                                <em className="ReportIcon" onClick={()=>{window.open('http://www.tradetimes.co.kr/news/articleView.html?idxno=6363');}}/>
                            </div>
                            <div className="ReportText01" onClick={()=>{window.open('http://www.tradetimes.co.kr/news/articleView.html?idxno=6363');}}>
                                기업의 지속 가능한 성장은 디지털 전환에 있으며 그 핵심은 ‘기업, 디지털, 혁신 SW’이다. 그렇다면 디지털 전환을 위한 혁신 SW란 무엇일까? 클라우드와
                                모바일 서비스가 확산할수록 사람들은 하나의 서비스에서 모든 것을 해결하고 싶어 한다. 이는 융합과 연결, 공유로 표현할 수 있다.
                            </div>
                            <div className="ReportText02 h-box">
                                <div className="Name">무역경제신문</div><em>2021.09.18</em>
                            </div>
                        </li>
                        <li className="ReportBox">
                            <div className="Title h-box">
                                <p onClick={()=>{window.open('http://news.heraldcorp.com/view.php?ud=20210826000414');}}>디지털전환 선두 기업되려면 혁신SW가 핵심 비결</p>
                                <em className="ReportIcon" onClick={()=>{window.open('http://news.heraldcorp.com/view.php?ud=20210826000414');}}/>
                            </div>
                            <div className="ReportText01" onClick={()=>{window.open('http://news.heraldcorp.com/view.php?ud=20210826000414');}}>
                                디지털전환이란 디지털 기반으로 기업 전반을 변화시키는 경영전략이다. 일반적으로 클라우드 컴퓨팅, 빅데이터 솔루션, 인공지능(AI), 사물인터넷(IoT)
                                등 정보통신기술(ICT)을 플랫폼으로 활용해 기존의 전통적인 운영 방식과 서비스를 혁신하는 것을 의미한다. 디지털전환의 효과는 이미 글로벌…
                            </div>
                            <div className="ReportText02 h-box">
                                <div className="Name">헤럴드경제</div><em>2021.08.26</em>
                            </div>
                        </li>
                        <li className="ReportBox">
                            <div className="Title h-box">
                                <p onClick={()=>{window.open('http://www.ceopartners.co.kr/news/articleView.html?idxno=12148');}}>‘아마란스 10’으로 글로벌 ERP 새로운 표준 만든다</p>
                                <em className="ReportIcon" onClick={()=>{window.open('http://www.ceopartners.co.kr/news/articleView.html?idxno=12148');}}/>
                            </div>
                            <div className="ReportText01" onClick={()=>{window.open('http://www.ceopartners.co.kr/news/articleView.html?idxno=12148');}}>
                                국내 대표 ICT 기업 더존비즈온이 ERP, 그룹웨어, 문서관리 기능이 하나로 통합된 신개념 솔루션 ‘아마란스 10’을 새롭게 출시하며 글로벌 시장 진출
                                초읽기에 들어갔다. ‘아마란스 10’은 클라우드 기반 ERP를 바탕으로 KMS, 협업 메신저, 오피스 프로그램, 문서관리 프로그램 등 기업에게 필요한…
                            </div>
                            <div className="ReportText02 h-box">
                                <div className="Name">CEO&amp;</div><em>2021.07.28</em>
                            </div>
                        </li>
                        <li className="ReportBox">
                            <div className="Title h-box">
                                <p onClick={()=>{window.open('https://www.joongang.co.kr/article/24101980#home');}}>기업에 시간을 팝니다</p>
                                <em className="ReportIcon" onClick={()=>{window.open('https://www.joongang.co.kr/article/24101980#home');}}/>
                            </div>
                            <div className="ReportText01" onClick={()=>{window.open('https://www.joongang.co.kr/article/24101980#home');}}>
                                기업에게 시간은 가장 큰 비용입니다. 만약에 시간을 살 수 있으면 사야죠. 아마란스 10은 시간을 살 수 있는 도구라고 말씀드리고 싶습니다. 우리가 어렸을 때
                                봤던 알라딘의 요술 램프 요정 지니, 아서 왕의 전설 속 멀린, 아이언맨의 자비스 같은 도구를 특별한 사람이 아니라 모두가 쓰게 하는 시대를…
                            </div>
                            <div className="ReportText02 h-box">
                                <div className="Name">중앙일보</div><em>2021.07.09</em>
                            </div>
                        </li>
                        <li className="ReportBox">
                            <div className="Title h-box">
                                <p onClick={()=>{window.open('http://www.dt.co.kr/contents.html?article_no=2021070202100531650002');}}>주요 기업용 솔루션 하나로 통합…업무혁신 쓰면서 체험하세요</p>
                                <em className="ReportIcon" onClick={()=>{window.open('http://www.dt.co.kr/contents.html?article_no=2021070202100531650002');}}/>
                            </div>
                            <div className="ReportText01" onClick={()=>{window.open('http://www.dt.co.kr/contents.html?article_no=2021070202100531650002');}}>
                                4차 산업혁명이 현실화되고 5G를 기반으로 모바일 플랫폼이 빠르게 발전하는 데 발맞춰 기업용 애플리케이션도 혁신해야 한다는 것. 회사는 인사·회계·물류
                                등의 업무가 기능적으로 프로세스화된 ERP와, 협업·소통을 위한 그룹웨어를 연동하는 데서 그치지 않고 융합하자는 결론을 내렸다.
                            </div>
                            <div className="ReportText02 h-box">
                                <div className="Name">디지털타임스</div><em>2021.07.01</em>
                            </div>
                        </li>
                    </ul>

                    {/* 페이징 영역 (데이터 없을 때 1번 페이지만 표시)*/}
                    <div className='paging h-box'>
                        <div className='first'/><div className='prev'/>
                        <div className='numBox h-box'>
                            <div className='num on'>1</div>
                            <div className='num'>2</div>
                            <div className='num'>3</div>
                            <div className='num'>4</div>
                            <div className='num'>5</div>
                            <div className='num'>6</div>
                            <div className='num'>7</div>
                            <div className='num'>8</div>
                            <div className='num'>9</div>
                            <div className='num'>10</div>
                        </div>
                        <div className='next'/><div className='last'/>
                    </div>
                </div>
            </Fragment>
        );
    }
}


