import { useState } from 'react';
import LanguageSection from './languageSection'
import TextArea from './textArea'
import '../assets/style/styleSheet.css'
import arrw from '../assets/images/swap.svg'

function Homepage() {
  const [rotated, setRotated] = useState(false);
  const [inputText, setInputText] = useState('');
  return (
    <div className='container'>
      {/* 1st Row: Title */}
      <h1 className='headingBar'>Language Translator</h1>

      {/* 2nd Row: Columns side by side */}
      <div className="contentRow">
        <div className="leftSideBar">
          <LanguageSection />
          <TextArea 
            placeholder='ENTER YOUR TEXT'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>

        <div className="swapArrow">
          <img
            src={arrw}
            alt="swap"
            onClick={() => setRotated(!rotated)}
            className={rotated ? 'rotated' : ''}
          />
        </div>

        <div className="rightSideBar">
          <LanguageSection />
          <TextArea
            placeholder='TRANSLATED TEXT'
            value={inputText}
            onChange={() => {}}
            readOnly={true}
          />
        </div>
      </div>
    </div>
  )
}

export default Homepage
