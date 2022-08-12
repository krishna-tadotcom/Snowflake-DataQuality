import { Outlet } from "react-router";
import Navigation from "../Navigation/Navigation";
import { Layout } from "antd";

const { Header, Content } = Layout;

export default function MainContainer() {
  return (
    <Layout className="layout">
      <Header style={{ padding: "0" }}>
        <Navigation />
      </Header>
      <Content style={{ padding: "20px 100px", minHeight: "100vh" }}>
        <div
          className="site-layout-content"
          style={{ overflow: "auto", minHeight: "30rem" }}
        >
          <Outlet />
        </div>
      </Content>
    </Layout>

    // <div>
    //   <Navigation />
    //   <Outlet />
    // </div>
  );
}
