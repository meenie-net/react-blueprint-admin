import { Button, ButtonGroup, FormGroup, InputGroup } from "@blueprintjs/core";

const Login = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div>
        <FormGroup
          helperText="请输入正确的用户名"
          label="登录名"
          labelFor="text-input"
          labelInfo="(必填)"
        >
          <InputGroup id="text-input" placeholder="请输入登录名" />
        </FormGroup>
        <FormGroup
          helperText="请输入密码"
          label="登录名"
          labelFor="text-input"
          labelInfo="(必填)"
        >
          <InputGroup id="text-input" placeholder="请输入密码" />
        </FormGroup>
        <FormGroup
          helperText="请输入密码"
          label="登录名"
          labelFor="text-input"
          labelInfo="(必填)"
        >
          <InputGroup id="text-input" placeholder="请输入密码" />
        </FormGroup>
        <ButtonGroup>
          <Button icon="database" text="注册" />
          <Button icon="function" text="登录" />
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Login;
