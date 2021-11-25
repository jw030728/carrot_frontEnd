type textType = {
  age: number;
};

const Adult = (props: textType) => {
  const { age } = props;
  return <span>{age >= 20 ? "adult" : "kid"}</span>;
};

export default Adult;
