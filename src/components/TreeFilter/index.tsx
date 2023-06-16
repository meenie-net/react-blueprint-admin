import { Classes, Tree, TreeNodeInfo } from "@blueprintjs/core";
import { useCallback, useEffect } from "react";
import { useImmerReducer } from "use-immer";
import "./style.scss";
type NodePath = number[];

type TreeAction =
  | {
      type: "SET_IS_EXPANDED";
      payload: { path: NodePath; isExpanded: boolean };
    }
  | { type: "DESELECT_ALL" }
  | {
      type: "SET_IS_SELECTED";
      payload: { path: NodePath; isSelected: boolean; multiple: boolean };
    };

function forEachNode(
  nodes: TreeNodeInfo[] | undefined,
  callback: (node: TreeNodeInfo) => void
) {
  if (nodes === undefined) {
    return;
  }

  for (const node of nodes) {
    callback(node);
    forEachNode(node.childNodes, callback);
  }
}

function forNodeAtPath(
  nodes: TreeNodeInfo[],
  path: NodePath,
  callback: (node: TreeNodeInfo) => void
) {
  callback(Tree.nodeFromPath(path, nodes));
}

function treeReducer(state: TreeNodeInfo[], action: TreeAction) {
  switch (action.type) {
    case "DESELECT_ALL":
      // eslint-disable-next-line no-case-declarations
      forEachNode(state, (node) => (node.isSelected = false));
      break;
    case "SET_IS_EXPANDED":
      // eslint-disable-next-line no-case-declarations
      forNodeAtPath(
        state,
        action.payload.path,
        (node) => (node.isExpanded = action.payload.isExpanded)
      );
      break;
    case "SET_IS_SELECTED":
      // eslint-disable-next-line no-case-declarations
      // const newState3 = cloneDeep(state);
      forNodeAtPath(state, action.payload.path, (node) => {
        node.isSelected = action.payload.isSelected;
        node.icon = action.payload.isSelected ? (
          <input type="checkbox" checked className="mr-2" readOnly />
        ) : (
          <input type="checkbox" className="mr-2" readOnly />
        );
        node.className = "tree-bg-none";
      });
      return state;
    default:
      return state;
  }
}

interface ITreeFilterProps {
  options: TreeNodeInfo[];
  multiple?: boolean;
  onChange: (result: ITreeFilterResult) => void;
}

export type ITreeFilterResult = Array<string | number> | string | number;

const TreeFilter = ({ options = [], multiple, onChange }: ITreeFilterProps) => {
  const ganerateTree = (origin: TreeNodeInfo[]): TreeNodeInfo[] => {
    return origin.map((node) => {
      let childNodes = [];
      if (node.childNodes) {
        childNodes = ganerateTree(node.childNodes);
        return {
          ...node,
          icon: multiple ? (
            <input type="checkbox" className="mr-2" readOnly />
          ) : null,
          childNodes,
        };
      } else {
        return {
          ...node,
          icon: multiple ? (
            <input type="checkbox" className="mr-2" readOnly />
          ) : null,
        };
      }
    }) as unknown as TreeNodeInfo[];
  };
  const [nodes, dispatch] = useImmerReducer(treeReducer, options, ganerateTree);
  const handleNodeClick = (
    node: TreeNodeInfo,
    nodePath: NodePath,
    e: React.MouseEvent<HTMLElement>
  ) => {
    if (node.childNodes && !multiple) return;
    if (!e.shiftKey && !multiple) {
      dispatch({ type: "DESELECT_ALL" });
    }
    const originallySelected = node.isSelected;
    dispatch({
      payload: {
        path: nodePath,
        multiple: multiple!,
        isSelected: originallySelected == null ? true : !originallySelected,
      },
      type: "SET_IS_SELECTED",
    });
  };

  const handleNodeCollapse = useCallback(
    (_node: TreeNodeInfo, nodePath: NodePath) => {
      dispatch({
        payload: { path: nodePath, isExpanded: false },
        type: "SET_IS_EXPANDED",
      });
    },
    []
  );

  const handleNodeExpand = useCallback(
    (_node: TreeNodeInfo, nodePath: NodePath) => {
      dispatch({
        payload: { path: nodePath, isExpanded: true },
        type: "SET_IS_EXPANDED",
      });
    },
    []
  );
  useEffect(() => {
    onChange([]);
    console.log("nodes", nodes);
  }, [nodes]);
  return (
    <Tree
      contents={nodes}
      onNodeClick={handleNodeClick}
      onNodeCollapse={handleNodeCollapse}
      onNodeExpand={handleNodeExpand}
      className={Classes.ELEVATION_0}
    />
  );
};
export default TreeFilter;
