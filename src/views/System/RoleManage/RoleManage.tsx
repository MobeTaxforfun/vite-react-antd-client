import { deleteRole, getListedRole, postCreateRole, putSetStatus, putUpdateRole } from '@/api/roleApi/roleApi';
import ModalConfirm from '@/components/ModalConfirm/ModalConfirm';
import ShadowCard from '@/components/ShadowCard/ShadowCard';
import ShadowSearchCard from '@/components/ShadowSearchCard/ShadowSearchCard';
import TableOperate from '@/components/TableOperate/TableOperate';
import { TPageModel } from '@/data/common';
import { TErrRole, IRoleDataType, TSearchRole } from '@/data/role';
import { parseModelState } from '@/utils/parseModelState';
import { filterNonNull } from '@/utils/queryStringUtils';
import { RedoOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Col, Empty, Row, Space, Switch, Table, Tooltip } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import qs from 'qs';
import React, { FC, useState, useEffect, useRef } from 'react'
import RoleDataModal from './components/RoleDataModal';
import RoleSearch from './components/RoleSearch';


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

// 用來分頁的 Obj 應該有辦法合併進去組件裡面
let SearchQuery: TPageModel = {
  Page: 1,
  ItemPerPage: 10
}

// 用來搜尋的 Obj 應該有辦法合併進去組件裡面
let SearchFromRole: TSearchRole = {
  RoleName: '',
  RoleCode: '',
  Status: ''
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
      render: (_, record) => {
        return (<Switch
          defaultChecked={record.Status == 0 ? false : true}
          checkedChildren="啟用"
          unCheckedChildren="停用" onChange={() => { onChangeStatus(record); }}></Switch>)
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
          <a onClick={() => { setCurrentRole(record); handleDeleteModal(); }}>刪除</a>
        </Space>
      )
    }
  ];

  // 新增/修改視窗開閉
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  // 刪除視窗開閉
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  // 操作中的資料
  const [currentRole, setCurrentRole] = useState<IRoleDataType | null>(null);
  // 用來回應錯誤訊息
  const [err, setErr] = useState(initValid);
  // 列表中的資料
  const [listData, setListData] = useState<IRoleDataType[]>();
  // 頁列
  const [pageData, setPageData] = useState<TPageModel>(SearchQuery);
  // 搜尋的物件 
  const [searchRole, setSearchRole] = useState<TSearchRole>(SearchFromRole);
  // 控制搜尋視窗
  const [showSearchFrom, setShowSearchFrom] = useState<Boolean>(true);
  // Return early, if this is the first render:
  const didMount = useRef(false);
  // 載入資料
  useEffect(() => {
    loadData();
  }, []);

  // 處理表單資料
  const loadData = () => {
    let urlObj = { ...SearchQuery, ...searchRole };
    console.log(urlObj);
    getListedRole(qs.stringify(filterNonNull(urlObj))).then(function (data) {
      let dataNew = data.Data?.TableData.map(function (element) { return { ...element, key: element.Id + Date.now() } })
      SearchQuery.Total = data.Data?.TotalCount;
      setListData(dataNew);
      setPageData(SearchQuery);
    });
  }

  // 視窗事件
  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // 刪除視窗事件
  const handleDeleteModal = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  }

  // 新增視窗事件
  const OpenCreateModal = () => {
    setCurrentRole(null);
    handleModal();
  }

  // 送出資料新增/更新
  const onSubmit = async (values: IRoleDataType) => {

    // 根據 ID 轉成 get或post 的樣子
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

  // 刪除事件
  const onBtnDelete = async () => {
    if (currentRole?.Id != null) {
      await deleteRole(currentRole?.Id);
    }
    handleDeleteModal();
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

  // 查詢事件
  const onBtnSearch = (values: TSearchRole) => {
    setSearchRole(values);
  }

  // 表格重製事件
  const onBtnReset = () => {
    setSearchRole({ ...SearchFromRole })
  }

  // 綁定搜尋事件 
  useEffect(() => {
    // 去除第一次渲染此頁
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    loadData();
  }, [searchRole]);

  // 表狀狀態切換事件
  const onChangeStatus = async (record: IRoleDataType) => {
    await putSetStatus({
      Id: record.Id,
      Status: record.Status == 1 ? 0 : 1
    });
  }

  // 切換搜尋視窗
  const handleSearchForm = () => {
    setShowSearchFrom(!showSearchFrom);
  }

  // 渲染
  return (
    <React.Fragment>
      {
        showSearchFrom ?
          <ShadowSearchCard>
            <RoleSearch
              searchFormData={searchRole}
              onSearch={onBtnSearch}
              onReset={onBtnReset}
            ></RoleSearch>
          </ShadowSearchCard> : null
      }
      <ShadowCard>
        <TableOperate
          OperateLeft={<Button onClick={OpenCreateModal}>新增</Button>}
          OperateRight={
            <React.Fragment>
              <Tooltip title="隱藏搜尋">
                <Button shape="circle" icon={<SearchOutlined />} onClick={handleSearchForm} />
              </Tooltip>
              <Tooltip title="重新整理表格">
                <Button shape="circle" icon={<RedoOutlined />} onClick={loadData} />
              </Tooltip>
            </React.Fragment>}
        />
        <Row>
          <Col span={24}>
            <Table
              columns={columnsRole}
              dataSource={listData}
              onChange={handleTableChange}
              locale={{ emptyText: (<Empty description='尚無資料'></Empty>) }}
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
      </ShadowCard>
      <RoleDataModal
        modalOpen={isModalOpen}
        onChangeModal={handleModal}
        values={currentRole}
        onSubmit={onSubmit}
        err={err}
      ></RoleDataModal>
      <ModalConfirm
        modalOpen={isDeleteModalOpen}
        onChangeModal={handleDeleteModal}
        onBtnOk={onBtnDelete}
        title='刪除精靈'
        content='您確定要刪除這個項目?'
      ></ModalConfirm>
    </React.Fragment>
  )
}

export default RoleManage