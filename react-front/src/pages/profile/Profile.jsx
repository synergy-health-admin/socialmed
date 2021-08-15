import "./profile.css"
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import Topbar from "../../components/topbar/Topbar";

export default function Profile() {
    return (
        <>
            <Topbar/>
            <div className="profile">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src="assets/post/8.jpeg" alt="" />
                            <img className="profileUserImg" src="assets/person/zico.png" alt="" />                            
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Isaac Afara</h4>
                            <span className="profileInfoDesc">Hey!</span>
                        </div>

                    </div>
                    <div className="profileRightBottom">
                        <Feed/>
                        <Rightbar profile/>                          
                    </div>
                </div>
            </div>
        </>
    )
}
