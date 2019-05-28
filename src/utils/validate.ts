import * as EmailValidator from 'email-validator';
import { isEmpty } from 'lodash';
import { IValidationRule } from 'src/types';

export const validate = (
  fieldName: string,
  value: string,
  schema: IValidationRule[]
): boolean => {
  const validationObject = schema.find(item => item.name === fieldName);
  if (validationObject) {
    const { required, email } = validationObject;
    if (required) {
      if (isEmpty(value)) {
        return true;
      }
      return false;
    }
    if (email) {
      if (!EmailValidator.validate(value)) {
        return true;
      }
      return false;
    }
  }
  return false;
};
