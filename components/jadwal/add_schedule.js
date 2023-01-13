import { useEffect, useState } from "react"

export default function AddSchedulePage() {
  const [gurus, setGurus] = useState([])
  const [labs, setLabs] = useState([])
  const [guruId, setGuruId] = useState('')
  const [course, setCourse] = useState('')
  const [labId, setLabId] = useState('')
  const [day, setDay] = useState('')
  const [start_session, setStartSession] = useState('')
  const [end_session, setEndSession] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { labId, guruId, course, day, start_session, end_session }
    fetch('http://localhost:3000/api/jadwal/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if(data.data) {
          alert('Jadwal berhasil ditambahkan')
        } else {
          alert('Jadwal gagal ditambahkan')
        }
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleGetGurus = () => {
    fetch('http://localhost:3000/api/guru/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.data) {
          setGurus(data.data)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleGetLabs = () => {
    fetch('http://localhost:3000/api/lab/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.data) {
          setLabs(data.data)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    handleGetGurus()
    handleGetLabs()
  }, [])

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
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
                  {gurus.length > 0 && gurus.map((guru, index) => {
                    return (
                      <option key={index} value={guru.id}>{guru.name}</option>
                    )
                  })}
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
                <select className="custom-select" value={guruId} onChange={(e) => setGuruId(e.target.value)}>
                  {gurus.length > 0 && gurus.map((guru, index) => {
                    return (
                      <option key={index} value={guru.id}>{guru.name}</option>
                    )
                  })}
                </select>
              </div>
              <div className="col-4">
                <label>Pilih Hari</label>
                <select className="custom-select" value={day} onChange={(e) => setDay(e.target.value)}>
                  <option value={'senin'}>Senin</option>
                  <option value={'selasa'}>Selasa</option>
                  <option value={'rabu'}>Rabu</option>
                  <option value={'kamis'}>Kamis</option>
                  <option value={'jumat'}>Jumat</option>
                  <option value={'sabtu'}>Sabtu</option>
                </select>
              </div>
              <div className="col-4">
                <label>Pilih LAB</label>
                <select className="custom-select" value={labId} onChange={(e) => setLabId(e.target.value)}>
                  {labs.length > 0 && labs.map((lab, index) => {
                    return (
                      <option key={index} value={lab.id}>{lab.name}</option>
                    )
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-4">
                <label>Mata Pelajaran</label>
                <input type="text" className="form-control" placeholder="Masukkan dengan singkat / kode mapel" value={course} onChange={(e) => setCourse(e.target.value)} />
              </div>
              <div className="col-4">
                <label>Sesi Mulai</label>
                <select className="custom-select" value={start_session} onChange={(e) => setStartSession(e.target.value)}>
                  <option value={'1'}>1</option>
                  <option value={'2'}>2</option>
                  <option value={'3'}>3</option>
                  <option value={'4'}>4</option>
                  <option value={'5'}>5</option>
                  <option value={'6'}>6</option>
                  <option value={'7'}>7</option>
                </select>
              </div>
              <div className="col-4">
                <label>Sesi Selesai</label>
                <select className="custom-select" value={end_session} onChange={(e) => setEndSession(e.target.value)}>
                  <option value={'1'}>1</option>
                  <option value={'2'}>2</option>
                  <option value={'3'}>3</option>
                  <option value={'4'}>4</option>
                  <option value={'5'}>5</option>
                  <option value={'6'}>6</option>
                  <option value={'7'}>7</option>
                  <option value={'8'}>8</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button type="submit" className="btn btn-primary">Tambahkan</button>
        </div>
      </form>
    </div>
  )
}