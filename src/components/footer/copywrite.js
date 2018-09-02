import styled from 'styled-components';

const DivContainer = styled.div`
  padding: 20px 0;
  display: flex;
  font-size: 0.8rem;
  justify-content: space-between;
`;

export const CopyWrite = () => (
  <DivContainer>
    <span>© 2018 Eli Sack · All rights reserved</span>
    <span>Powered By The Sack</span>
  </DivContainer>
);

export default CopyWrite;
