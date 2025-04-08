import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useMockedUser } from 'src/auth/hooks';

// ----------------------------------------------------------------------

export default function NavAccount({ sx, ...other }) {
  const { user } = useMockedUser();

  return (
    <Box
      sx={[{ p: 2, textAlign: 'center' }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
        <Avatar src={user?.photoURL} alt={user?.displayName} sx={{ width: 48, height: 48 }}>
        {user?.displayName?.charAt(0).toUpperCase()}
        </Avatar>

        <Box sx={{ mb: 2, mt: 1.5, width: "fit-content" }}>
          <Typography
            variant="subtitle2"
            noWrap
            sx={{ mb: 1, color: 'var(--layout-nav-text-primary-color)' }}
          >
            {user?.displayName}
          </Typography>

          <Typography
            variant="body2"
            noWrap
            sx={{ color: 'var(--layout-nav-text-disabled-color)' }}
          >
            {user?.email}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
