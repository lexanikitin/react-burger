import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";

const ProfileOrderDetails = () => {
  const navigate = useNavigate();
  let {id} = useParams();
  useEffect(()=>{
    navigate(`/feed/${id}`);
  },[])
  return (
    <div>

    </div>
  );
};

export default ProfileOrderDetails;
