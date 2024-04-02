import { z } from "zod";

const companyBranchSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
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

const companyCardSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  barcode: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const companySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  address: z.string(),
  city: z.string(),
  country: z.string(),
  email: z.string(),
  phone: z.string(),
  website: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  branches: z.array(companyBranchSchema),
  cards: z.array(companyCardSchema),
});

export type Company = z.infer<typeof companySchema>;

export const companyBranchDefault: Company["branches"][number] = {
  id: "272e8ae4-3598-41ea-afeb-b989cd20c6da",
  name: "",
  description: "",
  address: "",
  city: "",
  country: "",
  email: "",
  phone: "",
  website: "",
  createdAt: "",
  updatedAt: "",
};
