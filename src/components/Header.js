import ReactLogo from './React_logo1.png'; // Import the image
function Header() {
  return (
    <header className="app-header">
      <div style={{ marginTop: 10, fontSize: '1.6rem' }}>
        Làm đuối quá thì giải trí ở đây đi{' '}
        <h2>
          <a href="https://newmoviesz.online/" target="_blank" style={{ color: '#fff' }}>
            Xem phim
          </a>
        </h2>
      </div>
      <h1 style={{ maxWidth: '100%', fontSize: '2.2rem' }}>Quản lý dự án phần mềm</h1>
    </header>
  );
}

export default Header;
