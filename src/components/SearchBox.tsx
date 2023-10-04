import React, { Dispatch, SetStateAction } from 'react';

const SearchBox: React.FC<{
  value: string;
  setSearch: Dispatch<SetStateAction<string>>;
}> = ({ value, setSearch }) => {
  return (
    <div className="col col-sm-4">
      <input
        type="text"
        value={value}
        onChange={(e) => setSearch(e.target.value)}
        className="form-control"
        placeholder="Type to search ..."
      />
    </div>
  );
};

export default SearchBox;
