import { FieldConfig } from "@/components/forms/reusableForm";

export const contactFields: FieldConfig[] = [
  { name: "firstName", label: "First Name", type: "text", placeholder: "Enter Your First Name" },
  { name: "lastName", label: "Last Name", type: "text", placeholder: "Enter Your Last Name" },
  { name: "email", label: "Email Address", type: "email", placeholder: "Enter Your Email Address" },
  { name: "phone", label: "Phone Number", type: "phone", placeholder: "+44 xx xxxx xxxx" },
  { name: "company", label: "Company", type: "text", placeholder: "Enter Your Company" },
  { 
    name: "subject", 
    label: "Subject of Enquiry", 
    type: "select", 
    options: ["General", "Sales", "Support", "Partnership"] 
  },
  { 
    name: "description", 
    label: "Description", 
    type: "textarea", 
    placeholder: "How can we help you?", 
    rows: 6 
  },
];

