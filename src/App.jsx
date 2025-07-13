import { useState } from "react";
import { BtnDefault } from "./components/btnDefault";
import { ColorfulMessage } from "./components/colorfulMessage";

export const App = () => {
  console.log('^^')
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(true);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  };

  return (
    <>
      <h1 style={{ color: '#333333', fontSize: '30px' }}>Hello, world</h1>
      <ColorfulMessage color='blue' message='お元気ですか？' />
      <ColorfulMessage color='green' message='元気です' />
      <button onClick={onClickCountUp}>カウントアップ</button>
      <BtnDefault name='登録' backgroundColor='red' />
      <BtnDefault name='削除' backgroundColor='gray' />
      <p>{num}</p>
      <button onClick={onClickToggle}>ON/OFF</button>
      {isShowFace && <p>--\^o^/--</p>}

    </>
  );
};
