import TabelSchedule from "../../components/jadwal/table_schedule"
import Layout from "../../components/utils/layout"
export default function TabelSchedulePage() {
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
              <TabelSchedule/>
            </div>
          </div>
        </div>
      </div>
    </Layout >
  )
}