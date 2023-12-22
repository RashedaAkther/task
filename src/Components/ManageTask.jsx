
import { useSearchParams } from 'react-router-dom'
import TaskBox from './TaskBox'
import { categories } from '../Utiliz/Data'
const Categories = () => {
  const [params, setParams] = useSearchParams()
  const category = params.get('category')
console.log(categories,category);
  return (

      <div className='pt-4 flex items-center justify-between overflow-x-auto'>
        {categories.map(item => (
          <TaskBox
            key={item.label}
            label={item.label}    
            selected={category === item.label}
          />
        ))}
      </div>
  
  )
}

export default Categories
