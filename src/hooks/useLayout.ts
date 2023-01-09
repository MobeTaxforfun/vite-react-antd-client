import { ILayoutState } from "@/stores/data/store.d";
import { RootState } from "@/stores/initStores";
import {
  onChangeStoreCollapse,
  setStoreDevice,
} from "@/stores/modules/layout/layout.store";
import { useDispatch, useSelector } from "react-redux";

/**
 *
 * @returns currentLayout : 現在版型, setDevice : 切換裝置手機或桌機, onChangeCollapse 選單開合
 */
const useLayout = (): {
  currentLayout: ILayoutState;
  setDevice: (device: string) => void;
  onChangeCollapse: () => void;
} => {
  const dispatch = useDispatch();
  const currentLayout = useSelector((state: RootState) => state.layout);

  const setDevice = (device: string) => {
    dispatch(setStoreDevice(device));
  };

  const onChangeCollapse = () => {
    dispatch(onChangeStoreCollapse());
  };

  return {
    currentLayout,
    setDevice,
    onChangeCollapse,
  };
};

export default useLayout;
