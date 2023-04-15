import Header from "./Header";

const Details = ({ blogDetail }) => {
  return (
    <>
      <Header text={`Blog [ ${blogDetail.title} ]`} />
      <div className="content">
        <div className="contentBox">
          <p>{blogDetail.text}</p>
        </div>
      </div>
    </>
  );
};

export default Details;
