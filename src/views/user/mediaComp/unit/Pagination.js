import React, { Component, Fragment } from 'react';
import "../../../../www/css/slick.scss";
import "../../../../www/css/slick-theme.scss";


export default class Pagination extends Component {
  constructor(props) {
    super(props);

    this.drawPageStartNum = 1; // 페이지 번호 생성할 때 시작 번호
    this.lastPageNumber = 1;   // 조회 된 데이터 기준으로 마지막 페이지 번호
    this.maxDisplayPageNum = 10; // 한번에 표현되는 페이지 번호 [ 1 2 3 4 .... 10 ]
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    // 페이지 설정 ( 기본적으로 최대 10개 만 보여준다 ) , 1 ~ 10 ,  11 ~ 20
    let mSize = Math.floor(this.props.totalCount / this.props.pageSize);
    let dSize = this.props.totalCount % this.props.pageSize > 0 ? 1 : 0;

    this.lastPageNumber = mSize + dSize; // 마지막 페이지 정보

    if (this.props.searchPage % this.maxDisplayPageNum === 0) {
      this.drawPageStartNum = this.props.searchPage;
    }

    let pageArr = [];
    for (let i = this.drawPageStartNum; i <= this.lastPageNumber; i++) {
      pageArr.push(i);
      if (i % 10 === 0) {
        break;
      }
    }

    let pageContents = pageArr.map((data, idx) => {
      return (
        <div key={data}
          className={data === this.props.searchPage ? 'num on' : 'num'}
          onClick={this.props.pageClick.bind(this, data)}>
          {data}
        </div>
      )
    });

    return (
      <Fragment>
        <div className='paging h-box'>
          <div className='first' onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.props.arrowPageClick('first'); }} />
          <div className='prev' onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.props.arrowPageClick('prev'); }} />
          <div className='numBox h-box'>
            {pageContents}
          </div>
          <div className='next' onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.props.arrowPageClick('next'); }} />
          <div className='last' onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.props.arrowPageClick('last'); }} />
        </div>
      </Fragment>
    );
  }
}