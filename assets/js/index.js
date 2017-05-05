$(document).ready(function() {

    var client = algoliasearch('QN7W8E65Q7', 'df6dbaf8b182446775427f304c8004b3');

    var index = client.initIndex('countries');

    index.search('Swede', function(err, content) {
        console.log(content.hits);
    });

    var a = document.getElementById("mySvg");

    var svgDoc = a.contentDocument;

    var allPaths = svgDoc.querySelectorAll('path');

    var handleClick = (e) => {

        $.ajax('assets/js/data.json')
        .then(data => {
            var countryInfo = document.querySelector('.country-info');
            countryInfo.classList.toggle('active');
            e.target.classList.toggle('active-country');
            countryInfo.querySelector('h2').innerHTML = data[0][e.target.id];
        });
    }

    allPaths.forEach(x => x.addEventListener('click', handleClick));
})