import React from 'react'
import './Services.scss'

const Services = () => {
  return (
    <div className='services' id='services'>
      <div className="col">
        <h1>Naše usluge</h1>
      </div>
      <div className="col-flex">
        <div className="card">
          <div className="card-img">
              <img src="/images/DIZAJN.jpg" alt="" />
              <span>Dizajn</span>
          </div>
          <div className="card-text">
            <p>
              Architecture viverra tristique ustoni missten vitae
              diam neque nivamus aestan the atene artines
              arinianu ateli ine finibus viverra nec lacus. Nedana
              theme sea no curabi
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src="/images/ENTERIJER.jpg" alt="" />
            <span>Enterijer</span>
          </div>
          <div className="card-text">
            <p>
              Architecture viverra tristique ustoni missten vitae
              diam neque nivamus aestan the atene artines
              arinianu ateli ine finibus viverra nec lacus. Nedana
              theme sea no curabi
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src="/images/Projektovanje.jpg" alt="" />
            <span>Projektovanje</span>
          </div>
          <div className="card-text">
            <p>
              Architecture viverra tristique ustoni missten vitae
              diam neque nivamus aestan the atene artines
              arinianu ateli ine finibus viverra nec lacus. Nedana
              theme sea no curabi
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services