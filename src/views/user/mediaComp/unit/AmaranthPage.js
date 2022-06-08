import React, { Component, Fragment } from 'react';

import * as HttpUtils from "../../../common/js/HttpUtils";
import * as ApiUrl from '../../../context/BackEndProtocol';
import Pagination from './Pagination';

export default class AmaranthPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dataList: [],
      searchPage: 1,
      pageSize: 10,
      totalCount: 0,
    }

    this.lastPageNumber = 1;   // 조회 된 데이터 기준으로 마지막 페이지 번호
  }

  componentDidMount() {
    //전체 목록 조회
    this.getReportList();
  }

  getReportList = () => {
    const param = {
      searchPage: 1,
      pageSize: this.state.pageSize
    };

    HttpUtils.callNonAuthPostMethod(ApiUrl.USER_GETREPORTAMARANTHLIST, param).then((jsonObj) => {
      this.setState({
        dataList: jsonObj.dataList,
        searchPage: jsonObj.pagePosition,
        pageSize: jsonObj.pageSize,
        totalCount: jsonObj.totalCount
      }, () => {
        let mSize = Math.floor(this.state.totalCount / this.state.pageSize);
        let dSize = this.state.totalCount % this.state.pageSize > 0 ? 1 : 0;

        this.lastPageNumber = mSize + dSize; // 마지막 페이지 정보
      });
    }).catch(e => console.log(e));
  }

  pageClick(currentPos) {
    const param = {
      searchPage: currentPos,
      pageSize: this.state.pageSize,
    }

    HttpUtils.callNonAuthPostMethod(ApiUrl.USER_GETREPORTAMARANTHLIST, param).then((jsonObj) => {
      this.setState({
        dataList: jsonObj.dataList,
        searchPage: currentPos,
        pageSize: jsonObj.pageSize,
        totalCount: jsonObj.totalCount
      });
    }).catch(e => console.log(e));
  }

  arrowPageClick(div) {
    let searchPageNum = 0;
    if (div === 'prev') {
      searchPageNum = this.state.searchPage - 1;
      if (searchPageNum <= 0) {
        // alert('첫번째 페이지입니다');
        return;
      }
    } else if (div === 'next') {
      searchPageNum = this.state.searchPage + 1;
      if (searchPageNum > this.lastPageNumber) {
        // alert('마지막 페이지입니다');
        return;
      }
    } else if (div === 'first') {
      searchPageNum = 1;
      if (searchPageNum === this.state.searchPage) {
        //     alert('마지막 페이지입니다');
        return;
      }
    } else if (div === 'last') {
      searchPageNum = this.lastPageNumber;
      if (searchPageNum === this.state.searchPage) {
        //     alert('마지막 페이지입니다');
        return;
      }
    } else {
      alert('잘못된 파라미터 정보입니다');
      return;
    }

    const param = {
      searchPage: searchPageNum,
      pageSize: this.state.pageSize,
    }

    HttpUtils.callNonAuthPostMethod(ApiUrl.USER_GETREPORTAMARANTHLIST, param).then((jsonObj) => {
      this.setState({
        dataList: jsonObj.dataList,
        searchPage: searchPageNum,
        pageSize: jsonObj.pageSize,
        totalCount: jsonObj.totalCount,
      });
    }).catch(e => console.log(e));
  }

  openWin(url, seq) {
    HttpUtils.callNonAuthPostMethod(ApiUrl.USER_SET_REPORT_COUNT, { reportSeq: seq }).catch(e => console.error(e));
    window.open(url);
  }

  render() {
    return (
      <Fragment>
        <ul className="ReportAllBox">
          {this.state.dataList && this.state.dataList.map((data, idx) => (
            <li className="ReportBox" key={'am_' + idx}>
              <div className="Title h-box">
                <p onClick={() => { this.openWin(data.reportUrl, data.reportSeq); }}>{data.reportTitle}</p>
                <em className="ReportIcon" onClick={() => { this.openWin(data.reportUrl, data.reportSeq); }} />
              </div>
              <div className="ReportText01" onClick={() => { this.openWin(data.reportUrl, data.reportSeq); }}>
                {data.reportContents}
              </div>
              <div className="ReportText02 h-box">
                <div className="Name">{data.reportSource}</div><em>{data.reportRegDt}</em>
              </div>
            </li>
          ))}
        </ul>
        <Pagination
          pageClick={this.pageClick.bind(this)}
          arrowPageClick={this.arrowPageClick.bind(this)}
          searchPage={this.state.searchPage}
          pageSize={this.state.pageSize}
          totalCount={this.state.totalCount}
        />
      </Fragment>
    );
  }
}