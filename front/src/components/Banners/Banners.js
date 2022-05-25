import React from 'react'
import { BsBuilding } from 'react-icons/bs'

const Banners = () => {
    return (
        <div className='banners'>
            <div className="cards">
                <div className="card"></div>
                <div className="card">
                    <div className="icon">
                        <BsBuilding />
                    </div>
                    <div className="text">
                        Arhitektura
                    </div>
                </div>
                <div className="card">3</div>
                <div className="card">4</div>
                <div className="card">5</div>
                <div className="card">6</div>
            </div>
        </div>
    )
}

export default Banners