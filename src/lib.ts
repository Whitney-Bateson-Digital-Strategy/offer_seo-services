import { FORM } from "./data/page";

export const asset = (file: string) => `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${file}`;

// The audit form link, optionally pre-filling the service someone was looking at.
export const formUrl = (service?: string) => {
  if (!FORM.url || !service || !FORM.servicePrefillField) return FORM.url;
  const sep = FORM.url.includes("?") ? "&" : "?";
  return `${FORM.url}${sep}prefill_${encodeURIComponent(FORM.servicePrefillField)}=${encodeURIComponent(service)}`;
};
