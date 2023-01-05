import Register from "../../components/auth/register";
import TableUser from "../../components/auth/table_user";
import Layout from "../../components/utils/layout"
export default function RegisterPage(){
  return(
    <Layout>
      <div>
        <div className="section-header">
          <h1>User</h1>
          <div className="section-header-breadcrumb">
            <div className="breadcrumb-item active"><a href="#">Home</a></div>
            <div className="breadcrumb-item"><a href="#">User</a></div>
          </div>
        </div>
        <div className="section-body">
          <div className="row">
            <div className="col-12">
              <Register/>
              <TableUser/>
            </div>
          </div>
        </div>
      </div>
    </Layout >
  )
}