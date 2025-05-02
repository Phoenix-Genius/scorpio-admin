'use client';

import { usePopover } from 'minimal-shared/hooks';
import { Box, MenuList, MenuItem, Typography } from '@mui/material';
import { CustomPopover } from 'src/components/custom-popover';

/* -------------------------------------------------------------------- */
/* props
   ─────
   data      [{ id, value, currency, unit }]
   selected  string  –- the active currency id (e.g. 'USD')
   onSelect  fn      –- callback(id) → parent sets new currency
*/
export function CurrencyPopover({ data = [], selected, onSelect, sx, ...other }) {
  const { open, anchorEl, onClose, onOpen } = usePopover();

  // fall back to first item if selected is undefined / not found
  const current = data.find((d) => d.id === selected) || data[0] || {};

  const handleClick = (id) => {
    onSelect?.(id); // lift state up
    onClose();
  };

  /* ---------------- menu ------------------------------------------------ */
  const menu = (
    <CustomPopover open={open} anchorEl={anchorEl} onClose={onClose}>
      <MenuList sx={{ minHeight: 72 }}>
        {data.map((opt) => (
          <MenuItem
            key={opt.id}
            selected={opt.id === current.id}
            onClick={() => handleClick(opt.id)}
          >
            <Box sx={{ display: 'flex', gap: 3, px: 2, py: 0.5 }}>
              <Typography>{opt.currency}</Typography>
              <Typography>{opt.value}</Typography>
              <Typography>{opt.unit}</Typography>
            </Box>
          </MenuItem>
        ))}
      </MenuList>
    </CustomPopover>
  );

  /* ---------------- trigger -------------------------------------------- */
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          backgroundColor: '#00000030',
          border: '1px solid #ffffff60',
          borderRadius: 1,
          overflow: 'hidden',
          cursor: 'pointer',
          ...sx,
        }}
        onClick={onOpen}
        {...other}
      >
        <Typography
          sx={{
            backgroundColor: '#ffffff10',
            borderRight: '1px solid #ffffff60',
            px: 2,
            py: 1,
          }}
        >
          {current.currency}
        </Typography>

        <Typography sx={{ px: 2, py: 1 }}>{current.value}</Typography>

        <Typography
          sx={{
            backgroundColor: '#ffffff10',
            borderLeft: '1px solid #ffffff60',
            px: 2,
            py: 1,
          }}
        >
          {current.unit}
        </Typography>
      </Box>

      {menu}
    </>
  );
}
