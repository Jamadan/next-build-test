const data = ({ buildTimeValue }: { buildTimeValue: string }) => {
  return (
    <div>
      <div>
        This is a Static generated page with data collected at build time
      </div>
      <div>This value is {buildTimeValue}</div>
    </div>
  );
};

export const getStaticProps = async () => {
  // simulate getting value from external source (API maybe)
  // const buildTimeValue = fetch(blah).... .json();
  const buildTimeValue = "JAMADAN BUILD";
  return {
    props: {
      buildTimeValue,
    },
  };
};

export default data;
