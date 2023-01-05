export default function AddSchedulePage() {
  return (
    <div className="card">
      <div className="card-header">
        <h4>Tambah Jadwal</h4>
      </div>
      <div className="card-body">
        <div className="section-title mt-0">Select</div>
        <div className="form-group">
          <div className="row">
            <div className="col-4">
              <label>Pilih Guru</label>
              <select className="custom-select">
                <option selected>Alex</option>
                <option value={1}>Dendi</option>
                <option value={2}>Fuad</option>
                <option value={3}>Herlambang</option>
                <option value={4}>Hilal</option>
                <option value={5}>Reza</option>
                <option value={6}>Yogi</option>
                <option value={7}>Zeta</option>
              </select>
            </div>
            <div className="col-4">
              <label>Pilih LAB</label>
              <select className="custom-select">
                <option selected>1</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </div>
            <div className="col-4">
                <label>Mata Pelajaran</label>
                <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-6">
              <label>Sesi Mulai</label>
              <select className="custom-select">
                <option selected>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
              </select>
            </div>
            <div className="col-6">
              <label>Sesi Selesai</label>
              <select className="custom-select">
                <option selected>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Pilih Warna Background</label>
          <input type="color" className="form-control" />
        </div>
      </div>
      <div className="card-footer">
        <button type="submit" className="btn btn-primary">Tambahkan</button>
      </div>
    </div>
  )
}