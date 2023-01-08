/**
 * 全域風格
 */
export interface IAppThemeConfig
{
    theme: string;
}

/**
 * 全域共用的資訊包含Token、使用者基本資訊、風格設定..等等
 */
export interface IGlobalState {
    token: string;
    userInfo: any;
    appThemeConfig : IAppThemeConfig;
}

/**
 * 控制板型 手機/桌機 與 Menu 開關
 */
export interface ILayoutState{
    currentDevice : string
    collapsed : boolean
}