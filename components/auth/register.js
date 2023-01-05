export default function Register() {
  return (
    <div className="card card-primary">
      <div className="card-header"><h4>Tambahkan User</h4></div>
      <div className="card-body">
        <form method="POST">
          <div className="row">
            <div className="form-group col-6">
              <div>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" className="form-control" name="username" autofocus />
              </div>
          </div>
          <div className="form-group col-6">
            <label htmlFor="password" className="d-block">Password</label>
            <input id="password" type="password" className="form-control" name="password" />
          </div>
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-primary btn-lg btn-block">
          Tambahkan
        </button>
      </div>
    </form>
      </div >
    </div >

  )
}