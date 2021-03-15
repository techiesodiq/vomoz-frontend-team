import React from 'react';
import { makeStyles, Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import {
  Features,
  Reviews,
  QuickStart,
  Services,
  Hero,
  SearchLocation,
  Subscription,
} from './components';

const useStyles = makeStyles(() => ({
  sectionAlternateNoPaddingTop: {
    '& .section-alternate__content': {
      paddingBottom: 0,
    },
  },
  dividerSection: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const features = [
  {
    title: 'Vomoz Rewards Points.',
    icon: 'fas fa-plug',
    description:
      "Life's good with freebies! Get Vomoz Rewards Points while buying call credits! No limit! The more you buy the more rewards points you get!.",
  },
  {
    title: 'Recharge by Phone.',
    description:
      'Account running low? No more! While on the phone, recharge your Vomoz account with a single click!.',
    icon: 'fas fa-lock',
  },
  {
    title: 'Automatic Account Refill.',
    description:
      "Optionally activate your automatic account refill so that you'll never run low again! Feature only available if activated by you!.",
    icon: 'fas fa-hand-holding-heart',
  },
  {
    title: 'Pinless Dailing.',
    description:
      'Dial with a breeze! Never enter a long digit phone card PIN number again!',
    icon: 'fas fa-plus',
  },
];

const reviews = [
  {
    authorPhoto: {
      src:
        'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg',
      srcSet:
        'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x',
    },
    authorName: 'Veronica Adams',
    authorOccupation: 'Growth Marketer, Crealytics',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    authorPhoto: {
      src:
        'https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini.jpg',
      srcSet:
        'https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini@2x.jpg 2x',
    },
    authorName: 'Akachi Luccini',
    authorOccupation: 'Lead Generation, Alternative Capital',
    feedback:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    authorPhoto: {
      src:
        'https://assets.maccarianagency.com/the-front/photos/people/jack-smith.jpg',
      srcSet:
        'https://assets.maccarianagency.com/the-front/photos/people/jack-smith@2x.jpg 2x',
    },
    authorName: 'Jack Smith',
    authorOccupation: 'Head of Operations, Parkfield Commerce',
    feedback:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const Home = ({ themeMode }) => {
  const classes = useStyles();

  return (
    <div>
      <Hero themeMode={themeMode} />
      <SectionAlternate className={classes.sectionAlternateNoPaddingTop}>
        <SearchLocation />
      </SectionAlternate>
      <Services />
      <SectionAlternate className={classes.sectionAlternateNoPaddingTop}>
        <QuickStart />
      </SectionAlternate>
      <SectionAlternate>
        <Features data={features} />
      </SectionAlternate>
      <Section>
        <Reviews data={reviews} />
      </Section>
      <Section className={classes.dividerSection}>
        <Divider />
      </Section>
      <Section>
        <Subscription />
      </Section>
    </div>
  );
};

export default Home;
