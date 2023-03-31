import { Button} from "@mui/material";
import { styled } from "@mui/material/styles";

import { userApi } from "../../services/user"
import { UserDeleteInterface } from "../../services/user"


interface Props {
  id: number,
}

const UserButton = styled(Button)({  
  width: '26px',
  minWidth: '26px',
  height: '26px',
  borderRadius: '50%',
  border: '2px solid #FFFFFF',
  backgroundColor: '#949494',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '0',
  left: '51px',
  boxSizing: 'border-box',
  padding: '0',
});


  
const cross = <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.528598 0.528606C0.788948 0.268256 1.21106 0.268256 1.47141 0.528606L5 4.0572L8.5286 0.528606C8.78895 0.268256 9.21106 0.268256 9.47141 0.528606C9.73176 0.788955 9.73176 1.21107 9.47141 1.47141L5.94281 5.00001L9.47141 8.52861C9.73176 8.78895 9.73176 9.21106 9.47141 9.47141C9.21106 9.73176 8.78895 9.73176 8.5286 9.47141L5 5.94282L1.47141 9.47141C1.21106 9.73176 0.788948 9.73176 0.528598 9.47141C0.268248 9.21106 0.268248 8.78895 0.528598 8.52861L4.05719 5.00001L0.528598 1.47141C0.268248 1.21107 0.268248 0.788955 0.528598 0.528606Z" fill="white"/>
              </svg>

export const ButtonClose = ({ id }: Props) => {
 

  const [
    deleteUser, 
    { isLoading: deleteLoading, 
      isSuccess: deleteSuccess, 
      isError: deleteError
    },    
  ] = userApi.useDeleteUserDataMutation();

  if (deleteLoading) {
    console.log('Удаление выполняется...')
  } else if (deleteSuccess) {
    console.log('Удаление выполнено')
  } else if (deleteError) {
    console.log('Ошибка удаления')
  } else {
    console.log('DELETE не был вызван')
  }


/*
const deleteExample = (userDelete: UserDeleteInterface) => {
      deleteUser({ userDelete }), [deleteUser]
    }
*/


//Нажатие на кнопку с крестиком
const buttonClose = (id : number) => {
  console.log('нажата кнопка c id = ' + id);
  
}

  return (      
      <UserButton onClick={() => buttonClose(id)}>
        {cross}
      </UserButton>      
  );
};
