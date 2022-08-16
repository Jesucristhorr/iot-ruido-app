import { Navbar, Aside, MediaQuery } from '@mantine/core';
import { useState } from 'react';

export const SideBar = () => {
  const [opened, setOpened] = useState(false);

  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      // hidden={!opened}
      width={{ sm: 200, lg: 300 }}
      hidden={!opened}
    >
      {/* Navbar content */}
      <p>Item</p>
    </Navbar>
  );
};
