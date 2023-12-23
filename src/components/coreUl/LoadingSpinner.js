const LoadingSpinner = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin h-5 w-5 border-t-2 border-black-rgba border-solid rounded-full"></div>
        <p className="ml-2">Loading...</p>
      </div>
    </>
  );
};

export default LoadingSpinner;
