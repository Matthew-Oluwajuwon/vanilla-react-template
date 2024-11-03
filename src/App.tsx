import { Switch } from "antd";
import { useTheme } from "./components/ThemeProviderComponent";
import { Moon, Sun } from "lucide-react";

const App = () => {
  const { toggleTheme, themeMode } = useTheme();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-primary">
      <div className="flex items-center gap-5">
        <Switch
          value={themeMode === "dark"}
          onChange={toggleTheme}
          checkedChildren={<Moon size={18} className="mt-[1px]" />}
          unCheckedChildren={<Sun size={18} className="mt-[1px]" />}
        />
      </div>
    </div>
  );
};

export default App;
 