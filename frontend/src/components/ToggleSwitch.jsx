const ToggleSwitch = ({ label, checked, onChange }) => {
    return (
      <div className="flex items-center justify-between">
        <span className="text-gray-700">{label}</span>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="toggle-checkbox"
        />
      </div>
    );
  };
  export default ToggleSwitch;
  