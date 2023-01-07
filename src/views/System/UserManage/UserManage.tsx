import ShadowCard from '@/components/ShadowCard/ShadowCard';
import { Button, Col, Row, Space, Switch } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import UserSearch from './components/UserSearch';

const UserManage = () => {

  interface DataType {
    key: string;
    account: string;
    name: string;
    unit: string;
    phone: string;
    enable: boolean;
    create: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: '帳號',
      dataIndex: 'account',
      key: 'account',
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '單位',
      dataIndex: 'unit',
      key: 'unit',
    },
    {
      title: '手機',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '狀態',
      dataIndex: 'enable',
      key: 'enable',
      render: (_, { enable }) => {
        if (enable)
          return (<Switch checkedChildren="啟用" unCheckedChildren="停用" defaultChecked ></Switch>)
        else
          return (<Switch checkedChildren="啟用" unCheckedChildren="停用"></Switch>)
      }
    },
    {
      title: '創建時間',
      dataIndex: 'create',
      key: 'create',
    },
    {
      title: '操作',
      key: 'action',
      render: (_) => (
        <Space size="middle">
          <a>編輯</a>
          <a>刪除</a>
          <a>更多</a>
        </Space>
      )
    }
  ];

  const data: DataType[] = [
    {
      key: '1',
      account: 'systemadmin',
      name: '系統管理員',
      unit: '研發部門',
      phone: '0901001001',
      enable: true,
      create: '2022-10-19 20:54:47'
    },
    {
      key: '2',
      account: 'admin',
      name: '系統管理員',
      unit: '測試部門',
      phone: '0901001001',
      enable: false,
      create: '2022-10-19 20:54:47'
    }
  ];

  const navigate = useNavigate();

  return (
    <Fragment>
      <ShadowCard>
        <UserSearch></UserSearch>
      </ShadowCard>
      <ShadowCard>
        <Row style={{ margin: '16px 0px' }}>
          <Col span={24}>
            <Space wrap>
              <Button onClick={() => { navigate('/UserManage/Create'); }}>新增</Button>
            </Space>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Table columns={columns} dataSource={data} />
          </Col>
        </Row>
      </ShadowCard>
    </Fragment>
  )
}

export default UserManage