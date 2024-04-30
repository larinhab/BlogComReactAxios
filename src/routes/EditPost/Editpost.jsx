import './Editpost.css'

import blogFetch from '../../axios/config'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const Editpost = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const [ title, setTitle ] = useState()
    const [ body, setBody ] = useState()

    const getPost = async() => {
         try {
             const response = await blogFetch.get(`/posts/${id}`)
             
             const data = response.data
 
             setTitle(data.title)
             setBody(data.body)
         } catch (error) {
             console.log(error)
         }
     }
 
    const editPost = async (e) => {
      e.preventDefault()
  
      const post = { title, body, userId: 1 }
  
      await blogFetch.put(`/posts/${id}`, {
        body: post,
      })
  
      navigate('/')
    }

    useEffect(() => {
        getPost()
    }, [])
 
  return (
    <div className="edit-post">
    
    <h2>Editando post:
        <hr /> {title}
    </h2>

    <form onSubmit={(e) => editPost(e)}>
      <div className="form-control">
        <label htmlFor="title">Título</label>
        <input 
          type="text" 
          name='title' 
          placeholder='Digite o título'
          onChange={(e) => setTitle(e.target.value)} 
          value={ title || "" } />
      </div>
      <div className="form-control">
        <label htmlFor="body">Conteúdo</label>
        <textarea
          type="text" 
          name='body' 
          placeholder='Digite o conteúdo' 
          onChange={(e) => setBody(e.target.value)}
          value={ body || "" }/>
      </div>

      <input type="submit" value="Editar" className='btn'/>
    </form>
  </div>
  )
}

export default Editpost