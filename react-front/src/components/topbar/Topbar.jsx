import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons"

export default function Topbar(){
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Berean Hub</span>
            </div>

            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="Find friends, posts or videos" className="searchInput"/>
                </div>
            </div>
            
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Home</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                {/* ICONS */}
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person className="topbarIconSpec"/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat className="topbarIconSpec"/>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications className="topbarIconSpec"/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                {/* PROFILE PIC */}
                <img src="/assets/person/zico.png" alt="" className="topbarImg" />
            </div>
        </div>
    )
}