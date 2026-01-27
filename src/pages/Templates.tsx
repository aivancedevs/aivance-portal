import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedBackground, { heroBackgroundConfig } from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

const Templates = () => {
  const { t } = useLanguage();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [plantillaId, setPlantillaId] = useState("");
  const [comentario, setComentario] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const API_BASE_URL =
    import.meta.env.VITE_TEMPLATE_SERVICE_URL || "http://localhost:3000";

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSuccessMessage(null);
    setErrorMessage(null);
    setIsSubmitted(false);

    if (!plantillaId) {
      setErrorMessage(t("templates.form.error.template_required"));
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/solicitudes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          email,
          plantillaId,
          comentario,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        const validationMessage =
          data?.errors?.[0]?.msg ||
          data?.message ||
          t("templates.form.error.validation");
        setErrorMessage(validationMessage);
        return;
      }

      setSuccessMessage(t("templates.form.success"));
      setNombre("");
      setEmail("");
      setPlantillaId("");
      setComentario("");
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      setErrorMessage(
        t("templates.form.error.generic")
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <section className="relative min-h-screen overflow-hidden bg-primary text-primary-foreground pt-32 sm:pt-0">
        <AnimatedBackground circles={heroBackgroundConfig} />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-xs sm:text-sm font-medium text-accent mb-3 sm:mb-4">
                {t("templates.subtitle")}
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary-foreground mb-4 sm:mb-6 text-balance">
                {t("templates.title")}
              </h1>
              <p className="text-base sm:text-lg text-primary-foreground/70 text-balance">
                {t("templates.description")}
              </p>
            </div>

            {/* Form Card */}
            <Card className="bg-primary-foreground/5 border-primary-foreground/10 backdrop-blur-md">
              <CardContent className="pt-6">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-primary-foreground">
                      {t("templates.form.name")}
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder={t("templates.form.name.placeholder")}
                      className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 backdrop-blur-sm"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-primary-foreground">
                      {t("templates.form.email")}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t("templates.form.email.placeholder")}
                      className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 backdrop-blur-sm"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="template" className="text-primary-foreground">
                      {t("templates.form.template")}
                    </Label>
                    <Select
                      value={plantillaId}
                      onValueChange={(value) => setPlantillaId(value)}
                    >
                      <SelectTrigger className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground backdrop-blur-sm">
                        <SelectValue placeholder={t("templates.form.template.placeholder")} />
                      </SelectTrigger>
                      <SelectContent className="bg-primary border-primary-foreground/10">
                        <SelectItem value="template1" className="text-primary-foreground hover:bg-primary-foreground/10">
                          Plantilla 1
                        </SelectItem>
                        <SelectItem value="template2" className="text-primary-foreground hover:bg-primary-foreground/10">
                          Plantilla 2
                        </SelectItem>
                        <SelectItem value="template3" className="text-primary-foreground hover:bg-primary-foreground/10">
                          Plantilla 3
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="comment" className="text-primary-foreground">
                      {t("templates.form.comment")}
                    </Label>
                    <Textarea
                      id="comment"
                      placeholder={t("templates.form.comment.placeholder")}
                      className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 min-h-[100px] backdrop-blur-sm"
                      value={comentario}
                      onChange={(e) => setComentario(e.target.value)}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full gradient-accent text-accent-foreground hover:opacity-90"
                    disabled={isSubmitting || isSubmitted}
                  >
                    {isSubmitting
                      ? t("templates.form.sending")
                      : isSubmitted
                        ? t("templates.form.sent")
                        : t("templates.form.submit")}
                  </Button>

                  {successMessage && (
                    <p className="text-sm text-emerald-400 text-center">
                      {successMessage}
                    </p>
                  )}
                  {errorMessage && (
                    <p className="text-sm text-red-400 text-center">
                      {errorMessage}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Templates;
