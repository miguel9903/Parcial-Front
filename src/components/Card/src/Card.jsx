import React from "react";
import PropTypes from "prop-types";
import '../index.css';

const namespace = "card";

const Card = ({ 
  name,
  title,
  email, 
  subject,
  comments
}) => {
  return (
    <div className={namespace}>
      <h2 className={`${namespace}__title`}>
        { title }
      </h2>
      <ul className={`${namespace}__list`}>
        <li className={`${namespace}__list-item`}>
          <span className={`${namespace}__info`}>
            Name: 
          </span>
          { name }
        </li>
        <li className={`${namespace}__list-item`}>
          <span className={`${namespace}__info`}>
            Email: 
          </span>
          { email }
        </li>
        <li className={`${namespace}__list-item`}>
          <span className={`${namespace}__info`}>
            Subject: 
          </span>
          { subject }
        </li>
        <li className={`${namespace}__list-item`}>
          <span className={`${namespace}__info`}>
            Comments: 
          </span>
          { comments }
        </li>
      </ul>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired, 
  subject: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired
};

export default Card;
