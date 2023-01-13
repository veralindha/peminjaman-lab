export default function AddSchedulePage() {
  return (
    <div className="card">
      <div className="card-header">
        <h4>Input Data</h4>
      </div>
      <div className="card-body">
        <div className="section-title mt-0">Pilih Warna Guru</div>
        <div className="form-group">
          <div className="row">
            <div className="col-6">
              <label>Pilih Guru</label>
              <select className="custom-select">
                <option selected>Alex</option>
                <option>Dendi</option>
                <option>Fuad</option>
                <option>Herlambang</option>
                <option>Hilal</option>
                <option>Reza</option>
                <option>Yogi</option>
                <option>Zeta</option>
              </select>
            </div>
            <div className="col-6">
              <label>Pilih Warna Background</label>
              <input type="color" className="form-control" />
            </div>
          </div>
        </div>
        <div className="section-title mt-0">Tambahkan Jadwal</div>
        <div className="form-group">
          <div className="row">
            <div className="col-4">
              <label>Pilih Guru</label>
              <select className="custom-select">
                <option >Alex</option>
                <option>Dendi</option>
                <option>Fuad</option>
                <option>Herlambang</option>
                <option>Hilal</option>
                <option>Reza</option>
                <option>Yogi</option>
                <option>Zeta</option>
              </select>
            </div>
            <div className="col-4">
              <label>Pilih Hari</label>
              <select className="custom-select">
                <option selected>Senin</option>
                <option>Selasa</option>
                <option>Rabu</option>
                <option>Kamis</option>
                <option>Jum'at</option>
                <option>Sabtu</option>
              </select>
            </div>
            <div className="col-4">
              <label>Pilih LAB</label>
              <select className="custom-select">
                <option >1</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            
          <div className="col-4">
              <label>Mata Pelajaran</label>
              <input type="text" className="form-control" placeholder="Masukkan dengan singkat / kode mapel"/>
            </div>
            <div className="col-4">
              <label>Sesi Mulai</label>
              <select className="custom-select">
                <option >1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
              </select>
            </div>
            <div className="col-4">
              <label>Sesi Selesai</label>
              <select className="custom-select">
                <option >1</option>
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
      </div>
      <div className="card-footer">
        <button type="submit" className="btn btn-primary">Tambahkan</button>
      </div>
    </div>
  )
}