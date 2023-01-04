import Link from 'next/link'
export default function Sidebar() {
  return (
    <div className="main-sidebar sidebar-style-2">
      <aside id="sidebar-wrapper">
        <div className="sidebar-brand">
          <a href="index.html">Peminjaman LAB</a>
        </div>
        <div className="sidebar-brand sidebar-brand-sm">
          <a href="index.html">PL</a>
        </div>
        <ul className="sidebar-menu">
          <li className="menu-header">Dashboard</li>
          <li className="dropdown active">
            <Link href="/" className="nav-link"><i className="fas fa-fire" /><span>Dashboard</span></Link>
          </li>
          <li className="menu-header">Starter</li>
          <li className="dropdown">
            <Link href="/jadwal/table_schedule" className="nav-link" data-toggle="dropdown"><i className="fas fa-columns" /> <span>Jadwal</span></Link>
          </li>
          <li className="menu-header">Pages</li>
          <li className="dropdown">
            <a href="#" className="nav-link has-dropdown"><i className="far fa-user" /> <span>Auth</span></a>
            <ul className="dropdown-menu">
              <li><Link href="auth-register.html">Register</Link></li>
              <li><Link href="auth-reset-password.html">Reset Password</Link></li>
            </ul>
          </li>
        </ul>
      </aside>
    </div>

  )
}