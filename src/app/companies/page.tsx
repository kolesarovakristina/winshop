import { getCompaniesData } from '@/lib/actions';
import { PATHS } from '@/lib/constants';
import { Company } from '@/lib/schemas/company';
import Link from 'next/link';

// TODO: Implement ListCompanies component that will display a list of existing companies, in a table layout, with the following columns:
// - ID
// - Name
// - Description
// - Address
// - City
// - Country
// - Email
// - Phone
// - Website
// The function to get the list of companies is already implemented in the lib/models/company.ts file.

// TODO: Bonus points if you implement a create button that will redirect to the company create page.
// TODO: Bonus points if you implement a edit button that will redirect to the company edit page with the company ID as a parameter.
// TODO: Bonus points if you implement a delete button that will delete the company from the list.

type TableColumn = {
  key: string;
  label: string;
};

type OmitKeys = 'createdAt' | 'updatedAt' | 'branches' | 'cards';
type CompanyTableData = Omit<Company, OmitKeys>;

const columnToDataMapping: { [key: string]: keyof CompanyTableData } = {
  id: 'id',
  name: 'name',
  description: 'description',
  address: 'address',
  city: 'city',
  country: 'country',
  email: 'email',
  phone: 'phone',
  website: 'website',
};

const columns: TableColumn[] = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'description', label: 'Description' },
  { key: 'address', label: 'Address' },
  { key: 'city', label: 'City' },
  { key: 'country', label: 'Country' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone' },
  { key: 'website', label: 'Website' },
];

const ListCompanies = async () => {
  const companies: CompanyTableData[] = await getCompaniesData();

  return (
    <div className="m-2 flex flex-col gap-8">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="border border-gray-400 px-4 py-2"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {companies.map((company) => (
              <tr key={company.id}>
                {columns.map((column) => {
                  const dataKey = columnToDataMapping[column.key];

                  return (
                    <td
                      key={column.key}
                      className="border border-gray-400 px-4 py-2"
                    >
                      {company[dataKey]}
                    </td>
                  );
                })}
                <td>
                  <Link
                    key={`${PATHS.COMPANIES}/${company.id}`}
                    href={`${PATHS.COMPANIES}/${company.id}`}
                    className="m-1 rounded-md bg-green-500 p-2 text-center text-sm font-medium text-white shadow-lg hover:bg-green-700"
                  >
                    Update
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Link
          key={PATHS.CREATE_COMPANY}
          href={PATHS.CREATE_COMPANY}
          className="m-1 rounded-md bg-green-500 p-2 text-center text-sm font-medium text-white shadow-lg hover:bg-green-700"
        >
          Create company
        </Link>
      </div>
    </div>
  );
};

export default ListCompanies;
