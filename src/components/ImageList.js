import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard"

//loop over the props using high order array method and display it to the screen
const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
     <ImageCard key={image.id} image={image}/>
    );
  });

  return <div className="image-list">{images}</div>;
};
export default ImageList;
