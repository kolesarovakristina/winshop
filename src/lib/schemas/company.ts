import { z } from 'zod';

export const companyBranchSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, { message: 'Required' }),
  description: z.string(),
  address: z.string(),
  city: z.string(),
  country: z.string(),
  email: z.string(),
  phone: z.string(),
  website: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const companyCardSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, { message: 'Required' }),
  barcode: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const companySchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, { message: 'Required' }),
  description: z.string().min(1, { message: 'Required' }),
  address: z.string().min(1, { message: 'Required' }),
  city: z.string().min(1, { message: 'Required' }),
  country: z.string().min(1, { message: 'Required' }),
  email: z.string().min(1, { message: 'Required' }),
  phone: z.string().min(1, { message: 'Required' }),
  website: z.string().min(1, { message: 'Required' }),
  createdAt: z.string(),
  updatedAt: z.string(),
  branches: z.array(companyBranchSchema),
  cards: z.array(companyCardSchema),
});

export type Company = z.infer<typeof companySchema>;
export type CompanyBranchces = z.infer<typeof companyBranchSchema>;
export type CompanyCards = z.infer<typeof companyCardSchema>;

export const companyBranchDefault: Company['branches'][number] = {
  id: '272e8ae4-3598-41ea-afeb-b989cd20c6da',
  name: '',
  description: '',
  address: '',
  city: '',
  country: '',
  email: '',
  phone: '',
  website: '',
  createdAt: '',
  updatedAt: '',
};

export const companyCardDefault: Company['cards'][number] = {
  id: '272e8ae4-3598-41ea-afeb-b989cd20c6da',
  name: '',
  barcode: '',
  createdAt: '',
  updatedAt: '',
};

export const companyDefault: Company = {
  id: '272e8ae4-3598-41ea-afeb-b989cd20c6da',
  name: '',
  description: '',
  address: '',
  city: '',
  country: '',
  email: '',
  phone: '',
  website: '',
  createdAt: '',
  updatedAt: '',
  branches: [],
  cards: [],
};
