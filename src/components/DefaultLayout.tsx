import Head from 'next/head';
import { ReactNode, useState } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
// import { Footer } from '@mantine/core';

import { AppShell, useMantineColorScheme } from '@mantine/core';
import { SideBar } from './SideBar';
import { Header } from './Header';
import { Footer } from './Footer';

// import { SideBar } from './SideBar';

type DefaultLayoutProps = { children: ReactNode };

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Head>
        <title>Monitoreo IoT Ruido</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppShell
        padding="md"
        navbarOffsetBreakpoint="sm"
        navbar={<SideBar opened={opened} />}
        header={
          <Header
            opened={opened}
            setOpened={setOpened}
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
          />
        }
        footer={<Footer />}
      >
        <main>{children}</main>
      </AppShell>

      {process.env.NODE_ENV !== 'production' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </>
  );
};
