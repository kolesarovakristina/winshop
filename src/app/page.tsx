import Notification from '@/components/notification';
import { PATHS } from '@/lib/constants';
import {
  loadCompaniesFromJSON,
  saveCompaniesToJSON,
} from '@/lib/models/company';
import { NotificationContext } from '@/lib/store/notificationContext';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';

type Task = {
  title: string;
  href: string;
};

const tasks: Task[] = [
  {
    title: 'List companies',
    href: PATHS.COMPANIES,
  },
  {
    title: 'Create a new company',
    href: PATHS.CREATE_COMPANY,
  },
];

export default async function Home() {
  const companies = await loadCompaniesFromJSON();

  return (
    <div className="flex flex-col items-center justify-between p-24">
      {tasks.map((task) => (
        <Link
          key={task.href}
          href={task.href}
          className="m-4 rounded-lg bg-blue-500 p-6 text-center text-2xl font-bold text-white shadow-lg hover:bg-blue-700"
        >
          {task.title}
        </Link>
      ))}
      <div className="flex w-full flex-wrap justify-start gap-4 rounded-lg border">
        {companies.slice(0, 5).map((company) => (
          <Link
            key={company.id}
            className="m-4 rounded-lg bg-green-500 p-4 text-center text-lg font-bold text-white shadow-lg hover:bg-green-700"
            href={`/companies/${company.id}`}
          >
            <div>{company.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
