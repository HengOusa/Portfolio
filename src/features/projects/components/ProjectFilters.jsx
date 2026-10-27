export default function ProjectFilters({ categories, active, onChange, language }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`
            px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200
            focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
            ${active === cat.id
              ? 'bg-primary text-white shadow-md shadow-primary/25'
              : 'bg-light-surface dark:bg-dark-surface text-light-secondary dark:text-dark-secondary border border-light-border dark:border-dark-border hover:border-primary hover:text-primary'
            }
          `}
        >
          {cat.name[language] || cat.name.en}
        </button>
      ))}
    </div>
  )
}
