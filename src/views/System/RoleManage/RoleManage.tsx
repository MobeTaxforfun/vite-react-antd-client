import { getListedRole, postCreateRole, putUpdateRole } from '@/api/roleApi/roleApi';
import { TPageModel } from '@/data/common';
import { TErrRole, IRoleDataType } from '@/data/role';
import { parseModelState } from '@/utils/parseModelState';
import { filterNonNull } from '@/utils/queryStringUtils';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Card, Col, Modal, Row, Space, Switch, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import qs from 'qs';
import React, { FC, useState, useEffect } from 'react'
import RoleDataModal from './components/RoleDataModal';
import RoleSearch from './components/RoleSearch';

const cardStyle = {
  boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
  margin: '16px 0px'
}

const { confirm } = Modal;
const showDeleteConfirm = () => {
  confirm({
    title: '刪除精靈',
    icon: <ExclamationCircleFilled />,
    content: '您是否確定刪除此項目',
    okText: '確定',
    okType: 'danger',
    cancelText: '取消',
    onOk() {
    },
    onCancel() {
    },
  });
};

const RoleManage: FC = () => {

  // 綁定 Table
  const columnsRole: ColumnsType<IRoleDataType> = [
    {
      title: '角色名稱',
      dataIndex: 'RoleName',
      key: 'RoleName',
    },
    {
      title: '權限標示',
      dataIndex: 'RoleCode',
      key: 'RoleCode',
    },
    {
      title: '顯示順序',
      dataIndex: 'Sort',
      key: 'Sort',
    },
    {
      title: '狀態',
      dataIndex: 'Status',
      key: 'Status',
      render: (_, { Status }) => {
        if (Status)
          return (<Switch checkedChildren="啟用" unCheckedChildren="停用" defaultChecked ></Switch>)
        else
          return (<Switch checkedChildren="啟用" unCheckedChildren="停用"></Switch>)
      }
    },
    {
      title: '創建時間',
      dataIndex: 'CreateTimeText',
      key: 'CreateTimeText',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => { setCurrentRole(record); handleModal(); }}>編輯</a>
          <a onClick={showDeleteConfirm}>刪除</a>
        </Space>
      )
    }
  ];

  // 綁定後端回應的欄位驗證訊息
  const initValid: TErrRole = {
    key: {},
    RoleName: {},
    RoleCode: {},
    Sort: {},
    Status: {},
    Remark: {},
    create: {}
  }

  let SearchQuery: TPageModel = {
    Page: 1,
    ItemPerPage: 10
  }

  let SearchFrom = {
  };

  // 視窗開閉
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  // 操作中的資料
  const [currentRole, setCurrentRole] = useState<IRoleDataType | null>(null);
  // 用來回應錯誤訊息
  const [err, setErr] = useState(initValid);
  // 列表中的資料
  const [listData, setListData] = useState<IRoleDataType[]>();
  // 頁列
  const [pageData, setPageData] = useState<TPageModel>(SearchQuery);

  // 載入資料
  useEffect(() => {
    loadData();
  }, []);

  // 處理表單資料
  const loadData = () => {
    let urlObj = { ...SearchQuery, ...SearchFrom };
    getListedRole(qs.stringify(filterNonNull(urlObj))).then(function (data) {
      console.log(data);
      let dataNew = data.Data?.TableData.map(function (element) { return { ...element, key: element.Id + Date.now() } })
      setListData(dataNew);
      SearchQuery.Total = data.Data?.TotalCount;
      setPageData(SearchQuery);
    });
  }

  // 視窗事件
  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // 新增
  const OpenCreateModal = () => {
    setCurrentRole(null);
    handleModal();
  }

  // 送出資料
  const onSubmit = async (values: IRoleDataType) => {

    // 根據 ID 轉成 get或post 的樣子
    debugger;
    let data;
    if (values.Id == 0) {
      data = await postCreateRole({ ...values });
    }
    else {
      data = await putUpdateRole({ ...values });
    }

    if (data.ModelStateErrors) {
      setErr(parseModelState(initValid, data.ModelStateErrors));
      return;
    }

    if (!data.Status) {
      return;
    }

    handleModal();
    loadData();
  }

  // 表格事件
  const handleTableChange = (
    pagination: any,
    filters: any,
    sorter: any,
    extra: any) => {

    if (extra.action === 'paginate') {
      SearchQuery.Page = pagination.current;
      SearchQuery.ItemPerPage = 10;
      loadData();
    }
  }

  return (
    <React.Fragment>
      <Card style={cardStyle}>
        <RoleSearch></RoleSearch>
      </Card>
      <Card style={cardStyle}>
        <Row style={{ margin: '16px 0px' }}>
          <Col span={24}>
            <Space wrap>
              <Button onClick={OpenCreateModal}>新增</Button>
            </Space>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            {/* 把識別的Key 改成ID */}
            <Table
              columns={columnsRole}
              dataSource={listData}
              onChange={handleTableChange}
              pagination={{
                position: ['bottomCenter'],
                current: pageData.Page,
                pageSize: pageData.ItemPerPage,
                total: pageData.Total,
                showSizeChanger: false,
                showTotal: (total) => `共 ${total} 筆`,
              }} />
          </Col>
        </Row>
      </Card>
      <RoleDataModal
        modalOpen={isModalOpen}
        onChangeModal={handleModal}
        values={currentRole}
        onSubmit={onSubmit}
        err={err}
      ></RoleDataModal>
    </React.Fragment>
  )
}

export default RoleManage