let counts = [ 
    "900,google.com",
     "60,mail.yahoo.com",
     "10,mobile.sports.yahoo.com",
     "40,sports.yahoo.com",
     "300,yahoo.com",
     "10,stackoverflow.com",
     "20,overflow.com",
     "5,com.com",
     "2,en.wikipedia.org",
     "1,m.wikipedia.org",
     "1,mobile.sports",
     "1,google.co.uk"
]


function calculateClicksByDomain(counts) {

    const clickCounts = {};

    counts.forEach(entry => {
        
        const [countStr, domain] = entry.split(',');

        const count = parseInt(countStr);

        const domainParts = domain.split('.');

        for (let i = 0; i < domainParts.length; i++) {

            const subdomain = domainParts.slice(i).join('.');

            if (clickCounts[subdomain]) {

                clickCounts[subdomain] += count;
            } else {
                clickCounts[subdomain] = count;
            }
        }
    });

    return clickCounts;
}


let clickResults = calculateClicksByDomain(counts);

console.log("RESULTS\n\n\n", clickResults);

//RESULTS



//  {
//   'google.com': 900,
//   com: 1345,
//   'mail.yahoo.com': 60,
//   'yahoo.com': 410,
//   'mobile.sports.yahoo.com': 10,
//   'sports.yahoo.com': 50,
//   'stackoverflow.com': 10,
//   'overflow.com': 20,
//   'com.com': 5,
//   'en.wikipedia.org': 2,
//   'wikipedia.org': 3,
//   org: 3,
//   'm.wikipedia.org': 1,
//   'mobile.sports': 1,
//   sports: 1,
//   'google.co.uk': 1,
//   'co.uk': 1,
//   uk: 1
// }