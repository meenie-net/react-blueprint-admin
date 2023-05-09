import {
  Button,
  ControlGroup,
  HTMLSelect,
  InputGroup,
} from "@blueprintjs/core";
import { generatePagesArray } from "../../utils";

const Pagination = (props: {
  total: number;
  pageSize?: number;
  pagerCount: number;
  pageSizeArr: number[];
  onChange: (currentPage: number, pageSize: number) => void;
}) => {
  const { onChange, pageSizeArr, pageSize = 5, total, pagerCount = 7 } = props;
  let _pageSize = pageSize;
  const totalPage = Math.ceil(total / _pageSize);
  let currentPage = 1;
  const pages = generatePagesArray(totalPage, pagerCount, currentPage);
  const handleSelect = (event: React.FormEvent<HTMLElement>) => {
    _pageSize = parseInt((event.target as HTMLInputElement).value);
    onChange(currentPage, _pageSize);
  };
  const handlePage = (index: number) => {
    if (index === currentPage || index === 0 || index === totalPage + 1) return;
    onChange(currentPage, _pageSize);
  };
  const handleGoto = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const target = parseInt((e.target as HTMLInputElement).value);
      if (target < 0 || target > totalPage || target === currentPage) return;
      currentPage = target;
      onChange(currentPage, _pageSize);
    }
  };
  return (
    <div className="flex items-center">
      {`共${total}条`}
      <ControlGroup className="ml-4">
        <HTMLSelect
          options={pageSizeArr.map((v) => {
            return { labal: v, value: `${v}条/页` };
          })}
          fill={true}
          onChange={handleSelect}
        />
      </ControlGroup>
      <ControlGroup className="ml-4">
        <Button
          icon="caret-left"
          onClick={() => handlePage(currentPage - 1)}
        ></Button>
        {pages[0] &&
          pages[0].map((v, i) => (
            <Button
              key={i}
              onClick={() => handlePage(v)}
              intent={currentPage === v ? "primary" : "none"}
            >
              {v}
            </Button>
          ))}
        {pages[1] && pages[1].length > 0 && <Button>···</Button>}
        {pages[2] &&
          pages[2].map((v, i) => (
            <Button
              key={i}
              onClick={() => handlePage(v)}
              intent={currentPage === v ? "primary" : "none"}
            >
              {v}
            </Button>
          ))}
        {pages[3] && pages[3].length > 0 && <Button>···</Button>}
        {pages[4] &&
          pages[4].map((v, i) => (
            <Button
              key={i}
              onClick={() => handlePage(v)}
              intent={currentPage === v ? "primary" : "none"}
            >
              {v}
            </Button>
          ))}
        <Button
          icon="caret-right"
          onClick={() => handlePage(currentPage + 1)}
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
