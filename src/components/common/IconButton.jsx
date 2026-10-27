export default function IconButton({ children, label, onClick, className = '', ...props }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`
        inline-flex items-center justify-center rounded-xl p-2.5
        text-light-secondary dark:text-dark-secondary
        hover:text-primary hover:bg-primary/10
        transition-colors duration-200
        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}
