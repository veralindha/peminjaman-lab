import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Tes from "./tes";

export default function Layout({ children }) {
  return (
    <div id="app">
      <div className="main-wrapper main-wrapper-1">
        <Navbar />
        <Sidebar />
        <div className="main-content" style={{ minHeight: 530 }}>
          <section className="section">
            {children}
            <Tes/>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  )
}