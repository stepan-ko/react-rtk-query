import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { User } from "../user/User";

import { useGetUserDataQuery } from "../../services/user"

export const Teams = () => { 
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetUserDataQuery()

let listUsers
const urlImg = "https://cs13.pikabu.ru/avatars/658/x658267-1013849002.png"

if (isLoading) {
  listUsers = <div>Loading...</div>
} else if (isSuccess) {
  listUsers = users.map((user) => {return (<User urlImg={urlImg} name={user.name} company={user.company.name} />)});
} else if (isError) {
  listUsers = <div>error...</div>
}

const MyContainer = styled(Container)({
  background: '#EAEAEA',  
  padding: '24px',
  maxWidth: '370px',
});


return (
    <Box>
      <Typography variant="h1">Команды</Typography>    
      <MyContainer>            
        {listUsers}                  
      </MyContainer>
    </Box>
  );
};
