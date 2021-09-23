import React, {useState, useEffect} from 'react';
import ChatListItem from '../ChatListItem/ChatListItem'
import Header from '../Header/Header';
import SearchIcon from '@material-ui/icons/Search';
import './sidebar.css'

const SideBar = () =>{
    const[chatlist, setChatList] = useState([{}, {}, {}, {}, {},{}, {}, {}, {}, {},{}, {}, {}, {}, {}])

    return(
        <>
            <div className="sidebar">
                <Header />

                <div className="search">
                    <div className="search-input">
                        <SearchIcon fontSise="small" style={{color:"#919191"}} />
                        <input type="search" placeholder="Procurar ou começar uma conversa" />
                    </div>
                </div>

                <div className="chatlist">
                    {/* loop utilizando o map */}
                    {chatlist.map((item, key) => <ChatListItem key={key}/>)}
                </div>
            </div>   
        </>
    )
}

export default SideBar;