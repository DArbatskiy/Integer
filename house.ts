class House {
  rooms: number
  city: string

  constructor(rooms, city) {
    this.rooms = rooms
    this.city = city
  }
}

class Hotel extends House {
  price: number
  name: string
  rating: number
  bookings: number
  gym: boolean
  pool: boolean

  constructor(price, rooms, city, name, rating, bookings, gym, pool) {
    super(rooms, city)
    this.price = price
    this.name = name
    this.rating = rating
    this.bookings = bookings
    this.gym = gym
    this.pool = pool
  }

  makeBooking() {
    this.bookings = this.bookings + 1
  }

  cancelBooking() {
    this.bookings = this.bookings - 1
  }

  checkAvailability() {
    return this.rooms - this.bookings
  }
}

const myHome = new House(2, 'Tver')
const myFriendHome = new House(3, 'Moscow')
console.log(myHome)

const radissonHotel = new Hotel(
  4000,
  500,
  'Moscow',
  'Radisson',
  5,
  250,
  true,
  true
)
console.log(radissonHotel)
radissonHotel.makeBooking()
console.log(radissonHotel)
console.log(radissonHotel.checkAvailability())

