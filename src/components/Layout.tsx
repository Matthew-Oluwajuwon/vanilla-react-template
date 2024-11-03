import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, Switch } from "antd";
import { useTheme } from "./ThemeProviderComponent";
import { Moon, Sun } from "lucide-react";
import { Outlet } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { themeMode, toggleTheme } = useTheme();

  return (
    <Layout className="h-screen bg-primary-bg">
      <Sider
        trigger={null}
        className="bg-primary-bg border-r border-r-primary p-2"
        collapsible
        collapsed={collapsed}
      >
        <div className="h-10 m-2 rounded-md" />
        <Menu
          mode="inline"
          className="bg-primary-bg"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["1", "2"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "nav 1",
              children: [
                {
                  key: "3",
                  icon: <UploadOutlined />,
                  label: "nav 3",
                },
                {
                  key: "3",
                  icon: <UploadOutlined />,
                  label: "nav 3",
                },
                {
                  key: "3",
                  icon: <UploadOutlined />,
                  label: "nav 3",
                },
              ],
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
              children: [
                {
                  key: "3",
                  icon: <UploadOutlined />,
                  label: "nav 3",
                },
                {
                  key: "3",
                  icon: <UploadOutlined />,
                  label: "nav 3",
                },
                {
                  key: "3",
                  icon: <UploadOutlined />,
                  label: "nav 3",
                },
              ],
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout className="bg-primary-bg">
        <Header className="bg-primary-bg border-b border-b-primary flex items-center justify-between">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="w-10 h-10 -ml-10"
          />
          <Switch
            value={themeMode === "dark"}
            onChange={toggleTheme}
            unCheckedChildren={<Sun size={18} className="mt-[1px]" />}
            checkedChildren={<Moon size={18} className="mt-[1px]" />}
          />
        </Header>
        <Content className="p-5 m-5 bg-primary-bg">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
