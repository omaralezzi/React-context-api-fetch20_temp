import { useContext } from 'react';

import MyContext from '../context/MyContext';

const Header = () => {
  const context = useContext(MyContext);
  const { headerLogo } = context;

  return (
    <header>
      <h2>{headerLogo}</h2>
    </header>
  );
};

export default Header;
