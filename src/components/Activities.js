// import React from 'react'
// import image1 from"./images/online1.png";
// import image2 from "./images/online2.png";
// import image3 from "./images/online3.png";


// const activityList = [
//     {
//       id: 1,
//       src: image2,
//       alt: "Image1",
//       rating:"From $136 / person",
//       description:"Life lessons with Katie Zaferes",
//       amount:"From $136 / person",
//     },
    
//     {
//         id: 1,
//         src: image3,
//         alt: "Image1",
//         rating:"From $136 / person",
//         description:"Life lessons with Katie Zaferes",
//         amount:"From $136 / person",
//       },
//       {
//         id: 1,
//         src: image1,
//         alt: "Image1",
//         rating:"From $136 / person",
//         description:"Life lessons with Katie Zaferes",
//         amount:"From $136 / person",
//       },
//   ];


// function Activities(props) {
//     return (
//         <div>
// <h1>Online Experiences</h1>
// <p className='heading-para'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
// </p>
//         <div className='activity-items'>
//             {activityList.map((activity) => (
//                 <div key={activity.id}>
//                     <img src={activity.src} alt={activity.alt} className='images' />
//                     <p>{activity.rating}</p>
//                     <p>{activity.description}</p>
//                 </div>
//             ))}
//         </div>
//         </div>
//     );
// }

// export default Activities;

// Activities.js
// Activities.js
// import React, { useState } from 'react';
// import activityList from './activityList';

// function Activities() {
//     const [activities, setActivities] = useState(activityList);

//     const handleReviewClick = (id) => {
//         setActivities(activities.map(activity => {
//             if (activity.id === id) {
//                 return { ...activity, reviews: activity.reviews + 1 };
//             }
//             return activity;
//         }));
//     };

//     return (
//         <div>
//             <h1>Online Experiences</h1>
//             <p className='heading-para'>
//                 Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
//             </p>
//             <div className='activity-items'>
//                 {activities.map((activity) => (
//                     <div key={activity.id} className='activity-item'>
//                         <img 
//                             src={activity.src} 
//                             alt={activity.alt} 
//                             className='images' 
//                             onClick={() => handleReviewClick(activity.id)} 
//                         />
//                         <p>{activity.amount} {activity.soldOut ? '(Sold Out)' : '(Available)'}</p>
//                         <p>{activity.rating} ({activity.reviews} reviews)</p>
//                         <p>{activity.description}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Activities;



// Updated Activities.js
// Updated Activities.js
import React, { useState } from 'react';
import activityList from './activityList';

function Activities() {
    const [activities, setActivities] = useState(activityList);

    const handleReviewClick = (id) => {
        setActivities(activities.map(activity => {
            if (activity.id === id) {
                return { ...activity, reviews: activity.reviews + 1 };
            }
            return activity;
        }));
    };

    return (
        <div>
            <h1>Online Experiences</h1>
            <p className='heading-para'>
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
            <div className='activity-items'>
                {activities.map((activity) => (
                    <div key={activity.id} className='activity-item'>
                        <div className="status">
                            {activity.status === 'available' ? (
                                <span className="available">Available</span>
                            ) : (
                                <span className="sold">Sold Out</span>
                            )}
                        </div>
                        <img 
                            src={activity.src} 
                            alt={activity.alt} 
                            className='images' 
                            onClick={() => handleReviewClick(activity.id)} 
                        />
                        <p>{activity.amount}</p>
                        <p>{activity.rating} (<span className="reviews">{activity.reviews}</span> reviews)</p>
                        <p>{activity.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Activities;


