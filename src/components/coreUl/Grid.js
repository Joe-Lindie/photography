const Grid = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-4 px-3 md:px-20">{children}</div>
  );
};

export default Grid;
