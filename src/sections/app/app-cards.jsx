import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

// ----------------------------------------------------------------------

export function AppCards() {
  return (
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}><Box sx={{display:'flex', gap:'20px'}}>
      <Box
        sx={{
            borderRadius: .5,
            display: 'flex',
            flexDirection: 'column',
            color: 'common.white',
            textAlign: 'left',
            width: "25%",
            backgroundColor: "#0090ff"
          }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            p: 2
          }}
        >
          <Typography variant="caption">
            My Point
          </Typography>
  
          <Typography variant="h4">
            99474990000 $
          </Typography>
        </Box>
        
        <Box sx={{display:"flex", justifyContent:"flex-end", backgroundColor: "rgba(0,0,0,.6)", p: 1}}>
            <Typography variant="body2">My point</Typography>
        </Box>
      </Box>
      
      <Box
        sx={{
            borderRadius: .5,
            display: 'flex',
            flexDirection: 'column',
            color: 'common.white',
            textAlign: 'left',
            width: "25%",
            backgroundColor: "#e040ff"
          }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            p: 2
          }}
        >
          <Typography variant="caption">
            My Profit of Day
          </Typography>
  
          <Typography variant="h4">
            0 $
          </Typography>
        </Box>
        
        <Box sx={{display:"flex", justifyContent:"flex-end", backgroundColor: "rgba(0,0,0,.6)", p: 1}}>
            <Typography variant="body2">My Profit of Day</Typography>
        </Box>
      </Box>
      
      <Box
        sx={{
            borderRadius: .5,
            display: 'flex',
            flexDirection: 'column',
            color: 'common.white',
            textAlign: 'left',
            width: "25%",
            backgroundColor: "#00ccff"
          }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            p: 2
          }}
        >
          <Typography variant="caption">
            My Users
          </Typography>
  
          <Typography variant="h4">
            0
          </Typography>
        </Box>
        
        <Box sx={{display:"flex", justifyContent:"flex-end", backgroundColor: "rgba(0,0,0,.6)", p: 1}}>
            <Typography variant="body2">My Users</Typography>
        </Box>
      </Box>
      
      <Box
        sx={{
            borderRadius: .5,
            display: 'flex',
            flexDirection: 'column',
            color: 'common.white',
            textAlign: 'left',
            width: "25%",
            backgroundColor: "#ff0090"
          }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            p: 2
          }}
        >
          <Typography variant="caption">
            Providers / Games
          </Typography>
  
          <Typography variant="h4">
            1 / 598
          </Typography>
        </Box>
        
        <Box sx={{display:"flex", justifyContent:"flex-end", backgroundColor: "rgba(0,0,0,.6)", p: 1}}>
            <Typography variant="body2">Providers / Games</Typography>
        </Box>
      </Box>
      </Box>
        
          <Box sx={{display:'flex', gap:'20px'}}>
    <Box
      sx={{
          borderRadius: .5,
          display: 'flex',
          flexDirection: 'column',
          color: 'common.white',
          textAlign: 'left',
          width: "25%",
          backgroundColor: "#0090ff"
        }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' },
          p: 2
        }}
      >
        <Typography variant="caption">
          Sub(Total) Point
        </Typography>

        <Typography variant="h4">
          324828816.81 $
        </Typography>
      </Box>
      
      <Box sx={{display:"flex", justifyContent:"flex-end", backgroundColor: "rgba(0,0,0,.6)", p: 1}}>
          <Typography variant="body2">Sub(Total) point</Typography>
      </Box>
    </Box>
    
    <Box
      sx={{
          borderRadius: .5,
          display: 'flex',
          flexDirection: 'column',
          color: 'common.white',
          textAlign: 'left',
          width: "25%",
          backgroundColor: "#e040ff"
        }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' },
          p: 2
        }}
      >
        <Typography variant="caption">
          Sub(Total) Profit of Day
        </Typography>

        <Typography variant="h4">
          2097381.97 $
        </Typography>
      </Box>
      
      <Box sx={{display:"flex", justifyContent:"flex-end", backgroundColor: "rgba(0,0,0,.6)", p: 1}}>
          <Typography variant="body2">Sub(Total) Profit of Day</Typography>
      </Box>
    </Box>
    
    <Box
      sx={{
          borderRadius: .5,
          display: 'flex',
          flexDirection: 'column',
          color: 'common.white',
          textAlign: 'left',
          width: "25%",
          backgroundColor: "#00ccff"
        }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' },
          p: 2
        }}
      >
        <Typography variant="caption">
          Users
        </Typography>

        <Typography variant="h4">
          152260
        </Typography>
      </Box>
      
      <Box sx={{display:"flex", justifyContent:"flex-end", backgroundColor: "rgba(0,0,0,.6)", p: 1}}>
          <Typography variant="body2">Users</Typography>
      </Box>
    </Box>
    
    <Box
      sx={{
          borderRadius: .5,
          display: 'flex',
          flexDirection: 'column',
          color: 'common.white',
          textAlign: 'left',
          width: "25%",
          backgroundColor: "#ff0090"
        }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' },
          p: 2
        }}
      >
        <Typography variant="caption">
          Agents
        </Typography>

        <Typography variant="h4">
          21
        </Typography>
      </Box>
      
      <Box sx={{display:"flex", justifyContent:"flex-end", backgroundColor: "rgba(0,0,0,.6)", p: 1}}>
          <Typography variant="body2">Agents</Typography>
      </Box>
    </Box>
    </Box>
  
    </Box>
    );
}
