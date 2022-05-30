import React from "react";
import '../css/creatorlist.css';

import Creator from "./Creator";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CreatorList = () => {
  const creators = useSelector((state) => state.creators);

  return (
    <div className="creator-container">
      {creators.map((el) => (
          <Link key={el.id} to={`/donate/${el.id}`} style={{ textDecoration: 'none' }}>
            <Creator creator={el}/>
          </Link>
      ))}
    </div>
  );
};

export default CreatorList;
