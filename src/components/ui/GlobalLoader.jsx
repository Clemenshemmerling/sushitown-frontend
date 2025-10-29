const GlobalLoader = ({ show }) => {
  if (!show) return null
  return (
    <div className="fixed inset-0 bg-[#870F11]/70 backdrop-blur-sm flex items-center justify-center z-50">
      <Loader size={60} />
    </div>
  )
}

export default GlobalLoader
