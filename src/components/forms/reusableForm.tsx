"use client";

import {
  Box,
  TextField,
  InputAdornment,
  Select,
  ListSubheader,
  InputBase,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Image from "next/image";
import { useMemo, useState } from "react";
import { countries } from "@/content/countries.data";
import Button from "../ui/button";
import Icon from "../ui/icon";

/* ---------------- TYPES ---------------- */

export type FieldType = "text" | "email" | "textarea" | "phone" | "select";

export interface FieldConfig {
  type: FieldType;
  name: string;
  label?: string;
  placeholder?: string;
  rows?: number;
  options?: string[]; // Added for the Enquiry dropdown
}

interface ReusableFormProps {
  fields: FieldConfig[];
  buttonText: string;
  buttonClassName?: string;
  onSubmit?: (e: React.FormEvent) => void;
}

/* ---------------- COMPONENT ---------------- */

const ReusableForm = ({
  fields,
  buttonText,
  onSubmit,
}: ReusableFormProps) => {
  const [country, setCountry] = useState("+44");
  const [searchText, setSearchText] = useState("");

  const filteredCountries = useMemo(() => {
    return countries.filter(
      (c) =>
        c.label.toLowerCase().includes(searchText.toLowerCase()) ||
        c.code.includes(searchText)
    );
  }, [searchText]);

  const selectedCountry = countries.find((c) => c.code === country);

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      {/* 2-Column Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {fields.map((field) => {
          const isFullWidth = field.type === "textarea";
          
          return (
            <Box 
              key={field.name} 
              className={`flex flex-col gap-1.5 ${isFullWidth ? "md:col-span-2" : ""}`}
            >
              {field.label && (
                <label className="text-[#1A1A1A] font-bold text-[14px]">
                  {field.label}
                  <span className="text-[#BD0917] ml-1">*</span>
                </label>
              )}

              {field.type === "phone" ? (
                <TextField
                  placeholder={field.placeholder}
                  fullWidth
                  variant="outlined"
                  sx={fieldStyles}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <Select
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            variant="standard"
                            disableUnderline
                            MenuProps={{ autoFocus: false }}
                            onClose={() => setSearchText("")}
                            renderValue={(value) => (
                              <Box className="flex items-center gap-3 pr-4">
                                {selectedCountry && (
                                  <Image
                                    src={`https://flagcdn.com/w20/${selectedCountry.iso.toLowerCase()}.png`}
                                    alt={selectedCountry.label}
                                    width={25}
                                    height={25}
                                    className=""
                                  />
                                )}
                                <span className="font-medium text-[#4B5563]">
                                  {value}
                                </span>
                              </Box>
                            )}
                          >
                            <ListSubheader>
                              <InputBase
                                fullWidth
                                placeholder="Search..."
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                onKeyDown={(e) => e.stopPropagation()}
                                className="p-2 border-b"
                              />
                            </ListSubheader>
                            {filteredCountries.map((item) => (
                              <MenuItem key={item.code} value={item.code}>
                                <Image
                                  src={`https://flagcdn.com/w20/${item.iso.toLowerCase()}.png`}
                                  alt="flag"
                                  width={20}
                                  height={15}
                                />
                                <span className="ml-2 text-sm">
                                  {item.label} ({item.code})
                                </span>
                              </MenuItem>
                            ))}
                          </Select>
                          <Box className="h-6 w-px bg-gray-300 mr-2" />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              ) : field.type === "select" ? (
                <Select
                  defaultValue="General"
                  fullWidth
                  sx={fieldStyles}
                  IconComponent={() => (
                    <Box className="pr-4 pointer-events-none">
                       <Icon src="/icons/dropdown.svg" iconSize={16} noBg noBorder className="text-[#BD0917]" />
                    </Box>
                  )}
                >
                  {field.options?.map((opt) => (
                    <MenuItem key={opt} value={opt}>{opt}</MenuItem>
                  ))}
                </Select>
              ) : (
                <TextField
                  placeholder={field.placeholder}
                  fullWidth
                  multiline={field.type === "textarea"}
                  rows={field.rows || 1}
                  type={field.type === "email" ? "email" : "text"}
                  variant="outlined"
                  sx={fieldStyles}
                />
              )}
            </Box>
          );
        })}
      </div>

      {/* Terms and Conditions */}
      <Box className="flex items-center">
        <FormControlLabel
          control={
            <Checkbox 
              sx={{ 
                color: "#E5E5E5", 
                "&.Mui-checked": { color: "#BD0917" } 
              }} 
            />
          }
          label={
            <span className="text-[#4B5563] text-sm">
              I agree to <span className="text-[#BD0917] font-bold">SSG Mindforge</span> terms and conditions.
            </span>
          }
        />
      </Box>

      {/* Footer Actions */}
      <div className="pt-2 flex flex-col sm:flex-row sm:justify-between gap-6 sm:items-center">
        <Button
          className={`bg-[#BD0917] text-white`}
          text={buttonText}
          radius="full"
          size="large"
          showIcon
          icon="/icons/gray-arrow.svg"
          iconBg="p-2 rounded-full bg-white"
          
        />
        
        <div className="flex items-center">
          <Icon src="/icons/hugeicons_security-check.svg" alt="protected" iconSize={20} noBorder noBg/> 
          <span className="text-[#4B5563] text-[14px] font-medium">
            Your privacy is protected
          </span>
        </div>
      </div>
    </form>
  );
};

/* ---------------- STYLES ---------------- */

const fieldStyles = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    backgroundColor: "#F9FAFB", // Matches the very light gray in image
    "& fieldset": { borderColor: "#F3F4F6" },
    "&:hover fieldset": { borderColor: "#E5E7EB" },
    "&.Mui-focused fieldset": { borderColor: "#BD0917", borderWidth: "1px" },
  },
  "& .MuiInputBase-input": {
    padding: "16px 20px",
    fontSize: "14px",
    color: "#4B5563",
    "&::placeholder": {
      color: "#9CA3AF",
      opacity: 1,
    },
  },
  "& .MuiSelect-select": {
    padding: "16px 20px",
    fontSize: "14px",
    color: "#9CA3AF",
  }
};

export default ReusableForm;

