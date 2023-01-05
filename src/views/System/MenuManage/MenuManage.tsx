import ShadowCard from '@/components/ShadowCard/ShadowCard'
import { Button, Col, Row, Space } from 'antd'
import Table, { ColumnsType } from 'antd/es/table';
import { Fragment } from 'react'
import MenuSearch from './components/MenuSearch'

interface DataType {
  key: React.ReactNode;
  name: string;
  icon: string;
  sort: number;
  permissionCode: string;
  componentPath: string;
  routePath: string;
  menuType: number;
  status: boolean;
  children?: DataType[];
}

const columns: ColumnsType<DataType> = [
  {
    title: '名稱',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'ICON',
    dataIndex: 'icon',
    key: 'icon',
  },
  {
    title: '排序',
    dataIndex: 'sort',
    key: 'sort',
  },
  {
    title: '權限代號',
    dataIndex: 'permissionCode',
    key: 'permissionCode',
  },
  {
    title: '組件',
    dataIndex: 'componentPath',
    key: 'componentPath',
  },
  {
    title: '路由',
    dataIndex: 'routePath',
    key: 'routePath',
  },
  {
    title: '屬性',
    dataIndex: 'menuType',
    key: 'menuType',
  },
  {
    title: '狀態',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '操作',
    key: 'action'
  }
];

const data: DataType[] = [
  {
    key: 1,
    name: '系統管理',
    icon: 'icon',
    sort: 1,
    permissionCode: '',
    componentPath: '',
    routePath: '',
    menuType: 1,
    status: true,
    children: [
      {
        key: 2,
        name: '選單管理',
        icon: 'icon',
        sort: 1,
        permissionCode: '',
        componentPath: '',
        routePath: '',
        menuType: 1,
        status: true,
        children: [
          {
            key: 3,
            name: '選單查詢',
            icon: 'icon',
            sort: 1,
            permissionCode: '',
            componentPath: '',
            routePath: '',
            menuType: 1,
            status: true
          }
        ],
      }
    ]
  }
];

const MenuManage = () => {
  return (
    <Fragment>
      <ShadowCard>
        <MenuSearch></MenuSearch>
      </ShadowCard>
      <ShadowCard>
        <Row style={{ margin: '16px 0px' }}>
          <Col span={24}>
            <Space wrap>
              <Button>新增</Button>
              <Button>展開/摺疊</Button>
            </Space>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Table
              columns={columns}
              dataSource={data} />
          </Col>
        </Row>
      </ShadowCard>
    </Fragment>
  )
}

export default MenuManage