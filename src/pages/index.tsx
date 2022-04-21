import { trpc } from '../utils/trpc';
import { NextPageWithLayout } from './_app';
import { Alert, List, Loader } from '@mantine/core';

const IndexPage: NextPageWithLayout = () => {
  const noiseQuery = trpc.useQuery(['noise.all']);

  return (
    <>
      <List>
        {noiseQuery.data &&
          noiseQuery.data?.map((val) => (
            <List.Item key={val.id}>
              {val.noise} | {val.latitude} | {val.longitude}
            </List.Item>
          ))}
        {noiseQuery.isLoading && <Loader />}
        {noiseQuery.isError && <Alert title="¡Oh noo!">Explotó todo :(</Alert>}
      </List>
    </>
  );
};

export default IndexPage;

/**
 * If you want to statically render this page
 * - Export `appRouter` & `createContext` from [trpc].ts
 * - Make the `opts` object optional on `createContext()`
 *
 * @link https://trpc.io/docs/ssg
 */
// export const getStaticProps = async (
//   context: GetStaticPropsContext<{ filter: string }>,
// ) => {
//   const ssg = createSSGHelpers({
//     router: appRouter,
//     ctx: await createContext(),
//   });
//
//   await ssg.fetchQuery('post.all');
//
//   return {
//     props: {
//       trpcState: ssg.dehydrate(),
//       filter: context.params?.filter ?? 'all',
//     },
//     revalidate: 1,
//   };
// };
