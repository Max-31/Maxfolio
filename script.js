document.getElementById("currentYear").textContent = new Date().getFullYear();

function openGmailCompose() {
    const email = "nathrajarshi25@gmail.com";
    window.open(`mailto:${email}`, "_blank");

    // const gmailURL = `https://mail.google.com/mail/?view=cm&to=${email}`;
    // window.open(gmailURL, "_blank");
}

function goToGithub(){
    const githublURL = `https://github.com/Max-31`;

    window.open(githublURL, "_blank");
}

function goToLinkedinCert(){
    const linkedinCertlURL = `https://www.linkedin.com/in/rajarshi-nath-781456255/details/certifications/`;

    window.open(linkedinCertlURL, "_blank");
}

// const downloadResume = async () => {
// async function downloadResume(){
//     try {
//         const response = await fetch(`http://localhost:3000/download/ResumeRajarshi.pdf`);

//         if (!response.ok) {
//             throw new Error("Download failed!");
//         }

//         const blob = await response.blob(); 
//         const url = window.URL.createObjectURL(blob);

//         const a = document.createElement("a");
//         a.href = url;
//         a.download = "Resume__Rajarshi_Nath.pdf"; //filename which it will be download as
//         document.body.appendChild(a);
//         a.click();
//         a.remove();

//         window.URL.revokeObjectURL(url);
//     } catch (err) {
//         console.error("Error during download:", err);
//         alert("Couldn't download the file. Try again later.");
//     }
// };
