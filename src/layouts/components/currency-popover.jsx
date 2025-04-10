import { useState, useCallback } from 'react';
import { usePopover } from 'minimal-shared/hooks';

import { Box, MenuList, MenuItem, Typography } from '@mui/material';

import { CustomPopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

export function CurrencyPopover({ data = [], sx, ...other }) {
  const { open, anchorEl, onClose, onOpen } = usePopover();

  const [currency, setCurrency] = useState(data[0].id);

  const currentCurrency = data.find((curr) => curr.id === currency);

  const handleChangeCurrency = useCallback(
    (newCurrency) => {
      setCurrency(newCurrency);
      onClose();
    },
    [onClose]
  );

  const renderMenuList = () => (
    <CustomPopover open={open} anchorEl={anchorEl} onClose={onClose}>
      <MenuList sx={{ minHeight: 72 }}>
        {data?.map((option) => (
          <MenuItem
            key={option.id}
            selected={option.id === currentCurrency?.id}
            onClick={() => handleChangeCurrency(option.id)}
          >
            <Box sx={{ display: "flex", gap: 3, px: 2, py: .5 }}>
              <Typography>{option.currency}</Typography>
              <Typography>{option.value}</Typography>
              <Typography>{option.unit}</Typography>
            </Box>
          </MenuItem>
        ))}
      </MenuList>
    </CustomPopover>
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#00000030",
          border: "1px solid #ffffff60",
          borderRadius: 1,
          overflow: "hidden",
          cursor: "pointer"
        }}
        onClick={onOpen}
      >
        <Typography
          sx={{
            backgroundColor: "#ffffff10",
            borderRight: "1px solid #ffffff60",
            px: 2,
            py: 1
          }}
        >
          {currentCurrency.currency}
        </Typography>
        <Typography sx={{ px: 2, py: 1 }}>{currentCurrency.value}</Typography>
        <Typography
          sx={{
            backgroundColor: "#ffffff10",
            borderLeft: "1px solid #ffffff60",
            px: 2,
            py: 1
          }}
        >
          {currentCurrency.unit}
        </Typography>
      </Box>

      {renderMenuList()}
    </>
  );
}
