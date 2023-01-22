import { useEffect, useState } from "react"

export default function TabelSchedule({ schedule, lab }) {

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
                {lab.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{item.name}</th>
                      {schedule.map((item2, index2) => {
                        if (item2.labId == item.id) {
                          return (
                            <td key={index2} className="text-center" colSpan={item2.end_session - item2.start_session + 1}>
                              {item2.course} - {item2.Gurus.name} - sesi {item2.start_session} - {item2.end_session}
                            </td>
                          )
                        }
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}