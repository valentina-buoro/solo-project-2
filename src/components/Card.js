import React from 'react';

export default function Card(props){
    return(
        <div>
            <section className='section'>
                <img className='section-image' src={props.item.image} alt='syd'></img>
                <div className='sect'>
                    <div className='section-span'>
                        <img src='images/location.png' alt='loc'></img>
                        <span> Australia</span>
                        <span> view on google</span>
                        
                    </div>
                    <h1>{props.item.title}</h1>
                    <h4 className='section-date'>{props.item.startDate} - {props.item.endDate}</h4>
                    <p className='section-text'>{props.item.description}</p>
                </div>
            </section>
        </div>
    )
}