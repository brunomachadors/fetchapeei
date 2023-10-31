import { useDispatch } from 'react-redux';
import { Bar, Button, Item, List, Name } from './style';
import PropTypes from 'prop-types';
import { select } from '../../store/breed/breed';

function Sidebar({ list = [] }) {
  const dispatch = useDispatch();

  return (
    <Bar>
      <List>
        {list.map((item) => (
          <Button
            key={item.id}
            aria-label="select breed"
            onClick={() => dispatch(select(item))}
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
