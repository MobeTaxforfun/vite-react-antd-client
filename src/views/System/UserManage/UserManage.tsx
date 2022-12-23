import { theme, Card } from 'antd';
import {Fragment} from 'react';


const UserManage = () => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const cardStyle = { 
    boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
    margin:'16px 0px'
 }

  return (
    <Fragment>
      <Card style={cardStyle}>
        Search Bar T
      </Card>
      <Card style={cardStyle}>
        Table
      </Card>
    </Fragment>
  )
}

export default UserManage