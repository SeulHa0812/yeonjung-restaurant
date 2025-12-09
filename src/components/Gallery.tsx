const Gallery = () => {
  const items = Array.from({ length: 20 });

  return (
    <section
      style={{
        width: "100%",
        padding: "60px 200px",
        backgroundColor: "#fff",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "28px",
          fontWeight: "700",
          marginBottom: "40px",
        }}
      >
        갤러리
      </h2>

      <div className="gallery-grid">
        {items.map((_, idx) => (
          <div key={idx} className="gallery-item"></div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
