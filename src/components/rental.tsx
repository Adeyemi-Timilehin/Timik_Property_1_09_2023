import React, { Children } from "react";
import { Card, Col } from "react-bootstrap";
import './style.css'
interface Props{
    children?: React.ReactNode;
    onClick:()=>void;
className:string;
title:string;
placeimg:string;
}
const Rental:React.FC<Props>=({
children,title,
className,
placeimg,
onClick,
})=>{
    return(
    

        <Card  onClick={onClick} className={className+"card"}>
        <Card.Img variant="top" src={placeimg} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
          {children}
          </Card.Text>
         
        </Card.Body>
      </Card>
      
    )
}
export default Rental