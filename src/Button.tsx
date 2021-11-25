type ButtonType = {
  name: string;
  callback: (name: string) => void; //callback 내가 필요한 값을전달받고 함수가 ㄹ처리할거 정리
};

const Button = (props: ButtonType) => {
  const { name, callback } = props;
  return <button onClick={() => callback(name)}>{name}</button>;
  // callback을 {}로 감싸야 바로 실행되지 않음
};

export default Button;
