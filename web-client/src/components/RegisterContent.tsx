import { Space, Typography, Button, Form, message } from "antd";
import { UserRegisterForm, UserRegisterFormFields } from "./forms";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { auth, db } from "src/config";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { addDoc, collection } from "firebase/firestore";

type RegisterContentProps = {
  changeLoginState: CallableFunction;
};

export const RegisterContent = ({ changeLoginState }: RegisterContentProps) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm<UserRegisterFormFields>();
  const { t } = useTranslation();

  const handleRegister = async () => {
    form
      .validateFields()
      .then(({ username, email, password }) => {
        setLoading(true);
        console.log(username, email, password);

        createUserWithEmailAndPassword(auth, email, password)
          .then(async (userCredential) => {
            const user = userCredential.user;
            await addDoc(collection(db, "users"), {
              uid: user.uid,
              username: username,
              email: email,
            });

            setLoading(false);
          })
          .catch((error: Error) => {
            setLoading(false);

            if (error.message.includes("email"))
              return message.error(t("Email is already in use"));

            return message.error(t("Something went wrong"));
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <ArrowLeftOutlined
        className="icon-upperleft-absolute"
        onClick={() => changeLoginState()}
      />
      <Space size={"large"} direction="vertical" style={{ width: "90%" }}>
        <Typography.Title level={2}>{t("Register")}</Typography.Title>
        <UserRegisterForm form={form} />
        <Button
          type="primary"
          size="large"
          loading={loading}
          onClick={handleRegister}
          block
        >
          {t("Register")}
        </Button>
      </Space>
    </>
  );
};
