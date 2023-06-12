import { Col, Row, Typography } from "antd";
import { LoginBox } from "../components";

export const LoginPage = () => {
  return (
    <div className="App-header">
      <Row>
        <Col md={24} lg={15}>
          <Row justify={"center"}>
            <Typography.Title>
              Always wanted to make your life feel more organized?
            </Typography.Title>
            <Typography.Title level={2}>
              Check out for yourself
            </Typography.Title>
          </Row>
        </Col>
        <Col md={24} lg={9}>
          <Row justify={"center"}>
            <LoginBox />
          </Row>
        </Col>
      </Row>
    </div>
  );
};
