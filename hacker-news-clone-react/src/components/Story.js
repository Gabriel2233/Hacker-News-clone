import React, {useState, useEffect, memo} from 'react'

import '../styles.css'

import {getStory} from '../services/hnApi'
import {mapTime} from '../mappers/mapTime'

export const Story = ({storyId}) =>  {
    const [story, setStory] = useState({})

    useEffect(() => {
        getStory(storyId).then(({data}) => data && data.url && setStory(data))
    }, [])
   
    return story && story.url ? (
        <div className='stories-feed'>
        <div className='stories-url'>
           <a href={story.url}>{story.title}</a>
        </div>
        <div className='info'>
           <p>By: {story.by}  |  Posted: {mapTime(story.time)} ago</p>
        </div>
        </div>
    ) : null
}

