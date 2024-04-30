import './Newpost.css'
import blogFetch from '../../axios/config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Newpost = () => {
  const navigate = useNavigate()

  const [ title, setTitle ] = useState()
  const [ body, setBody ] = useState()

  const createPost = async (e) => {
    e.preventDefault()

    const post = { title, body, userId: 1 }

    await blogFetch.post('/posts', {
      body: post,
    })

    navigate('/')
  }

  return (
    <div className="new-post">
      <h2>Inserir novo post:</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título</label>
          <input 
            type="text" 
            name='title' 
            placeholder='Digite o título'
            onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo</label>
          <textarea
            type="text" 
            name='body' 
            placeholder='Digite o conteúdo' 
            onChange={(e) => setBody(e.target.value)}/>
        </div>

        <input type="submit" value="Criar post" className='btn'/>
      </form>
    </div>
  )
}

export default Newpost