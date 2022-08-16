import Head from 'next/head';
import { ReactNode, useState } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Navbar, MediaQuery, Burger, Footer } from '@mantine/core';

import {
  AppShell,
  Title,
  Header,
  Group,
  ActionIcon,
  Tooltip,
  useMantineColorScheme,
} from '@mantine/core';
import { Sun, MoonStars } from 'tabler-icons-react';
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
        navbar={
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            width={{ sm: 200, lg: 200 }}
            hidden={!opened}
          >
            {/* Navbar content */}

            <p>Item 1</p>
            <p>Item 2</p>
            <p>Item 3 </p>
            <p>Item 4</p>
          </Navbar>
        }
        footer={
          <Footer
            height={90}
            p="md"
            style={{
              background: '#0984E3',
              color: '#ffff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <p style={{ marginTop: '0' }}>
                Desarrollado por{' '}
                <a
                  href="#"
                  style={{
                    textDecoration: 'none',
                    color: '#ffff',
                    fontWeight: 'bold',
                  }}
                >
                  Jennifer
                </a>{' '}
                y{' '}
                <a
                  href="#"
                  style={{
                    textDecoration: 'none',
                    color: '#ffff',
                    fontWeight: 'bold',
                  }}
                >
                  Jesús
                </a>
              </p>
              <div>GITHUB</div>
            </div>
          </Footer>
        }
        header={
          <Header height={80} p="xs">
            <div
              style={{ display: 'flex', alignItems: 'center', height: '100%' }}
            >
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  // color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
              <Group position="apart">
                <Title order={2}>Monitoreo del ruido</Title>
                <Tooltip
                  position="left"
                  label={colorScheme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
                  withArrow
                >
                  <ActionIcon onClick={() => toggleColorScheme()}>
                    {colorScheme === 'dark' ? <Sun /> : <MoonStars />}
                  </ActionIcon>
                </Tooltip>
              </Group>
            </div>
          </Header>
        }
      >
        <main>{children}</main>
      </AppShell>

      {process.env.NODE_ENV !== 'production' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </>
  );
};
