import { ColorfulMessage } from "./components/colorfulMessage";

export const App = () => {
  const onClickButton = () => alert();

  return (
    <>
      <h1 style={{ color: '#333333', fontSize: '30px' }}>Hello, world</h1>
      <ColorfulMessage color='blue' message='お元気ですか？' />
      <ColorfulMessage color='green' message='元気です' />
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
