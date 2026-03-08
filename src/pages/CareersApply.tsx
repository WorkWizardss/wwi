import { useState } from "react";
import { ArrowRight, ArrowLeft, Upload, CheckCircle, Phone, Mail, User, Calendar, Briefcase, GraduationCap, FileText, HelpCircle, Building2, Award, Loader2 } from "lucide-react";
import { submitApplication } from "@/lib/api";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";

type FormData = {
  mobile: string;
  email: string;
  subscribe: boolean;
  name: string;
  age: string;
  experience: string;
  education: string;
  institute: string;
  cgpa: string;
  previousCompany: string;
  previousRole: string;
  previousDuration: string;
  coverLetter: string;
  resumeFile: File | null;
  whyJoin: string;
  availability: string;
  expectedSalary: string;
};

const initialFormData: FormData = {
  mobile: "",
  email: "",
  subscribe: true,
  name: "",
  age: "",
  experience: "",
  education: "",
  institute: "",
  cgpa: "",
  previousCompany: "",
  previousRole: "",
  previousDuration: "",
  coverLetter: "",
  resumeFile: null,
  whyJoin: "",
  availability: "",
  expectedSalary: "",
};

const steps = [
  { label: "Contact", icon: Phone },
  { label: "Details", icon: FileText },
  { label: "Preview", icon: CheckCircle },
];

const CareersApply = () => {
  const [searchParams] = useSearchParams();
  const position = searchParams.get("position") || "General Application";
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleChange = (field: keyof FormData, value: string | boolean | File | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateStep1 = () => {
    if (!formData.mobile || formData.mobile.length < 10) {
      toast({ title: "Invalid Mobile", description: "Please enter a valid mobile number.", variant: "destructive" });
      return false;
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({ title: "Invalid Email", description: "Please enter a valid email address.", variant: "destructive" });
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!formData.name.trim()) {
      toast({ title: "Name Required", description: "Please enter your full name.", variant: "destructive" });
      return false;
    }
    if (!formData.age || Number(formData.age) < 16 || Number(formData.age) > 80) {
      toast({ title: "Invalid Age", description: "Please enter a valid age (16-80).", variant: "destructive" });
      return false;
    }
    if (!formData.experience) {
      toast({ title: "Experience Required", description: "Please select your experience level.", variant: "destructive" });
      return false;
    }
    if (!formData.education) {
      toast({ title: "Education Required", description: "Please select your education level.", variant: "destructive" });
      return false;
    }
    if (!formData.coverLetter.trim()) {
      toast({ title: "Cover Letter Required", description: "Please write a brief cover letter.", variant: "destructive" });
      return false;
    }
    if (!formData.whyJoin.trim()) {
      toast({ title: "Answer Required", description: "Please tell us why you want to join.", variant: "destructive" });
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (currentStep === 0 && !validateStep1()) return;
    if (currentStep === 1 && !validateStep2()) return;
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await submitApplication({
        position,
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        age: formData.age,
        experience: formData.experience,
        education: formData.education,
        institute: formData.institute,
        cgpa: formData.cgpa,
        previousCompany: formData.previousCompany,
        previousRole: formData.previousRole,
        previousDuration: formData.previousDuration,
        coverLetter: formData.coverLetter,
        whyJoin: formData.whyJoin,
        availability: formData.availability,
        expectedSalary: formData.expectedSalary,
        subscribe: formData.subscribe,
        resumeFile: formData.resumeFile,
      });
      setSubmitted(true);
      toast({ title: "Application Submitted!", description: "We'll review your application and get back to you soon." });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen pb-20 md:pb-0">
        <Header />
        <div className="pt-24 md:pt-32 flex items-center justify-center px-4">
          <Card className="max-w-lg w-full p-8 md:p-12 text-center animate-scale-in border-border">
            <div className="mx-auto mb-6 p-4 rounded-full bg-green-100 w-fit">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Application Submitted!</h2>
            <p className="text-muted-foreground mb-6">
              Thank you for applying for <span className="font-semibold text-foreground">{position}</span>. We'll review your application and reach out via email or phone.
            </p>
            <Button onClick={() => navigate("/")} className="group">
              Back to Home
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20 md:pb-0 bg-gradient-to-b from-background to-secondary/30">
      <Header />
      <div className="pt-24 md:pt-32 pb-12 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Title */}
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-2">Apply for Position</h1>
            <p className="text-muted-foreground text-sm md:text-base">
              <span className="font-medium text-foreground">{position}</span> • Remote • Full Time
            </p>
          </div>

          {/* Step Indicator */}
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-8 animate-fade-in">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = i === currentStep;
              const isDone = i < currentStep;
              return (
                <div key={i} className="flex items-center gap-2 md:gap-3">
                  {i > 0 && (
                    <div className={`hidden sm:block w-8 md:w-12 h-0.5 transition-colors ${isDone ? "bg-foreground" : "bg-border"}`} />
                  )}
                  <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all ${
                    isActive ? "bg-foreground text-background" : isDone ? "bg-foreground/80 text-background" : "bg-secondary text-muted-foreground"
                  }`}>
                    <Icon className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">{step.label}</span>
                    <span className="sm:hidden">{i + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Step Content */}
          <Card className="p-6 md:p-8 border-border animate-slide-up">
            {currentStep === 0 && <Step1Contact formData={formData} onChange={handleChange} />}
            {currentStep === 1 && <Step2Details formData={formData} onChange={handleChange} position={position} />}
            {currentStep === 2 && <Step3Preview formData={formData} position={position} />}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              {currentStep > 0 ? (
                <Button variant="outline" onClick={handleBack} className="group">
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Back
                </Button>
              ) : (
                <Button variant="outline" onClick={() => navigate("/#careers")}>
                  Cancel
                </Button>
              )}

              {currentStep < 2 ? (
                <Button onClick={handleNext} className="group">
                  Next
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              ) : (
                <Button onClick={handleSubmit} className="group bg-green-600 hover:bg-green-700">
                  Submit Application
                  <CheckCircle className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

/* ======================== STEP 1: Contact Info ======================== */
const Step1Contact = ({ formData, onChange }: { formData: FormData; onChange: (field: keyof FormData, value: string | boolean) => void }) => (
  <div className="space-y-6">
    <div className="text-center mb-2">
      <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-1">Contact Information</h2>
      <p className="text-sm text-muted-foreground">We'll use this to reach out about your application</p>
    </div>

    <div className="space-y-4">
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
          <Phone className="h-4 w-4 text-muted-foreground" />
          Mobile Number
        </label>
        <Input
          type="tel"
          placeholder="+91 9876543210"
          value={formData.mobile}
          onChange={(e) => onChange("mobile", e.target.value)}
          className="text-base"
        />
      </div>

      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
          <Mail className="h-4 w-4 text-muted-foreground" />
          Email Address
        </label>
        <Input
          type="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={(e) => onChange("email", e.target.value)}
          className="text-base"
        />
      </div>

      <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border">
        <Checkbox
          id="subscribe"
          checked={formData.subscribe}
          onCheckedChange={(checked) => onChange("subscribe", !!checked)}
          className="mt-0.5"
        />
        <label htmlFor="subscribe" className="text-sm text-muted-foreground cursor-pointer leading-relaxed">
          Subscribe for email updates about new positions, company news, and career tips from Work Wizards Innovations
        </label>
      </div>
    </div>
  </div>
);

/* ======================== STEP 2: Details ======================== */
const Step2Details = ({ formData, onChange, position }: { formData: FormData; onChange: (field: keyof FormData, value: string | File | null) => void; position: string }) => {
  const hasExperience = formData.experience && formData.experience !== "fresher";

  return (
    <div className="space-y-5">
      <div className="text-center mb-2">
        <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-1">Application Details</h2>
        <p className="text-sm text-muted-foreground">Tell us more about yourself</p>
      </div>

      {/* Personal Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
            <User className="h-4 w-4 text-muted-foreground" />
            Full Name
          </label>
          <Input placeholder="John Doe" value={formData.name} onChange={(e) => onChange("name", e.target.value)} />
        </div>
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            Age
          </label>
          <Input type="number" placeholder="25" min={16} max={80} value={formData.age} onChange={(e) => onChange("age", e.target.value)} />
        </div>
      </div>

      {/* Education Section */}
      <div className="pt-4 border-t border-border">
        <h3 className="flex items-center gap-2 text-base font-semibold text-foreground mb-4">
          <GraduationCap className="h-4 w-4 text-muted-foreground" />
          Education Details
        </h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Education Level</label>
              <Select value={formData.education} onValueChange={(val) => onChange("education", val)}>
                <SelectTrigger><SelectValue placeholder="Select education" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="high-school">High School</SelectItem>
                  <SelectItem value="diploma">Diploma</SelectItem>
                  <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                  <SelectItem value="masters">Master's Degree</SelectItem>
                  <SelectItem value="phd">PhD</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">CGPA / Percentage</label>
              <Input placeholder="e.g., 8.5 CGPA or 85%" value={formData.cgpa} onChange={(e) => onChange("cgpa", e.target.value)} />
            </div>
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
              <Building2 className="h-4 w-4 text-muted-foreground" />
              Institute / University Name
            </label>
            <Input placeholder="e.g., IIT Bombay, JNTU Hyderabad" value={formData.institute} onChange={(e) => onChange("institute", e.target.value)} />
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="pt-4 border-t border-border">
        <h3 className="flex items-center gap-2 text-base font-semibold text-foreground mb-4">
          <Briefcase className="h-4 w-4 text-muted-foreground" />
          Experience Details
        </h3>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Experience Level</label>
            <Select value={formData.experience} onValueChange={(val) => onChange("experience", val)}>
              <SelectTrigger><SelectValue placeholder="Select experience" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="fresher">Fresher</SelectItem>
                <SelectItem value="0-1">0-1 Years</SelectItem>
                <SelectItem value="1-3">1-3 Years</SelectItem>
                <SelectItem value="3-5">3-5 Years</SelectItem>
                <SelectItem value="5+">5+ Years</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {hasExperience && (
            <div className="p-4 rounded-xl bg-secondary/30 border border-border space-y-4 animate-fade-in">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Previous Employment</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                    Company Name
                  </label>
                  <Input placeholder="e.g., TCS, Infosys" value={formData.previousCompany} onChange={(e) => onChange("previousCompany", e.target.value)} />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                    <Award className="h-4 w-4 text-muted-foreground" />
                    Role / Designation
                  </label>
                  <Input placeholder="e.g., Software Engineer" value={formData.previousRole} onChange={(e) => onChange("previousRole", e.target.value)} />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Duration</label>
                <Input placeholder="e.g., Jan 2022 - Dec 2024" value={formData.previousDuration} onChange={(e) => onChange("previousDuration", e.target.value)} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Cover Letter & Resume */}
      <div className="pt-4 border-t border-border space-y-4">
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
            <FileText className="h-4 w-4 text-muted-foreground" />
            Cover Letter
          </label>
          <Textarea
            placeholder="Tell us about yourself, your skills, and why you're a great fit..."
            rows={4}
            value={formData.coverLetter}
            onChange={(e) => onChange("coverLetter", e.target.value)}
            className="resize-none"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
            <Upload className="h-4 w-4 text-muted-foreground" />
            Upload Resume (optional)
          </label>
          <div className="relative">
            <Input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => onChange("resumeFile", e.target.files?.[0] || null)}
              className="file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-secondary file:text-foreground hover:file:bg-secondary/80 cursor-pointer"
            />
            {formData.resumeFile && (
              <p className="text-xs text-muted-foreground mt-1">Selected: {formData.resumeFile.name}</p>
            )}
          </div>
        </div>
      </div>

      {/* Job-Related Questions */}
      <div className="pt-4 border-t border-border">
        <h3 className="flex items-center gap-2 text-base font-semibold text-foreground mb-4">
          <HelpCircle className="h-4 w-4 text-muted-foreground" />
          Questions for {position}
        </h3>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Why do you want to join Work Wizards Innovations?
            </label>
            <Textarea
              placeholder="Share your motivation..."
              rows={3}
              value={formData.whyJoin}
              onChange={(e) => onChange("whyJoin", e.target.value)}
              className="resize-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              When can you start? (Availability)
            </label>
            <Input
              placeholder="e.g., Immediately, 2 weeks notice, etc."
              value={formData.availability}
              onChange={(e) => onChange("availability", e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Expected Salary (per annum, optional)
            </label>
            <Input
              placeholder="e.g., ₹5,00,000"
              value={formData.expectedSalary}
              onChange={(e) => onChange("expectedSalary", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
/* ======================== STEP 3: Preview ======================== */
const Step3Preview = ({ formData, position }: { formData: FormData; position: string }) => {
  const fields = [
    { label: "Position", value: position, icon: Briefcase },
    { label: "Mobile", value: formData.mobile, icon: Phone },
    { label: "Email", value: formData.email, icon: Mail },
    { label: "Full Name", value: formData.name, icon: User },
    { label: "Age", value: formData.age, icon: Calendar },
    { label: "Education", value: formData.education, icon: GraduationCap },
    { label: "Institute", value: formData.institute, icon: Building2 },
    { label: "CGPA / %", value: formData.cgpa, icon: Award },
    { label: "Experience", value: formData.experience, icon: Briefcase },
    ...(formData.experience && formData.experience !== "fresher"
      ? [
          { label: "Previous Company", value: formData.previousCompany, icon: Building2 },
          { label: "Previous Role", value: formData.previousRole, icon: Award },
          { label: "Duration", value: formData.previousDuration, icon: Calendar },
        ]
      : []),
    { label: "Resume", value: formData.resumeFile?.name || "Not uploaded", icon: Upload },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-2">
        <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-1">Review Your Application</h2>
        <p className="text-sm text-muted-foreground">Please verify all details before submitting</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {fields.map((field) => {
          const Icon = field.icon;
          return (
            <div key={field.label} className="p-3 rounded-xl bg-secondary/50 border border-border">
              <div className="flex items-center gap-2 mb-1">
                <Icon className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{field.label}</span>
              </div>
              <p className="text-sm font-medium text-foreground truncate">{field.value || "—"}</p>
            </div>
          );
        })}
      </div>

      <div className="space-y-3">
        <div className="p-4 rounded-xl bg-secondary/50 border border-border">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">Cover Letter</p>
          <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed">{formData.coverLetter || "—"}</p>
        </div>

        <div className="p-4 rounded-xl bg-secondary/50 border border-border">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">Why Join Us?</p>
          <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed">{formData.whyJoin || "—"}</p>
        </div>

        {formData.availability && (
          <div className="p-4 rounded-xl bg-secondary/50 border border-border">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">Availability</p>
            <p className="text-sm text-foreground">{formData.availability}</p>
          </div>
        )}

        {formData.expectedSalary && (
          <div className="p-4 rounded-xl bg-secondary/50 border border-border">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">Expected Salary</p>
            <p className="text-sm text-foreground">{formData.expectedSalary}</p>
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 p-3 rounded-xl bg-yellow-50 border border-yellow-200 text-yellow-800">
        <HelpCircle className="h-4 w-4 flex-shrink-0" />
        <p className="text-xs">Please review all information carefully. Click "Submit Application" to complete your application.</p>
      </div>
    </div>
  );
};

export default CareersApply;
