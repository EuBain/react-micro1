import React, {
  ComponentProps,
  ComponentType,
  createContext,
  useContext,
} from "react";

function createStore<T extends {}>(store: () => T) {
  const ModelContext: any = {};

  function useModel<K extends keyof T>(key: K) {
    return useContext(ModelContext[key]) as T[K];
  }

  /** 当前状态 */
  let currentStore: T;
  /** 上一次状态 */
  let prevStore: T;

  function StoreProvider(props: { children: React.ReactNode }) {
    currentStore = store();

    if (prevStore) {
      for (const key in prevStore) {
        if (Shallow(prevStore[key], currentStore[key])) {
          currentStore[key] = prevStore[key];
        }
      }
    }
    prevStore = currentStore;

    let keys: any[] = Object.keys(currentStore);

    let i = 0;

    const length = keys.length;

    function getContext<T, K extends keyof T>(
      key: K,
      val: T,
      children: React.ReactNode
    ): JSX.Element {
      const Context =
        ModelContext[key] || (ModelContext[key] = createContext(val[key]));
      const currentIndex = ++i;
      return React.createElement(
        Context.Provider,
        {
          value: val[key],
        },
        currentIndex < length
          ? getContext(keys[currentIndex], val, children)
          : children
      );
    }
    return getContext(keys[i], currentStore, props.children);
  }

  function getModel<K extends keyof T>(key: K): T[K] {
    return currentStore[key];
  }

  function connectModel<Selected, K extends keyof T>(
    key: K,
    selector: (state: T[K]) => Selected
  ) {
    return function <P, C extends ComponentType<any>>(
      WrapComponent: C
    ): ComponentType<Omit<ComponentProps<C>, keyof Selected>> {
      const Connect = (props: P) => {
        const val = useModel(key);
        const state = selector(val);
        return React.createElement(WrapComponent, {
          ...props,
          ...state,
        });
      };
      return Connect as unknown as ComponentType<
        Omit<ComponentProps<C>, keyof Selected>
      >;
    };
  }
}

/** 浅对比对象 */
function Shallow<T>(obj1: T, obj2: T): boolean;
function Shallow<T extends {}>(obj1: T, obj2: T): boolean {
  if (obj1 === obj2) return true;
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}
