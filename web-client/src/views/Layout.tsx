import { Link, useNavigate } from "react-router-dom";

import { Layout as LayoutAnt, Menu } from "antd";
import { RouterSwitch } from "src/components";
import { Footer } from "antd/es/layout/layout";
import { signOut } from "firebase/auth";
import { auth } from "src/config";

export const Layout = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error: Error) => {
        console.log(error);
      });
  };

  return (
    <LayoutAnt>
      <LayoutAnt.Header style={{ display: "flex", alignItems: "center" }}>
        <div className="Layout-header-wrapper">
            <Link to="/home">Logo</Link>
          <Menu theme="light" mode={"horizontal"}>
            <Menu.Item key="logout" onClick={() => handleLogout()}>
              Logout
            </Menu.Item>
          </Menu>
        </div>
      </LayoutAnt.Header>

      <LayoutAnt.Content className="content-wrapper">
        <RouterSwitch />
      </LayoutAnt.Content>

      <LayoutAnt.Footer>
        <Footer />
      </LayoutAnt.Footer>
    </LayoutAnt>
  );
};
