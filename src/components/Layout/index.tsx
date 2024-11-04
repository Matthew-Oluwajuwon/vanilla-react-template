import { Layout } from "antd";
import { useState } from "react";
import { useTheme } from "../ThemeProviderComponent";
import AppSideBar from "./AppSideBar";
import AppHeader from "./AppHeader";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { themeMode, toggleTheme } = useTheme();

  return (
    <Layout className="h-screen bg-primary-bg">
      <AppSideBar collapsed={collapsed} />
      <Layout className="bg-primary-bg">
        <AppHeader
          collapsed={collapsed}
          themeMode={themeMode}
          setCollapsed={setCollapsed}
          toggleTheme={toggleTheme}
        />
        <Content className="p-5 m-5 bg-primary-bg">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
