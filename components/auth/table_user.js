export default function TableUser() {
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
            <tr>
              <th scope="row">1</th>
              <td>Alex</td>
              <td>Guru</td>
              <td>
                <button className="btn btn-danger"><i className="fas fa-trash" /></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  )
}