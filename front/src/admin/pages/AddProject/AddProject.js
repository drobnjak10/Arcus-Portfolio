import React from 'react'
import { useState } from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import Topnav from '../../Topnav/Topnav'
import './AddProject.scss'

const AddProject = () => {
    const [file, setFile] = useState();
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [description, setDescription] = useState('');

    const addProject = async (formData) => {
        try {
            const response = await fetch('http://localhost:4000/projects/add', {
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
        formData.append('category', category)
        formData.append('short_description', shortDescription)
        formData.append('description', description)
        formData.append('image', file)

        const response = await addProject(formData)

        console.log(response)
    }
    
    return (
        <>
            <Topnav />
            <div className="container">
                <Sidebar />
                <div className="newProduct">
                    <h1 className="addProductTitle">New Project</h1>
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
                                placeholder="Project Title"
                                onChange={e => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="addProductItem">
                            <label>Category</label>
                            <input
                                name="category"
                                type="text"
                                placeholder="Project Category"
                                onChange={e => setCategory(e.target.value)}
                            />
                        </div>
                        <div className="addProductItem">
                            <label>Description</label>
                            <input
                                name="short_description"
                                type="text"
                                placeholder="short description..."
                                onChange={e => setShortDescription(e.target.value)}
                            />
                        </div>
                        <div className="addProductItem">
                            <label>Description</label>
                            <input
                                name="description"
                                type="text"
                                placeholder="description..."
                                onChange={e => setDescription(e.target.value)}
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

export default AddProject