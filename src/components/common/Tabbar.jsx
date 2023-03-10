import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Tab = ({ list, query, location }) => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  const changeTab = () => {
    navigate(`${location}?tab=${list}`);
  };

  useEffect(() => {
    if (list === query) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [list, query]);

  return (
    <TabName isActive={isActive} onClick={changeTab}>
      {list}
    </TabName>
  );
};

const TabBar = ({ location, query }) => {
  const [tabList, setTabList] = useState([
    'Category1',
    'Category2',
    'Category3',
  ]);

  useEffect(() => {
    if (location === '/compare') {
      setTabList([
        'IngGraph',
        'Effect',
        'Dosage',
        'Exp Date',
      ]);
    }
    if (location.includes('/detail')) {
      setTabList(['Effect', 'Dosage', 'Exp Date', 'Note']);
    }
  }, [location]);

  return (
    <Wrap>
      <ul>
        {tabList.map((list) => (
          <Tab key={list} location={location} list={list} query={query} />
        ))}
      </ul>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 40px;
  margin-bottom: 16px;
  border-bottom: 1px solid #d9d9d9;
  ul {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    gap: 30px;
  }
`;
const TabName = styled.li`
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  color: ${({ isActive }) => (isActive ? '#3366FF' : '#868686')};
  font-weight: bold;
  position: relative;

  ${({ isActive }) =>
    isActive
      ? `&::after {
    content: '';
    width: 100px;
    height: 3px;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #3366ff;
  }`
      : null}
`;

export default TabBar;
