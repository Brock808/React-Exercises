import { useState } from "react";

type ListProps = {
  data: string[];
};

function List({ data }: ListProps) {
  const [index, setIndex] = useState(-1);

  function handleClick(i: number) {
    setIndex(i);
  }

  return (
    <ul className="list-group">
      {data.map((element, i) => (
        <li
          onClick={() => handleClick(i)}
          key={element}
          className={`list-group-item ${index === i ? "active" : ""}`}
        >
          {element}
        </li>
      ))}
    </ul>
  );
}

export default List;
