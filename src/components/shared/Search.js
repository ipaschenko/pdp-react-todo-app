import React from 'react';

function Search(props) {
  let timer;
  const keyUpHandler = (e) => {
    const text = e.target.value;
    clearTimeout(timer);
    timer = setTimeout(() => props.onChange(text), 500);
  };

  return(
    <div className="form-group mb-0">
      <input type="text" className="form-control" placeholder="Search" onChange={keyUpHandler} />
    </div>
  );
}

export default Search;
