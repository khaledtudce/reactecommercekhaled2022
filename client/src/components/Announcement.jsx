import styled from "styled-components";

const Container = styled.div`
  color: #ffffff;
  height: 35px;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <div>
      <Container>Super Deal! Free Shipping on orders over 50$</Container>
    </div>
  );
};

export default Announcement;
