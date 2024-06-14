
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
        <div className='activities-infor'>
            <h1>Online Experiences</h1>
            <p className='heading-para'>
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
            <div className='activity-items'>
                {activities.map((activity) => (
                    <div key={activity.id} className='activity-item'>
                        <div className="status">
                            {activity.status === 'available' ? (
                                <span className="available">ONLINE</span>
                            ) : (
                                <span className="sold">SOLDOUT</span>
                            )}
                        </div>
                        <img 
                            src={activity.src} 
                            alt={activity.alt} 
                            className='images' 
                            onClick={() => handleReviewClick(activity.id)} 
                        />
                       
                        <p className='rating-text'>{activity.rating} (<span className="reviews">{activity.reviews}</span>).USA</p>
                        <p className='descrip'>{activity.description}</p>
                        <p className='person'><p className='amount'>{activity.amount}</p> <p>/ person</p></p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Activities;


