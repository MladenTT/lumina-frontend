import './TopBar.css'

const TopBar = () => {
  return (
    <div className="TopBar-container">
        <div className="TopBar-left">
            <p>
                <a href="/">+381(0)21 2964-327</a>
                (radnim danima od 09:00 do 18:00h)
            </p>
        </div>
        <div className="TopBar-right">
            <ul>
                <li><a href="#">Dostava</a></li>
                <li><a href="#">Nacini placanja</a></li>
                <li><a href="#">Prijava</a></li>
            </ul>
        </div>
  
    </div>
    );}

 export default TopBar;