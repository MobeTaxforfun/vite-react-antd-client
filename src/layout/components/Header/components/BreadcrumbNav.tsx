import { Breadcrumb } from 'antd';

const BreadcrumbNav = () => {
  return (
  <Breadcrumb style={{ margin: '15px' }}>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>List</Breadcrumb.Item>
    <Breadcrumb.Item>App</Breadcrumb.Item>
  </Breadcrumb>
  )
}

export default BreadcrumbNav