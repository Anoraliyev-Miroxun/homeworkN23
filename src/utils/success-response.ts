import { IResponse } from 'src/interface/success-response';

export const getsuccessRes = (
  data: object,
  statusCode: number = 200,
): IResponse => {
  return {
    statusCode,
    message: 'success',
    data,
  };
};
