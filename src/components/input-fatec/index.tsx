interface CustomInputProps {
    initialValue: string;
    type: string;
    placeholder: string;
  }
  
  const CustomInput: React.FC<CustomInputProps> = ({ initialValue, type, placeholder }) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={initialValue}
        style={{ color: 'red' }}
      />
    );
  };
  
  export default CustomInput;
  
  
  
