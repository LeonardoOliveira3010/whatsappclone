import './chatlistitem.css'

const ChatListItem = () =>{
    return (
        <>
            <div className='chatListItem'>
                <img className="chatList-avatar" src="./assets/user.jpeg" alt="" srcset="" />
                <div className="chatListItem-lines">
                    <div className="chatListItem-line">
                        <div className="chatList -name">Leonardo Santos</div>
                        <div className="chatList-date">09:47</div>
                    </div>

                    <div className="chatListItem-line">
                        <div className="chatListItem-lastmsg">
                            <p>Olá, tudo bem?</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatListItem;