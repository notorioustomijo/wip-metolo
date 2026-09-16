interface XpCardProps {
    duration: string
    role: string
    company: string
    worktags: string[]
    desc: string
}

interface XpProps {
    yr: string
    experiences: XpCardProps[]
}

export const xpList:XpProps[] = [
    {
        yr: "2026",
        experiences: [
            {
                duration:"Sep 2024 - Present",
                role:"World Heritage Expert",
                company:"UNESCO - Africa Unit | Seasonal",
                worktags:["UPON REQUEST","FIELDWORK"],
                desc:"Working with UNESCO’s Africa Unit to implement global heritage conventions, protecting cultural and natural sites across Africa in partnership with international advisory bodies."
            },
            {
                duration:"Feb 2024 - Mar 2026",
                role:"Consultant",
                company:"The Nature Conservancy | Virginia, USA",
                worktags:["PAID","CONSULTANCY","RESEARCH"],
                desc:"Developed a methodology to assess human rights risks across 70 countries for conservation projects, mapped partnership opportunities, and optimized communications to reach diverse audiences."
            },
        ]
    },
    {
        yr: "2025",
        experiences: [
            {
                duration:"Fall 2021 - Summer 2025",
                role:"Instructor",
                company:"Geography Department | University of Florida, Gainesville, FL",
                worktags:["PAID","EDUCATION"],
                desc:"Taught five undergraduate Geography courses to classes of up to 120 students, developing all course materials and coordinating grading across semesters."
            },
        ]
    },
    {
        yr: "2023",
        experiences: [
            {
                duration:"Jul 2023",
                role:"Operations Assistant",
                company:"Community Leaders Network (CLN)",
                worktags:["PAID","FIELDWORK","DATA COLLECTION","WRITING"],
                desc:"Supported Southern Africa’s largest indigenous-led advocacy network through fieldwork in Namibia’s conservation regions."
            },
        ]
    },
    {
        yr: "2022",
        experiences: [
            {
                duration:"May - Jun 2022",
                role:"Advocacy and Lobbying Officer",
                company:"Resource Africa, UK",
                worktags:["PAID","CONSULTANCY","RESEARCH"],
                desc:"Monitored European wildlife policy debates and facilitated meetings between African community leaders and EU parliamentarians to influence conservation legislation."
            },
            {
                duration:"Sep 2021 - Apr 2022",
                role:"Research Consultant",
                company:"African Wildlife Foundation (AWF), Nairobi, Kenya",
                worktags:["PAID","CONSULTANCY","RESEARCH"],
                desc:"Researched job, grant, and investment platforms across Africa to help create a professional networking hub for conservation careers and funding opportunities."
            },
            {
                duration:"Aug 2021 - Apr 2022",
                role:"Agriculture Value Chain Consultant",
                company:"Competitiveness, Spain/USA",
                worktags:["VOLUNTEER","CONSULTANCY","FIELDWORK","ANALYTICS"],
                desc:"Worked with public-private institutions in Benin on World Bank-funded programs to strengthen local agricultural competitiveness and territorial prosperity."
            },
        ]
    },
    {
        yr: "2021",
        experiences: [
            {
                duration:"May - Dec 2021",
                role:"Research Fellow",
                company:"African Centre for a Green Economy (AfriCGE), Cape Town, South Africa",
                worktags:["FELLOWSHIP","RESEARCH"],
                desc:"Explored the future of green technology in Africa through collaborative research with international development partners."
            },
            {
                duration:"Feb - Jul 2021",
                role:"Storytelling Consultant",
                company:"Commonwealth Secretariat, Economic Youth & Sustainable Development Department, UK",
                worktags:["PAID","CONSULTANCY","RESEARCH","WRITING"],
                desc:"Enhanced the Commonwealth’s Youth Development Index by developing storytelling approaches to support evidence-based youth policies across member states."
            },
            {
                duration:"May - Jul 2021",
                role:"Research Consultant",
                company:"Plan International, West and Central Africa Regional Office (WCARO)",
                worktags:["PAID","CONSULTANCY","RESEARCH","DATA COLLECTION"],
                desc:"Mapped donors and assessed local fundraising potential across 16 African countries to strengthen regional partnerships."
            },
            {
                duration:"Feb 2021",
                role:"Youth Consultant",
                company:"UN Department of Economic and Social Affairs (UNDESA), Remotely",
                worktags:["VOLUNTEER","CONSULTANCY","WRITING"],
                desc:"Contributed expert input on youth employment, education, and mental health for the UN’s 2025 World Youth Report."
            },
            {
                duration:"Feb 2020 - May 2021",
                role:"Fruit Procurement Manager",
                company:"Blue Skies Republic of Benin Sarl (B.S.R.B)",
                worktags:["PAID","OPERATIONS"],
                desc:"Managed daily orders worth £5K-£30K for major European supermarkets, coordinating a network of 3,000+ farmers across West Africa and acting as liaison between 10 international offices."
            },
        ]
    },
    {
        yr: "2019",
        experiences: [
            {
                duration:"Jun 2019 - Aug 2019",
                role:"Knowledge Management Assistant",
                company:"West African Civil Society Institute",
                worktags:["FELLOWSHIP","RESEARCH","WRITING"],
                desc:"Assisted in designing a $50K -1M five-year human rights project and delivered monthly human rights reports covering five West African countries."
            },
            {
                duration:"May - Dec 2019",
                role:"Independent Consultant",
                company:"Environmental and Social Safeguards (ESS) Specialist, Burkina Faso, Ghana, Niger, Benin, USA",
                worktags:["PAID","CONSULTANCY","RESEARCH","DATA COLLECTION"],
                desc:"Provided technical expertise on World Bank-funded projects worth $548M total, focusing on sustainable conflict management and environmental safeguards across West Africa."
            },
            {
                duration:"Feb - May 2019",
                role:"Operations Assistant",
                company:"Catholic Relief Services, Benin",
                worktags:["PAID","OPERATIONS"],
                desc:"Organized 20 years of confidential records and monitored HR systems for 100+ staff members supporting humanitarian operations."
            },
        ]
    },
    {
        yr: "2018",
        experiences: [
            {
                duration:"Sep - Nov 2018",
                role:"Executive Assistant",
                company:"N. Dowuona and Company, Ghana",
                worktags:["PAID","OPERATIONS"],
                desc:"Created affordable legal packages for African startups and coordinated partnerships between 200 ventures to improve access to legal counsel."
            },
            {
                duration:"Jun - Jul 2018",
                role:"French Language Instructor",
                company:"Adaklu Senior High School | Ho, Ghana",
                worktags:["PAID","EDUCATION"],
                desc:"Delivered intensive beginner and intermediate French training to 100+ students in the three weeks before national exams, revising the syllabus to meet accreditation standards."
            },
            {
                duration:"Dec 2017 - Feb 2018",
                role:"System Administrator & Penetration Tester",
                company:"Office of the President of Ghana | Special Operations Department",
                worktags:["PAID","OPERATIONS"],
                desc:"Protected confidential government data by testing systems for security vulnerabilities before digital platforms went live."
            },
        ]
    },
    {
        yr: "2017",
        experiences: [
            {
                duration:"Oct - Dec 2017",
                role:"Operations Assistant",
                company:"Catholic Relief Services (CRS), Niger",
                worktags:["PAID","OPERATIONS"],
                desc:"Co-designed training programs for 30+ local organizations on the $40M food security project, focusing on impact evaluation and experimental design."
            },
            {
                duration:"Jun - Sep 2017",
                role:"Global Affairs and Diplomacy Analyst",
                company:"Canadian International Council, Canada, Toronto",
                worktags:["PAID","ANALYTICS","RESEARCH","WRITING"],
                desc:"Researched global health diplomacy policies across 10 nations to support WHO-instructed framework development."
            },
            {
                duration:"Jun - Sep 2017",
                role:"Head of Research and Development (R&D)",
                company:"ThinkAfrik, Accra, Ghana",
                worktags:["PAID","FIELDWORK","RESEARCH","WRITING"],
                desc:"Launched a social impact agribusiness securing $20K+ in funding, supplied 40 tons of cassava to Guinness, and trained 400+ farmers in sustainable agriculture practices."
            },
            {
                duration:"Mar 2016 - Feb 2017",
                role:"Communications & Public Affairs Director",
                company:"Ghana International Model, United Nations (UN)",
                worktags:["PAID","FIELDWORK","RESEARCH","WRITING"],
                desc:"Managed diplomatic coordination and international promotion for a UN simulation conference, growing attendance from 500 to 700+ participants across multiple countries."
            },
        ]
    },
    {
        yr: "2016",
        experiences: [
            {
                duration:"Jan - Mar 2016",
                role:"Critical Thinking Teaching Assistant",
                company:"Lancaster University, Accra, Ghana",
                worktags:["PAID","EDUCATION"],
                desc:"Supported undergraduate classes of 60 students in academic writing and critical reasoning, and launched “Mind Mingling with Metolo” — a student roundtable series tackling challenging global topics."
            },
            {
                duration:"Jun - Oct 2016",
                role:"Country Risk Analyst",
                company:"Songhai Advisory, Accra, Ghana",
                worktags:["PAID","ANALYTICS","RESEARCH","WRITING"],
                desc:"Conducted political, economic, legal and security risk assessments across five African countries to inform investment decisions and macroeconomic forecasting."
            },
            {
                duration:"Feb 2014 - Jan 2016",
                role:"Founder",
                company:"Left Handshake International, Ghana & Niger",
                worktags:["VOLUNTEER","OPERATIONS"],
                desc:"Built three eco-libraries using 10,000 recycled bottles in two remote Ghanaian communities, crowdfunded $5K to send 25 underprivileged children to school, and organised recycling campaigns in Niger."
            },
        ]
    },
    {
        yr: "2015",
        experiences: [
            {
                duration:"Oct - Nov 2015",
                role:"Technical Translator",
                company:"United Nations Volunteers (UNV), Remote ",
                worktags:["VOLUNTEER","FIELDWORK"],
                desc:"Provided French translation services to organisations in the UNV database, including during the 2015 Haitian presidential elections."
            },
            {
                duration:"Aug - Sep 2015",
                role:"Event Coordinator",
                company:"Educational Endowment Trust, New Delhi, India",
                worktags:["FELLOWSHIP","OPERATIONS"],
                desc:"Assisted in organising the IFLC-sponsored Indo-Turkish Festival of Language and Culture, an annual charity event raising funds for children’s education in India."
            },
            {
                duration:"Sep 2014 - Jul 2015",
                role:"Private French Language Instructor",
                company:"East Legon, Accra",
                worktags:["PAID","EDUCATION"],
                desc:"Delivered private French classes to UNU-INRA professional staff and young learners across a 48-week engagement."
            },
        ]
    },
    {
        yr: "2014",
        experiences: [
            {
                duration:"Jul - Aug 2014",
                role:"Community Outreach Volunteer",
                company:"Population Services International, Cotonou, Benin",
                worktags:["VOLUNTEER","FIELDWORK"],
                desc:"Supported the social marketing distribution of over 60 million condoms across Benin as part of a $22M USAID-funded public health programme."
            },
            {
                duration:"2014",
                role:"Editorial Production Assistant",
                company:"PSI Niger, Niamey, Niger",
                worktags:["PAID","OPERATIONS"],
                desc:"Contributed to the launch of Univers Jeunes, a sexual and reproductive health magazines for teenagers, supporting editorial tasks for PSI’s publication in Niger."
            },
            {
                duration:"2013 - 2014",
                role:"Managing Editor",
                company:"JobWeb Ghana, Accra, Ghana",
                worktags:["PAID","OPERATIONS","RESEARCH","WRITING"],
                desc:"Managed editorial operations for a digital jobs platform, writing and reviewing articles, coordinating freelance contributors, and overseeing online publications."
            },
        ]
    },
]