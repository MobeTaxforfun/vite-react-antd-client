import { message } from "antd";

/**
 * @description: 將 Http 訊息反射至 message 組件
 * @param {Number} status
 * @return void
 */

export const notifyStatus = (status: number): void => {
  switch (status) {
    case 401:
      message.error("尚未認證!!", 1);
      break;
    case 403:
      message.error("尚無權限!!", 1);
      break;
    default:
      message.error("伺服器忙碌中，請稍後再試!!!", 1);
      break;
  }
};
