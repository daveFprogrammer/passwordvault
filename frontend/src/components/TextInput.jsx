const TextInput = ({ label, icon, type, value, onChange }) => {
    return (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <div className="flex items-center bg-gray-50 border border-gray-300 rounded-md p-2">
          {icon && <div className="text-gray-500 mr-2">{icon}</div>}
          <input
            type={type}
            value={value}
            onChange={onChange}
            className="bg-transparent focus:outline-none w-full"
            placeholder={`Inserisci ${label.toLowerCase()}`}
          />
        </div>
      </div>
    );
  };
  export default TextInput;
  