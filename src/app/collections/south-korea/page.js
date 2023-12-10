import StyledLinks from '@/components/coreUl/StyledLinks';

const Korea = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <p>Korea Collection Coming Soon..</p>
      <StyledLinks
        isInternal
        linkText="Click here to go back to Home"
        href="/"
      />
    </div>
  );
};

export default Korea;
