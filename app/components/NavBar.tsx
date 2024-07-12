"use client";

import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Badge, Button, Drawer, Dropdown, Form, Indicator, Input, Menu, Navbar } from 'react-daisyui';

function NavBar() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  const toggleVisible = useCallback(() => {
    setVisible(visible => !visible);
  }, []);

  const navigateToPage = (path: string) => {
    router.push(`/${path}`);
  };

  return (
    <Navbar>
      <Navbar.Start>
        <Dropdown>
          <Button tag="label" color="ghost" shape="circle" tabIndex={0}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </Button>
          <Dropdown.Menu className="menu-sm w-52 mt-3 z-[1]">
          <Dropdown.Item onClick={() => navigateToPage('1')}>ALL RECIPE</Dropdown.Item>
            <Dropdown.Item onClick={() => navigateToPage('/')}>HOME</Dropdown.Item>
            <Dropdown.Item onClick={() => navigateToPage('3')}>SALADS</Dropdown.Item>
            <Dropdown.Item onClick={() => navigateToPage('4')}>VEGETABLE</Dropdown.Item>
            <Dropdown.Item onClick={() => navigateToPage('5')}>SWEET THINGS</Dropdown.Item>
            <Dropdown.Item onClick={() => navigateToPage('6')}>DINNER</Dropdown.Item>
            <Dropdown.Item onClick={() => navigateToPage('about')}>ABOUT</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Start>
      <Navbar.Center>
        <Button tag="a" color="ghost" className="normal-case text-xl">
          Simple Food
        </Button>
      </Navbar.Center>
      <Navbar.End className="navbar-end">
        <Button color="ghost" shape="circle" onClick={toggleVisible}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </Button>
        <div className="absolute right-0 top-0 h-full">
          <Drawer
            open={visible}
            onClickOverlay={toggleVisible}
            side={(
              <Menu className="p-4 w-80 h-full bg-base-200 text-base-content">
                <Menu.Item>
                  <Form>
                    <Input bordered type="text" placeholder="Search" className="w-32 md:w-auto" />
                  </Form>
                </Menu.Item>
              </Menu>
            )}
          />
        </div>
      </Navbar.End>
    </Navbar>
  );
}

export default NavBar;
