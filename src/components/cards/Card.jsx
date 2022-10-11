import "./Card.css";
const Card = (props) => {
  const { key, title, desc, img } = props;
  return (
    <div className=" card">
      <h2>{title}</h2>
      <img src={img} alt={title} />
      <p>{desc}</p>
    </div>
  );
};
export default Card;