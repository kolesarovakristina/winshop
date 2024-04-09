'use server';

import {
  deleteCompanyFromJSON,
  loadCompaniesFromJSON,
  saveCompaniesToJSON,
} from './models/company';
import { redirect } from 'next/navigation';
import { Company } from './schemas/company';
import { v4 as uuidv4 } from 'uuid';

export const getCompaniesData = async () => {
  const companies = await loadCompaniesFromJSON();
  return companies;
};

export const deleteCompany = async (companyId: string) => {
  await deleteCompanyFromJSON(companyId);

  redirect('/');
};

export const saveCompany = async (newData: Company) => {
  const existingData: Company[] = await loadCompaniesFromJSON();

  const existingCompanyIndex = existingData.findIndex(
    (item) => item.id === newData.id
  );
  const currentDate = new Date().toLocaleString('en-US', {
    timeZone: 'UTC',
    dateStyle: 'long',
    timeStyle: 'long',
  });

  if (existingCompanyIndex !== -1) {
    // update existing company
    const updatedData = existingData.map((item, updatedDataIndex) => {
      if (updatedDataIndex === existingCompanyIndex) {
        return { ...item, ...newData, updatedAt: currentDate };
      }
      return item;
    });

    await saveCompaniesToJSON(updatedData);
  } else {
    // add new company
    const newDataWithId = { ...newData, id: uuidv4(), createdAt: currentDate };
    const newDataArray = [...existingData, newDataWithId];
    await saveCompaniesToJSON(newDataArray);
  }
};
