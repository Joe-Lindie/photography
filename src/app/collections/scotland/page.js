import StyledLinks from '@/components/coreUl/StyledLinks';

const Scotland = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <p>Scotland Collection Coming Soon..</p>
      <StyledLinks
        isInternal
        linkText="Click here to go back to Home"
        href="/"
      />
    </div>
  );
};

export default Scotland;
