const {addDays, format} = require('date-fns')

const getDateAfterDays = days => {
  const startDate = new Date('2020-07-22')

  const endDate = addDays(startDate, days)

  const formattedDate = format(endDate, 'dd-MM-yyyy')

  return formattedDate
}

module.exports = getDateAfterDays
