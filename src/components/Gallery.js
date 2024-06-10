import React from 'react'
import image1 from"./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
import image6 from "./images/image6.png";
import image7 from "./images/image7.png";
import image8 from "./images/image8.png";
import image23 from "./images/image23.png"

// const imagesList = [
//     {
//       id: 1,
//       src: image1,
//       alt: "Image1",
//     },
    
//     {
//       id: 2,
//       src: image2,
//       alt: "Image2",
//     },
//     {
//       id: 3,
//       src: image3,
//       alt: "Image3",
//     },
//     {id: 4,
//     src: image4,
//     alt: "Image1",
//   },
//   {
//     id: 5,
//     src: image5,
//     alt: "Image2",
//   },
//   {
//     id: 6,
//     src: image6,
//     alt: "Image3",
//   },
//   {
//     id: 7,
//     src: image7,
//     alt: "Image3",
//   },
//   {
//     id: 8,
//     src: image8,
//     alt: "Image3",
//   },
//   ];


  function Gallery() {
    return (
      <div className='gallery-itmes'>
        <div className='one'>
            <img src={image1} alt='' className=''/>
        </div>
        <div className='two'>
            <img src={image2} alt='' className=''/>
            <img src={image3} alt='' className=''/>
        </div>
        <div className='three'>
            <img src={image4} alt='' className=''/>
            <img src={image5} alt='' className=''/>
        </div>
        <div className='four'>
            <img src={image6} alt='' className=''/>
            <img src={image23} alt='' className=''/>
        </div>
        <div className='five'>
            <img src={image7} alt='' className=''/>
            <img src={image8} alt='' className=''/>
        </div>

        {/* {imagesList.map((image) => (
          <img key={image.id} src={image.src} alt={image.alt} />
        ))} */}
      </div>
    );
  }
  
  export default Gallery;
