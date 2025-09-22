import emailjs from "@emailjs/browser";
import dayjs from "dayjs";

const SERVICE_ID = "service_1ox79y4";
const TEMPLATE_ID = "template_1lw3oeq";
const PUBLIC_KEY = "jGyGIk-jUsiP2ZgGH";

export const sendEmail = async (type, data) => {
  let content = "";

  if (type === "appointment") {
    content = `
Appointment Booking Confirmation

Name: ${data.fullName}
DOB: ${dayjs(data.dob).format("DD/MM/YYYY")}
Gender: ${data.gender}
Phone: ${data.phone}
Email: ${data.email}
Address: ${data.address}
Procedure: ${data.procedure}
Signs of Symptoms: ${data.signsOfSymptoms}
Symptoms Period: ${data.Sympotoms}
Appointment Date & Time: ${dayjs(data.appointmentDateTime).format(
      "DD/MM/YYYY HH:mm"
    )}
`;
  } else if (type === "review") {
    content = `
New Review Submitted

Name: ${data.name}
Rating: ${data.rating}
Review: ${data.description}
Date: ${new Date().toLocaleString()}
`;
  } else if (type === "contact") {
    content = `
Contact Form Submission

First Name: ${data.firstName}
Last Name: ${data.lastName}
Phone: ${data.phone}
Email: ${data.email}
Message: ${data.description}
`;
  }

  try {
    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      { content },
      PUBLIC_KEY
    );
    console.log("Email sent:", result.text);
    alert(`${type} email sent successfully!`);
  } catch (error) {
    console.error("Failed to send email:", error);
    alert("Failed to send email. Check console for details.");
  }
};
