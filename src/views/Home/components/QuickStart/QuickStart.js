import React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  useTheme,
  Grid,
  Button,
  useMediaQuery,
  Typography,
  colors,
} from '@material-ui/core';
import { SectionHeader, IconAlternate } from 'components/molecules';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const useStyles = makeStyles(theme => ({
  quickStartSection: {
    '& .section-header__cta-container': {
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        '& .section-header__cta-item-wrapper': {
          width: '100%',
          '&:last-child': {
            marginLeft: 0,
            marginTop: theme.spacing(1),
          },
          '& .MuiButtonBase-root': {
            width: '100%',
          },
        },
      },
    },
  },
  fontWeightBold: {
    fontWeight: '900',
  },
  editor: {
    paddingLeft: `${theme.spacing(2)}px !important`,
    paddingRight: `${theme.spacing(2)}px !important`,
    borderRadius: theme.spacing(1 / 2),
    width: '100%',
  },
  logoImg: {
    maxWidth: 100,
  },
}));

const QuickStart = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const docsButton = (
    <Button
      size="large"
      variant="outlined"
      color="primary"
      component="a"
      href="/rates"
    >
      Rates
    </Button>
  );

  const buyButton = (
    <Button
      size="large"
      variant="contained"
      color="primary"
      component="a"
      href="/signup-cover"
    >
      Join Now
    </Button>
  );

  return (
    <div className={className} {...rest}>
      <Grid container justify="space-between" spacing={4}>
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={isMd ? 4 : 2}>
            <Grid item xs={12} md={6} data-aos={'fade-right'}>
              <SectionHeader
                title="Our Popular Services"
                subtitle="Vomozflex is a simple, modular and accessible option for handling your communication demands."
                ctaGroup={[docsButton, buyButton]}
                align={isMd ? 'left' : 'center'}
                disableGutter
                titleVariant="h3"
                titleProps={{ className: classes.fontWeightBold }}
                className={classes.quickStartSection}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            justify="space-between"
            spacing={isMd ? 4 : 2}
            direction={isMd ? 'row' : 'column-reverse'}
          >
            <Grid
              item
              xs={12}
              container
              alignItems="center"
              data-aos={'fade-right'}
            >
              <Grid container alignItems="center" spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography color="primary" variant="h4" gutterBottom>
                    <IconAlternate
                      fontIconClass={'fa fa-street-view'}
                      size="small"
                      color={colors.orange}
                    />
                    Local Numbers
                  </Typography>
                  <Typography color="textPrimary" variant="body1">
                    Register for your Vomoz account today and get a unique U.S
                    local number (Magico number) for each of your international
                    contacts. No more long numbers to dial! Use Vomoz Magico
                    Numbers to save precious time and money!
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography color="primary" variant="h4" gutterBottom>
                    <IconAlternate
                      fontIconClass={'fa fa-plane-departure'}
                      size="small"
                      color={colors.orange}
                    />
                    My Calls Follow-Me
                  </Typography>
                  <Typography color="textPrimary" variant="body1">
                    Answer your U.S. phone calls anywhere in the world without
                    paying roaming charges! MyCallsFollowMe is a call forward
                    service that allows you to forward your U.S. phone number to
                    any international phone number without paying expensive
                    roaming charges.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography color="primary" variant="h4" gutterBottom>
                    <IconAlternate
                      fontIconClass={'fa fa-phone'}
                      size="small"
                      color={colors.orange}
                    />
                    Flash-Me Credits
                  </Typography>
                  <Typography color="textPrimary" variant="body1">
                    Share your Vomoz credit with your loved ones by
                    transferring/flashing as low as $2 from your account to
                    them! Use our Flash-Me-Credit feature to transfer call
                    credit to your friend. Your friend will get a text with the
                    instructions on how to use the transferred credit.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography color="primary" variant="h4" gutterBottom>
                    <IconAlternate
                      fontIconClass={'fa fa-mobile'}
                      size="small"
                      color={colors.orange}
                    />{' '}
                    Virtual Numbers
                  </Typography>
                  <Typography color="textPrimary" variant="body1">
                    Buy Your Local Virtual Phone Number in 3 Easy Steps. Your
                    number will be activated automatically & instantly. We
                    guarantee High Quality Voice Services with No Contracts,
                    Obligations or Hidden fees. Free Advanced features like
                    Voicemail, IVR, routing, conferencing.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

QuickStart.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default QuickStart;
