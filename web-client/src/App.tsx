import { useEffect, useState } from "react";
import { Layout, LoginPage } from "./views";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "./config";
import "./App.css";
import { Spin } from "antd";

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user is logged in");
        console.log(user);
        setUser(user);
      } else {
        console.log("user is logged out");
        setUser(null);
      }
      setLoading(false);
    });
  }, []);

  return loading ? <Spin size="large" /> : user ? <Layout /> : <LoginPage />;
};

export default App;
