import { useState } from 'react';
import { Bar, Button, Item, List, Name } from './style';
import PropTypes from 'prop-types';

function Sidebar({ list = [] }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    console.log(item);
  };

  return (
    <Bar>
      <List>
        {list.map((item) => (
          <Button key={item.id} onClick={() => handleItemClick(item)}>
            <Item>
              <Name>{item.name}</Name>
            </Item>
          </Button>
        ))}
      </List>
    </Bar>
  );
}

Sidebar.propTypes = {
  list: PropTypes.array,
};

export default Sidebar;
