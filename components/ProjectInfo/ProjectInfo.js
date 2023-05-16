'use client';

import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import s from './ProjectInfo.module.css';
import style from '../FirstStepForm/FirstStepForm.module.css';
import { useProject } from '../Context';
const ProjectInfo = () => {
  const router = useRouter();
  const { projectInfo } = useProject();
  console.log(projectInfo);

  return (
    <div className={s.container}>
      <button onClick={() => router.push('/')} className={style.btnForm}>
        Home page
      </button>
      <div>
        <h2 className={s.title}>Information about your project</h2>
        <p className={s.text}>
          Name: <span className={s.category_text}>{projectInfo?.name}</span>
        </p>
        <p className={s.text}>
          URL:
          <span className={s.category_text}>{projectInfo?.url}</span>
        </p>
      </div>
      <div>
        <h2 className={s.title}>Project details</h2>
        <p className={s.text}>
          Main goal: <span className={s.category_text}>{projectInfo?.goal}</span>
        </p>
        <p className={s.text}>
          Fultime workers: <span className={s.category_text}>{projectInfo?.fullTimeWorkers}</span>
        </p>
        <p className={s.text}>
          Product lounch: <span className={s.category_text}>{projectInfo?.productLaunch}</span>
        </p>
        <p className={s.text}>
          Your email: <span className={s.category_text}>{projectInfo?.mail}</span>
        </p>
      </div>
      <img src="/assets/gradient.png" alt="" className={style.gradientImg} />
    </div>
  );
};

export default ProjectInfo;
