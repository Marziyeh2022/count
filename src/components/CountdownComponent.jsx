import { useEffect, useState } from "react";

const CountdownComponent = (props) => {
  const [countDown, setCountDown] = useState(30);
  useEffect(() => {
    const timer =
      countDown > 0 &&
      setInterval(() => {
        setCountDown(countDown - 1);
      }, 1000);

    if (countDown === 0) {
      props.onDone();
    }

    return () => clearInterval(timer);
  }, [countDown]);

  useEffect(() => {
    setCountDown(30);
  }, [props.nb]);

  return (
    <div>
      {countDown} secondes
      <p>Question numéro {props.nb}</p>
    </div>
  );
};

export default CountdownComponent;
