let data = {
  datasets: [
    {
      data: [1, 2, 3],
      label: 'Above the Line',
      labels: [
        'Markenkommunikation',
        'Out-of-home',
        'Promotions',
        'Events'
      ],
      backgroundColor: [
        'rgba(217, 34, 42, 0.2)',
        'rgba(217, 34, 42, 0.2)',
        'rgba(217, 34, 42, 0.2)',
        'rgba(217, 34, 42, 0.2)'
      ],
      borderWidth: 1
    },
    {
      data: [3, 8, 10],
      label: 'Below the line',
      labels: [
        'Corporate Design',
        'Drucksachen',
        'Verpackungen'
      ],
      backgroundColor: [
        'rgba(217, 34, 42, 0.4)',
        'rgba(217, 34, 42, 0.4)',
        'rgba(217, 34, 42, 0.4)'
      ],
      borderWidth: 1
    },
    {
      data: [10, 8],
      label: 'Business to Business',
      labels: [
        'Fachkampagnen',
        'Messen'
      ],
      backgroundColor: [
        'rgba(217, 34, 42, 0.6)',
        'rgba(217, 34, 42, 0.6)'
      ],
      borderWidth: 1
    },
  ]
}

let options = {
  responsive: true,
  legend: {
      display: true,
  },
  cutoutPercentage: 50,
  maintainAspectRatio: true, // disable for small but chill graphs
  tooltips: {
    callbacks: {
      label: (tooltipItem, data) => {
        let dataset = data.datasets[tooltipItem.datasetIndex]
        let index = tooltipItem.index
        return dataset.label + ': ' + dataset.labels[index]
      }
    }
  }
}

export {
  data,
  options
}