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
      {
        label: 'Instagram',
        link: 'https://www.instagram.com/dev_parapalli/'
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
        endDate: 'Sept 2022',
        employer: 'Adhyaaya\'22',
        city: 'Nagpur, MH',
        achievements: [
          'Wrote and maintained the business logic behind the website (adhyaaya.org).',
        ]
      },
      {
        jobTitle: 'Technical Head',
        startDate: 'Sept 2022',
        endDate: 'Current',
        employer: 'Adhyaaya\'23',
        city: 'Nagpur, MH',
        achievements: [
          'Leading the technical team of Adhyaaya\'23.',
        ]
      },
      {
        jobTitle: 'IIC Co-Head',
        startDate: 'Sept 2022',
        endDate: 'Current',
        employer: 'IIC 5.0 @ GCOEN',
        city: 'Nagpur, MH',
        achievements: [
          'Leading the IIC team of GCOEN.',
        ]
      },

      {
        jobTitle: 'GDSC Technical Head',
        startDate: 'Sept 2022',
        endDate: 'Current',
        employer: 'GDSC @ GCOEN',
        city: 'Nagpur, MH',
        achievements: [
          'Organizing events and spreading the word about Google Developer Student Clubs.',
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