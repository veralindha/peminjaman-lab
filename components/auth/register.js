import { useState } from "react"

export default function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    if (username !== '' && password !== '') {
      fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({ username, password })
      })
        .then(res => res.json())
        .then(res => {
          if (res.message == 'success') alert('success!')
        })
        .catch(err => {
          console.log(err.message)
        })
    } else {

    }
  }

  return (
    <div className="card card-primary">
      <div className="card-header"><h4>Tambahkan User</h4></div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group col-6">
              <label htmlFor="username">Username</label>
              <input id="username" type="text" className="form-control" name="username" required autoFocus value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-group col-6">
              <label htmlFor="password" className="d-block">Password</label>
              <input id="password" type="password" className="form-control" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-lg">
            Tambahkan
          </button>
        </form>
      </div >
    </div >
  )
}