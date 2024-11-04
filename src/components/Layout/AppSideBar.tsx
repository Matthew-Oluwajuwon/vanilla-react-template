import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";

interface AppSideBarProps {
  collapsed: boolean;
}

const AppSideBar: React.FC<AppSideBarProps> = ({ collapsed }) => {
  return (
    <Sider
      role="navigation"
      data-testid="app-sidebar"
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
                key: "01",
                icon: <UploadOutlined />,
                label: "sub-nav 1",
              },
              {
                key: "02",
                icon: <UploadOutlined />,
                label: "sub-nav 2",
              },
              {
                key: "03",
                icon: <UploadOutlined />,
                label: "sub-nav 3",
              },
            ],
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: "nav 2",
            children: [
              {
                key: "04",
                icon: <UploadOutlined />,
                label: "sub-nav 4",
              },
              {
                key: "05",
                icon: <UploadOutlined />,
                label: "sub-nav 5",
              },
              {
                key: "06",
                icon: <UploadOutlined />,
                label: "sub-nav 6",
              },
            ],
          },
          {
            key: "4",
            icon: <UploadOutlined />,
            label: "nav 3",
          },
        ]}
      />
    </Sider>
  );
};

export default AppSideBar;
