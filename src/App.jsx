import "./App.css";

function App() {
  return (
    <div className="thesis-container">
      <h1>Summary</h1>
      <p>
        This thesis presents a multimodal deep learning approach for estimating
        cochlear implant electrode positions without the need for post-operative
        CT scans. By combining pre-operative imaging, impedance measurements,
        and cochlear shape parameters, the proposed models achieve high accuracy
        while reducing patient exposure to radiation. The results highlight the
        effectiveness of joint feature learning and the complementary value of
        all input modalities.
      </p>
      <div className="pdf-viewer-container">
        <iframe
          src="Master_Thesis_Berk_Takit_2025.pdf"
          title="AI-Based Cochlear Implant Insertion Depth Estimation"
          className="pdf-iframe"
        ></iframe>
      </div>
      <button className="download-btn">Download PDF</button>
    </div>
  );
}

export default App;
