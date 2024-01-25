import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

const User = () => {
  const [name, setName] = useState('');
  const [searachParams, setSearchParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchParams({ name: name });
  };

  return (
    <div>
      <h1>User</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="NAME:"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </form>

      <button type="submit">Find user</button>
      {/* <h2>{searachParams.get('id')}</h2> */}
    </div>
  );
};

export default User;
