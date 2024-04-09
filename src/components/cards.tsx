'use client';

import { v4 as uuidv4 } from 'uuid';
import { UseFormReturn, useFieldArray } from 'react-hook-form';
import { Company, companyCardDefault } from '@/lib/schemas/company';

import { TrashIcon } from '@heroicons/react/24/solid';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';

type CompanyCardsProps = {
  form: UseFormReturn<Company>;
};

export const CompanyCards = ({ form }: CompanyCardsProps) => {
  const {
    fields: cardsFields,
    append: cardsAppend,
    remove: cardsRemove,
  } = useFieldArray({
    control: form.control,
    name: 'cards',
    keyName: 'formId',
  });

  const handleNewCard = () => {
    cardsAppend({
      ...companyCardDefault,
      id: uuidv4(),
    });
  };

  return (
    <div className="flex flex-col gap-2">
      {cardsFields.map((field, index) => {
        return (
          <fieldset
            key={field.formId}
            className="rounded-lg border border-foreground p-2 shadow-lg"
          >
            <legend className="px-4 py-0">{`Card id: ${field.id ?? 0}`}</legend>
            <div className="grid justify-items-end">
              <TrashIcon
                onClick={() => cardsRemove(index)}
                className="size-6 cursor-pointer"
              />
            </div>
            <FormField
              control={form.control}
              name={`cards.${index}.name`}
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
              name={`cards.${index}.barcode`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Barcode</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </fieldset>
        );
      })}
      <div>
        <Button type="button" onClick={handleNewCard}>
          Add Card
        </Button>
      </div>
    </div>
  );
};
