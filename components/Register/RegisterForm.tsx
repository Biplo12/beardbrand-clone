import React from 'react';
import FormSide from './Partials/FormSide';
import TextSide from './Partials/TextSide';
const RegisterForm: React.FC = (): JSX.Element => {
  return (
    <div className="h-[89vh] w-full flex justify-between items-center bg-whitest-white mxlg:flex-col">
      <TextSide />
      <FormSide />
    </div>
  );
};
export default RegisterForm;
