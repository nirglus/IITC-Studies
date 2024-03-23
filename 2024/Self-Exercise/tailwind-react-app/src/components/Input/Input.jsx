function Input({label, invalid, ...props}) {
  return (
    <div>
      <label className="flex font-bold">{label}</label>
      <input {...props}/>
    </div>
  )
}

export default Input
