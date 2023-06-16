import { Spin } from "antd";
import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import "./App.css";
import { auth } from "./database/firebase/firebase";
import { Layout, LoginPage } from "./views";

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
