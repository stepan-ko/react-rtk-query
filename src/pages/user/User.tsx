import { Box, Avatar, Button} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ButtonClose } from "./ButtonClose";

interface Props {
  urlImg: string,
  name: string,
  company: string,
  id: number,
}

const UserBox = styled(Box)({
  display: 'flex',
  marginBottom: '16px',  
  position: 'relative', 
});

const UserText = styled(Box)({  
  fontStyle: 'normal',  
  fontSize: '12px',
  lineHeight: '15px',  
  alignSelf: 'center', 
  marginLeft: '18px',
});

const UserTextName = styled(Box)({  
  fontWeight: '600',   
});

const UserTextCompany = styled(Box)({  
  fontWeight: '400',  
  marginTop: '6px', 
});


export const User = ({ urlImg='', name='', company='', id }: Props) => {

  return (
    <UserBox>      
      <Avatar src={urlImg} sx={{ width: 64, height: 64}}/>
      <ButtonClose id={id} />    

      <UserText>
        <UserTextName>{name}</UserTextName> 
        <UserTextCompany>{company}</UserTextCompany>
      </UserText>  
    </UserBox>
  );
};
