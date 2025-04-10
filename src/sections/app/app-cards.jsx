import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export function AppCards() {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}><Box sx={{display:'flex', gap:'20px'}}>
      <Box
        sx={{
          position: "relative",
          borderRadius: .5,
          display: 'flex',
          flexDirection: 'column',
          color: 'common.white',
          textAlign: 'left',
          width: "25%",
          minHeight: "120px",
          backgroundColor: "#2b7ae7"
        }}
      >
        <Typography variant="h2" sx={{position: 'absolute', right: 30, top: 10 }} fontWeight="light" color="#00000030">P</Typography>
        
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
            99474990000 <i className="fa fa-try"></i>
          </Typography>
        </Box>
        
        <Box sx={{position:"absolute", bottom: 0, display:"flex", justifyContent:"flex-end", backgroundColor: "rgba(0,0,0,.6)", p: 1, width: 1}}>
            <Typography variant="body2">My point</Typography>
        </Box>
      </Box>
      
      <Box
        sx={{
          position: "relative",
          borderRadius: .5,
          display: 'flex',
          flexDirection: 'column',
          color: 'common.white',
          textAlign: 'left',
          width: "25%",
          minHeight: "120px",
          backgroundColor: "#c675fd"
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
            0 <i className="fa fa-try"></i>
          </Typography>
        </Box>
        
        <Box sx={{position:"absolute", bottom: 0, display:"flex", justifyContent:"flex-end", backgroundColor: "rgba(0,0,0,.6)", p: 1, width: 1}}>
            <Typography variant="body2">My Profit of Day</Typography>
        </Box>
      </Box>
      
      <Box
        sx={{
          position: "relative",
          borderRadius: .5,
          display: 'flex',
          flexDirection: 'column',
          color: 'common.white',
          textAlign: 'left',
          width: "25%",
          minHeight: "120px",
          backgroundColor: "#1ec9f5"
        }}
      >
        <Typography variant="h2" sx={{position: 'absolute', right: 30, top: 10 }} fontWeight="light" color="#00000030"><i className="fa fa-user"></i></Typography>
      
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
        
        <Box sx={{position:"absolute", bottom: 0, display:"flex", justifyContent:"flex-end", backgroundColor: "rgba(0,0,0,.6)", p: 1, width: 1}}>
            <Typography variant="body2">My Users</Typography>
        </Box>
      </Box>
      
      <Box
        sx={{
          position: "relative",
          borderRadius: .5,
          display: 'flex',
          flexDirection: 'column',
          color: 'common.white',
          textAlign: 'left',
          width: "25%",
          minHeight: "120px",
          backgroundColor: "#f11886"
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
          <Typography variant="h2" sx={{position: 'absolute', right: 30, top: 10 }} fontWeight="light" color="#00000030"><i className="fa fa-info-circle"></i></Typography>
        
          <Typography variant="caption">
            Providers / Games
          </Typography>
  
          <Typography variant="h4">
            1 / 598
          </Typography>
        </Box>
        
        <Box sx={{position:"absolute", bottom: 0, display:"flex", justifyContent:"flex-end", backgroundColor: "rgba(0,0,0,.6)", p: 1, width: 1}}>
            <Typography variant="body2">Providers / Games</Typography>
        </Box>
      </Box>
      </Box>
        
          <Box sx={{display:'flex', gap:'20px'}}>
    <Box
      sx={{
        position: "relative",
        borderRadius: .5,
        display: 'flex',
        flexDirection: 'column',
        color: 'common.white',
        textAlign: 'left',
        width: "25%",
        minHeight: "120px",
        backgroundColor: "#2b7ae7"
      }}
    >
      <Typography variant="h2" sx={{position: 'absolute', right: 30, top: 10 }} fontWeight="light" color="#00000030">P</Typography>

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
          324828816.81 <i className="fa fa-try"></i>
        </Typography>
      </Box>
      
      <Box sx={{position:"absolute", bottom: 0, display:"flex", justifyContent:"flex-end", backgroundColor: "rgba(0,0,0,.6)", p: 1, width: 1}}>
          <Typography variant="body2">Sub(Total) point</Typography>
      </Box>
    </Box>
    
    <Box
      sx={{
        position: "relative",
        borderRadius: .5,
        display: 'flex',
        flexDirection: 'column',
        color: 'common.white',
        textAlign: 'left',
        width: "25%",
        minHeight: "120px",
        backgroundColor: "#c675fd"
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
          2097381.97 <i className="fa fa-try"></i>
        </Typography>
      </Box>
      
      <Box sx={{position:"absolute", bottom: 0, display:"flex", justifyContent:"flex-end", backgroundColor: "rgba(0,0,0,.6)", p: 1, width: 1}}>
          <Typography variant="body2">Sub(Total) Profit of Day</Typography>
      </Box>
    </Box>
    
    <Box
      sx={{
        position: "relative",
        borderRadius: .5,
        display: 'flex',
        flexDirection: 'column',
        color: 'common.white',
        textAlign: 'left',
        width: "25%",
        minHeight: "120px",
        backgroundColor: "#1ec9f5"
      }}
    >
      <Typography variant="h2" sx={{position: 'absolute', right: 30, top: 10 }} fontWeight="light" color="#00000030"><i className="fa fa-users"></i></Typography>

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
      
      <Box sx={{position:"absolute", bottom: 0, display:"flex", justifyContent:"flex-end", backgroundColor: "rgba(0,0,0,.6)", p: 1, width: 1}}>
          <Typography variant="body2">Users</Typography>
      </Box>
    </Box>
    
    <Box
      sx={{
        position: "relative",
        borderRadius: .5,
        display: 'flex',
        flexDirection: 'column',
        color: 'common.white',
        textAlign: 'left',
        width: "25%",
        minHeight: "120px",
        backgroundColor: "#f11886"
      }}
    >
      <Typography variant="h2" sx={{position: 'absolute', right: 30, top: 10 }} fontWeight="light" color="#00000030"><i className="fa fa-sitemap"></i></Typography>

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
      
      <Box sx={{position:"absolute", bottom: 0, display:"flex", justifyContent:"flex-end", backgroundColor: "rgba(0,0,0,.6)", p: 1, width: 1}}>
          <Typography variant="body2">Agents</Typography>
      </Box>
    </Box>
    </Box>
  
    </Box>
    );
}
