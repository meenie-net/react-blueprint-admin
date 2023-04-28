import { Button, InputGroup } from "@blueprintjs/core";
import { AppToaster } from "../../components/Toaster";
import { useState } from "react";

const Welcome = () => {
  const [text, setText] = useState("");
  const handleClick = () => {
    AppToaster.show({ message: "好的" });
  };
  return (
    <div className="w-full h-full">
      <Button onClick={handleClick}>好的</Button>
      <InputGroup
        asyncControl={true}
        large
        leftIcon="filter"
        placeholder="Filter histogram..."
        value={text}
      />
      <ul>
        {Array.from({ length: 20 }).map((v, i) => (
          <li key={i} className="h-20 border-b-2">
            测试{i}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Welcome;
