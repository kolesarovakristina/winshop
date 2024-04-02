"use client";

import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Company, companyBranchDefault, companySchema } from "@/lib/schemas/company";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

type CompanyEditProps = {
  company: Company;
};

// TODO: Finish implementing the CompanyEdit component that will display a form to edit a company, with the option to save the data to a JSON file.
// The function to save the data to a JSON file is already implemented in the lib/models/company.ts file.
// Below is a partial implementation of the CompanyEdit component, the remaining fields are described in the company schema in the `lib/schemas/company.ts` file.

// TODO: Bonus points if you implement a button to delete a branch/card from a company
// TODO: Bonus points if you implement a button to delete a company

export const CompanyEdit = ({ company }: CompanyEditProps) => {
  const form = useForm<Company>({
    defaultValues: company,
    resolver: zodResolver(companySchema),
  });

  const { fields: branchesFields, append: branchesAppend } = useFieldArray({
    control: form.control,
    name: "branches",
    keyName: "formId",
  });

  const onSubmit = (data: Company) => {
    console.log(data);
  };

  const handleNewBranch = () => {
    branchesAppend({ ...companyBranchDefault, id: uuidv4() });
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="m-4 flex flex-col gap-4 rounded-lg border bg-muted p-4">
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
          </div>
          <div className="flex flex-col gap-2">
            {branchesFields.map((field, index) => {
              return (
                <fieldset key={field.formId} className="rounded-lg border border-foreground p-2 shadow-lg">
                  <legend className="px-4 py-0">{`Branch id: ${field.id ?? 0}`}</legend>
                  <FormField
                    control={form.control}
                    name={`branches.${index}.name`}
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
                  </div>
                </fieldset>
              );
            })}
            <div>
              <Button onClick={handleNewBranch}>Add Branch</Button>
            </div>
          </div>
          <Button type="submit">Save</Button>
        </form>
      </Form>
    </div>
  );
};
