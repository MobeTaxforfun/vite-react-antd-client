import { getFailed, getSuccessful, getTraceForbid, getTraceUnauthorized } from '@/api/modules/axiosdemo.api'
import { setToken } from '@/stores/modules/global/global.store';
import { Card, Row, Col, Button, Space } from 'antd'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormCreateDemo from './components/FormCreateDemo';
import FormValidateDemo from './components/FormValidateDemo';
import FormValidateSummary from './components/FormValidateSummary';
import { RootState } from '../../../stores/initStores';

const RequestDemo = () => {

  const dispatch = useDispatch();
  const tokenNow = useSelector((state: RootState) => state.global.token);

  const btnSuccessful = async () => {
    console.log(await getSuccessful());
  }

  const btnFailed = async () => {
    console.log(await getFailed());
  }

  const btnUnauthorized = async () => {
    console.log(await getTraceUnauthorized());
  }

  const btnForbid = async () => {
    console.log(await getTraceForbid());
  }

  const btnReduxSetToken = () => {
    dispatch(setToken("test"));
    console.log(tokenNow);
  }

  return (
    <React.Fragment>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Row gutter={16}>
          <Col span={6}>
            <Card title="呼叫 Get API (成功)" bordered={false}>
              <Button onClick={btnSuccessful}>確認</Button>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="呼叫 Get API (失敗)" bordered={false}>
              <Button onClick={btnFailed}>確認</Button>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="呼叫 Get API (401)" bordered={false}>
              <Button onClick={btnUnauthorized}>確認</Button>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="呼叫 Get API (402)" bordered={false}>
              <Button onClick={btnForbid}>確認</Button>
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={6}>
            <Card title="呼叫 Post Json API (成功)" bordered={false}>
              <FormCreateDemo></FormCreateDemo>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="呼叫 Post FormData API (Validate)" bordered={false}>
              <FormValidateDemo></FormValidateDemo>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="呼叫 Post FormData API (Validate Summary)" bordered={false}>
              <FormValidateSummary></FormValidateSummary>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Redux 測試" bordered={false}>
              <Button onClick={() => {
                btnReduxSetToken()
              }}>確定</Button>
            </Card>
          </Col>
        </Row>
      </Space>
    </React.Fragment>
  )
}

export default RequestDemo