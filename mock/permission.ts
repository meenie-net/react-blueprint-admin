/**
 * key: route.meta.name
 * value: string[]
 */
type IButtonPermission = "add" | "edit" | "delete" | "import" | "export";
type IPermission = {
  userList: IButtonPermission[];
};
export const permisson: IPermission = {
  userList: ["add", "edit", "delete"],
};
