import React from 'react';

import BaseLayout from '../components/BaseLayout';
import { contactDetails } from '../dataSource';

function Contact() {
  return (
    <BaseLayout>
      <main className="max-width section container mx-auto">
        <h1 className="text-dark-heading dark:text-light-heading text-center text-2xl font-semibold md:text-3xl md:font-bold lg:text-6xl">
          For any questions please drop a mail
        </h1>
        <h3 className="text-gradient pt-5 text-center text-3xl font-semibold md:pt-10 md:pb-6 md:text-4xl md:font-bold lg:text-6xl">
          <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
        </h3>
        <span className="text-content block text-center text-xl font-light">or</span>
        <h3 className="text-gradient pt-2 text-center text-3xl font-semibold md:py-6 md:text-4xl md:font-bold lg:text-6xl">
          <a href={`tel:${contactDetails.phone}`}>{contactDetails.phone}</a>
        </h3>
      </main>
    </BaseLayout>
  );
}

export default Contact;
