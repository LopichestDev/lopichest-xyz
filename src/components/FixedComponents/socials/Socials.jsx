import "./socials.css";

const Socials = () => {
  const socials = [
    {
      name: "instagram",
      extension: "svg",
      link: "https://www.instagram.com/seergiioo_88/",
    },
    {
      name: "linkedin",
      extension: "svg",
      link: "https://www.linkedin.com/in/sergioarija",
    },
    {
      name: "github",
      extension: "svg",
      link: "https://github.com/LopichestDev",
    },
    {
      name: "fiverr",
      extension: "webp",
      link: "https://www.fiverr.com/lopichestdev",
    },
  ];
  return (
    <div className="social">
      <div className="social-main">
        <div className="social-email">
          <a
            href="http://www.gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            contacto@lopichest.xyz
          </a>
        </div>
        <div className="social-icons ">
          {socials.map(({ name, extension, link }) => {
            return (
              <a
                className="social-icon-link"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                key={link}
              >
                <img
                  src={`/images/${name}.${extension}`}
                  alt={`link de ${name}`}
                  className="social-icon"
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Socials;
