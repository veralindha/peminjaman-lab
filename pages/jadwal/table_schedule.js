import { useEffect, useState } from "react"
import TabelSchedule from "../../components/jadwal/table_schedule"
import Layout from "../../components/utils/layout"
export default function TabelSchedulePage() {
  const [schedules, setSchedules] = useState([])
  const [labs, setLabs] = useState([])
  const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']

  const handleGetSchedules = () => {
    fetch('http://localhost:3000/api/jadwal/all')
      .then(res => res.json())
      .then(data => {
        if(data.message !== 'success') return alert('Data Kosong!')
        setSchedules(data.data)
        console.log(data.data)
      })
      .catch(err => console.log(err))
  }

  const handleGetLabs = () => {
    fetch('http://localhost:3000/api/lab/all')
      .then(res => res.json())
      .then(data => {
        if(data.message !== 'success') return alert('Data Kosong!')
        setLabs(data.data)
        console.log(data.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    handleGetSchedules()
    handleGetLabs()
  }, [])
  return (
    <Layout>
      <div>
        <div className="section-header">
          <h1>JADWAL</h1>
          <div className="section-header-breadcrumb">
            <div className="breadcrumb-item active"><a href="#">Home</a></div>
            <div className="breadcrumb-item"><a href="#">Jadwal</a></div>
          </div>
        </div>
        <div className="section-body">
          <div className="row">
            <div className="col-12">
              <TabelSchedule schedule={schedules} lab={labs} days={days}/>
            </div>
          </div>
        </div>
      </div>
    </Layout >
  )
}