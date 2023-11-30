import PageTabs from "@/components/PageTabs";
// import { Breadcrumb, Tabs } from "antd"
// import { Content } from "antd/es/layout/layout"

interface Proptype {
    background: string,
};

const Container = (props: Proptype) => {

    const { background } = props
    return (
        <>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          {/* <Tabs>

          </Tabs>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background,
            }}
          >
            Content
          </Content> */}
          <PageTabs></PageTabs>
        </>
    )
};

export default Container;