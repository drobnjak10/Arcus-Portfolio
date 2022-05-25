import React from 'react'
import './ProjectContact.scss'

const ProjectContact = () => {
  return (
    <div className='contact-project' id='contact'>
        <div className="overlay">
            <div className="col">
                <div className="left">
                    <h1 className='title'>Kontakt</h1>
                    <div className="tel">
                        <span>Telefon</span> <br />
                        <span className='br'>+381 66 999 999</span>
                    </div>
                    <div className="address">
                        <span>Mail</span> <br />
                        <span className='br'>arcus-desgin@gmail.com</span>
                    </div><div className="location">
                        <span>Lokacija</span> <br />
                        <span className='br'>
                            Kneza Mihaila, Beograd
                        </span>
                    </div>
                </div>
                <div className="right">
                    <div className="img">
                        <img src="/images/arcus-logo.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="copyright">
                    &copy; 2022
                    <a href="mailto:drobnjakdavid@gmail.com">drobnjakdavid@gmail.com</a>
                </div>
                <div className="policy">
                    All Right Reserved
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectContact