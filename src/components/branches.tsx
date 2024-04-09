'use client';

import { v4 as uuidv4 } from 'uuid';
import { UseFormReturn, useFieldArray } from 'react-hook-form';
import { TrashIcon } from '@heroicons/react/24/solid';
import { Company, companyBranchDefault } from '@/lib/schemas/company';

import { Button } from '@/components/ui/button';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

type CompanyBranchesProps = {
  form: UseFormReturn<Company>;
};

export const CompanyBranches = ({ form }: CompanyBranchesProps) => {
  const {
    fields: branchesFields,
    append: branchesAppend,
    remove: branchesRemove,
  } = useFieldArray({
    control: form.control,
    name: 'branches',
    keyName: 'formId',
  });

  const handleNewBranch = () => {
    branchesAppend({
      ...companyBranchDefault,
      id: uuidv4(),
    });
  };

  return (
    <div className="flex flex-col gap-2">
      {branchesFields.map((field, index) => {
        return (
          <fieldset
            key={field.formId}
            className="rounded-lg border border-foreground p-2 shadow-lg"
          >
            <legend className="px-4 py-0">{`Branch id: ${
              field.id ?? 0
            }`}</legend>
            <div className="grid justify-items-end">
              <TrashIcon
                onClick={() => branchesRemove(index)}
                className="size-6 cursor-pointer"
              />
            </div>
            <FormField
              control={form.control}
              name={`branches.${index}.name`}
              rules={{ required: true }}
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
              name={`branches.${index}.description`}
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
                name={`branches.${index}.address`}
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
                name={`branches.${index}.city`}
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
                name={`branches.${index}.country`}
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
                name={`branches.${index}.email`}
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
                name={`branches.${index}.phone`}
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
                name={`branches.${index}.website`}
                rules={{ required: true }}
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
            </div>
          </fieldset>
        );
      })}
      <div>
        <Button type="button" onClick={handleNewBranch}>
          Add Branch
        </Button>
      </div>
    </div>
  );
};
