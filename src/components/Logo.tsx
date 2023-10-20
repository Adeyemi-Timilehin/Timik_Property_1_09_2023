import ImageSource from "./ImageSource"
import image from "../../assets/logo.jpg";
const Logo=()=>{
return (
    <ImageSource placeholder={image} alt="logo"  className="img-footer"/>
)
}
export default Logo