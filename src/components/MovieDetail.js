const MovieDetail = ({ selectedId, onClose }) => {
 return (
  <div className='details'>
   <button className='btn-back' onClick={onClose}>
    &larr;
   </button>
  </div>
 );
};

export default MovieDetail;
