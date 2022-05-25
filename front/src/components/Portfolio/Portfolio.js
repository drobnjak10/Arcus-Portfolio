import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getApiRequest } from '../../apiCalls'
import './Portfolio.scss'

const Portfolio = () => {
    
    return (
        <main className='portfolio section' id='portfolio'>
            <div className="title">
                <h1>Portfolio</h1>
            </div>
            
            <div class="grid-container">
                <div class="column">
                    {/* <img src="https://images.pexels.com/photos/2106037/pexels-photo-2106037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=375&w=630" /> */}

                    {/* <img src="https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" /> */}

                    {/* <img src="https://images.pexels.com/photos/772571/pexels-photo-772571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" /> */}
                    <img src="/images/project4.jpg" height={630} alt="" />
                    <img src="/images/project2.jpg" height={270} alt="" />
                    <img src="/images/project3.jpg" alt="" height={400} />
                </div>

                <div class="column">
                    <img src="/images/home.jpg" alt="" height={270} />
                    <img src="/images/projec54.jpg" alt="" height={570} />
                    <img src="/images/sarska.jpg" alt=""  height={460}/>
                </div>

                <div class="column item-3">
                    <img src="/images/project1.jpg" alt="" height={450} />
                    <img src="/images/landing.jpg" alt="" height={270} />
                    <img src="/images/home.jpg" alt=""  height={580}/>
                </div>
            </div>
        </main >
    )
}

export default Portfolio