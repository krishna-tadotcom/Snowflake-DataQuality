import { Outlet } from "react-router";
import Navigation from "../Navigation/Navigation";
import { Layout } from "antd";

const { Header, Content } = Layout;

export default function Container() {
  return (
    <Layout className="layout">
      <Header style={{ padding: "0" }}>
        <Navigation />
      </Header>
      <Content style={{ padding: "20px 100px", minHeight: "100vh" }}>
        <Outlet />
      </Content>
    </Layout>
  );
}
