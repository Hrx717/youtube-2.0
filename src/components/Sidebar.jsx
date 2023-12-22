import {Stack} from '@mui/material'
import {categories} from '../utils/constants'

const Sidebar = ({selectedCategory, setselectedCategory}) => {
  return (
    <Stack direction='row'
    sx={{overflowY: 'auto', height: {sx: "auto", md: '95%'}, 
    flexDirection: {md: 'column'}}}
    >
        {categories.map((category) => (
            <button key={category.name} className='category-btn'
            onClick={() => setselectedCategory(category.name)}
            style={{background: selectedCategory===category.name && '#FC1503', color: 'white'}}
            >
                <span style={{color: category.name===selectedCategory ? 'white' : 
                'red', marginRight: '17px'}}>{category.icon}</span>
                <span style={{opacity: selectedCategory===category.name ? 1 : 0.8}}>{category.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default Sidebar