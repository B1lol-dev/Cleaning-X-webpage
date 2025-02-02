interface IContainer {
  children: JSX.Element;
  classes?: string;
}

export const Container = ({ children, classes = "" }: IContainer) => {
  return (
    <div className={`container mx-auto max-w-[1200px] px-5 ${classes}`}>
      {children}
    </div>
  );
};
