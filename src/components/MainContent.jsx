import React from 'react';

import FetchData from './FetchData';
import ListItems from './ListItems';

const MainContent = () => {
  return (
    <section className='main-content'>
      <FetchData />
      <ListItems />
    </section>
  );
};

export default MainContent;
