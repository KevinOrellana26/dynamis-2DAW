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
  username: string;
  verifyUrl: string;
};

export const VerifyEmailTemplate = ({
  verifyUrl,
  username,
}: EmailTemplateProps) => {
  return (
    <Html>
      <Head />
      <Preview>Verifica tu cuenta en Dýnamis</Preview>
      <Body style={body}>
        <Container style={container}>
          <Text style={title}>
            Tu camino en Dýnamis comienza ahora. ¡Activa tu cuenta para empezar!
          </Text>

          <Section style={section}>
            <Text style={headline}>
              Hola {username ? `${username}!` : "usuario!"}
            </Text>
            <Text style={paragraph}>
              Gracias por registrarte en Dýnamis. Para activar tu cuenta, por
              favor haz clic en el siguiente botón:
            </Text>

            <Button href={verifyUrl} style={button}>
              Verificar cuenta
            </Button>
          </Section>

          <Text style={footerText}>
            Si no creaste esta cuenta, ignora este correo.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default VerifyEmailTemplate;

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

const headline = {
  fontSize: "28px",
  fontWeight: "bold",
  marginBottom: "16px",
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
