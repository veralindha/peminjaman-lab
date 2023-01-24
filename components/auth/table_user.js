export default function TableUser({users}) {
  const deleteUser = (id) => {
    fetch(`/api/user/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        alert(data.message)
      })
      .catch(err => console.log(err))
  }
  return (
    <div className="card">
      <div className="card-header">
        <h4>Tabel User</h4>
      </div>
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Role</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.username}</td>
                  <td>{user.role}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => deleteUser(user.id)}><i className="fas fa-trash" /></button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}