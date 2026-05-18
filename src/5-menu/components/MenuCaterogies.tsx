type CategoryProps = {
  onFilterCategory: (param: string) => void
}
const MenuCaterogies = ({onFilterCategory} : CategoryProps) => {
  
  return (
    <nav>
        <ul>
            <li onClick={() => onFilterCategory('all')}>All</li>
            <li onClick={() => onFilterCategory('breakfast')}>Breakfast</li>
            <li onClick={() => onFilterCategory('lunch')}>Lunch</li>
            <li onClick={() => onFilterCategory('shakes')}>Shakes</li>
        </ul>
    </nav>
  )
}

export default MenuCaterogies