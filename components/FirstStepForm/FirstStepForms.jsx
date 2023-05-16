'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useProject } from '../Context';

import Modal from '../Modal/Modal';
import s from './FirstStepForm.module.css';

const buttons = ['NFT', 'GameFi', 'DeFi', 'DAO', 'SocialFi', 'Metaverse', 'Tools', 'Ecosystem', 'Others'];

const FirstStepForms = () => {
  const router = useRouter();
  const { projectInfo, updateProjectInfo } = useProject();

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [url, setUrl] = useState('Alphaguilty.io/');
  const [formattedValue, setFormattedValue] = useState('');
  const [projectCategory, setProjectCategory] = useState('NFT');
  const [formData, setFormData] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedData = localStorage.getItem('formData');
      return savedData ? JSON.parse(savedData) : '';
    }
  });

  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1);
  const [activeButton, setActiveButton] = useState(false);
  const [count, setCount] = useState(0);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      category: projectCategory,
      fullTimeWorkers: count,
      mail: mail,
      name,
      url: `${'Alphaguilty.io/'}${formattedValue}`
    }));
  }, [projectCategory, count, mail, name, formattedValue]);

  const defaultUrlStyle = {
    color: 'rgba(255, 255, 255, 0.3)'
  };
  const dynamicUrlStyle = {
    color: 'white'
  };
  const dynamicActiveStyle = {
    color: '#2b8ce6'
  };

  const defaultBackgroundlStyle = {
    background: 'rgba(255, 255, 255, 0.3)'
  };
  const dynamicBackgroundStyle = {
    background: 'white'
  };
  const activeBackcroundStyle = {
    background: '#2b8ce6'
  };

  const handleFinishedClick = (e) => {
    updateProjectInfo(formData);
    localStorage.setItem('formData', JSON.stringify(formData));
    setShowModal(true);
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      const formattedValue = value.replace(/\s/g, '').toLowerCase();
      setFormattedValue(formattedValue);
      setName(value);
    }
  };

  const handleRadioChange = (e) => {
    console.log(e.target.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }));
  };

  const handleMailChange = (e) => {
    setMail(e.target.value);
  };

  const handleButtonClick = (index, value) => {
    setActiveButton(index);
    setProjectCategory(value);
  };

  const clickOnIncrement = () => {
    setCount(count + 1);
  };

  const clickOnDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className={s.globeWrapper}>
      <div className={s.leftPart}>
        <section className={s.section}>
          <div className={s.wrapper}>
            <div className={s.wrapperForCicle}>
              <div
                className={s.circleWhite}
                style={step === 1 ? dynamicBackgroundStyle : activeBackcroundStyle}
              />
              <div className={s.cicleTextWhite} style={step === 1 ? dynamicUrlStyle : dynamicActiveStyle}>
                Start First Project
              </div>
            </div>

            <div className={s.line} style={step === 1 ? defaultBackgroundlStyle : activeBackcroundStyle} />

            <div className={s.wrapperForCicle}>
              <div
                className={s.circle}
                style={
                  step === 1 ? defaultUrlStyle : step === 2 ? dynamicBackgroundStyle : activeBackcroundStyle
                }
              />
              <div
                className={s.circleText}
                style={step === 1 ? defaultUrlStyle : step === 2 ? dynamicUrlStyle : dynamicActiveStyle}
              >
                Project Details
              </div>
            </div>

            <div
              className={s.line}
              style={
                step === 1 ? defaultUrlStyle : step === 2 ? dynamicBackgroundStyle : activeBackcroundStyle
              }
            />

            <div className={s.wrapperForCicle}>
              <div
                className={s.circle}
                style={
                  step === 1 ? defaultUrlStyle : step === 2 ? defaultBackgroundlStyle : dynamicBackgroundStyle
                }
              />
              <div
                className={s.circleText}
                style={step === 1 ? defaultUrlStyle : step === 2 ? defaultUrlStyle : dynamicUrlStyle}
              >
                Create Project
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={s.rightPart}>
        {step === 1 && (
          <div>
            <div className={s.container}>
              <p className={s.text}>To Create Quest you need firstly create Project</p>
              <h1 className={s.title}>Add New Project</h1>
              <form onSubmit={handleFormSubmit}>
                <label className={s.labelForm} htmlFor="name" type="text">
                  Project Name (It can be changed later)
                </label>
                <input
                  className={s.inputForm}
                  id="name"
                  name="name"
                  required
                  onChange={handleChange}
                  pattern="[A-Za-z0-9\s]+"
                />
                <br />
                <label className={s.labelForm} htmlFor="url">
                  Project URL (It cannot be changed after creation)
                </label>
                <input
                  className={s.inputForm}
                  id="url"
                  name="url"
                  required
                  readOnly
                  onChange={handleRadioChange}
                  value={`${url}${formattedValue}`}
                  style={name ? dynamicUrlStyle : defaultUrlStyle}
                />
                <label className={s.labelForm} htmlFor="btn">
                  Project Category (It cannot be changed after creation)
                </label>
                <div className={s.wrapperButtons}>
                  {buttons.map((button, index) => (
                    <button
                      id="btn"
                      key={index}
                      type="button"
                      value={button}
                      className={`${s.btn} ${activeButton === index ? s.btnActive : ''}`}
                      onClick={() => handleButtonClick(index, button)}
                    >
                      {button}
                    </button>
                  ))}
                </div>
                <button type="submit" className={s.btnForm} onClick={handleNextStep}>
                  Add Project
                </button>
              </form>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <div className={s.container}>
              <p className={s.text}>Project Details</p>
              <h1 className={s.title}>What is your main goal with AlphaQuest?</h1>
              <form onSubmit={handleFormSubmit}>
                <div className={s.radioWrapper}>
                  <input
                    type="radio"
                    id="growCommunity"
                    name="goal"
                    value="Grow My Community"
                    onChange={handleRadioChange}
                  />
                  <label htmlFor="Grow My Community" className={s.labelRadioForm}>
                    Grow My Community
                  </label>
                </div>

                <div className={s.radioWrapper}>
                  <input
                    type="radio"
                    id="members"
                    name="goal"
                    value="Activate Existing Members"
                    onChange={handleRadioChange}
                  />
                  <label htmlFor="activeMembers" className={s.labelRadioForm}>
                    Activate Existing Members
                  </label>
                </div>

                <div className={s.radioWrapper}>
                  <input
                    type="radio"
                    id="myMembers"
                    name="goal"
                    value="Understand My Members"
                    onChange={handleRadioChange}
                  />
                  <label htmlFor="myMembers" className={s.labelRadioForm}>
                    Understand My Members
                  </label>
                </div>

                <div className={s.radioWrapper}>
                  <input type="radio" id="other" name="goal" value="other" onChange={handleRadioChange} />
                  <label htmlFor="other" className={s.labelRadioForm}>
                    Other
                  </label>
                </div>

                <div className={s.btnFormWrapper}>
                  <button type="button" className={`${s.btnBack} ${s.btnForm}`} onClick={handlePreviousStep}>
                    Back
                  </button>
                  <button type="submit" className={`${s.btnContinue} ${s.btnForm}`} onClick={handleNextStep}>
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <div className={s.container}>
              <p className={s.text}>Create Project</p>
              <h2 className={s.title}>How many full-time workers on the project?</h2>
              <form onSubmit={handleFormSubmit}>
                <div className={s.countWrapper}>
                  <button onClick={clickOnDecrement} className={s.countBtn}>
                    -
                  </button>
                  <p className={s.countText}>{count}</p>
                  <button onClick={clickOnIncrement} className={s.countBtn}>
                    +
                  </button>
                </div>
                <h2 className={s.title}>Are you pre or post product launch?</h2>
                <div className={s.radioWrapper}>
                  <input
                    type="radio"
                    id="preProduct"
                    name="productLaunch"
                    value="Pre Product"
                    onChange={handleRadioChange}
                  />
                  <label htmlFor="preProduct" className={s.labelRadioForm}>
                    Pre Product
                  </label>
                </div>
                <div className={s.radioWrapper}>
                  <input
                    type="radio"
                    id="postProduct"
                    name="productLaunch"
                    value="Post Product"
                    onChange={handleRadioChange}
                  />
                  <label htmlFor="postProduct" className={s.labelRadioForm}>
                    Post Product
                  </label>
                </div>

                <label className={s.title} htmlFor="email" type="mail">
                  Contact Email
                </label>
                <br />
                <input
                  className={s.emailInput}
                  id="email"
                  name="email"
                  type="mail"
                  minLength="11"
                  required
                  onChange={handleMailChange}
                />
                <div className={s.btnFormWrapper}>
                  <button type="button" className={`${s.btnBack} ${s.btnForm}`} onClick={handlePreviousStep}>
                    Back
                  </button>
                  <button
                    type="submit"
                    className={`${s.btnContinue} ${s.btnForm}`}
                    onClick={handleFinishedClick}
                  >
                    Create Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showModal && <Modal />}

        <img src="/assets/gradient.png" alt="" className={s.gradientImg} />
      </div>
    </div>
  );
};

export default FirstStepForms;
