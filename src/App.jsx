import { BtnDefault } from "./components/btnDefault";
import { ColorfulMessage } from "./components/colorfulMessage";

export const App = () => {
  const onClickButton = () => alert();

  return (
    <>
      <h1 style={{ color: '#333333', fontSize: '30px' }}>Hello, world</h1>
      <ColorfulMessage color='blue' message='お元気ですか？' />
      <ColorfulMessage color='green' message='元気です' />
      <button onClick={onClickButton}>ボタン</button>
      <BtnDefault name='登録' backgroundColor='red' />
      <BtnDefault name='削除' backgroundColor='gray' />
      <BtnDefault name='追加' backgroundColor='yellow' color='#666' />
    </>
  );
};
