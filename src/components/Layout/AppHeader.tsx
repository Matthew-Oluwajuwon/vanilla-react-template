import { Button, Switch } from "antd";
import { Header } from "antd/es/layout/layout";
import { Sun, Moon } from "lucide-react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

interface AppHeaderProps {
  collapsed: boolean;
  themeMode: "dark" | "light";
  setCollapsed: (value: boolean) => void;
  toggleTheme: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({
  collapsed,
  themeMode,
  setCollapsed,
  toggleTheme,
}) => {
  return (
    <Header data-testid="app-header" className="bg-primary-bg border-b border-b-primary flex items-center justify-between">
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
  );
};

export default AppHeader;
