import { Card } from "antd";
import { useCallback, useState } from "react";
import { LoginContent, RegisterContent } from ".";

export const LoginBox = () => {
  const [loggingIn, setLoggingIn] = useState(true);

  const changeLoginState = useCallback(() => {
    setLoggingIn((prev) => !prev);
    }, [loggingIn]);

  return (
    <div className="Login-box">
      <Card className="Login-card" bordered={false}>
        {loggingIn ? (
          <LoginContent changeLoginState={changeLoginState} />
        ) : (
          <RegisterContent changeLoginState={changeLoginState} />
        )}
      </Card>
    </div>
  );
};
