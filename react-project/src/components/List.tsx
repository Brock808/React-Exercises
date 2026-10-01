type ListProps = {
  data: string[];
};

function List({ data }: ListProps) {
  function handleEvent(text: string) {
    console.log(text);
  }

  return (
    <ul className="list-group">
      {data.map((element) => (
        <li
          onClick={() => handleEvent(element)}
          key={element}
          className="list-group-item"
        >
          {element}
        </li>
      ))}
    </ul>
  );
}

export default List;
