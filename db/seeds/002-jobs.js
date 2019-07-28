exports.seed = knex => knex('jobs')
  .del()
  .then(() => knex('jobs').insert([
    {
      title: 'Delivery Driver',
      description: 'You’ll play a critical role in delivering on our promise to provide our customers with excellent customer service.',
      location: 'CO, USA',
      userId: 5,
    },
    {
      title: 'Entry Level Marketing and Public Relations',
      description: 'We are actively seeking Entry-Level Professionals for our public relations & sales marketing team!',
      location: 'CA, USA',
      userId: 6,
    },
    {
      title: 'Sr Staff Software Engineer',
      description: 'In this role, you will be a player and coach capable of leading targeted software engineering efforts as well as being an active contributor in the creation of functioning software deliverables.',
      location: 'Washington, DC, USA',
      userId: 7,
    },
    {
      title: 'Clinical Informatics Sales Director',
      description: 'They will partner with the account community - including Regional Managers, Account Executives and Product Sales Specialists to identify, cultivate, close and successfully install the Disruptive Technology portfolio of products.',
      location: 'Wauwatosa, WI, USA',
      userId: 7,
    },
    {
      title: 'Principal Software Architect',
      description: 'The Principal SW Architect is a key role that works on highly complex enterprise wide projects that require in-depth knowledge across multiple technologies, modalities and specialized domains – e.g. microservices, cloud, data, etc.',
      location: 'Remote',
      userId: 7,
    },
    {
      title: 'Certified Flight Instructor',
      description: 'Minimum 18 years old, Legally eligible to work in the U.S, Minimum high school diploma or GED, Current FAA medical certificate, Proficiently read, write, & speak English, Hold minimum of FAA Commercial Pilot License or ATP, Safe driving and safe flying record',
      location: 'Central FL, USA',
      userId: 8,
    },
    {
      title: 'Lead Teacher',
      description: 'Responsible for leading a safe and educational classroom environment by providing daily care, nurturing and development of children.',
      location: 'Milwaukee, WI, USA',
      userId: 9,
    },
    {
      title: 'Customer Support Representative French',
      description: 'We\'re looking for articulate recent graduates who\'re fluent in BOTH English and French, who\'re curious, empathetic, and kind, and who\'re looking to launch their career at a fast-growing tech startup that cares deeply about personal and professional development.',
      location: 'Lagos, Nigeria',
      userId: 10,
    },
    {
      title: 'Technical Product Specialist',
      description: 'You\'ll be a member of the Growth team, which means that you\'ll be part of a team that strives to empower thousands of business owners in Africa with both the knowledge and the courage they need to bring their ideas to life. If that feeling were a sound, it would sound like this.',
      location: 'Lagos, Nigeria',
      userId: 10,
    },
    {
      title: 'Engineering Recruiting Director',
      description: 'Responsible for leading a safe and educational classroom environment by providing daily care, nurturing and development of children.',
      location: 'Lagos, Nigeria',
      userId: 11,
    },
    {
      title: 'Software Engineer',
      description: 'Developing new systems and improving existing systems.',
      location: 'Remote',
      userId: 11,
    },
  ]));
