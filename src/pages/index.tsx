import { useState, useMemo, useCallback, CSSProperties } from 'react';

import { NextPageWithLayout } from './_app';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

import { useLocalStorageValue } from '@mantine/hooks';

type Map = google.maps.Map;
type MapOptions = google.maps.MapOptions;
type LatLngLiteral = google.maps.LatLngLiteral;

const IndexPage: NextPageWithLayout = () => {
  const [value] = useLocalStorageValue({
    key: 'color-scheme',
    getInitialValueInEffect: true,
  });
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
    id: 'google-map-script',
    version: 'weekly',
    language: 'es',
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [map, setMap] = useState<Map | null>(null);
  const pos = useMemo<LatLngLiteral>(
    () => ({
      lat: -0.95434,
      lng: -80.71094,
    }),
    [],
  );
  const zoom = useMemo<number>(() => 19, []);
  const styles = useMemo<CSSProperties>(
    () => ({ width: '100%', height: '100vh' }),
    [],
  );
  const options = useMemo<MapOptions>(
    () => ({
      mapId: value === 'dark' ? '9c798d152b70da7e' : '37908b8607394fd6',
      fullscreenControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      clickableIcons: false,
    }),
    [value],
  );
  const center = useMemo<LatLngLiteral>(
    () => ({
      lat: -0.953583,
      lng: -80.745317,
    }),
    [],
  );

  const onMapLoad = useCallback((map: Map) => {
    setMap(map);
  }, []);

  const onMapUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={styles}
          center={center}
          zoom={zoom}
          options={options}
          onLoad={onMapLoad}
          onUnmount={onMapUnmount}
        >
          <Marker
            position={pos}
            icon={{
              path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
              fillColor: '#00CCBB',
              fillOpacity: 1,
              strokeColor: '',
              strokeWeight: 0,
            }}
          />
        </GoogleMap>
      )}
      {loadError && <h1>Error</h1>}
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
