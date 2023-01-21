import { useEffect, useState } from "react"

export default function TabelSchedule() {
  const [schedules, setSchedules] = useState([])
  const [labs, setLabs] = useState([])

  const handleGetSchedules = () => {
    fetch('http://localhost:3000/api/jadwal/all')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.data.length === 0) return alert('Data Kosong!')
        setSchedules(data.data)
      })
      .catch(err => console.log(err))
  }

  const handleGetLabs = () => {
    fetch('http://localhost:3000/api/lab/all')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.data.length === 0) return alert('Data Kosong!')
        setLabs(data.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    handleGetSchedules()
    handleGetLabs()
  }, [])
  return (
    <>
      <div>
        <h2 className="section-title">Kode Warna</h2>
        <div className="section-lead">
          <div className="row m-2">
            <div className="col-6 d-flex justify-content-between">
              <div className="col-1 m-1 rounded" style={{ backgroundColor: 'red', padding: '10px' }} id='1'></div>
              <label htmlFor="1" className="font-weight-bold text-dark m-1">Alex</label>
              <div className="col-1 m-1 rounded" style={{ backgroundColor: 'blue', padding: '10px' }} id='2'></div>
              <label htmlFor="2" className="font-weight-bold text-dark m-1 ">Dendi</label>
              <div className="col-1 m-1 rounded" style={{ backgroundColor: 'green', padding: '10px' }} id='3'></div>
              <label htmlFor="3" className="font-weight-bold text-dark m-1 ">Fuad</label>
              <div className="col-1 m-1 rounded" style={{ backgroundColor: 'blue', padding: '10px' }} id='4'></div>
              <label htmlFor="4" className="font-weight-bold text-dark m-1 ">Herlambang</label>
            </div>
          </div>
          <div className="row m-2">
            <div className="col-6 d-flex justify-content-between">
              <div className="col-1 m-1 rounded" style={{ backgroundColor: 'red', padding: '10px' }} id='5'></div>
              <label htmlFor="5" className="font-weight-bold text-dark m-1 ">Hilal</label>
              <div className="col-1 m-1 rounded" style={{ backgroundColor: 'blue', padding: '10px' }} id='6'></div>
              <label htmlFor="6" className="font-weight-bold text-dark m-1 ">Reza</label>
              <div className="col-1 m-1 rounded" style={{ backgroundColor: 'green', padding: '10px' }} id='7'></div>
              <label htmlFor="7" className="font-weight-bold text-dark m-1 ">Yogi</label>
              <div className="col-1 m-1 rounded" style={{ backgroundColor: 'green', padding: '10px' }} id='8'></div>
              <label htmlFor="8" className="font-weight-bold text-dark m-1 ">Zeta</label>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <h4>Tabel Jadwal</h4>
          <button type="button" className="btn btn-primary btn-floating">
            <i className="fas fa-print" />
          </button>
        </div>
        <div className="card-body">
          <div>
            <div className="section-title">Senin</div>
            <table className="table table-bordered text-dark">
              <thead>
                <tr>
                  <th scope="col">Nama LAB</th>
                  <th scope="col">1</th>
                  <th scope="col">2</th>
                  <th scope="col">3</th>
                  <th scope="col">4</th>
                  <th scope="col">5</th>
                  <th scope="col">6</th>
                  <th scope="col">7</th>
                  <th scope="col">8</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">LAB 1</th>
                  <td>Mark</td>
                </tr>
                <tr>
                  <th scope="row">LAB 4</th>
                  <td>Mark</td>
                </tr>
                <tr>
                  <th scope="row">LAB 5</th>
                  <td>Mark</td>
                </tr>
                <tr>
                  <th scope="row">LAB 6</th>
                  <td>Mark</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}