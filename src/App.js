// import logo from './logo.svg';
//import App2 from './App2';

function App2(){
  // 태그 하나만 만들어서 리턴해야 한다.
  return (
      <span>
          <h1>Hi~ App2~!</h1>
      </span>
  );
} // 재사용할 수 없음. 그래서 한 컴포넌트는 한페이지로 만든다.

function App() {
  return (//html로 바뀔수있는 js코드
  <div>Hello!!!
    <App2 />
  </div>
  );
}

export default App;
