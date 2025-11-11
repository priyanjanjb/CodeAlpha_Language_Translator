import '../assets/style/styleSheet.css'

interface TextAreaProps {
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  readOnly?: boolean;
}

function TextArea({  placeholder ,value, onChange, readOnly = false }: TextAreaProps) {
  return (
    <div>
      <textarea
        className='textArea'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />
    </div>
  )
}

export default TextArea
