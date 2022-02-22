import { useContext } from 'react';

import MyContext from '../context/MyContext';

const Footer = () => {
  const context = useContext(MyContext);
  const { footerName } = context;

  return (
    <footer>
      <p>&#169; 2021 {footerName}</p>
    </footer>
  );
};

export default Footer;
