import React, { useState } from "react"
import html2canvas from "html2canvas"

const ImageCertificate = () => {
  const [name, setName] = useState("")

  // Function to handle downloading the certificate
  const handleDownload = () => {
    html2canvas(document.querySelector("#certificate")).then((canvas) => {
      const link = document.createElement("a")
      link.download = `${name}_certificate.png`
      link.href = canvas.toDataURL("image/png")
      link.click()
    })
  }

  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Playwrite IN,Arial, sans-serif",
      }}
    >
      {/* Input for the name */}
      <input
        type='text'
        placeholder='Enter your name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "25px",
          marginBottom: "20px",
          width: "300px",
          borderRadius: "25px",
          color: "#06402B",
          borderWidth: "5px",
          borderColor: "#06402B",
        }}
      />

      {/* Certificate Template */}
      <div
        id='certificate'
        style={{
          position: "relative",
          width: "600px",
          height: "800px",
          margin: "0 auto",
          border: "2px solid #000",
        }}
      >
        {/* Background Image */}
        <img
          src='./Certificate.jpg' // Replace with your certificate image URL
          alt='Certificate Background'
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />

        {/* Name Overlay */}
        <div
          style={{
            position: "absolute",
            top: "47%",
            left: "35%",
            transform: "translate(-27%, -50%)",
            fontSize: "25px",
            fontWeight: 400,

            color: "#06402B",
            textAlign: "center",
          }}
        >
          {name || "Your Name"}
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        style={{
          padding: "20px 20px",
          borderRadius: "15px",
          fontSize: "16px",
          fontWeight: "bold",
          margin: "20px 20px",
          backgroundColor: "#06402B",
          color: "#D8A444",
          border: "none",
          cursor: "pointer",
        }}
      >
        Download Certificate
      </button>
      <style>
        {`
                    ::placeholder {
                        color: #D8A444;
                        font-size:20px;
                        font-Weight:bold;
                    }`}
      </style>
    </div>
  )
}

export default ImageCertificate
