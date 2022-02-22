import { useContext } from 'react';

import MyContext from '../context/MyContext';
import Item from './Item';

const ListItems = () => {
  const context = useContext(MyContext);
  const { data, loading, error } = context;

  return (
    <ul>
      {loading && <p>Loading...</p>}
      {!loading && data.map((item) => <Item key={item.id} name={item.name} />)}
      {error && error}
    </ul>
  );
};

export default ListItems;
