const WORKER_URL = "https://wwi-careers.knowra-official.workers.dev";

export type ApplicationData = {
  position: string;
  name: string;
  email: string;
  mobile: string;
  age: string;
  experience: string;
  education: string;
  institute: string;
  cgpa: string;
  previousCompany: string;
  previousRole: string;
  previousDuration: string;
  coverLetter: string;
  whyJoin: string;
  availability: string;
  expectedSalary: string;
  subscribe: boolean;
  resumeFile: File | null;
};

export async function submitApplication(data: ApplicationData): Promise<{ success: boolean; id?: string; error?: string }> {
  const formData = new FormData();

  formData.append("position", data.position);
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("mobile", data.mobile);
  formData.append("age", data.age);
  formData.append("experience", data.experience);
  formData.append("education", data.education);
  formData.append("institute", data.institute);
  formData.append("cgpa", data.cgpa);
  formData.append("previousCompany", data.previousCompany);
  formData.append("previousRole", data.previousRole);
  formData.append("previousDuration", data.previousDuration);
  formData.append("coverLetter", data.coverLetter);
  formData.append("whyJoin", data.whyJoin);
  formData.append("availability", data.availability);
  formData.append("expectedSalary", data.expectedSalary);
  formData.append("subscribe", String(data.subscribe));

  if (data.resumeFile) {
    formData.append("resume", data.resumeFile);
  }

  const response = await fetch(WORKER_URL, {
    method: "POST",
    body: formData,
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || "Failed to submit application");
  }

  return result;
}
