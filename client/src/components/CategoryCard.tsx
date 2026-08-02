import type { CategoryItem } from '../types'

interface CategoryCardProps {
  category: CategoryItem
}

const CategoryCard = ({ category }: CategoryCardProps) => (
  <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 text-center shadow-card transition hover:-translate-y-2 hover:border-gold/60">
    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-accent to-sky-500 text-3xl shadow-lg">
      {category.icon}
    </div>
    <h3 className="mt-6 text-xl font-semibold text-white">{category.name}</h3>
    <p className="mt-3 text-sm leading-7 text-slate-400">{category.description}</p>
  </div>
)

export default CategoryCard
