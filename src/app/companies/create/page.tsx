import { CompanyEdit } from '@/components/company';
import { companyDefault } from '@/lib/schemas/company';

import React from 'react';

// TODO: Implement NewCompany component that will display a form to create a new company, with the option to save the data to a JSON file.
// The function to save the data to a JSON file is already implemented in the lib/models/company.ts file.
//You may re-use the CompanyEdit component to create the form.

const NewCompany = () => {
  return (
    <div>
      NewCompany
      <CompanyEdit
        company={companyDefault}
        notificationMessage="Company was successfully created."
      />
    </div>
  );
};

export default NewCompany;
