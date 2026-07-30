export interface EnquiryData {
  company: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  timeline: string;
  facility: string;
  message: string;
}

export interface EnquiryResponse extends EnquiryData {
  id: number;
  status: string;
  created_at: string;
  updated_at: string;
}

export async function createEnquiry(
  data: EnquiryData
): Promise<EnquiryResponse> {
  const response = await fetch(
    "https://backend.spsengineeringsolutions.site/api/enquiries/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    console.error("Enquiry API error:", result);

    throw new Error(
      "Unable to submit your enquiry. Please check the details."
    );
  }

  return result;
}