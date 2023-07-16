import { Box, AppBar, Toolbar, Button } from '@mui/material';
import Logo from "../../assets/logo-edu-spazio.png";
import { Outlet } from 'react-router-dom';
import { flexbox } from '@mui/system';

const Header = () => {

   return (
      <>
         <Box sx={{ flexGrow: 1 , }}>
            <AppBar position="static">
               <Toolbar sx={{ display: flexbox, justifyContent: 'space-between' }}>
                  <img src={Logo} alt="Logo" style={{ height: 40, marginRight: 16 }} />
                  <div>
                  <Button color="inherit" sx={{ marginLeft: 2 }}>HOME</Button>
                  <Button color="inherit" sx={{ marginLeft: 2 }}>SERVICES</Button>
                  <Button color="inherit" sx={{ marginLeft: 2 }}>COWORKING</Button>
                  <Button color="inherit" sx={{ marginLeft: 2 }}>FORMATION</Button>
                  <Button color="inherit" sx={{ marginLeft: 2 }}>GALERIE</Button>
                  <Button color="inherit" sx={{ marginLeft: 2 }}>CONTACT</Button>
                  </div>
               </Toolbar>
            </AppBar>
         </Box>
         <Outlet />
      </>
   );
};

export default Header;
