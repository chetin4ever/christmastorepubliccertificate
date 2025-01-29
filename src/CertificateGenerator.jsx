import React, { useRef, useState } from "react"

const CertificateGenerator = () => {
  const canvasRef = useRef(null)
  const [name, setName] = useState("")
  const [isGenerated, setIsGenerated] = useState(false)

  const generateCertificate = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const img = new Image()

    // Load certificate template (place in public folder or use absolute URL)
    img.src = "./Certificate.jpg"
    img.crossOrigin = "anonymous"

    img.onload = () => {
      // Clear previous drawing
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw certificate background
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

      // Configure text style
      ctx.font = '40px "Arial"'
      ctx.fillStyle = "#2c3e50"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      console.log("hii")
      // Position for name (adjust these values according to your template)
      const x = canvas.width / 2
      const y = 400

      // Draw name
      ctx.fillText(name.toUpperCase(), x, y)
      console.log(ctx.fillText)
      setIsGenerated(true)
    }
  }

  const downloadCertificate = () => {
    const canvas = canvasRef.current
    const link = document.createElement("a")
    link.download = `certificate-${name}.pdf`
    console.log(link.download)
    link.href = canvas.toDataURL()
    link.click()
  }

  return (
    <div className='certificate-generator'>
      <div className='controls'>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter your name'
        />
        <button onClick={generateCertificate} disabled={!name.trim()}>
          Generate Certificate
        </button>
        <button onClick={downloadCertificate} disabled={!isGenerated}>
          Download
        </button>
      </div>

      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        style={{ border: "1px solid #ddd", marginTop: "20px" }}
      />
    </div>
  )
}

export default CertificateGenerator
