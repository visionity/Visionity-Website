export default function VideoPlayer() {
    return (
      <div style={{ width: "100vw", height: "90vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#000" }}>
        <video style={{ width: "100%", height: "100%" }} controls>
          <source src="/myvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
  