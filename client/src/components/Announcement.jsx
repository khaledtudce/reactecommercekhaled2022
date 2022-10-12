import styled from "styled-components";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  return (
    <div>
      <Container>{t("announcement")}</Container>
    </div>
  );
};

export default Announcement;
