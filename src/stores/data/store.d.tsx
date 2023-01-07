
/**
 * 全域風格
 */
export interface IThemeConfig
{
    theme:'dark' | 'default';
}

/**
 * 全域共用的資訊包含Token、使用者基本資訊、風格設定..等等
 */
export interface IGlobalState {
    token: string;
    userInfo: any;
    themeConfig : IThemeConfig;
}