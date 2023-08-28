import React from 'react'
interface Props{
placeholder:string;
alt:string;
className:string;
}
const ImageSource:React.FC<Props>=({
   placeholder,
    alt, className
    })=><img src={placeholder} alt={alt} className={className}/>


    export default ImageSource