import { useId } from 'react';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';

import ITextInput from '../interfaces/ITextInput';

import styles from '../sass/TextInput.module.scss';

function TextInput({
  name, label, register, errors,
}: ITextInput): JSX.Element {
  const id = useId();
  return (
    <>
      <label className={`${styles.loginLabel} ${errors ? styles.loginLabelError : ''}`} htmlFor={`${id}-${name}`}>
        <span>{label}</span>
        <input id={`${id}-${name}`} {...register(name)} />
      </label>
      {errors && <ErrorMessage message={errors.message} />}
    </>
  );
}

export default TextInput;
