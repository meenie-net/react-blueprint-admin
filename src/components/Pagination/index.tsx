import {
  Button,
  ControlGroup,
  HTMLSelect,
  InputGroup,
} from "@blueprintjs/core";

const Pagination = (props: { total: number; onSizeChange: () => void }) => {
  const { onSizeChange, total } = props;
  return (
    <div className="flex items-center">
      {`共${total}条`}
      <ControlGroup className="ml-4">
        <HTMLSelect
          options={[5, 10, 15, 20, 50, 100, 500].map((v) => {
            return { labal: v, value: `${v}条/页` };
          })}
          fill={true}
          onChange={() => {
            onSizeChange;
          }}
        />
      </ControlGroup>
      <ControlGroup className="ml-4">
        <Button icon="caret-left"></Button>
        <Button>1</Button>
        <Button>1</Button>
        <Button>···</Button>
        <Button>1</Button>
        <Button icon="caret-right"></Button>
      </ControlGroup>
      <div className="flex items-center ml-4">
        <span>前往</span>
        <InputGroup
          defaultValue="1"
          className="w-16 mx-2"
          inputClassName="text-center"
        />
        <span>页</span>
      </div>
    </div>
  );
};

export default Pagination;
