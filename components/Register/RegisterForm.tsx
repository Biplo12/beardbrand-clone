import { selectUser } from '@state/user/userSlice';
import { useAppSelector } from '@store/store-hooks';
import React from 'react';
import FormSide from './Partials/FormSide';
import TextSide from './Partials/TextSide';
const RegisterForm: React.FC = (): JSX.Element => {
  const user = useAppSelector(selectUser);
  return (
    <div
      className={`mt-[11vh] h-[89vh] w-full flex justify-between items-center bg-whitest-white mxlg:flex-col`}
    >
      <TextSide />
      <FormSide />
    </div>
  );
};
export default RegisterForm;
