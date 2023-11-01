import { useDispatch } from 'react-redux';
import { Bar, Button, Item, List, Name } from './style';
import PropTypes from 'prop-types';
import { select } from '../../store/breed/breed';
import { useState } from 'react';

function Sidebar({ list = [] }) {
  const dispatch = useDispatch();
  const [selectedBreedId, setSelectedBreedId] = useState(null);

  const handleButtonClick = (item) => {
    dispatch(select(item));
    setSelectedBreedId(item.id);
  };

  return (
    <Bar>
      <List>
        {list.map((item) => (
          <Button
            key={item.id}
            aria-label="select breed"
            onClick={() => handleButtonClick(item)}
            selected={item.id === selectedBreedId}
          >
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
