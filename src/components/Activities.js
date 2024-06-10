import React from 'react'
import image1 from"./images/online1.png";
import image2 from "./images/online2.png";
import image3 from "./images/online3.png";


const activityList = [
    {
      id: 1,
      src: image2,
      alt: "Image1",
      rating:"From $136 / person",
      description:"Life lessons with Katie Zaferes",
      amount:"From $136 / person",
    },
    
    {
        id: 1,
        src: image3,
        alt: "Image1",
        rating:"From $136 / person",
        description:"Life lessons with Katie Zaferes",
        amount:"From $136 / person",
      },
      {
        id: 1,
        src: image1,
        alt: "Image1",
        rating:"From $136 / person",
        description:"Life lessons with Katie Zaferes",
        amount:"From $136 / person",
      },
  ];


function Activities(props) {
    return (
        <div>
<h1>Online Experiences</h1>
<p className='heading-para'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
        <div className='activity-items'>
            {activityList.map((activity) => (
                <div key={activity.id}>
                    <img src={activity.src} alt={activity.alt} className='images' />
                    <p>{activity.rating}</p>
                    <p>{activity.description}</p>
                </div>
            ))}
        </div>
        </div>
    );
}

export default Activities;

