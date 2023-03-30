import { FieldError, UseFormRegister } from 'react-hook-form';
import ILoginForm from './ILoginForm';

interface ITextInput {
  name: keyof ILoginForm;
  label: string;
  register: UseFormRegister<ILoginForm>;
  errors: FieldError | undefined;
}

export default ITextInput;
