import LanguageSection from './languageSection'
import TextArea from './textArea'
import '../assets/style/styleSheet.css'
import arrw from '../assets/images/swap.svg'

function Homepage() {
  return (
    <div className='container'>
      {/* 1st Row: Title */}
      <h1 className='headingBar'>Language Translator</h1>

      {/* 2nd Row: Columns side by side */}
      <div className="contentRow">
        <div className="leftSideBar">
          <LanguageSection />
          <TextArea />
        </div>

        <div className="swapArrow">
          <img src={arrw} alt="arrow" height={50} width={50}/>
        </div>

        <div className="rightSideBar">
          <LanguageSection />
          <TextArea />
        </div>
      </div>
    </div>
  )
}

export default Homepage
