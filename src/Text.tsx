type TextType = {
  type: string;
  text: string;
};

const Text = (textType: TextType) => {
  const { type, text } = textType;
  return (
    <>
      {type === "header" && <h1>{text}</h1>}
      {type === "bold" && <strong>{text}</strong>}
    </>
  );
};

export default Text;
