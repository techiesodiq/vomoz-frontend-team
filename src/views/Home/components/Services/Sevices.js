import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, colors } from '@material-ui/core';
import { IconAlternate, SectionHeader } from 'components/molecules';
import { DescriptionListIcon, Section } from 'components/organisms';

const useStyles = makeStyles(() => ({
  fontWeight900: {
    fontWeight: 900,
  },
  noPaddingBottom: {
    paddingBottom: 0,
  },
  noPaddingTop: {
    paddingTop: 0,
  },
}));

const data = [
  {
    icon: 'fas fa-layer-group',
    title: 'Super Low Call Rates',
    subtitle:
      'vomoz_landing_page is built to make your life easier. Variables, build tooling, documentation, and reusable components.',
  },
  {
    icon: 'fab fa-sketch',
    title: 'Online Account Management',
    subtitle:
      'Designed with the latest design trends in mind. vomoz_landing_page feels modern, minimal, and beautiful.',
  },
  {
    icon: 'fa fa-user',
    title: 'Incredible Customer Service',
    subtitle:
      "We've written extensive documentation for components and tools, so you never have to reverse engineer anything.",
  },
];
const Services = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const title = (
    <Typography variant="h2" component="span" className={classes.fontWeight900}>
      Why&nbsp;
      <Typography component="span" variant="inherit" color="primary">
        {' '}
        Us
      </Typography>
      ?
    </Typography>
  );

  const subtitle = '';

  return (
    <div className={className} {...rest}>
      <Section narrow className={classes.noPaddingBottom}>
        <SectionHeader
          title={title}
          subtitle={subtitle}
          align="center"
          titleProps={{
            variant: 'h2',
            color: 'textPrimary',
          }}
          data-aos="fade-up"
        />
      </Section>
      <Section className={classes.noPaddingTop}>
        <Grid container spacing={isMd ? 4 : 2}>
          {data.map((item, index) => (
            <Grid key={index} item xs={12} sm={4} data-aos={'fade-up'}>
              <DescriptionListIcon
                title={item.title}
                subtitle={item.subtitle}
                icon={
                  <IconAlternate
                    fontIconClass={item.icon}
                    size="medium"
                    color={colors.orange}
                  />
                }
                align="left"
              />
            </Grid>
          ))}
        </Grid>
      </Section>
    </div>
  );
};

Services.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Services;
