import React from 'react';

export default function Navbar(){
    return(
        <div>
            <nav className='nav'>
                <div className='nav-contents'>
                    <img className='nav-logo' src='images/Fill 213.png' alt='globe'></img>
                    <h3><span className='nav-text'>my travel journal</span></h3>
                </div>
            </nav>
        </div>
    )
}