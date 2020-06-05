import React, {useState, useEffect} from 'react'
import '../styles.css'

import { getStoriesId } from "../services/hnApi";
import {Story} from '../components/Story'
import { useInfiniteScroll  } from "../hooks/useInfiniteScroll";


function StoriesContainer() {
    const {count} = useInfiniteScroll()
    const [storyIds, setStoryIds] = useState([])

    useEffect(() => {
        getStoriesId().then(({data}) => setStoryIds(data))
    }, [])

    return (
        <div className='container'>
           {storyIds.slice(0, count).map((storyId) => <Story storyId={storyId} key={storyId} />)}
        </div>
    )
}

export default StoriesContainer