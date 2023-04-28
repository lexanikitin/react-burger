import React, {FC, useEffect, useState} from 'react';
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "../../services/hooks";
import {patchProfile} from "../../services/actions/auth";
import {getCookie} from "../../utils/cookies";

const ProfileInfo:FC = () => {
  const dispatch = useDispatch();
  const {user} = useSelector(store => store.auth);
  const [formValue, setFormValue] = useState<{name:string, email:string, password:string}>({name: user.name, email: user.email, password: ''});
  const [formChangeFlag, setFormChangeFlag] = useState<boolean>(false);
  const accessToken = getCookie('burgerAccessToken');

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({...formValue, [e.target.name]: e.target.value});
    setFormChangeFlag(true)
  }

  useEffect(() => {
    setFormValue({...formValue, name: user.name, email: user.email})
  }, [user.name, user.email])

  return (
    <form className={'pl-15'}
          onReset={() => {
            setFormValue({...formValue, name: user.name, email: user.email, password: ''});
            setFormChangeFlag(false);
          }}
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(patchProfile(accessToken, formValue.name, formValue.email, formValue.password))
          }}>
      <Input type={"text"} extraClass={``} placeholder={'Имя'} value={formValue.name} name={"name"}
             onChange={onChange} {...((user.name === formValue.name) ? {} : {icon: "EditIcon"})} />
      <EmailInput extraClass={`mt-6`} placeholder={'Логин'} value={formValue.email} name={"email"}
                  onChange={onChange}
                  {...((user.email === formValue.email) ? {} : {icon: "EditIcon"})}/>
      <PasswordInput extraClass={`mt-6`} placeholder={'Новый пароль'}
                     value={formValue.password} name={"password"}
                     onChange={onChange}/>
      {formChangeFlag
        ? <div>
          <Button extraClass={'mt-6'} htmlType={"submit"} type={"primary"} size={"medium"}>
            Сохранить
          </Button>
          <Button extraClass={'mt-6 ml-6'} htmlType={"reset"} type={"primary"} size={"medium"}>
            Отмена
          </Button>
        </div>
        : null
      }
    </form>
  );
};

export default ProfileInfo;
