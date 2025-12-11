// "use client";
// import styles from "../styles/ContactSection.module.css";
// import { Marcellus, Inter } from "next/font/google";
// const marcellus = Marcellus({
//   weight: "400",
//   subsets: ["latin"],
//   display: "swap",
// });
// const inter = Inter({
//   weight: ["400"],
//   subsets: ["latin"],
//   display: "swap",
// });
// const ContactSection = () => {
//   return (
//     <section className={styles.contactSection}>
//       <div className={styles.contactContainer}>
//         <h2 className={`${styles.sectionTitle} ${marcellus.className}`}>
//           Let’s work together to shape a brighter future!
//         </h2>
//         <form className={styles.contactForm}>
//           <div className={styles.inputRow}>
//             <input
//               type="text"
//               placeholder="Name"
//               className={`${styles.inputBox} ${inter.className}`}
//               name="name"
//               required
//             />
//             <input
//               type="text"
//               placeholder="First Name"
//               className={`${styles.inputBox} ${inter.className}`}
//               name="firstName"
//               required
//             />
//           </div>

//           <div className={styles.inputRow}>
//             <input
//               type="tel"
//               placeholder="Phone"
//               className={`${styles.inputBox} ${inter.className}`}
//               name="phone"
//               required
//             />
//             <input
//               type="email"
//               placeholder="Mail"
//               className={`${styles.inputBox} ${inter.className}`}
//               name="mail"
//               required
//             />
//           </div>

//           <div className={styles.sendButtonWrapper}>
//             <button type="submit" className={styles.sendButton}>
//               <span className={styles.sendButtonText}>Send</span>
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };
// export default ContactSection;









// "use client";
// import { useState } from "react";
// import styles from "../styles/ContactSection.module.css";
// import { Marcellus, Inter } from "next/font/google";

// const marcellus = Marcellus({ weight: "400", subsets: ["latin"], display: "swap" });
// const inter = Inter({ weight: ["400"], subsets: ["latin"], display: "swap" });

// const ContactSection = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     firstName: "",
//     phone: "",
//     mail: "",
//   });

//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("http://localhost:5000/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         setMessage("Thank you! Your message has been sent.");
//         setFormData({ name: "", firstName: "", phone: "", mail: "" });
//       } else {
//         setMessage("Something went wrong. Try again.");
//       }
//     } catch (error) {
//       setMessage("Server error: Unable to send message.");
//     }
//   };

//   return (
//     <section className={styles.contactSection}>
//       <div className={styles.contactContainer}>
//         <h2 className={`${styles.sectionTitle} ${marcellus.className}`}>
//           Let’s work together to shape a brighter future!
//         </h2>

//         <form className={styles.contactForm} onSubmit={handleSubmit}>
//           <div className={styles.inputRow}>
//             <input
//               type="text"
//               placeholder="Name"
//               className={`${styles.inputBox} ${inter.className}`}
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="text"
//               placeholder="First Name"
//               className={`${styles.inputBox} ${inter.className}`}
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className={styles.inputRow}>
//             <input
//               type="tel"
//               placeholder="Phone"
//               className={`${styles.inputBox} ${inter.className}`}
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="email"
//               placeholder="Mail"
//               className={`${styles.inputBox} ${inter.className}`}
//               name="mail"
//               value={formData.mail}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className={styles.sendButtonWrapper}>
//             <button type="submit" className={styles.sendButton}>
//               <span className={styles.sendButtonText}>Send</span>
//             </button>
//           </div>

//           {message && <p style={{ marginTop: "10px", color: "white" }}>{message}</p>}
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;



"use client";
import { useState } from "react";
import styles from "../styles/ContactSection.module.css";
import { Marcellus, Inter } from "next/font/google";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"], display: "swap" });
const inter = Inter({ weight: ["400"], subsets: ["latin"], display: "swap" });

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    firstName: "",
    phone: "",
    mail: "",
  });

  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1️⃣ Save to backend
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        // 2️⃣ Save to localStorage
        const localMessages = JSON.parse(localStorage.getItem("messages")) || [];
        localMessages.push(formData);
        localStorage.setItem("messages", JSON.stringify(localMessages));

        // 3️⃣ Show success message temporarily
        setMessage("Thank you! Your message has been sent.");

        // 4️⃣ Clear form & message after 2 seconds
        setTimeout(() => {
          setMessage(""); // remove message
          setFormData({ name: "", firstName: "", phone: "", mail: "" }); // clear form
        }, 2000);
      } else {
        setMessage("Something went wrong. Try again.");
      }
    } catch (error) {
      setMessage("Server error: Unable to send message.");
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h2 className={`${styles.sectionTitle} ${marcellus.className}`}>
          Let’s work together to shape a brighter future!
        </h2>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.inputRow}>
            <input
              type="text"
              placeholder="Name"
              className={`${styles.inputBox} ${inter.className}`}
              name="name"
              value={formData.name}
              onChange={handleChange}
              minLength={2}
              required
            />
            <input
              type="text"
              placeholder="First Name"
              className={`${styles.inputBox} ${inter.className}`}
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              minLength={2}
              required
            />
          </div>

          <div className={styles.inputRow}>
            <input
              type="tel"
              placeholder="Phone"
              className={`${styles.inputBox} ${inter.className}`}
              name="phone"
              value={formData.phone}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, ""); // only digits
                if (value.length <= 10) {
                  setFormData({ ...formData, phone: value });
                }
              }}
              pattern="\d{10}" // exactly 10 digits
              maxLength={10}
              required
            />
            <input
              type="email"
              placeholder="Mail"
              className={`${styles.inputBox} ${inter.className}`}
              name="mail"
              value={formData.mail}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.sendButtonWrapper}>
            <button type="submit" className={styles.sendButton}>
              <span className={styles.sendButtonText}>Send</span>
            </button>
          </div>

          {message && <p style={{ marginTop: "10px", color: "white" }}>{message}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
