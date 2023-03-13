import React, {useEffect, useState} from 'react';
import {EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useSelector} from "react-redux";

const ProfileInfo = () => {
  const {user, isAuthSuccess, accessToken} = useSelector(store => store.auth);
  const [formValue, setFormValue] = useState({name: user.name, email: user.email, password: ''});
  const onChange = (e) => {
    setFormValue({...formValue, [e.target.name]: e.target.value});
  }

  useEffect(()=>{
    setFormValue({...formValue, name:user.name, email: user.email})
  },[user.name, user.password, user.email])

  return (
    <form className={'pl-15'}>
      <Input type={"text"} extraClass={``} placeholder={'Имя'} value={formValue.name} name={"name"}
             onChange={onChange} {... ((user.name===formValue.name) ? {} : {icon: "EditIcon"})} />
      <EmailInput extraClass={`mt-6`} placeholder={'Логин'} value={formValue.email} name={"email"} onChange={onChange}
                  {... ((user.email===formValue.email) ? {} : {icon: "EditIcon"})}/>
      <PasswordInput extraClass={`mt-6`} placeholder={'Пароль'} value={'   '} name={"password"}
                     onChange={onChange}
                     icon={"EditIcon"}/>
    </form>
  );
};

export default ProfileInfo;
