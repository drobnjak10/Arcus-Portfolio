import React, { useState } from 'react'
import { useEffect } from 'react';
import { getApiRequest } from '../../apiCalls';
import RichTextExample from '../components/Editor';
import Sidebar from '../Sidebar/Sidebar';
import Topnav from '../Topnav/Topnav';
import './Portfolio.scss'

const Portfolio = () => {
    const [myPortfolio, setMyPorftolio] = useState(null)
    
    const [file, setFile] = useState();
    const [name, setName] = useState('');
    const [career, setCareer] = useState('');
    const [description, setDescription] = useState('');
    const [facebook, setFacebook] = useState('');
    const [instagram, setInstagram] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [twitter, setTwitter] = useState('');
    const [loading, setLodaing] = useState(true)

    const editPortfolio = async (formData) => {
        try {
            const response = await fetch(`http://localhost:4000/portfolio/edit/${myPortfolio.id}`, {
                method: 'PUT',
                body: formData
            })

            const data = await response.json()

            return data

        } catch (error) {
            
        }
    }

    const handleClick = async () => {
        const formData = new FormData();

        formData.append('name', name || myPortfolio.name)
        formData.append('career', career || myPortfolio.career)
        formData.append('about', description || myPortfolio.about)
        formData.append('facebook', facebook || myPortfolio.facebook)
        formData.append('instagram', instagram || myPortfolio.instagram)
        formData.append('linkedin', linkedin || myPortfolio.linkedin)
        formData.append('twitter', twitter || myPortfolio.twitter)
        formData.append('image_path', file || myPortfolio.image_path)

        const response = await editPortfolio(formData)

        window.location.reload(false)

        return response
    }

    useEffect(() => {
        async function fetchData() {
            const response = await getApiRequest('/portfolio');

            setMyPorftolio(response.portfolio[0])
            setLodaing(false)
        }

        fetchData()
    }, [])


    if(loading && !myPortfolio) {
        return <>...</>
    }

    // C:\Users\PC\Desktop\arcus-design\front\public\projects\1653420278453--user.jpg
    
    return (
        <>
            <Topnav />
            <div className="container">
                <Sidebar />
                <div className="portfolio-admin">
                    <h1 className="addProductTitle">Portfolio</h1>
                    <div className="portfolio-form">
                        <div className="addProductItem">
                            <label>Image</label>
                            <input
                                type="file"
                                id="file"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                            <img src={`/projects/${myPortfolio.image_path}`} alt={myPortfolio?.name} />
                        </div>
                        <div className="addProductItem">
                            <label>Name</label>
                            <input
                                name="name"
                                type="text"
                                placeholder={myPortfolio.name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className="addProductItem">
                            <label>Career</label>
                            <input
                                name="career"
                                type="text"
                                placeholder={myPortfolio.career}
                                onChange={e => setCareer(e.target.value)}
                            />
                        </div>
                        <div className="addProductItem">
                            <label>About</label>
                            <textarea onChange={e => setDescription(e.target.value)}  name="about" id="" cols="30" rows="10">
                                {myPortfolio.about}
                            </textarea>
                        </div>
                        <div className="addProductItem">
                            <label>Facebook</label>
                            <input
                                name="facebook"
                                type="text"
                                placeholder={myPortfolio.facebook}
                                onChange={e => setFacebook(e.target.value)}
                            />
                        </div>
                        <div className="addProductItem">
                            <label>Instagram</label>
                            <input
                                name="instagram"
                                type="text"
                                placeholder={myPortfolio.instagram}
                                onChange={e => setInstagram(e.target.value)}
                            />
                        </div>
                        <div className="addProductItem">
                            <label>Linkedin</label>
                            <input
                                name="linkedin"
                                type="text"
                                placeholder={myPortfolio.linkedin}
                                onChange={e => setLinkedin(e.target.value)}
                            />
                        </div>
                        <div className="addProductItem">
                            <label>Twitter</label>
                            <input
                                name="twitter"
                                type="text"
                                placeholder={myPortfolio.twitter}
                                onChange={e => setTwitter(e.target.value)}
                            />
                        </div>
                      
                        <button type='submit' className="addProductButton" onClick={handleClick}>
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio