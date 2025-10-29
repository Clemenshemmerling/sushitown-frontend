const TextInput = ({ className = '', ...props }) => (
  <input
    className={`w-full rounded-xl border-2 border-[#FFD000] bg-[#640B0C] text-[#FFD000] placeholder-[#FFD000]/75 font-semibold focus:ring-4 focus:ring-[#FFD000]/50 focus:outline-none transition-all p-3 shadow-[inset_0_2px_4px_rgba(0,0,0,0.45)] ${className}`}
    {...props}
  />
)
export default TextInput
