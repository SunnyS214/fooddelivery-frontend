import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'


const ExploreMenu = ({category ,setcategory}) => {
console.log('category' , category)
    return (

    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quo veniam illo vel atque perferendis molestiae perspiciatis autem repudiandae voluptatibus?</p>
<div className="explore-menu-list">
    {menu_list.map((item , index)=>{
        return (
            <div onClick={()=>{setcategory(prev => prev===item.menu_name ? "All" : item.menu_name)}} key={index} className='explore-menu-list-item'>
                <img  className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>

            </div>
        )
    })}
</div>
<hr />
    </div>
  )
}

export default ExploreMenu
