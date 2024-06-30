import "./CustomDivider.scss";

type Props = {
  visible?: boolean;
};

const CustomDivider = ({ visible = true }: Props) => {
  const style = visible ? {} : { backgroundColor: "transparent" };

  return <div style={style} className="CustomDivider" />;
};

export default CustomDivider;
