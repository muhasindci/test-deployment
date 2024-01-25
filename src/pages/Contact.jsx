import { useNavigate } from 'react-router-dom';
const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto iure, quo
        ipsum quae autem sapiente consequuntur, enim repellendus voluptate,
        optio porro amet fugit odit quis corrupti dolore recusandae voluptates
        hic consectetur atque nulla. Earum repudiandae consectetur quidem,
        veritatis distinctio id odio ab minus, iste quo temporibus, facere nobis
        quas mollitia!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim possimus
        laborum quibusdam ea optio error nihil sunt quis ipsa dolores illo totam
        minus id aut, animi ratione modi non maxime.
      </p>
      <button onClick={() => navigate('/')}>Go to home</button>
    </div>
  );
};

export default Contact;
