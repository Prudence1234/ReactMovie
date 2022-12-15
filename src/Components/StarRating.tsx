import React, { useState, useEffect } from 'react'


  const StarRating = (props: { rating: number }) => {
    const [rating, setRating] = useState(props.rating)
  
    useEffect(() => {
      setPartialColorFunctionality()
    }, [rating])
  
    const full_color = { color: '#7370cc' }
    const [partial_color, setPartialColor] = useState({
       background: 'white',
       BackgroundClip: 'text',
       WebkitBackgroundClip: 'text',
       TextFillColor: 'transparent',
       WebkitTextFillColor: 'transparent',
      })
    const null_color = { color: 'white' }
  
    const setPartialColorFunctionality = () => {
      const percentage = rating % 1.0
      const threshold = Math.floor(percentage * 100)
      setPartialColor({
        background: `linear-gradient(to right, rgba(115, 112, 204, 1) ${threshold}%, white ${threshold}%)`,
        BackgroundClip: "text",
        WebkitBackgroundClip: "text",
        TextFillColor: "transparent",
        WebkitTextFillColor: `transparent`,
        
      })
    }

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        return (
          <span
            key={index}
            style={index + 1 < rating ? full_color : (index > rating ? null_color : partial_color)}
          >
            &#9733;
          </span>
        )
      })}
    </div>
  )
}

export default StarRating
