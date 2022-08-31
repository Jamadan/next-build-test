const dynamicPaths = ({
  someslug,
  buildTimeValue,
}: {
  someslug: string;
  buildTimeValue: string;
}) => {
  return (
    <div>
      <div>
        This is a Static generated page with paths and data collected at build
        time
      </div>
      <div>The path is {someslug}</div>
      <div>This value is {buildTimeValue}</div>
    </div>
  );
};

export const getStaticProps = async ({
  params,
}: {
  params: { someslug: string };
}) => {
  // simulate getting value from external source (API maybe)
  // const buildTimeValue = fetch(blah).... .json();
  const buildTimeValue = "JAMADAN BUILD";
  return {
    props: {
      someslug: params.someslug,
      buildTimeValue,
    },
  };
};

export const getStaticPaths = async () => {
  // simulate getting paths from external source (Kontent)
  // const pathList = fetch(blah).... .json();

  // Get the paths we want to pre-render based on posts
  //   const paths = pathList.map((path) => ({
  //     params: { someslug: path },
  //   }));

  const paths = ["pathA", "pathB", "pathC"].map((path) => ({
    params: { someslug: path },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export default dynamicPaths;
