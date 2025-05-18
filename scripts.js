const content = [
{
    title: 'Custom 8-bit CPU',
    image: 'media/projects/',
    text: 'Working to design a custom Central Processing Unit (CPU), with 16 8-bit registeres. For aritmathic it currently uses a carry lookahead adder for speed and a smaller footprint. and is so far capable of addition and subtraction, and x bit wise logic operations. (multiplication and devision are planed to be implimented).',
    bullets: [
      "Electrical enginering",
      "low level programming using assembly and machine instructions (incl. micro-instructions)",
      "Learned how memory and resources can be managed at the hardware level",
      "minor physics consepts"
    ]
},
{
    title: 'Investment Thesis: DNUT US',
    image: 'media/projects/',
    text: 'Description of Project C',
    bullets: [
      "Kmissingt",
      "hamnskrnie",
      "Outcome or metric",
      "Other detail"
    ]
},
{
    title: 'Investment Thesis: Bomill AB',
    image: 'media/projects/',
    text: 'This investment thesis recommends Bomill AB as a long-term buy, highlighting its strong growth potential and upcoming launch of its new machine. With two early adopters already onboard, the company shows promising traction. Industry comparisons and financial modeling (DCF and DDM) support a positive outlook on future profitability and valuation.',
    Chategory: 'something 1',
    bullets: [    
      "Gained a firmer understandign of comparable analysis",
      "Financial modelign both DCF and DDM",
      "Improved my finance related writing ability and how to better communicate technical information"
    ]
},
{
    title: 'Capital Structure Modelling',
    image: 'media/projects/csm_workings.png',
    text: 'Developed a dynamic Excel-based capital structure model to determine a companys optimal debt ratio by minimizing the Weighted Average Cost of Capital (WACC) and maximizing firm value. The model incorporates inputs such as EBIT, cost of debt, and cost of equity, and includes functionality to assess the impact of a company’s current debt-to-equity ratio, including tax effects. Fully automated using standard Excel formulas for ease of use and scenario analysis.',
    bullets: [ 
        'Gained a strong understanding of how corporate taxes impact firm valuation, including the effects of interest tax shields on capital structure decisions.',
        'Deepened knowledge of capital structure theory, particularly the trade-offs between leverage, bankruptcy costs, and the seniority of liabilities.',
        'Applied the Modigliani-Miller theorem to real-world modeling, integrating both theoretical and practical perspectives on optimal capital structure.',
        'Strengthened skills in financial modeling and automation in Excel, using structured logic and formulas to create a user-friendly, data-driven tool.'
       ]
},
{
    title: 'Spotify Listening Data',
    image: 'media/projects/spd_relations.png',
    text: 'Built a data pipeline using Python to collect and analyze personal Spotify listening data from 2015 to 2022. Queried the Spotify API to extract data on artists, albums, and tracks, and stored it in a MySQL database using automated scripts. Performed data cleaning, transformation, and analysis with Pandas, and visualized trends using Matplotlib.',
    Chategory: 'something 1',
    bullets: [ 
        'Learned to implement robust error handling, exception management, and response logging for consistent API interaction and data retrieval.',
        'Developed automated connections between Python and the Spotify API for dynamic querying of listening history and music metadata.',
        'Designed and normalized a relational database schema to efficiently structure and store large datasets, improving scalability and clarity.',
        'Optimized database memory performance by selecting appropriate data types and minimizing redundancy.'
       ]
},
{
    title: 'Dungeons and dragons combat stats dashboard',
    image: 'media/projects/ddd_dashboard_animated.gif',
    text: 'This is a project where i collect and analyze combat statistics from my two Dnd campaigns. It was started in 2021 but is now been abandoned since the campaign ended befor completion. it was my first ever data science project and it was what opened my eyes to its potential. it was done 100% in excel where data was inputed manualy during the play. The relevent datapoints are extracted using pivot table then formated and displayed in a dashboard.',
    Chategory: 'something 1',
    bullets: [ 
        'Data collection and normalization practises',
        'Designing tables, and vizualising of data'
       ]
}
];


let currentIndex = null; // Tracks the currently displayed index

function changeContent(index) {
  // New content
  document.getElementById('project-title').textContent = content[index].title;
  document.getElementById('project-image').src = content[index].image;
  document.getElementById('project-description').textContent = content[index].text;

// Clear bullet-list items -> adds new content
  document.querySelector('.bullet-list').innerHTML = ''; 
  content[index].bullets.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    document.querySelector('.bullet-list').appendChild(li);
  });
  
// collapses/expands -> makes collaps button visible
  if (currentIndex === index) {
    // Same content clicked → collapse
    document.querySelector('.content-wrapper').classList.remove('expanded');
    currentIndex = null;
    return;
  }
  document.querySelector('.content-wrapper').classList.add('expanded');
  document.querySelector('.collapse-btn').classList.add('visible');
  currentIndex = index;

  //scrolls top of page
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });  
}


document.querySelector('.collapse-btn').addEventListener('click', () => {
  document.querySelector('.content-wrapper').classList.remove('expanded');
  currentIndex = null;
  document.querySelector('.collapse-btn').classList.remove('visible'); // Hide it again
});