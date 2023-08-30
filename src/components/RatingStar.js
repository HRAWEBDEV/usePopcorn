import { useState } from 'react';

const Star = ({
 fill,
 onRate,
 onCancelPreviewRate,
 onPreviewRate,
 color,
 size,
}) => {
 return (
  <span
   onClick={onRate}
   onMouseEnter={onPreviewRate}
   onMouseLeave={onCancelPreviewRate}
  >
   {fill ? (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     viewBox='0 0 20 20'
     fill={color}
     stroke={color}
     width={size}
     height={size}
    >
     <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
    </svg>
   ) : (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     fill='none'
     viewBox='0 0 24 24'
     stroke={color}
     width={size}
     height={size}
    >
     <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='{2}'
      d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
     />
    </svg>
   )}
  </span>
 );
};

const containerStyle = {
 display: 'inline-flex',
 gap: '1rem',
 alignItems: 'center',
};

const wrapperStyle = {
 display: 'flex',
 alignItems: 'center',
};

const RatingStar = ({
 color = '#000',
 size = 25,
 maxRating = 5,
 value = 0,
 onChnage,
}) => {
 const [rating, setRating] = useState(value);
 const [tempRating, setTempRating] = useState(0);
 const visibleRating = tempRating || rating;

 const handleRating = (newRate) => {
  setRating(newRate);
  onChnage && onChnage(newRate);
 };
 const handlePreviewRate = (newRate) => {
  setTempRating(newRate);
 };

 return (
  <div style={containerStyle}>
   <div style={wrapperStyle}>
    {Array.from({ length: maxRating }, (_, i) => i).map((item) => {
     const isFilled = item + 1 <= visibleRating;
     return (
      <Star
       key={item}
       color={color}
       size={size}
       fill={isFilled}
       onRate={() => handleRating(item + 1)}
       onPreviewRate={() => handlePreviewRate(item + 1)}
       onCancelPreviewRate={() => handlePreviewRate(0)}
      />
     );
    })}
   </div>
   <span style={{ fontSize: `${size * 0.6}px` }}>{visibleRating || ''}</span>
  </div>
 );
};

export default RatingStar;
