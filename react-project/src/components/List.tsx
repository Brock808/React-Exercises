import { useState } from "react";

type ListProps = {
  data: string[];
  onSelect?: (element: string) => void;
};

function List({ data, onSelect }: ListProps) {
  const [index, setIndex] = useState(-1);

  function handleClick(i: number, element: string) {
    setIndex(i);
    onSelect?.(element);
  }

  return (
    <ul className="list-group">
      {data.map((element, i) => (
        <li
          onClick={() => handleClick(i, element)}
          key={`${element}-${i}`}
          className={`list-group-item ${index === i ? "active" : ""}`}
        >
          {element}
        </li>
      ))}
    </ul>
  );
}

export default List;
