'use client';

import React, { useContext, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { deleteCompany, saveCompany } from '@/lib/actions';
import { Company, companySchema } from '@/lib/schemas/company';
import { TrashIcon } from '@heroicons/react/24/solid';
import { NOTIFICATION, PATHS } from '@/lib/constants';

import { Button } from '@/components/ui/button';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { CompanyBranches } from '@/components/branches';
import { CompanyCards } from '@/components/cards';
import { NotificationContext } from '@/lib/store/notificationContext';

type CompanyEditProps = {
  company: Company;
  notificationMessage: string;
  isCompanyEdit?: boolean;
};

// TODO: Finish implementing the CompanyEdit component that will display a form to edit a company, with the option to save the data to a JSON file.
// The function to save the data to a JSON file is already implemented in the lib/models/company.ts file.
// Below is a partial implementation of the CompanyEdit component, the remaining fields are described in the company schema in the `lib/schemas/company.ts` file.

// TODO: Bonus points if you implement a button to delete a branch/card from a company
// TODO: Bonus points if you implement a button to delete a company

export const CompanyEdit = ({
  company,
  notificationMessage,
  isCompanyEdit = false,
}: CompanyEditProps) => {
  const { showNotification } = useContext(NotificationContext);
  const [_, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<Company>({
    defaultValues: company,
    resolver: zodResolver(companySchema),
  });

  const onSubmit = async (data: Company) => {
    saveCompany(data);
    router.push(PATHS.HOME);
    showNotification(notificationMessage, NOTIFICATION.SUCCESS);
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="m-4 flex flex-col gap-4 rounded-lg border bg-muted p-4"
        >
          {isCompanyEdit && (
            <div className="grid justify-items-end">
              <TrashIcon
                onClick={() =>
                  startTransition(() => {
                    deleteCompany(company.id);
                    showNotification(
                      'Company was successfully deleted.',
                      NOTIFICATION.ALERT
                    );
                  })
                }
                className="size-6 cursor-pointer"
              />
            </div>
          )}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex w-full gap-2 [&>div]:flex-1">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {form.getValues('createdAt') && (
              <FormField
                control={form.control}
                name="createdAt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Created</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {form.getValues('updatedAt') && (
              <FormField
                control={form.control}
                name="updatedAt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Updated</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>
          <div className="flex flex-col gap-2">
            <CompanyBranches form={form} />
            <CompanyCards form={form} />
          </div>
          <Button type="submit">Save</Button>
        </form>
      </Form>
    </div>
  );
};
