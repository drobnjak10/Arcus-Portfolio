import React from 'react'
import { useState } from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import Topnav from '../../Topnav/Topnav'
import './AddPage.scss'

const AddPage = () => {
    const [file, setFile] = useState();
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const addPage = async (formData) => {
        try {
            const response = await fetch('http://localhost:4000/pages/add', {
                method: 'POST',
                body: formData
            })

            const data = await response.json()

            return data

        } catch (error) {
            
        }
    }

    const handleClick = async () => {
        const formData = new FormData();

        formData.append('title', title)
        formData.append('text', text)
        formData.append('image', file)

        const response = await addPage(formData)

        console.log(response)
    }
    
    return (
        <>
            <Topnav />
            <div className="container">
                <Sidebar />
                <div className="newProduct">
                    <h1 className="addProductTitle">New Page</h1>
                    <div className="addProductForm">
                        <div className="addProductItem">
                            <label>Image</label>
                            <input
                                type="file"
                                id="file"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </div>
                        <div className="addProductItem">
                            <label>Title</label>
                            <input
                                name="title"
                                type="text"
                                placeholder="Page Title"
                                onChange={e => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="addProductItem">
                            <label>Category</label>
                            <input
                                name="text"
                                type="text"
                                placeholder="Page Text"
                                onChange={e => setText(e.target.value)}
                            />
                        </div>
                        
                        <button className="addProductButton" onClick={handleClick}>
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddPage