// 用於轉換來至 .Net core 的驗證模型

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
