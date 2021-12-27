import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1d052c;
  color: #ffffff;
  font-size: 8vh;
  height: 100vh;
  width: 100vw;
`;

const Div2 = styled.div`
  display: inline-block;
  text-align: center;
  transform: translate(0, -60px);
`

function App() {
  return (
    <>
      <Div>
        <Div2>
          <h2>House Exchange</h2>
          <div>Coming soon</div>
        </Div2>
      </Div>
      
    </>
  );
}

export default App;
