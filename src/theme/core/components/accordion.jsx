import { accordionClasses } from '@mui/material/Accordion';
import { typographyClasses } from '@mui/material/Typography';
import { accordionSummaryClasses } from '@mui/material/AccordionSummary';

// ----------------------------------------------------------------------

const MuiAccordion = {
  /** **************************************
   * STYLE
   *************************************** */
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: 'transparent',
      [`&.${accordionClasses.expanded}`]: {
        boxShadow: theme.vars.customShadows.z8,
        margin:0,
        borderBottom: "1px solid",
        borderColor: theme.vars.palette.divider
      },
      [`&.${accordionClasses.disabled}`]: { backgroundColor: 'transparent' },
    }),
  },
};

// ----------------------------------------------------------------------

const MuiAccordionSummary = {
  /** **************************************
   * STYLE
   *************************************** */
  styleOverrides: {
    root: ({ theme }) => ({
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
      minHeight: "38px",
      [`&.${accordionClasses.expanded}`]: {
        minHeight: "38px"
      },
      [`&.${accordionSummaryClasses.disabled}`]: {
        opacity: 1,
        color: theme.vars.palette.action.disabled,
        [`& .${typographyClasses.root}`]: { color: 'inherit' },
      },
    }),
    expandIconWrapper: { color: 'inherit' },
    content: ({ theme }) => ({
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      [`&.${accordionClasses.expanded}`]: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
      }
    })
  },
};

// ----------------------------------------------------------------------

export const accordion = { MuiAccordion, MuiAccordionSummary };
