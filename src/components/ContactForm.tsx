import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { getCountries, getCountryCallingCode } from 'libphonenumber-js';

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "DZ",
    phone: "",
    message: "",
  });

  // Get sorted list of countries
  const countries = getCountries().map(country => ({
    code: country,
    name: new Intl.DisplayNames(['en'], { type: 'region' }).of(country) || country,
    dialCode: `+${getCountryCallingCode(country)}`
  })).sort((a, b) => a.name.localeCompare(b.name));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      // Only allow numbers and basic phone number characters
      const sanitizedValue = value.replace(/[^\d+\-() ]/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: sanitizedValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mqappkee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: `${countries.find(c => c.code === formData.country)?.dialCode} ${formData.phone}`,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "Thank you for your message. We'll get back to you soon.",
        });
        
        setFormData({
          name: "",
          email: "",
          country: "DZ",
          phone: "",
          message: ""
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
      <div>
        <label htmlFor="name" className="sr-only">Your Name</label>
        <Input
          id="name"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="bg-gray-50 border-gray-200 h-12 text-black"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="sr-only">Your Email</label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="bg-gray-50 border-gray-200 h-12 text-black"
          required
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="sr-only">Your Phone</label>
        <div className="flex space-x-2">
          <div className="w-1/3">
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full h-12 px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-black appearance-none"
              aria-label="Country"
            >
              {countries.map(({ code, name, dialCode }) => (
                <option key={code} value={code}>
                  {name} ({dialCode})
                </option>
              ))}
            </select>
          </div>
          <div className="w-2/3">
            <Input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="bg-gray-50 border-gray-200 h-12 text-black"
            />
          </div>
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="sr-only">Your Message</label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="bg-gray-50 border-gray-200 min-h-[150px] text-black"
          required
        />
      </div>
      
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-6 h-auto text-lg font-helvetica bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
