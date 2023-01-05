import AddSchedule from "../../components/jadwal/add_schedule"
import Layout from "../../components/utils/layout"
export default function AddSchedulePage() {
  return (
    <Layout>
      <div>
        <div className="section-header">
          <h1>Tambah Jadwal</h1>
          <div className="section-header-breadcrumb">
            <div className="breadcrumb-item active"><a href="#">Home</a></div>
            <div className="breadcrumb-item"><a href="#">Tambah Jadwal</a></div>
          </div>
        </div>
        <div className="section-body">
          <div className="row">
            <div className="col-12">
              <AddSchedule />
            </div>
          </div>
        </div>
      </div>
    </Layout >
  )
}