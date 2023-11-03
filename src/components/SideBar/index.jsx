import { useDispatch } from 'react-redux';
import { Bar, Button, Item, List, Name } from './style';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { selectBreed } from '../../store/breed/breed';
import { selectPage } from '../../store/currentPage/currentPage';

function Sidebar({ list = [] }) {
  const dispatch = useDispatch();
  const [selectedBreedId, setSelectedBreedId] = useState(null);

  const handleButtonClick = (item) => {
    dispatch(selectBreed(item));
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

export function PageSideBar({ list = [] }) {
  const dispatch = useDispatch();
  const [selectedPage, setSelectedPage] = useState(null);

  const handleButtonClick = (item) => {
    dispatch(selectPage(item));
    setSelectedPage(item);
  };

  return (
    <Bar>
      <List>
        {list.map((item) => (
          <Button
            key={item}
            aria-label="select page"
            onClick={() => handleButtonClick(item)}
            selected={item === selectedPage}
          >
            <Item>
              <Name>{item}</Name>
            </Item>
          </Button>
        ))}
      </List>
    </Bar>
  );
}

PageSideBar.propTypes = {
  list: PropTypes.array,
};

export default Sidebar;
