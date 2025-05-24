import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type EmailTemplateProps = {
  resetUrl: string;
};

export const ResetEmailTemplate = ({ resetUrl }: EmailTemplateProps) => {
  return (
    <Html>
      <Head />
      <Preview>Restablece tu contraseña en Dýnamis</Preview>
      <Body style={body}>
        <Container style={container}>
          <Text style={title}>¿Olvidaste tu contraseña?</Text>

          <Section style={section}>
            <Text style={paragraph}>
              Hemos recibido una solicitud para restablecer la contraseña de tu
              cuenta en <strong>Dýnamis</strong>.
            </Text>

            <Button href={resetUrl} style={button}>
              Restablecer contraseña
            </Button>
          </Section>

          <Text style={footerText}>
            Este enlace expirará en 1 hora. Si no solicitaste este cambio,
            puedes ignorar este mensaje.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ResetEmailTemplate;

// --- Inline styles ---
const body = {
  backgroundColor: "#ffffff",
  color: "#1f2937", // gray-800
  fontFamily: "Helvetica, Arial, sans-serif",
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "24px",
};

const title = {
  fontSize: "32px",
  fontWeight: "bold",
  color: "#2057a9", // accent-blue
  textAlign: "center" as const,
  marginBottom: "16px",
};

const section = {
  padding: "24px",
  border: "1px solid #d1d5db", // border-gray-300
  borderRadius: "8px",
  textAlign: "center" as const,
};

const paragraph = {
  fontSize: "16px",
  marginBottom: "24px",
};

const button = {
  display: "inline-block",
  padding: "12px 24px",
  borderRadius: "6px",
  fontSize: "14px",
  backgroundColor: "#2057a9", // accent-blue
  color: "#ffffff",
  textDecoration: "none",
};

const footerText = {
  fontSize: "12px",
  color: "#9ca3af", // gray-500
  textAlign: "center" as const,
  marginTop: "32px",
};
