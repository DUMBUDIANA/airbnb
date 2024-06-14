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



  function Gallery() {
    return (
      <div className='gallery-itmes'>
        <div className='one image'>
            <img src={image1} alt='' className=''/>
        </div>
        <div className='two image'>
          <div>
          <img src={image2} alt='' className='tw0image'/>
          </div>
    
            <img src={image3} alt='' className=''/>
        </div>
        <div className='three image'>
            <img src={image4} alt='' className='threeimg1'/>
            <img src={image5} alt='' className=''/>
        </div>
        <div className='four image'>
            <img src={image6} alt='' className='four-img1'/>
            <img src={image23} alt='' className=''/>
        </div>
        <div className='five image'>
            <img src={image7} alt='' className='five-image1'/>
            <img src={image8} alt='' className=''/>
        </div>

        {/* {imagesList.map((image) => (
          <img key={image.id} src={image.src} alt={image.alt} />
        ))} */}
      </div>
    );
  }
  
  export default Gallery;
