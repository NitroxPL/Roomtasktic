import { Space, Typography, Button, Divider, Form, message } from "antd";
import { UserLoginForm, UserLoginFormFields } from "./forms";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { auth } from "src/config";

type LoginContentProps = {
  changeLoginState: CallableFunction;
};

export const LoginContent = ({ changeLoginState }: LoginContentProps) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm<UserLoginFormFields>();
  const { t } = useTranslation();

  const handleLogin = async () => {
    form
      .validateFields()
      .then(({ email, password }) => {
        setLoading(true);

        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            setLoading(false);
          })
          .catch((error: Error) => {
            setLoading(false);
            if (error.message.includes("user-not-found"))
              return message.error(t("User with this email does not exist"));
            if (error.message.includes("wrong-password"))
              return message.error(t("Wrong password"));

            return message.error(t("Something went wrong"));
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Space size={"large"} direction="vertical" style={{ width: "90%" }}>
        <Typography.Title level={2}>{t("Login header")}</Typography.Title>
        <UserLoginForm form={form} />
        <Button
          type="primary"
          size="large"
          htmlType="submit"
          loading={loading}
          onClick={handleLogin}
          block
        >
          {t("Login")}
        </Button>
        <Button type="link" size="large" block>
          {t("Forgot password?")}
        </Button>
      </Space>
      <Divider />
      <Space size={"large"} direction="vertical" style={{ width: "90%" }}>
        <Typography.Title level={2}>Dołącz do nas</Typography.Title>
        <Button
          type="primary"
          size="large"
          onClick={() => changeLoginState()}
          block
        >
          {t("Register")}
        </Button>
      </Space>
    </>
  );
};
