const ssr = ({ loadTimeValue }: { loadTimeValue: string }) => {
  return (
    <div>
      <div>
        This is a Static generated page with data collected at build time
      </div>
      <div>This value is {loadTimeValue}</div>
    </div>
  );
};

export const getServerSideProps = async () => {
  // called on every render
  // simulate getting value from external source (API maybe)
  // const buildTimeValue = fetch(blah).... .json();
  const runTimeValue = "JAMADAN LOAD";
  return {
    props: {
      loadTimeValue: runTimeValue,
    },
  };
};

export default ssr;
