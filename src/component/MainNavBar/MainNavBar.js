import React from 'react';
import './MainNavBar.scss';
import sinewaveImg from '../../assets/sinewave.png';
import sinewaveContentImg from '../../assets/sinewave-content.png';

export default function MainNavBar() {
    return (
        <div className='MainNavBar-Container'>
            <div className='MainNavBar-Img'>
                <img src={sinewaveImg} style={{width:'60%',height:'120px',marginTop:'-20px',marginLeft:'-15px',backgroundSize:'contain'}}></img>
                <img src={sinewaveContentImg} style={{width:'80px',height:'30px',marginLeft:'-160px',marginTop:'-20px',backgroundSize:'contain'}}></img>
            </div>
            <div className='MainNavBar-list'>
                <div className='MainNavBar-listItem'>
                    <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <li>
                            <a href="#">EXPERIENCE DENTISTRY</a>
                        </li>
                        <li>
                            <a href="#">OUR EXPERTS</a>
                        </li>
                        <li>
                            <a href="#">BUZZ</a>
                        </li>
                        <li>
                            <a href="#">ABOUT</a>
                        </li>
                        <li>
                            <a href="#">SCHEDULE A VISIT</a>
                        </li>
                    </ul>
                </div>
                <div className='MainNavBar-icons'>
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    )
}
