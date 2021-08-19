import axios from 'axios'
import { useState } from 'react'
const getNotes = () => {
    return axios.get('http://localhost:3001/callback' + window.location.search).then(res => res.data)
};
const getUser = (token) => {
  console.log('token', token)
  return axios.get('https://api.intra.42.fr/v2/me',{
    headers: {
      'Authorization': 'Bearer ' + token
    },
  }).then(res => res.data)
    .catch(err => {
      console.log('errrr:::', err)
    })
}
const Callback = () => {
const [token, setToken] = useState("")
  const [user, setUser] = useState({ })
  useState(() => {

  },[])

  return (
    <>
    <a href="https://api.intra.42.fr/oauth/authorize?client_id=8119a88810efccec0eebc0f1b5d1f50f28d1dcb17c15bc7457047c3ff3ea80fd&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&response_type=code"><button>Log in</button></a>
    <button onClick={() => {
      console.log(window.location)
      getNotes().then(res => {setToken(res)})
    }}>Click me</button>
      <button onClick={() => {
        if (token !== ""){
          getUser(token).then(res => {
            console.log(res)
            setUser(res)
          })
        }
      }}>Click me 2</button>
      <p>Token: {token}</p>
      <p>User: {JSON.stringify(user)}</p>
    </>
  )
}

export default Callback