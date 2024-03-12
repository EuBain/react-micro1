/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NODE_ENV: string; //定义提示信息 数据是只读的无法被修改
  //多个变量定义多个...
  readonly MR_HELLO_dsdsDEV: string;
  readonly MR_VITE_HELesdV: string;
  readonly MR_HELLO: string;
  readonly MR_VITE_HELLO: string;
  readonly BASE_TITLE: string;
}
