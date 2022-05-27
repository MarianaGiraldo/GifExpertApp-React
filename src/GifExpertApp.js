import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import GifGrid from './GifGrid';

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One punch']);


    return <>
        <h2>GifExpertApp</h2>
        <hr />
        <AddCategory setCategories={ setcategories } />
            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    ))
                }
            </ol>
    </>


}
