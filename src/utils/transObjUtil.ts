// 用於放置各種物件間的轉換
/**
 * @description 過濾掉物件中空白的 Field
 * @param obj 被過濾物件
 * @returns 過濾後的物件
 */
export function filterNonNull(obj: any): any {
  return Object.fromEntries(Object.entries(obj).filter(([k, v]) => v));
}

/**
 * @description 用於轉換來至 .Net core 的驗證模型, 轉換成符合ANTD的格式
 * @param model
 * @param data
 * @returns
 */
export const parseModelState = (model: any, data: any): any => {
  let newValid = { ...model };
  for (let key in newValid) {
    newValid[key] = {};
  }

  for (let key in data.ModelStateErrors) {
    newValid[key] = {
      validateStatus: "error",
      help: data.ModelStateErrors[key][0],
    };
  }
  return newValid;
};

export const parseObjToFormData = (data: any): any => {};

export const parseObjToSearchParams = (data: any): URLSearchParams => {
  let params = new URLSearchParams();
  for (let key in data) {
    if (data[key] != null) params.append(key, data[key]);
    else params.append(key, "");
  }
  return params;
};
