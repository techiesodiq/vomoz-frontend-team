import React from 'react';
import { Section } from 'components/organisms';
import { Faq, Hero } from './components';

import { faq } from './data';

const HelpCenter = () => (
  <div>
    <Hero />
    <Section>
      <Faq data={faq} />
    </Section>
  </div>
);

export default HelpCenter;
