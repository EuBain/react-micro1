export const scrollPageTitle = scrollPageTitleFn();

function scrollPageTitleFn(): any {
  let titleScrollInterval: any;
  return (title: string, flag: boolean) => {
    const originalTitle = title;
    const titleLength = originalTitle.length;
    let scrollPosition = 0;

    function animateTitle() {
      document.title =
        originalTitle.substr(scrollPosition, titleLength) +
        "\u3000\u3000" +
        originalTitle.substr(0, scrollPosition);
      scrollPosition++;
      console.log(scrollPosition, titleLength);
      if (scrollPosition > titleLength) {
        scrollPosition = 0;
      }
    }
    if (titleScrollInterval) {
      clearInterval(titleScrollInterval);
    }
    if (!flag) {
      //   console.log(titleScrollInterval)
      titleScrollInterval = null;
      document.title = title;
      return;
    }

    titleScrollInterval = setInterval(animateTitle, 1000); // 调整滚动速度
    // console.log(flag, titleScrollInterval);
    // 停止滚动标题，例如，当用户离开页面时
    window.addEventListener("blur", function () {
      clearInterval(titleScrollInterval);
      document.title = originalTitle;
    });

    // 重新开始滚动标题，例如，当用户返回页面时
    window.addEventListener("focus", function () {
      clearInterval(titleScrollInterval);
      titleScrollInterval = setInterval(animateTitle, 1000);
    });
  };
}

export const isObject = (value: unknown): value is Record<any, any> =>
  value !== null && typeof value === "object";

export const isFunction = (value: unknown): value is (...args: any) => any =>
  typeof value === "function";

export const isString = (value: unknown): value is string =>
  typeof value === "string";

export const isBoolean = (value: unknown): value is boolean =>
  typeof value === "boolean";

export const isNumber = (value: unknown): value is number =>
  typeof value === "number";

export const isUndef = (value: unknown): value is undefined =>
  typeof value === "undefined";

export interface FormattedRes {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

export const parseMs = (milliseconds: number): FormattedRes => {
  return {
    days: Math.floor(milliseconds / 86400000),
    hours: Math.floor(milliseconds / 3600000) % 24,
    minutes: Math.floor(milliseconds / 60000) % 60,
    seconds: Math.floor(milliseconds / 1000) % 60,
    milliseconds: Math.floor(milliseconds) % 1000,
  };
};

interface RoutesType {
  name: string;
  path: string;
  element?: string;
  children?: RoutesType[];
  redirect?: string;
  keepalive?: boolean;
  auth?: boolean;
}

export function handleChildrenRoutes(
  routes: RoutesType[],
  parentPath?: string
) {
  const array: (object | undefined)[] = routes.map((l: RoutesType) => {
    if (l.redirect) return;
    // const path = `${parentPath ?? ""}/${l.path}`;
    // console.log(`${parentPath ?? ""}`);
    const thisPath = l.path ?? "";
    const path = /^\//g.test(thisPath)
      ? thisPath
      : `${parentPath ?? ""}/${thisPath}`.replace(/\/{2,}/, "/");
    let children;
    if (l.children && l.children?.length > 0) {
      children = handleChildrenRoutes(l.children, path);
    }
    return {
      key: path,
      label: l.name,
      children,
    };
  });
  return array;
}
