type InputProps = {
    label?: "string";
    type?: "string";
    id?: 'string';
    placeholder?: "string"
}


function Input({label, type, id, placeholder}:InputProps) {
  return (
    <div>
        {label && label.length>0 && <label htmlFor={id}>{label}:</label>}
        <input type={(type?.length && type) || 'text'} className="px-[15px] py-[10px] inline-block w-full bg-accent rounded-lg text-[14px] border" name={id} id={id} placeholder={placeholder} />
    </div>
  )
}

export default Input