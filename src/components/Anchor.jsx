import "../styles/Anchor.css"

const MoveToTop = () => {
    // top:0 >> 맨위로  behavior:smooth >> 부드럽게 이동할수 있게 설정하는 속성
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };


function Anchor(){
    return(
        <div>
            <div className="anchor" onClick={MoveToTop} style={{cursor : "pointer"}}>맨 위로</div>
        </div>
    )
}

export default Anchor;