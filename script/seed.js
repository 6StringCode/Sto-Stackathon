//'use strict'

const { DATEONLY } = require('sequelize');
const {db, models: {User, Trip, Stay} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ firstName: 'Erik', lastName: 'Birkeland', isAdmin: 1, username: 'erik', password: 'scr33ch' }),
    User.create({ firstName: 'Adam', lastName: 'Stoler', isAdmin: 1, username: 'adam', password: 'scr33ch' }),
    User.create({ firstName: 'Steven', lastName: 'Tyler' }),
    User.create({ firstName: 'Joe', lastName: 'Perry' }),
    User.create({ firstName: 'Geddy', lastName: 'Lee' }),
    User.create({ firstName: 'Steve', lastName: 'Jordan' }),
    User.create({ firstName: 'Perry', lastName: 'Farrell' }),
    User.create({ firstName: 'Dave', lastName: 'Navarro' }),
    User.create({ firstName: 'David Lee', lastName: 'Roth' }),
  ]);
  
  //creating trips
  const trips = await Promise.all([
    Trip.create({ city: 'Seattle', hotel: 'Springhill Suites by Marriott Seattle Downtown/South Lake Union', checkIn: '2022-07-18', checkOut: '2022-08-08' }),
    Trip.create({ city: 'Spokane', hotel: 'DoubleTree by Hilton Hotel Spokane City Center', checkIn: '2022-08-08', checkOut: '2022-08-15' }),
    Trip.create({ city: 'Vancouver', hotel: 'Delta Hotels by Marriott Vancouver Downtown Suites', checkIn: '2022-08-15', checkOut: '2022-08-29' }),
  ]);
  
  //creating stays
  const stays = await Promise.all([
    Stay.create({ companyHousing: 1, amenity: 'KITCHEN' }),
    Stay.create({ companyHousing: 1, amenity: 'KITCHEN' }),
    Stay.create({ companyHousing: 1, amenity: 'KITCHEN' }),
    Stay.create({ companyHousing: 1, amenity: 'KITCHEN' }),
    Stay.create({ companyHousing: 1, amenity: 'KITCHEN' }),
    Stay.create({ companyHousing: 1, amenity: 'MICROWAVE' }),
    Stay.create({ companyHousing: 1, amenity: 'MICROWAVE' }),
    Stay.create({ companyHousing: 1, amenity: 'MICROWAVE' }),
  ]);

  stays[0].userId = users[8].id;
  stays[0].tripId = trips[2].id;
  stays[5].userId = users[7].id;
  stays[5].tripId = trips[2].id;
  await Promise.all([
    stays[0].save(),
    stays[5].save()
  ]);

  console.log(`seeded ${users.length} users, ${trips.length} trips`)
  console.log(`seeded successfully`)
  console.log(users.map(user => user.fullName))
  return {
    users: {
      erik: users[0],
      adam: users[1]
    },
    trips: {
      seattle: trips[0],
      spokane: trips[1],
      vancouver: trips[2]
    }
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
