import "../styles/Filter.scss"
import checkIcon from "../assets/images/check-icon.svg"
import dropDown from "../assets/images/dropdown.svg"
import dropUp from "../assets/images/dropup.svg"





function Filter() {

  const comingSoon = () => {
    window.alert("📢 필터 서비스는 곧 개시할 예정입니다.")
  }

    return (
      <div className="filter-container" onClick={comingSoon}>
        <div className="filter-dropbox">
            <div className="filter-title">
              📰 언론 <img src={dropUp} />
            </div>
            <div className="filter-media-companys">
              <div className="company" id="companyAll"><img src={checkIcon}/>언론 전체 보기</div>
              <div className="company"><div className="dots" style={{background : '#2B65BC'}}></div>Ruliweb</div>
              <div className="company"><div className="dots" style={{background : '#66A500'}}></div>Inven</div>
              <div className="company"><div className="dots" style={{background : '#921D1D'}}></div>GameMeca</div>
              <div className="company"><div className="dots" style={{background : '#E5D648'}}></div>ThisIsGame</div>
            </div>
        </div>
        <div className="filter-dropbox" style={{height: '52px'}}>
            <div className="filter-title">
            🏢 게임사 <img src={dropDown} />
            </div>
        </div>
        <div className="filter-dropbox" style={{height: '52px'}}>
            <div className="filter-title">
            ✒ 토픽 <img src={dropDown} />
            </div>
        </div>
      </div>
    );
  }

export default Filter;