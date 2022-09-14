/**
 * Resume/CV template created with Bootstrap 5 by @vmoratog and @jdnichollsc
 */
 const resume = {
    firstName: 'Devansh',
    lastName: 'Parapalli',
    jobTitle: 'Web/Software Developer',
    city: 'Nagpur, Maharashtra',
    postalCode: '440010',
    country: 'India', 
    phone: '+918793150182',
    email: 'parapallidev@gmail.com',
    education: [
       {
        school: 'Bharti Krishna Vidaya Vihar, Nagpur',
        degree: 'X',
        graduationDate: '2019',
        description: ''
      },
      {
        school: 'G. H. Raisoni Vidyaneketan, Nagpur',
        degree: 'XII',
        graduationDate: '2021',
        description: ''
      },
      {
        school: 'Government College of Engineering, Nagpur',
        degree: 'B.Tech',
        graduationDate: '2025',
        description: 'B.Tech in Computer Science and Engineering.'
      }
    ],
    links: [
      {
        label: 'GitHub',
        link: 'https://github.com/DevParapalli'
      },
      {
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/in/devparapalli/'
      },
    ],
    skills: [
      'Python',
      'Excel',
      'PostgreSQL',
      'Leadership',
      'Communication',
      'Django',
      'FastAPI',
      'JavaScript',
      'HTML',
      'CSS',
      'ReactJS',
      'SvelteKit',
      'Firebase',
    ],
    languages: ['English', 'Hindi'],
    professionalSummary: `I am a young student with experience in Web Development with JavaScript/TypeScript, Python and recently, System Programming with Rust. My goal as a software developer is to develop and provide solutions to improve the quality of life for others and myself.`,
    employmentHistory: [
      {
        jobTitle: 'Technical Team Member',
        startDate: 'Dec 2021',
        endDate: 'Current',
        employer: 'Adhyaaya\'22',
        city: 'Nagpur, MH',
        achievements: [
          'Wrote and maintained the business logic behind the website (adhyaaya.org).',
        ]
      },
    ],
    photo: 'https://avatars.githubusercontent.com/u/30196311?v=4',
  }
  
  const formatResume = (r) => ({
    ...r,
    address: [
      r.city,
      r.country,
      r.postalCode
    ].filter(Boolean).join(', ')
  })
  
  new Vue({
    el: "#app",
    data: formatResume(resume)
  });
  
  /**
   * Wait for animatable-component to be loaded (Only for VanillaJS)
   **/
  function animatableLoaded() {
    document.querySelector('body').classList.remove('d-none');
  }
  if (customElements) {
    customElements.whenDefined('animatable-component').then(animatableLoaded);
  } else animatableLoaded()