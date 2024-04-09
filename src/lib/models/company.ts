import { Company } from '@/lib/schemas/company';
import fs from 'fs';
import { revalidatePath } from 'next/cache';

const companyFilePath = './public/company.json';

export const loadCompaniesFromJSON = async (): Promise<Company[]> => {
  try {
    const data = await fs.promises.readFile(companyFilePath, 'utf-8');
    const companies: Company[] = JSON.parse(data);
    return companies;
  } catch (error) {
    console.error('Error loading companies from JSON:', error);
    return [];
  }
};

export const getCompanyById = async (
  id: string
): Promise<Company | undefined> => {
  const companies = await loadCompaniesFromJSON();
  revalidatePath('/companies/[id]', 'page');
  revalidatePath('/');
  return companies.find((company) => company.id === id);
};

export const saveCompaniesToJSON = async (
  companies: Company[]
): Promise<void> => {
  try {
    await fs.promises.writeFile(
      companyFilePath,
      JSON.stringify(companies, null, 2)
    );
  } catch (error) {
    console.error('Error saving companies to JSON:', error);
  }
};

export const deleteCompanyFromJSON = async (
  companyId: string
): Promise<void> => {
  try {
    const companies: Company[] = await loadCompaniesFromJSON();
    const updatedCompanies: Company[] = companies.filter(
      (company) => company.id !== companyId
    );
    await saveCompaniesToJSON(updatedCompanies);
  } catch (error) {
    console.error('Error deleting company:', error);
  }
};
