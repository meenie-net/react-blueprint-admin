import {
  Button,
  ControlGroup,
  HTMLSelect,
  InputGroup,
} from "@blueprintjs/core";
import { useEffect, useState } from "react";
import { generatePagesArray } from "../../utils";

const Pagination = (props: {
  total: number;
  onChange: (args0?: PaginationRequest) => void;
}) => {
  const { onChange, total } = props;
  const [pageSize, setPageSize] = useState(5);
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [pages, setPages] = useState<number[][]>([]);
  const handleSelect = (event: React.FormEvent<HTMLElement>) => {
    setPageSize(parseInt((event.target as HTMLInputElement).value));
  };
  const handlePage = (index: number) => {
    if (
      index === currentPageNum ||
      index === 0 ||
      index === Math.ceil(total / pageSize) + 1
    )
      return;
    setCurrentPageNum(index);
  };
  const handleGoto = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const target = parseInt((e.target as HTMLInputElement).value);
      if (
        target < 0 ||
        target > Math.ceil(total / pageSize) ||
        target === currentPageNum
      )
        return;
      setCurrentPageNum(target);
    }
  };
  useEffect(() => {
    onChange({
      pageNum: currentPageNum,
      pageSize,
    });
  }, []);
  useEffect(() => {
    setPages(generatePagesArray(total, pageSize));
  }, [total, pageSize]);
  useEffect(() => {
    onChange({
      pageNum: currentPageNum,
      pageSize,
    });
  }, [currentPageNum, pageSize]);
  return (
    <div className="flex items-center">
      {`共${total}条`}
      <ControlGroup className="ml-4">
        <HTMLSelect
          options={[5, 10, 15, 20, 50, 100, 500].map((v) => {
            return { labal: v, value: `${v}条/页` };
          })}
          fill={true}
          onChange={handleSelect}
        />
      </ControlGroup>
      <ControlGroup className="ml-4">
        <Button
          icon="caret-left"
          onClick={() => handlePage(currentPageNum - 1)}
        ></Button>
        {pages[0] &&
          pages[0].map((v, i) => (
            <Button
              key={i}
              onClick={() => handlePage(v)}
              intent={currentPageNum === v ? "primary" : "none"}
            >
              {v}
            </Button>
          ))}
        {pages[0]?.length > 6 && <Button>···</Button>}
        {pages[1] &&
          pages[1].map((v, i) => (
            <Button
              key={i}
              onClick={() => handlePage(v)}
              intent={currentPageNum === v ? "primary" : "none"}
            >
              {v}
            </Button>
          ))}
        <Button
          icon="caret-right"
          onClick={() => handlePage(currentPageNum + 1)}
        ></Button>
      </ControlGroup>
      <div className="flex items-center ml-4">
        <span>前往</span>
        <InputGroup
          defaultValue={"1"}
          className="w-16 mx-2"
          inputClassName="text-center"
          onKeyUp={handleGoto}
        />
        <span>页</span>
      </div>
    </div>
  );
};

export default Pagination;
