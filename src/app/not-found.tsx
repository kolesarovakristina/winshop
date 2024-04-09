import Link from 'next/link';
import { PATHS } from '@/lib/constants';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mb-4 text-lg">
        The page you are looking for does not exist.
      </p>
      <Link href={PATHS.HOME} className="text-blue-500 hover:underline">
        Go back to home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
