const Button = ({ as = 'button', className = '', ...props }) => {
  const Cmp = as
  return (
    <Cmp
      className={`inline-flex items-center justify-center rounded-xl h-11 px-4 bg-sushi-red text-white font-semibold hover:brightness-95 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    />
  )
}
export default Button
