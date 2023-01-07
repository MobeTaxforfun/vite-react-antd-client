import { IThemeConfig } from "@/stores/data/store.d";
import { RootState } from "@/stores/initStores";
import { setStoreTheme } from "@/stores/modules/global/global.store";
import { useDispatch, useSelector } from "react-redux";

const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.global.themeConfig);
  const setTheme = (themeConfig: IThemeConfig) => {
    dispatch(setStoreTheme(themeConfig));
  };
  return {
    theme,
    setTheme,
  };
};

export default useTheme;
