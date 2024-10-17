import { AppDispatch, RootStore } from "@/redux/store";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { isNumber, parseMs } from "./common";
import { useLatest } from "ahooks";

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;

// 无界传递路由跳转
export const useBusOnChangePath: () => void = () => {
  // 避免重复渲染
  const state = useRef<string[]>([]);
  const navigate = useNavigate();

  const changeRoute = useCallback((params: string[]) => {
    // 解决路由重定向路由跳转异步问题
    // setTimeout(()=>{
    if (state.current.join("/") === params.join("/")) {
      if (params.length) {
        return;
      }
      navigate("/home", { replace: true });
    } else {
      state.current = params;
      // console.log(1,{params});
      navigate(`/${params.join("/")}`, { replace: true });
    }
    // })
  }, []);

  useEffect(() => {
    // console.log('ReactMicro执行')
    window.$wujie?.bus.$on("ReactMicroChange", changeRoute);
    window.$wujie?.bus.$emit("ReactMicroMount", "ReactMicro", true);
    // return () => {
    //   console.log(111)
    //   window.$wujie.bus.$emit('ReactMicroMount', 'ReactMicro',false)}
  }, []);
};

type TDate = dayjs.ConfigType;
export interface Options {
  leftTime?: number;
  targetDate?: TDate;
  interval?: number;
  onEnd?: () => void;
}
const calcLeft = (target?: TDate) => {
  if (!target) {
    return 0;
  }
  const left = dayjs(target).valueOf() - Date.now();
  return left < 0 ? 0 : left;
};
export const useCountdown = (options: Options = {}) => {
  const { leftTime, targetDate, interval = 1000, onEnd } = options || {};

  const memoLeftTime = useMemo(() => {
    return isNumber(leftTime) && leftTime > 0
      ? Date.now() + leftTime * 1000
      : undefined;
  }, [leftTime]);

  const target = "leftTime" in options ? memoLeftTime : targetDate;

  const [timeLeft, setTimeLeft] = useState(() => calcLeft(target));

  const onEndRef = useLatest(onEnd);

  useEffect(() => {
    if (!target) {
      setTimeLeft(0);
      return;
    }

    setTimeLeft(calcLeft(target));

    const timer = setInterval(() => {
      const targetLeft = calcLeft(target);
      setTimeLeft(targetLeft);
      if (targetLeft === 0) {
        clearInterval(timer);
        onEndRef.current?.();
      }
    }, interval);

    return () => clearInterval(timer);
  }, [target, interval]);

  const formattedRes = useMemo(() => parseMs(timeLeft), [timeLeft]);

  return [timeLeft, formattedRes] as const;
};
