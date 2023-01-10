import { DEVICE } from "@/config/config";

/**
 * 用來取得最一開始渲染時的資訊
 * @returns
 */
export const getGlobalDevice = (): {
  device: string;
  collapsed: boolean;
} => {
  const device = /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)
    ? DEVICE.MOBILE
    : DEVICE.DESKTOP;
  const collapsed = device !== DEVICE.DESKTOP;

  return {
    device,
    collapsed,
  };
};
