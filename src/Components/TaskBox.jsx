import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import qs from 'query-string'
/* eslint-disable react/prop-types */
const TaskBox = ({ label,  selected }) => {
    const [params, setParams] = useSearchParams()
    console.log(selected,params)
  const navigate = useNavigate()
  const handleClick = () => {
    console.log('arman');
    let currentQuery = {}
    if (params) {
      currentQuery = qs.parse(params.toString())
    }
    const updatedQuery = { ...currentQuery, category: label }

    const url = qs.stringifyUrl({
      url: '/Dashboard/My_Task',
      query: updatedQuery,
    })

    navigate(url)
  }
  params.get('category')
  return (
    <div
      onClick={handleClick}
      className={`flex 
  flex-col 
  items-center 
  justify-center 
  gap-2
 
  p-3
  border-b-2
  hover:text-neutral-800
  transition
  cursor-pointer ${selected ? 'border-b-neutral-800 text-neutral-800' : ''}`}
    >
  
      <Link className='text-sm font-medium  '> {label}</Link>
    </div>
  )
}

export default TaskBox
