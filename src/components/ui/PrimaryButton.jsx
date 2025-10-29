const PrimaryButton = ({ children, className = '', ...props }) => (
  <button
    className={`rounded-xl bg-[#FFD000] text-[#870F11] font-black py-3 text-lg flex justify-center items-center gap-3 shadow-[0_6px_14px_rgba(0,0,0,0.45)] hover:scale-[1.02] active:scale-[0.98] hover:bg-[#ffdf33] active:bg-[#e6c700] disabled:opacity-60 transition-all duration-150 ${className}`}
    {...props}
  >
    {children}
  </button>
)
export default PrimaryButton
