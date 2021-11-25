type ImageType = {
  adress: string;
  description: string;
};

const Photo = (text: ImageType) => {
  const { adress, description } = text;
  return (
    <>
      <section>
        <img src={adress} alt="google" />
      </section>
      <article>{description}</article>
    </>
  );
};

export default Photo;
