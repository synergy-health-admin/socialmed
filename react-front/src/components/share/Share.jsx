import "./share.css"
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons"

export default function Share() {
    return (
        <div className="share" >
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="/assets/person/zico.png" alt=""/>
                    <input placeholder="What's on your mind Isaac?" type="text" className="shareInput"/>
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        
                        <div className="shareOption">
                            <PermMedia htmlColor="purple" className="shareIcon"/>
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
                        
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        
                        <div className="shareOption">
                            <Room htmlColor="grey" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>

                        <div className="shareOption">
                            <EmojiEmotions htmlColor="brown" className="shareIcon" />
                            <span className="shareOptionText">Feeling</span>
                        </div>

                    </div>
                    <button className="shareButton"> Share </button>
                </div>
            </div>
        </div>
    )
}
