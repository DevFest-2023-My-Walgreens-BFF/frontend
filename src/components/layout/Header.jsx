import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { userApi } from '../../apis/apiInstance';

const Nav = ({ page }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [pageActive, setPageActive] = useState(false);

  useEffect(() => {
    if (page.pathName === location.pathname) {
      setPageActive(true);
    } else {
      setPageActive(false);
    }
  }, [page, location]);

  const gotoPage = () => {
    if (page.pathName === '/compare') {
      navigate(`${page.pathName}?tab=IngGraph`);
    } else {
      navigate(`${page.pathName}`);
    }
  };

  return (
    <StyledLink pageActive={pageActive} onClick={gotoPage}>
      {page.pageName}
    </StyledLink>
  );
};

const Header = (props) => {
  const navigate = useNavigate();

  const isToken = props.istoken;
  const setIsToken = props.setistoken;

  const userImage = props.userimage;
  const setUserImage = props.setuserimage;

  useEffect(() => {
    loginCheck();
  }, []);

  const loginCheck = () => {
    const refreshToken = localStorage.getItem('refreshToken');
    const accessToken = localStorage.getItem('accessToken');
    if (refreshToken || accessToken) {
      GetProfile();
      setIsToken(true);
    }
  };

  const GetProfile = async () => {
    try {
      const res = await userApi.get('api/users/find');
      setUserImage(res.data.user.imageUrl);
    } catch (e) {
      console.log(e);
    }
  };

  const logoutHandler = async () => {
    try {
      const res = await userApi.put('api/users/logout');
      alert(res.data.message);
      localStorage.clear();
      setIsToken(false);
      navigate('/login');
    } catch (e) {
      console.log(e);
    }
  };
  // ---------------------------------------------------------------------

  const pageArr = [
    { pageName: 'ABOUT', pathName: '/' },
    { pageName: 'SEARCH MEDICATION', pathName: '/search' },
  ];

  const goToMypage = () => {
    navigate('/mypage');
  };

  // ---------------------------------------------------------------------

  return (
    <Wrap>
      <HeaderWrapper>
        <HeaderBox>
          <LogoBox to='/' />
          <CategoryBox>
            {pageArr.map((page) => (
              <Nav key={page.pageName} page={page} />
            ))}
          </CategoryBox>
          <SignBox>
              <SlackBtn to='/slack'>Contact Us</SlackBtn>
          </SignBox>
        </HeaderBox>
      </HeaderWrapper>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 80px;
`;

const HeaderWrapper = styled.div`
  background-color: white;
  width: 100%;
  margin: 0 auto;
  height: 80px;
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: center;
  border-bottom: 1px solid #d0d0d0;
  z-index: 9999;
`;

const HeaderBox = styled.div`
  width: 1380px;
  height: 80px;
  position: relative;
  display: flex;
  justify-content: center;
  gap: 50px;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
`;

const LogoBox = styled(Link)`
  position: absolute;
  left: 0;
  width: 198px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
  font-size: 40px;
  font-weight: 700;
  background-image: url('/assets/image/Logo-crop.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 292.5px;
`;

const CategoryBox = styled.div`
  /* width: 55%; */
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 50px;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
`;

const StyledLink = styled.div`
  text-decoration: none;
  color: ${({ pageActive }) => (pageActive ? '#242424' : '#868686')};
  cursor: pointer;
`;

const SignBox = styled.div`
  /* width: 25%; */
  height: 100%;
  display: flex;
  /* justify-content: right; */
  gap: 18px;
  align-items: center;
  position: absolute;
  right: 0;
`;

const SlackBtn = styled(Link)`
  background-color: #3366ff;
  width: 100px;
  height: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: 900;
  color: white !important;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const SignupBtn = styled(Link)`
  background-color: #ebf0ff;
  width: 100px;
  height: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: 900;
  color: #3366ff !important;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
const BackgroundMypageBtn = styled.div`
  cursor: pointer;
  height: 50px;
  display: flex;
  align-items: center;
  .myinfoImg {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #f6f7fa;
  }
  .mypage {
    color: #868686;
    font-size: 15px;
  }
`;

const MypageBtn = styled.div`
  background-image: ${({ props }) => `url(${props})`};
  background-size: cover;
  background-position: center;
  margin: 4.5px 4.5px;
  width: 41px;
  height: 41px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  /* z-index: 2; */
`;

const LogoutBtn = styled.button`
  background-color: #3366ff;
  width: 100px;
  height: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
export default Header;
