import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import "./listItem.scss"

const ListItem = () => {
    return (
        <div className="listItem">
            <img src="https://images.indianexpress.com/2019/03/neo-matrix_759.jpg" alt="" />
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow/>
                    <Add/>
                    <ThumbUpAltOutlined/>
                    <ThumbDownAltOutlined/>
                </div>
            </div>
        </div>
    )

}    
export default ListItem
