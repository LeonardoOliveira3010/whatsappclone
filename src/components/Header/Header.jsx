import './header.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Header = () =>{
    return (
        <>
            <header>
                <img className="user" src="/assets/user.jpeg" alt="user" />
                <div className="header-button">
                <div className="header-btn">
                    <DonutLargeIcon style={{color:"#919191"}} />
                </div>

                <div className="header-btn">
                    <ChatIcon style={{color:"#919191"}} />
                </div>

                <div className="header-btn">
                    <MoreVertIcon style={{color:"#919191"}} />
                </div>

                </div>
            </header>
        </>
    )   
}

export default Header;