import '../assets/style/language.css'
interface Props {
  language: string;
}

function LanguageSection() {
  return (
    <div className='languageSection'>
      <select className='langSelctor'>
        <option value="selectLanguage">Select Language</option>
        <option value="english">English</option>
        <option value="sinhala">Sinhala</option>
        <option value="tamil">Tamil</option>
        <option value="french">French</option>
      </select>
    </div>
  )
}

export default LanguageSection
