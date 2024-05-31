const Title = (props) => {
  const { children } = props;
  return (
    <h2 className="text-[24px] text-[#333333] mt-[20px] mb-[10px] font-medium">
      {children}
    </h2>
  );
};

export default Title;
