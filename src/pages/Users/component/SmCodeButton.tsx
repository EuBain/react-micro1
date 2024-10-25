import { useEffect, useRef, useState } from "react";
import { Button, FormInstance } from "antd";
import { useCountdown } from "@/utils/hooks";
const SmCodeButton = ({ form }: { form: FormInstance }) => {
  const [flag, setFlag] = useState(true);
  const [targetDate, setTargetDate] = useState<number>();
  // const timerRef = useRef<Timeout | number | undefined>();

  const waitingTime = 10;
  const [count] = useCountdown({
    targetDate,
    onEnd: () => {
      setFlag(true);
    },
  });
  // 获取验证码
  const getSmCode = async () => {
    await form
      .validateFields(["phone"])
      .then((res) => {
        console.log(res)
        setFlag(false);
        setTargetDate(() => Date.now() + waitingTime * 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Button onClick={getSmCode} disabled={!flag}>
        {flag ? "获取验证码" : `${Math.round(count / 1000)}秒后重新获取`}
      </Button>
    </>
  );
};

export default SmCodeButton;
