import { CompanyEdit } from "@/components/company";
import { getCompanyById } from "@/lib/models/company";
import React from "react";

type CompanyByIdProps = {
  params: {
    id: string;
  };
};

// TODO: Implement a not found page if the company does not exist. Use the Next.js notFound function. https://nextjs.org/docs/app/api-reference/functions/not-found

export const generateMetadata = async ({ params: { id } }: CompanyByIdProps) => {
  const company = await getCompanyById(id);
  return {
    title: company?.name || "Company not found",
  };
};

const CompanyById = async (props: CompanyByIdProps) => {
  const company = await getCompanyById(props.params.id);

  return <div>{company ? <CompanyEdit company={company} /> : null}</div>;
};

export default CompanyById;
