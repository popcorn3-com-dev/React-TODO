import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/colorfulMessage";

export const App = () => {
    const [num, setNum] = useState(0);
    const [isShowFace, setIsShowFace] = useState(false);
    const onClickCountUp = () => {
        setNum(num + 1);
    };
    const onClickToggle = () => {
        setIsShowFace(!isShowFace);
    };

    useEffect(() => {
        console.log('--useEffect--');
        if (num > 0) {
            if (num % 3 === 0) {
                isShowFace || setIsShowFace(true);
            } else {
                isShowFace && setIsShowFace(false);
            }
        }
    }, [num]);



    return (
        <>
            <h1>Hello, world</h1>
            <p>よろしく</p>
            <ColorfulMessage color='blue' message='BYE' />
            <button onClick={onClickCountUp}>カウントアップ</button>
            <p>{num}</p>
            <button onClick={onClickToggle}>on/off</button>
            {isShowFace && <p>^^/</p>}
        </>
    );
};
