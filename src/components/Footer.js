import Sidebar from './Sidebar';

function Footer({ children, dispatch }) {
  return (
    <footer>
      {children}
      <Sidebar dispatch={dispatch} />
    </footer>
  );
}

export default Footer;
