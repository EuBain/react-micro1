import classNames from "classnames";

const UnocssIcon = ({
  icon,
  className,
  style,
}: {
  icon: string;
  className?: string;
  style?: any;
}) => {
  const ClassName = classNames(icon, className);
  return <div className={ClassName} style={style}></div>;
};
export default UnocssIcon;
