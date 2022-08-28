import React, { Dispatch, SetStateAction } from 'react';
import {
  Header as MantineHeader,
  MediaQuery,
  Burger,
  ColorScheme,
} from '@mantine/core';
import { Title, Group, ActionIcon, Tooltip } from '@mantine/core';
import { Sun, MoonStars } from 'tabler-icons-react';

interface HeaderProps {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
  colorScheme: ColorScheme;
  toggleColorScheme: (colorScheme?: ColorScheme | undefined) => void;
}

export const Header: React.FC<HeaderProps> = ({
  opened,
  setOpened,
  colorScheme,
  toggleColorScheme,
}) => {
  return (
    <MantineHeader height={80} p="xs">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
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
    </MantineHeader>
  );
};
