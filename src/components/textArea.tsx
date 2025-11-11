import '../assets/style/styleSheet.css'

interface TextAreaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  readOnly?: boolean;
}

function TextArea({ value, onChange, readOnly = false }: TextAreaProps) {
  return (
    <div>
      <textarea
        className='textArea'
        placeholder='ENTER YOUR TEXT'
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />
    </div>
  )
}

export default TextArea
