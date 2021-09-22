import './sidebar.css'
import Header from '../Header/Header';
import SearchIcon from '@material-ui/icons/Search';

const SideBar = () =>{
    return(
        <>
            <div className="sidebar">
                <Header />

                <div className="search">
                    <div className="search-input">
                        <SearchIcon fontSise="small" />
                        <input type="search" placeholder="Procurar ou começar uma conversa" />
                    </div>
                </div>

                <div className="chatlist">
            
                </div>
            </div>
        </>
    )
}

export default SideBar;