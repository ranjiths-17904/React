  import { useState } from 'react';
  import { FaTrophy } from 'react-icons/fa';
  import styled from 'styled-components';

  // Import Certificate Images
  import cert1 from '../assets/img/Certificates/Guvi - ui  ux.jpeg';
  import cert2 from '../assets/img/Certificates/MongoDB - Unstop.jpg';
  import cert3 from '../assets/img/Certificates/Java Course Completion in netiveva.jpg';
  // import cert4 from '../assets/img/Certificates/CodeChefBadge (3).png';
  import cert5 from '../assets/img/Certificates/Udamey Git Certificate.jpg';
  import cert6 from '../assets/img/Certificates/sql_intermediate certificate - Hr.jpg';

  // Certificate data
  const certificates = [
    {
      title: 'UI/UX Design Mastery',
      source: 'Guvi',
      image: cert1,
      description: 'Completed Figma UI/UX course from Beginner to Expert level.',
    },
    {
      title: 'MongoDB',
      source: 'Unstop',
      image: cert2,
      description: 'Learned how to create professional resumes for tech jobs.',
    },
    {
      title: 'Java Programming',
      source: 'Nativeva',
      image: cert3,
      description: 'Completed Java Programming course in native language.',
    },
    // {
    //   title: 'Frontend Basics',
    //   source: 'CodeCamp',
    //   image: cert4,
    //   description: 'Covered HTML, CSS, JavaScript foundations.',
    // },
    {
      title: 'Git - Beginners',
      source: 'Udamey',
      image: cert5,
      description: 'Completed foundational training in Git version control system.',
    },
    {
    title: 'SQL (Intermediate)',
    source: 'HackerRank',
    image: cert6,
    description: 'Completed SQL Intermediate course and certification test on HackerRank.',
    }

    
  ];

  // Highlight data
  const highlights = [
    {
      text: '👨‍💻 Solved 500+ Problems & Earned Badge (CodeChef)',
      gradient: 'linear-gradient(to right, #ec4899, #ef4444, #facc15)',
    },
    {
      text: '📝 LeetCode: 350+ problems solved',
      gradient: 'linear-gradient(to right, #4ade80, #10b981, #2dd4bf)',
    },
    {
      text: '☕ Organized Inter & Intra-College Tech and Non-Tech Events',
      gradient: 'linear-gradient(to right, #60a5fa, #6366f1, #a855f7)',
    },
    {
      text: '📚 Published 2 Research Journals (IJIRT , IJRASET)',
      gradient: 'linear-gradient(to right, #fb923c, #ec4899, #f43f5e)',
    },
    {
      text: '🏅 1st Place - Code Relay @ INCEPTRON',
      gradient: 'linear-gradient(to right, #fde047, #84cc16, #22c55e)',
    },
  ];

  const Achievements = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    return (
      <div className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] min-h-screen py-6 px-4 sm:px-10 font-sans">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-12 tracking-tight">
           Achievements & Certifications
        </h1>

        {/* Certificate Cards */}
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {certificates.map((cert, idx) => (
            <CardComponent key={idx} cert={cert} onClick={() => setSelectedCert(cert)} />
          ))}
        </div>


        {/* Modal */}
        {selectedCert && (
          <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center px-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-8 relative border border-gray-300">
              <button
                className="absolute top-4 right-6 text-3xl font-bold text-gray-600 hover:text-red-500 transition-colors"
                onClick={() => setSelectedCert(null)}
              >
                &times;
              </button>
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">{selectedCert.title}</h2>
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="rounded-lg w-full max-h-[400px] object-contain mb-4"
              />
              <p className="text-center text-gray-700 text-lg">{selectedCert.description}</p>
            </div>
          </div>
        )}

        {/* Highlight Carousel */}
        <div className="mt-12">
          <h2 className="text-4xl font-bold text-gray-800 text-center flex items-center justify-center mb-12">
              Notable Highlights
          </h2>
          <HighlightWrapper>
            <div className="carousel">
              {highlights.map((item, i) => (
                <div
                  className="card"
                  key={i}
                  style={{
                    '--i': i,
                    backgroundImage: item.gradient,
                  }}
                >
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </HighlightWrapper>
        </div>
      </div>
    );
  };

  // Certificate Card Component
  const CardComponent = ({ cert, onClick }) => (
    <StyledWrapper onClick={onClick}>
      <div className="card cursor-pointer w-full max-w-xs md:max-w-sm">
        <div className="content">
          <img src={cert.image} alt={cert.title} className="image" />
          <p className="heading">{cert.title}</p>
          <p className="para">{cert.description}</p>
        </div>
      </div>
    </StyledWrapper>
  );

  // Styled Card
  const StyledWrapper = styled.div`
    .card {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3px;
      border-radius: 24px;
      overflow: hidden;
      line-height: 1.6;
      transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1px;
      padding: 24px;
      border-radius: 22px;
      color: #000;
      background: #E5E4E2;
      transition: all 0.48s ease;
    }

    .image {
      border-radius: 12px;
      width: 100%;
      height: 160px;
      object-fit: cover;
    }

    .heading {
      font-weight: 700;
      font-size: 24px;
    }

    .para {
      font-weight: 600;
      font-size: 14px;
      opacity: 0.8;
    }

    .card::before {
      content: "";
      position: absolute;
      height: 160%;
      width: 160%;
      border-radius: inherit;
      background: linear-gradient(to right, #0a3cff, #0a3cff);
      transform-origin: center;
      animation: moving 4.8s linear infinite paused;
    }

    .card:hover::before {
      animation-play-state: running;
      z-index: -1;
      width: 20%;
    }

    .card:hover {
      box-shadow: 0 6px 13px rgba(10, 60, 255, 0.1),
        0 24px 24px rgba(10, 60, 255, 0.09),
        0 55px 33px rgba(10, 60, 255, 0.05);
      scale: 1.05;
    }

    @keyframes moving {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;

  // Highlight Carousel
  const HighlightWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  padding: 0 1rem;
  display: flex;
  justify-content: center;

  .carousel {
    position: relative;
    width: 220px;
    height: 220px;
    transform-style: preserve-3d;
    animation: spin 20s linear infinite;
  }

  .card {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotateY(calc(72deg * var(--i))) translateZ(300px);
    border-radius: 1.5rem;
    padding: 1rem;
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-size: 200% 200%;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  @keyframes spin {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }

  @media (max-width: 640px) {
    .carousel {
      width: 180px;
      height: 180px;
    }

    .card {
      font-size: 0.875rem;
      transform: rotateY(calc(72deg * var(--i))) translateZ(200px);
    }
  }
`;


  export default Achievements;