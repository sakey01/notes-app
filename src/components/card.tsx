const Card = ({ title }: { title: string }) => {
  const handleDelete = () => {};

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={handleDelete}>-</button>
    </div>
  );
};

export default Card;
