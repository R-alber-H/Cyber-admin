export function ToggleSwitch({ estado, onToggleState }) {
  return (
    <button
      onClick={onToggleState}
      className={`w-11 h-6 flex items-center rounded-full p-1 transition-all duration-300 ${
        estado 
          ? 'bg-[#162D56] shadow-sm shadow-violet-200' 
          : 'bg-zinc-300 hover:bg-zinc-400/70'
      }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-sm transform transition-transform duration-300 ${
          estado ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  );
}