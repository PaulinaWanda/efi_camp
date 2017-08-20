'use strict';

(function () {
    var mainChartArea = document.getElementById('main-chart');
    var analysisChartsArea = document.getElementById('analysis-charts');
    var analysisSwitch = document.querySelector('.analysis.switch');

    analysisSwitch.addEventListener('change', function (e) {
        mainChartArea.classList.toggle('hide');
        analysisChartsArea.classList.toggle('hide');
    }, false);
})();