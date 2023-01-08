import { IAppThemeConfig } from "@/stores/data/store.d";
import { RootState } from "@/stores/initStores";
import { setStoreTheme } from "@/stores/modules/global/global.store";
import { useDispatch, useSelector } from "react-redux";

const useCurrentTheme = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(
    (state: RootState) => state.global.appThemeConfig
  );
  const setCurrentTheme = (appThemeConfig: IAppThemeConfig) => {
    dispatch(setStoreTheme(appThemeConfig));
  };
  return {
    currentTheme,
    setCurrentTheme,
  };
};

export default useCurrentTheme;
