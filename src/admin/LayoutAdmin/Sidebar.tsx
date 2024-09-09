 

import { useState } from "react";
import { Layout, Menu, Drawer, Button, MenuProps } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import React from "react";

// import logo from "../assets/logo/images.png";

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  

  const handleLogin = () => {
    navigate("/login");
    setVisible(false); // Close drawer after navigating
  };

  
  const toggleDrawer = () => {
    setVisible(!visible);
  };

  const handleMenuClick = () => {
    setVisible(false); // Close drawer on menu item click
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <NavLink to="/" onClick={handleMenuClick}>
          Dashboard
        </NavLink>
      ),
    },
    {
      key: "6",
      label: (
        <NavLink to="/campaign" onClick={handleMenuClick}>
          Campaign
        </NavLink>
      ),
    },
    {
      key: "678",
      label: (
        <NavLink to="/expense" onClick={handleMenuClick}>
          Expense
        </NavLink>
      ),
    },
    {
      key: "3",
      label: (
        <NavLink to="/member" onClick={handleMenuClick}>
          Members
        </NavLink>
      ),
    },
    {
      key: "4",
      label: (
        <NavLink to="/gallery" onClick={handleMenuClick}>
          Gallery
        </NavLink>
      ),
    },
    {
      key: "468",
      label: (
        <NavLink to="/ballLost" onClick={handleMenuClick}>
          Ball Lost
        </NavLink>
      ),
    },
    {
      key: "5",
      label: (
        <NavLink to="/rules" onClick={handleMenuClick}>
          Rules
        </NavLink>
      ),
    },
    {
      key: "685",
      label: (
        <NavLink to="/notice" onClick={handleMenuClick}>
          Notice
        </NavLink>
      ),
    },
  ];

  return (
    <>
      <Sider
        className="hidden lg:block fixed left-0 top-0"
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div
          style={{
            color: "white",
            textAlign: "center",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <img src={logo} alt="BT" className="h-10 w-10 rounded-full" /> */}
          <h1 className="text-red-400 capitalize font-bold italic text-xl ml-2">
            BT <span className="text-yellow-300">Sports</span>{" "}
            <span className="text-green-600">Club</span>
          </h1>
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
          className="mt-8"
        ></Menu>

      
        

       
      </Sider>

      <Drawer
        title="Menu"
        placement="left"
        closable={true}
        onClose={toggleDrawer}
        visible={visible}
        className="lg:hidden "
      >
        <Menu mode="vertical" defaultSelectedKeys={["1"]} items={items}></Menu>
       
          <Menu mode="vertical" defaultSelectedKeys={["1"]} className="  ">
            <div className="absolute ">
              <SubMenu key="sub1" title="Manage" className=" ">
                <div className=" -">
                  <Menu.Item key="21" className="">
                    <NavLink
                      className=""
                      to="/add-user"
                      onClick={handleMenuClick}
                    >
                      Add User
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="28">
                    <NavLink to="/fund-collect" onClick={handleMenuClick}>
                      Fund Raise
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="2887">
                    <NavLink to="/expense" onClick={handleMenuClick}>
                      Expense
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="22">
                    <NavLink to="/add-notice" onClick={handleMenuClick}>
                      Notice
                    </NavLink>
                  </Menu.Item>
                </div>
              </SubMenu>
            </div>
          </Menu>
      

  
      </Drawer>

      <Button
        type="primary"
        onClick={toggleDrawer}
        icon={<MenuOutlined />}
        className="lg:hidden fixed top-4 left-4 z-50"
      />
    </>
  );
};

export default Sidebar;
