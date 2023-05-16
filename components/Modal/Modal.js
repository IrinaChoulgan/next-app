'use client';

import { useRouter } from 'next/navigation';

import s from './Modal.module.css';
import style from '../FirstStepForm/FirstStepForm.module.css';

const Modal = () => {
  const router = useRouter();

  return (
    <div className={s.modal}>
      <div className={s.modal_content}>
        <h2 className={s.modal_title}>Congratulations!</h2>
        <p className={s.modal_text}>Your project has been created.</p>
        <div className={s.button_container}>
          <button onClick={() => router.push('/project')} className={`${s.modal_btn} ${style.btnForm}`}>
            Info about your created project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
