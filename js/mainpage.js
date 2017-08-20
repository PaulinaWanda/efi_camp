(() => {
    const mainChartArea = document.getElementById('main-chart');
    const analysisChartsArea = document.getElementById('analysis-charts');
    const analysisSwitch = document.querySelector('.analysis.switch');

    analysisSwitch.addEventListener('change', (e) => {
        mainChartArea.classList.toggle('hide');
        analysisChartsArea.classList.toggle('hide');
    }, false);
})();
