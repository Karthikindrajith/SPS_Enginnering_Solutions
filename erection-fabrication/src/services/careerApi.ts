export interface JobOpening {
  id: number;
  title: string;
  department: string;
  location: string;
  job_type: string;
  experience: string;
  qualification: string;
  skills: string;
  description: string;
  last_date: string | null;
  created_at: string;
  updated_at: string;
}

const API_URL =
  "https://backend.spsengineeringsolutions.site/api/careers/";

export async function getJobOpenings(): Promise<JobOpening[]> {
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Unable to load job openings.");
  }

  return response.json();
}

export async function getJobOpening(
  id: number
): Promise<JobOpening> {
  const response = await fetch(`${API_URL}${id}/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Unable to load job details.");
  }

  return response.json();
}