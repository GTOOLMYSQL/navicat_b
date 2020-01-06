import { RES_CODE } from 'src/datas/status';

export function dealResult(data) {
  return {
    data,
    code: RES_CODE.SUCCESS,
    message: '成功',
  };
}
export function dealErrorResult(error) {
  return {
    error,
    code: RES_CODE.CODE_ERROR,
    message: '失败',
  };
}
