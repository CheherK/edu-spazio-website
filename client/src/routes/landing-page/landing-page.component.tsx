import { Box, Button, Typography } from '@mui/material';
import Typical from 'react-typical';
import backgroundImageUrl from "../../assets/10.jpg";

const LandingPage = () => {

   return (
      <>
         <Box
            sx={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               height: '100vh',
               backgroundImage: `url(${backgroundImageUrl})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
            }}
         >
            <Box sx={{ textAlign: 'center' }}>
               <Typography variant="h2" sx={{ color: '#fff', marginBottom: 4 }}>
                  <Typical
                     steps={['Entreprenez, Collaborez, Partagez.', 3000, 'Créez.', 2000, 'Innovez.', 2000, 'Réussissez.', 2000]}
                     loop={Infinity}
                     wrapper="span"
                  />
               </Typography>
               <Button variant="contained" color="primary" size="large">
                  Contact Us
               </Button>
            </Box>
         </Box>
      </>
   );
};

export default LandingPage;