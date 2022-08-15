import Head from 'next/head';
import { ReactNode } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';

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

type DefaultLayoutProps = { children: ReactNode };

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <>
      <Head>
        <title>Monitoreo IoT Ruido</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppShell
        padding="md"
        header={
          <Header height={60} p="xs">
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
