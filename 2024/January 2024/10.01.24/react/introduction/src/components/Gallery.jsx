import { useState } from "react"
import "./Gallery.css";

function Gallery(){
    const img1 = "https://cdn.pixabay.com/photo/2015/12/25/06/32/barn-owl-1107397_1280.jpg";
    const img2 = "https://cdn.pixabay.com/photo/2017/11/30/11/57/barn-owl-2988291_1280.jpg";
    const img3 = "https://cdn.pixabay.com/photo/2016/08/07/16/45/owl-1576572_1280.jpg";
    const img4 = "https://cdn.pixabay.com/photo/2016/11/21/12/29/owl-1845060_1280.jpg";
    const [imgUrl, setUrl] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/FIA_F1_Austria_2022_Nr._16_Leclerc.jpg/1280px-FIA_F1_Austria_2022_Nr._16_Leclerc.jpg")
    return (
        <div>
            <div className="mainImg">
                <img src={imgUrl} alt="" />
            </div>
            <div className="images">
                <img src={img1} alt="" onClick={
                    () =>{
                        setUrl(img1)
                    }
                }/>
                <img src={img2} alt="" onClick={
                    () =>{
                        setUrl(img2)
                    }
                }/>
                <img src={img3} alt="" onClick={
                    () =>{
                        setUrl(img3)
                    }
                }/>
                <img src={img4} alt="" onClick={
                    () =>{
                        setUrl(img4)
                    }
                }/>
            </div>
        </div>
    )
}

export default Gallery;