import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { getApiRequest } from '../../apiCalls';
import './About.scss'

const About = () => {
  const [page, setPage] = useState(false)

  useEffect(() => {
    const fetchPages = async () => {
      const response = await getApiRequest('/pages')

      const aboutUs = response.pages?.filter(page => page.title === 'O nama')[0]
      console.log(response)

      setPage(aboutUs)
    }
    fetchPages();
  }, [])

  return (
    <div className='section about' id='about'>
      <div className="row">
          <div className="col">
            <h1>O nama</h1>
            <p>
              Architecture innovation tristiue usto duision vitae diam nemue nivamus aesta atene artin arinian
              finibus ate viverra nec lacus. Nedana edino suscipe.
            </p>
            <p>
              Savoye inila duman aten elit finibus vivera alacus themone the drudean seneice miuscibe noneten
              the fermen. Savoye architecture duiman at elit finibus viverra nec a lacus themo drudeane sene voice
              misuscipit non sagie the volume fermen
            </p>
            <p>
              Viverra tristique jusio the ivite dianne onen nivam acsestion augue artine. Savoye toverra ristique
              usto vitae diam nenon sovaye aesta vazio lacus.
            </p>
          </div>
          <div className="col-img">
            <img src={`/images${page.image_path}`} alt="" />
          </div>
      </div>
    </div>
  )
}

export default About